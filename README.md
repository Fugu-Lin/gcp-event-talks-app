# GCP Event Talks App

This is a simple web application to display the schedule of a one-day event with technical talks.

## Running the application

There are two ways to run this application:

### 1. Using the Node.js server

This method is recommended for development purposes.

**Prerequisites:**

*   [Node.js](https://nodejs.org/) installed on your system.

**Instructions:**

1.  Clone the repository:
    ```bash
    git clone https://github.com/Fugu-Lin/gcp-event-talks-app.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd gcp-event-talks-app
    ```
3.  Start the server:
    ```bash
    node server.js
    ```
4.  Open your browser and go to: `http://localhost:3000`

### 2. Using the serverless HTML file

This method is recommended for production or for users who do not have Node.js installed.

**Prerequisites:**

*   [Python 3](https://www.python.org/downloads/) installed on your system.

**Instructions:**

1.  Download the `index_serverless.html` file from the repository.
2.  Open your terminal and navigate to the directory where you downloaded the file.
3.  Start a simple Python server:
    ```bash
    python3 -m http.server
    ```
4.  Open your browser and go to: `http://localhost:8000/index_serverless.html`
