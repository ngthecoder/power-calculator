# Power Calculator
## Application Overview
This Power Calculator application allows users to calculate the power of a number using a base and an exponent provided by the user. It is built with simple HTML, CSS, and JavaScript files for the frontend, providing an intuitive user interface.

On the backend, AWS services are utilized to handle calculations and data storage. AWS Lambda functions handle the calculation logic, triggered by API Gateway endpoints. The results are stored in Amazon DynamoDB for future reference.
### Usage
To calculate the power of a number, users input the base and exponent values into the designated fields and click the "Calculate" button. The application then processes the input and returns the calculated result on the screen.
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

## Dealing with Cross-Origin Resource Sharing (CORS) Issues
When making requests from my web application to the backend API hosted on a different domain, I received CORS policy violation errors.
