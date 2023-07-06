# linktree-clone

This repository contains a linktree clone project with a backend service built using Express, MongoDB, and Node.js, and a frontend built with React.js. The project allows users to create a personal page with links to their social media profiles, websites, and other online resources.

## Installation and Running Steps

### Prerequisites
Make sure you have the following software installed on your system:
- Node.js (v14 or above)
- npm (Node Package Manager)
- MongoDB

### Backend Setup

1. Open a terminal and navigate to the `linktree-clone/backend` directory.

2. Install the required dependencies by running the following command:

npm install

3. Rename the `.env.example` file to `.env` in the root of the `linktree-clone/backend` directory.

4. Edit the `.env` file and update the values accordingly, using the following backend environment settings:

APP_PORT=3001
MONGODB_URI=mongodb://127.0.0.1:27017/
DATABASE_NAME=linktree-clone
SECRET_KEY=itssecret

5. Start the backend server by running the following command:

npm start

The server will start running on `http://localhost:3001`.

6. To view the documentation for the backend service endpoints, open your web browser and visit `http://localhost:3001/api-docs`. This will open Swagger UI, which provides an interactive interface for exploring and testing the API endpoints.

### Frontend Setup

1. Open a new terminal and navigate to the `linktree-clone/frontend` directory.

2. Install the required dependencies by running the following command:

npm install

3. Rename the `.env.example` file to `.env` in the root of the `linktree-clone/frontend` directory.

4. Edit the `.env` file and update the `REACT_APP_API_URL` value to `http://localhost:3001/api`.

5. Start the frontend development server by running the following command:

npm start

The development server will start running on `http://localhost:3001`.

6. Open a web browser and visit `http://localhost:3001` to access the frontend application.

## Usage

Once the backend and frontend servers are running, you can start using the linktree clone application. The frontend provides a user interface for creating and managing your personal page with links.

To add links to your page, follow these steps:

1. Open your web browser and go to `http://localhost:3001`.

2. Fill in the necessary details to create an account.

3. After logging in, you will be redirected to your personal page.

4. Click on the "Add Link" button to add a new link.

5. Provide the details for the link, such as the title, URL, and icon.

6. Click "Save" to add the link to your personal page.

7. You can add multiple links and customize their order using drag-and-drop.

8. To edit or delete a link, hover over the link card and click on the respective buttons.

9. You can also customize the appearance of your personal page by clicking on the "Customize" button.

10. Explore the features and functionalities of the linktree clone application to manage your links effectively.

## Conclusion

Congratulations! You have successfully installed and set up the linktree clone project. You can now use the backend and frontend servers to create and manage your personal page with links. Don't forget to explore the backend service endpoints



