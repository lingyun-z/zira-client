pipeline {
  agent any
  environment {
    PROJECT_NAME = "zira-client"
  }

  stages {
    stage('build') {
      steps {
        sh "docker build --no-cache -t ${PROJECT_NAME}:latest ."
      }
    }

    stage('deploy') {
      steps {
        sh "docker-compose up -d"
      }
    }
  }
}
