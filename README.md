# OptiOrganizer

## Overview

OptiOrganizer is a full-stack web application designed for learning and demonstrating core functionalities in web development, focusing on user authentication and data management. The frontend is built with React, creating a dynamic user interface, while the backend is developed using Flask and PostgreSQL, handling data persistence and server-side logic.

## Project Structure

The project consists of two main folders:

- `frontend`: Contains the React application.
- `backend`: Houses the Flask server and PostgreSQL database integration.

## Getting Started

To get this project up and running on your local machine, you'll need to set up both the frontend and backend.

### Prerequisites

- Node.js and npm (for the frontend)
- Python 3 and pip (for the backend)
- PostgreSQL (for the database)

### Setting Up the Backend

1. Navigate to the `backend` directory.
2. Install the required Python packages: `pip install -r requirements.txt`.
3. Set up your PostgreSQL database and update the connection details in the `.env` file.
4. Run `python app.py` to start the Flask server.

### Setting Up the Frontend

1. Navigate to the `frontend` directory.
2. Install the necessary Node modules: `npm install`.
3. Start the React development server: `npm start`.

The React application will interact with the Flask backend, providing a seamless full-stack experience.

## Running the Project

After setting up both the frontend and backend, you can access the web application at `http://localhost:3000` (React) and the backend server at `http://localhost:5000` (Flask).

## API Endpoints

The backend provides several API endpoints, including:

- **POST /api/register**: Registers a new user.
- **POST /api/login**: Logs in an existing user.
- **GET /test_db**: Tests database connectivity.

## Acknowledgements

Special thanks to the following resources which have been invaluable in this project:

- [DigitalOcean Tutorial on Flask-Login](https://www.digitalocean.com/community/tutorials/how-to-add-authentication-to-your-app-with-flask-login)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## License

This project is open-sourced under the [MIT License](LICENSE).
