# Fullstack AWS React Application-

This project is a robust fullstack web application developed with React for the frontend and integrated with AWS services for authentication, GraphQL API, and infrastructure management. The application leverages AWS capabilities to deliver a scalable, secure, and efficient solution.

## Steps:-
1. Set up a React project and configure AWS Amplify for authentication, GraphQL API, and infrastructure management.
2. Integrate Amplify libraries into React for authentication and API interactions, implementing CRUD operations.
3. Manage state with React hooks or Redux and style components using SCSS.
4. Deploy the application using AWS Amplify Hosting and monitor performance with AWS CloudWatch.


## Frontend: React

use :- npx create-react-app

**User Interface**: The frontend is developed using React, providing a dynamic and responsive user experience. It leverages React's component-based architecture for modular and maintainable code.

### Backend: AWS

**Authentication:** AWS Amplify is used for implementing user authentication. It supports various sign-in methods, including email, social logins, and multi-factor authentication (MFA), ensuring secure user access.

**GraphQL API:** AWS AppSync provides a fully managed GraphQL API, allowing for efficient data querying and real-time updates. It simplifies interactions with the database and supports offline data synchronization.

### IAM Roles and Users:

**IAM Integration:** AWS Identity and Access Management (IAM) is used to manage permissions and control access to AWS resources. IAM roles and users are configured to ensure secure and precise access controls for different parts of the application.

**Access Management:** Granular access policies are set up for different AWS services, enhancing security and operational efficiency.

### Deployment & Infrastructure:

**Hosting:**The application is deployed on AWS Amplify, providing a streamlined deployment process with continuous integration and delivery (CI/CD) capabilities.

**Serverless Functions:**AWS Lambda functions are employed to handle backend logic and integrate with the GraphQL API, supporting a serverless architecture that scales automatically.

**Project Strucutre:**

<img width="481" alt="Screenshot 2024-07-27 at 1 36 20 PM" src="https://github.com/user-attachments/assets/4b2f5303-9af8-4cd0-8798-b828e55c1181">



