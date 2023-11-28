# Flask Backend 

## Overview

This repository contains the backend for the OptiOrganizer project, a learning-focused web application built with React. The backend is developed using Flask, Flask-Login for handling user authentication, and PostgreSQL as the database.

## Getting Started

Follow these steps to set up and run the backend on your local machine.

### Prerequisites

- Python 3
- PostgreSQL
- pip (Python package manager)

### Installation

1. **Clone the Backend Repository:**
   ```sh
   git clone https://github.com/upretisaurav/OptiOrganizer.git

2. **Navigate to the backend directory**
    ```
        cd backend
    ```
3. **Install Required Python Packages**
    ```
        pip install -r requirements.txt
    ```
4. **Set Up PostgreSQL Database**
* Install PostgreSQL if not already installed.
* Create a new database named optiorganizer.
* Create a user with the necessary privileges and note the username and password.

5. **Configure Environment Variables**
* Create a .env file in the root directory of the project.
* Add the following variables:
  ```
    SECRET_KEY=your_secret_key
    postgres_db_pass=your_postgres_password
  ```
* Replace your_secret_key and your_postgres_password with your actual secret key and PostgreSQL password.

## API Endpoints

The backend provides the following API endpoints:

- **POST /api/register**: Registers a new user.
- **POST /api/login**: Logs in an existing user.
- **GET /test_db**: Tests database connectivity.

## Acknowledgements

Special thanks to the following resources which have been invaluable in this project:

- [DigitalOcean Tutorial on Flask-Login](https://www.digitalocean.com/community/tutorials/how-to-add-authentication-to-your-app-with-flask-login) - For guidance on adding authentication with Flask-Login.
- [Flask Documentation](https://flask.palletsprojects.com/) - Official Flask documentation.
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - Official PostgreSQL documentation.
