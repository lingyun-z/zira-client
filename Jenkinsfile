pipeline {
  environment {
    PROJECT_NAME = "zira-client"
  }

  stages('build') {
    sh "docker build --no-cache -t ${PROJECT_NAME}:lastest -f local.dockerfile ."
  }

  stage('deploy') {
    sh "bash deploy.sh"
  }
}