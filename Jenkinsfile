pipeline {
  agent any
  tools{
      nodejs "nodejs"
  }
  stages {
    stage('Cloning Git') {
      steps {
        git branch:'master', url:'https://github.com/mwaskagi/gallery.git'
      }
    }
    stage('version') {
       steps {
         sh "npm version"
       }
    }
    stage('Mocha & Chai'){
        steps{
            sh "npm install -g mocha"
            sh "npm install --save-dev chai"
            sh "npm install express twilio"
        }
    }
    stage('Test') {
      steps {
         sh "npm test"
      }
    }

  }
  
}
