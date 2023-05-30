/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const execShPromise = require("exec-sh").promise;

let fs = require("fs");

const projects = [
  { name: "ISIS3710_202310_S2_E1_Back" },
  { name: "ISIS3710_202310_S2_E2_Back" },
  { name: "ISIS3710_202310_S2_E3_Back" },
  { name: "ISIS3710_202310_S2_E4_Back" },
  { name: "ISIS3710_202310_S2_E5_Back" },
  { name: "ISIS3710_202310_S2_E6_Back" },
  { name: "ISIS3710_202310_S2_E7_Back" },
  { name: "ISIS3710_202310_S2_E8_Back" },
  { name: "ISIS3710_202310_S2_E9_Back" },
];

const config = {
  organization: "Uniandes-isis2603",
  gitKey: "de5cd571-10da-4034-8ba8-af99beef4b14",
  sonarServer: "sonar-isis2603",
  jenkinsServer: "jenkins-isis2603",
};

/*const config = {
  organization: "MISW-4104-Web",
  gitKey: "277a9d46-cf19-4119-afd9-4054a7d35151",
  sonarServer: "sonar-misovirtual",
  jenkinsServer: "jenkins-misovirtual",
};*/

const createRepos = async () => {
  let out;
  try {
    for (const project of projects) {
      const jenkinsFile = getJenkinsFile(project.name);
      const sonarFile = getSonarFile(project.name);
      const readmeFile = getReadmeFile(project.name);

      fs.writeFileSync("Jenkinsfile", jenkinsFile);
      fs.writeFileSync("sonar-project.properties", sonarFile);
      fs.writeFileSync("README.md", readmeFile);

      let command0 = `git remote rm origin`;
      let command1 = `git add .`;
      let command2 = "git commit -m Add_initial_files";

      let command3 = `hub create -p ${config.organization}/${project.name}`;
      let command4 = `git push origin master`;

      console.log("Deleting remote");
      out = await execShPromise(command0, true);

      console.log("Adding files");
      out = await execShPromise(command1, true);

      console.log("Commiting files");
      out = await execShPromise(command2, true);

      console.log("Creating repo: ", project.name);
      out = await execShPromise(command3, true);

      console.log("Push");
      out = await execShPromise(command4, true);
    }
  } catch (e) {
    console.log("Error: ", e);
    console.log("Stderr: ", e.stderr);
    console.log("Stdout: ", e.stdout);
    return e;
  }
  console.log("out: ", out.stdout, out.stderr);
};

createRepos();

function getReadmeFile(repo) {
  const content = `# Enlaces
  - [Jenkins](http://157.253.238.75:8080/${config.jenkinsServer}/)
  - [Sonar](http://157.253.238.75:8080/${config.sonarServer}/)`;
  return content;
}

function getSonarFile(repo) {
  const content = `sonar.host.url=http://157.253.238.75:8080/${config.sonarServer}/
  sonar.projectKey=${repo}:sonar
  sonar.projectName=${repo}
  sonar.projectVersion=1.0
  sonar.sources=src
  sonar.test=src
  sonar.test.inclusions=**/*.spec.ts
  sonar.exclusions=**/*.module.ts, **/utils/**
  sonar.javascript.lcov.reportPaths=coverage/front/lcov.info
  sonar.testExecutionReportPaths=reports/ut_report.xml`;
  return content;
}

function getJenkinsFile(repo) {
  const content = `pipeline {
    agent any
    environment {
       GIT_REPO = '${repo}'
       GIT_CREDENTIAL_ID = '${config.gitKey}'
       SONARQUBE_URL = 'http://172.24.100.52:8082/${config.sonarServer}'
    }
    stages {
       stage('Checkout') {
          steps {
             scmSkip(deleteBuild: true, skipPattern:'.*\\\\[ci-skip\\\\].*')
             git branch: 'master',
                credentialsId: env.GIT_CREDENTIAL_ID,
                url: 'https://github.com/${config.organization}/' + env.GIT_REPO
          }
       }
       stage('GitInspector') { 
         steps {
            withCredentials([usernamePassword(credentialsId: env.GIT_CREDENTIAL_ID, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
               sh 'mkdir -p code-analyzer-report'
               sh """ curl --request POST --url https://code-analyzer.virtual.uniandes.edu.co/analyze --header "Content-Type: application/json" --data '{"repo_url":"git@github.com:Uniandes-isis2603/${GIT_REPO}.git", "access_token": "${GIT_PASSWORD}" }' > code-analyzer-report/index.html """   
            }
            publishHTML (target: [
               allowMissing: false,
               alwaysLinkToLastBuild: false,
               keepAll: true,
               reportDir: 'code-analyzer-report',
               reportFiles: 'index.html',
               reportName: "GitInspector"
            ])
         }
       }
       stage('Build') {
          // Build app
          steps {
             script {
                docker.image('citools-isis2603:latest').inside('-u root') {
                   sh '''
                      CYPRESS_INSTALL_BINARY=0 npm install
                      npm i -s
                      npm i typescript@4.6.2
                      ng build
                   '''
                }
             }
          }
       }
      stage('Test') {
          steps {
             script {
                docker.image('citools-isis2603:latest').inside('-u root') {
                  sh '''
                    ng test --watch=false --code-coverage true
                    npm run sonar
                  '''
                }
             }
          }
       }
       stage('Static Analysis') {
          // Run static analysis
          steps {
             sh '''
                docker run --rm -u root -e SONAR_HOST_URL=\${SONARQUBE_URL} -v \${WORKSPACE}:/usr/src sonarsource/sonar-scanner-cli:4.3
             '''
          }
       }
    }
    post {
      always {
         // Clean workspace
         cleanWs(cleanWhenNotBuilt: false,
            deleteDirs: true,
            disableDeferredWipeout: true,
            notFailBuild: true,
            patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
                       [pattern: '.propsfile', type: 'EXCLUDE']])
      }
    }
  }
  `;
  return content;
}
