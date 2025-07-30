pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {
        stage('Checking'){
            steps {
                git 'https://github.com/Vovchukkul/ci-cd-calc.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t calc-app .'
            }
        }

        stage('Run Docker') {
            steps {
                sh 'docker run -d --rm --name calc-app calc-app'
            }
        }
    }
}