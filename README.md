# Power Calculator
## AWS Architecture
![AWS Architecture](/images/aws-architecture.png)
Services used:
- Amplify
    - Hosts index.html
- Amazon API Gateway
    - Triggers a Lambda fucntion
- AWS Lambda
    - Calculates a power using base and exponent provided by a client
- AWS Identity and Access Management (IAM)
    - Allows a Lambda fucntion to write results to DynamoDB
- Amazon DynamoDB
    - Stores calculation results provided by AWS Lambda