Here's the complete README.md file for your GitHub User Finder API:

````markdown
# GitHub User Finder API

This GitHub User Finder API allows users to retrieve details of GitHub users and their repositories using their GitHub username.

## Features

- Retrieve GitHub user details
- Retrieve repositories of a GitHub user

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/github-user-finder-api.git
   cd github-user-finder-api
   ```
````

2. Install Dependencies:
   ```bash
   npm install
   ```

## Usage

Start the server:

```bash
node server.js
```

The server will be hosted on port 3000, you can access it on [http://localhost:3000](http://localhost:3000).

## Endpoints

### Retrieve GitHub User Details

- URL: `/users/:username`
- Method: GET
- Description: Retrieve details of a GitHub user by their username.
- Example Response:
  ```json
  {
    "login": "octocat",
    "id": 1,
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "name": "monalisa octocat",
    "company": "GitHub",
    "blog": "https://github.com/blog",
    "location": "San Francisco",
    "email": "octocat@github.com",
    "bio": "There once was...",
    "public_repos": 2,
    "followers": 20,
    "following": 0,
    "created_at": "2008-01-14T04:33:35Z"
  }
  ```

### Retrieve GitHub User Repositories

- URL: `/users/:username/repos`
- Method: GET
- Description: Retrieve repositories of a GitHub user by their username.
- Example Response:
  ```json
  [
    {
      "id": 1296269,
      "name": "Hello-World",
      "full_name": "octocat/Hello-World",
      "owner": {
        "login": "octocat",
        "id": 1,
        "avatar_url": "https://github.com/images/error/octocat_happy.gif"
      },
      "private": false,
      "html_url": "https://github.com/octocat/Hello-World",
      "description": "This your first repo!",
      "fork": false,
      "created_at": "2011-01-26T19:01:12Z",
      "updated_at": "2011-01-26T19:14:43Z",
      "pushed_at": "2011-01-26T19:14:43Z",
      "homepage": "https://github.com",
      "size": 108,
      "stargazers_count": 80,
      "watchers_count": 80,
      "language": "Ruby",
      "forks_count": 9,
      "open_issues_count": 0,
      "master_branch": "master",
      "default_branch": "master"
    }
  ]
  ```

## Dependencies

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Axios: Promise-based HTTP client for the browser and Node.js.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```
Feel free to adjust any parts as needed!
```
