### Instructions:
1. Run `nodemon localapp` to run locally
2. Run `brew install mongodb/brew/mongodb-community-shell` to download mongodb
3. For future reference call `npm install claudia -g` to install and run: `claudia generate-serverless-express-proxy --express-module app` and then run: `claudia create --handler lambda.handler --deploy-proxy-api --region us-east-1` to create aws lambda function using claudia (with the right credentials put into `aws configure`)
4. Run `claudia update` to update aws lambda (with the right credentials put into `aws configure`)
5. Api live at https://e6x9m59wb1.execute-api.us-east-1.amazonaws.com/latest/api/accounts [insert /[id] for specific account]
