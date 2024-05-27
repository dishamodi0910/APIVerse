# CMS API 

CMS is a content management system designed to help you manage your website's content with ease. This project provides a user-friendly interface for managing tables, schemas, and content, making it an ideal solution for website owners, content creators, and developers.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **Easy Content Management:** Manage website content effortlessly with an intuitive interface.
- **Customizable Templates:** Choose from a range of professionally designed templates.
- **Collaboration Tools:** Collaborate with team members, assign tasks, and track progress.


## Usage

### Access the CMS
Open your browser and go to `http://localhost:5000`.

### Create a Schema
1. Click on the "Create Schema" button.
2. Enter the schema name and add the necessary fields.
3. Click "Submit" to save the schema.

### View Schemas
1. Navigate to the "View Schemas" section.
2. You will see a list of all created schemas.

### Delete a Schema
1. Navigate to the "Delete Schema" section.
2. Click the "Delete" button next to the schema you want to remove.

### Manage Content
1. Click on a schema to view its contents.
2. Add new content by filling out the form and clicking "Add Data".
3. Update or delete existing content using the buttons next to each entry.


### Features and Components

- **Home Page:**
  - Welcoming section with a call-to-action button.
  - Key Features section highlighting the main features of the CMS.
  - Benefits section explaining the advantages of using the CMS.
  - Testimonials section showcasing user feedback.

- **Schema Management:**
  - View, create, and delete schemas.
  - Add fields to schemas with specific data types.

- **Content Management:**
  - Add, update, and delete content for each schema.
  - Display content in a tabular format with actions for updating and deleting.
 

# API Endpoints


## Signin
- **HTTP Method:** POST
- **Endpoint:** `/auth/signin`
- **Description:** Signs in the user.
- 
## Signup
- **HTTP Method:** POST
- **Endpoint:** `/auth/signup`
- **Description:** Registers a new user.

## Retrieve all schemas
- **HTTP Method:** GET
- **Endpoint:** `/user/getUserSchema`
- **Description:** Retrieves a list of all schemas.

## Retrieve a schema by ID
- **HTTP Method:** GET
- **Endpoint:** `/user/getData/:id`
- **Description:** Retrieves a schema by its ID.

## Create a new schema
- **HTTP Method:** POST
- **Endpoint:** `/user/createUserSchema`
- **Description:** Creates a new schema. The request body should contain the schema details.

## Update a schema
- **HTTP Method:** PUT
- **Endpoint:** `/user/updateData/:id`
- **Description:** Updates an existing schema by its ID. The request body should contain the updated schema details.

## Delete a schema
- **HTTP Method:** DELETE
- **Endpoint:** `/user/deleteSchema/:id`
- **Description:** Deletes a schema by its ID.

## Retrieve all content for a schema
- **HTTP Method:** GET
- **Endpoint:** `/user/getData/:schemaId`
- **Description:** Retrieves all content entries for a specific schema.

## Create a new content entry
- **HTTP Method:** POST
- **Endpoint:** `/user/addData/:schemaId`
- **Description:** Creates a new content entry within a schema. The request body should contain the content details.


