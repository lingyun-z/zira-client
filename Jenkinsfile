pipeline {
  environment {
    PROJECT_NAME = "zira-client"
  }

  stages {
    stage('build') {
      steps {
        sh "docker build --no-cache -t ${PROJECT_NAME}:lastest -f local.dockerfile ."
      }
    }

    stage('deploy') {
      steps {
        sh "bash deploy.sh"
      }
    }
  }
}