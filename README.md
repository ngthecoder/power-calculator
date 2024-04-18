# Power Calculator
## Application Interface
![Application Interface](/images/application-interface.png)
## AWS Architecture
![AWS Architecture](/images/aws-architecture.png)
Services used:
- Amplify:
    - Deployed the application from Git Repository.
- Amazon API Gateway:
    - Acts as a trigger for a Lambda function, enabling communication between the client and backend.
- AWS Lambda:
    - Executes a function to calculate a power using base and exponent provided by the client.
- AWS Identity and Access Management (IAM):
    - Grants necessary permissions for the Lambda function to write results to DynamoDB.
- Amazon DynamoDB:
    - Stores calculation results provided by the AWS Lambda function.