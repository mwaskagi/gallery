def COLOR_MAP [
                'FAILURE':'danger',
                'SUCCESS':'good'
    ]
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
            sh "npm install express"
        }
    }
    stage('Test') {
      steps {
         sh "npm test"
      }
    }

  }
  post {
         changed {
            script {
                if (currentBuild.currentResult == 'FAILURE') { 
                    emailext subject: '$DEFAULT_SUBJECT',
                        body: '$DEFAULT_CONTENT',
                        recipientProviders: [
                            [$class: 'CulpritsRecipientProvider'],
                            [$class: 'DevelopersRecipientProvider'],
                            [$class: 'RequesterRecipientProvider'] 
                        ], 
                        replyTo: '$DEFAULT_REPLYTO',
                        to: '$DEFAULT_RECIPIENTS'
                }
            }
        }
        always{
          echo "Slack Notification"
          slackSend {
              channel: "#james_ip2",
              color: COLOR_MAP[currentBuild.currentResult],
              message:"*${currentBuild.currentResult}:* Job ${env.JOB_NAME} \n Build ${env.BUILD_NUMBER} \n More informaiton https://gallery-bmm9.onrender.com"
            }
           
       }
    }
}
