pipeline {
  agent any
  environment {
    PROJECT_NAME = "zira-client"
  }

  stages {
    stage('build') {
      steps {
        sh "docker build --no-cache -t ${PROJECT_NAME}:lastest ."
      }
    }

    stage('deploy') {
      steps {
        echo 'asd'
        sh "bash deploy.sh"
      }
    }
  }
}