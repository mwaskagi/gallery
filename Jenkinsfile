
pipeline {
  agent any

  stages {
    stage('Cloning Git') {
      steps {
        git branch:'master', url:'git@github.com:mwaskagi/gallery.git'
      }
    }
    stage('Build') {
       steps {
         echo "Build"
       }
    }
    stage('Test') {
      steps {
         sh "npm test"
      }
    }
    post {
        always {
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
  }
}
