# PotatoGuard

PotatoGuard is an AI-powered web application designed to help farmers and agricultural enthusiasts identify common potato diseases from leaf images. By leveraging a Convolutional Neural Network (CNN), the application provides fast and accurate diagnoses of conditions like Early Blight and Late Blight, alongside detailed information and management strategies.

The application features a modern, responsive interface built with React and TypeScript, a robust Node.js backend with Express, and a PostgreSQL database for storing prediction history.

## Features

-   **AI-Powered Disease Analysis**: Upload an image of a potato leaf to get an instant diagnosis from a trained machine learning model.
-   **Detailed Results**: View a primary diagnosis along with confidence scores and a breakdown of other potential diseases.
-   **Comprehensive Disease Information**: Access detailed descriptions, symptoms, and management strategies for identified conditions.
-   **Prediction History**: Browse a gallery of past analyses to track and review previous submissions.
-   **Interactive Learning Module**: Test your knowledge with a quiz on potato disease identification, prevention, and treatment.
-   **User-Friendly Guides**: Follow guides on how to use the application, understand the diseases, and implement prevention techniques.
-   **Responsive Design**: A clean, responsive UI with light and dark modes, accessible on any device.
-   **Sample Images**: Use provided sample images to test the analyzer's functionality.

## Tech Stack

-   **Frontend**:
    -   React & TypeScript
    -   Vite (Build Tool)
    -   Wouter (Routing)
    -   Tailwind CSS
    -   Shadcn UI (Component Library)
    -   Axios & TanStack Query (Data Fetching)
    -   Recharts (Charting)
-   **Backend**:
    -   Node.js & Express
    -   TypeScript
    -   Multer (File Upload Handling)
-   **Database**:
    -   PostgreSQL (via Neon)
    -   Drizzle ORM
-   **Machine Learning**:
    -   Keras/TensorFlow model (`.keras` file)
    -   A separate FastAPI service is intended for model inference, with a mock implementation in the Node.js backend for development.
-   **Deployment & Tooling**:
    -   Docker
    -   Render (`render.yaml`)
    -   Vercel (`vercel.json`)
    -   Esbuild & TSX

## Architecture

PotatoGuard is structured as a monorepo containing three main parts:

-   `client/`: A React Single-Page Application (SPA) that provides the user interface. It handles image uploads, displays results, and serves all informational content.
-   `server/`: A Node.js/Express API that acts as the primary backend. It manages:
    -   Receiving image uploads from the client.
    -   Calling the external machine learning model for analysis.
    -   Interacting with the PostgreSQL database to store and retrieve prediction history.
-   `shared/`: Contains shared code, primarily the Drizzle ORM schema, used by both the server and for database migrations.

The machine learning model is designed to run as a separate Python-based service (e.g., FastAPI), which the Node.js server communicates with. For development purposes, if the ML service is unavailable, the backend falls back to a mock prediction generator.

## Getting Started

To run PotatoGuard locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ashnoor1313/potatoguard.git
    cd potatoguard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your database connection string:
    ```env
    DATABASE_URL="your_postgresql_connection_string"
    ```
    Optionally, you can set the `FASTAPI_URL` if you are running the Python model service separately.

4.  **Run database migrations:**
    Apply the Drizzle schema to your database.
    ```bash
    npm run db:push
    ```

5.  **Start the development server:**
    This command starts the Vite frontend and the Express backend concurrently.
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5000`.

## Deployment

The repository is configured for several deployment platforms:

-   **Docker**: A `Dockerfile` is provided to build a containerized version of the application. Use standard Docker commands to build and run the image.
    ```bash
    docker build -t potatoguard .
    docker run -p 8080:8080 -e DATABASE_URL="<your_db_url>" potatoguard
    ```
-   **Render**: The `render.yaml` file defines a multi-service deployment for Render, including a static frontend, a web service for the backend, and a PostgreSQL database.
-   **Vercel**: The `vercel.json` file configures the project for deployment on Vercel, setting up a serverless function for the Node.js API and serving the static client assets.

## API Endpoints

The Express server exposes the following API routes:

-   `POST /api/predict`: Handles image uploads for disease classification. Expects `multipart/form-data` with a `file` field.
-   `GET /api/predictions`: Retrieves a list of past prediction records. Supports a `limit` query parameter.
-   `GET /api/predictions/:id`: Fetches a single prediction record by its ID.

## Project Structure

```
.
├── client/                 # React frontend source code
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components for routing
│   │   ├── lib/            # Utilities, API clients, QueryClient
│   │   └── ...
│   └── index.html          # Entry point for the client
├── server/                 # Node.js/Express backend
│   ├── db.ts               # Database connection setup
│   ├── ml-model.ts         # ML model interaction (real and mock)
│   ├── routes.ts           # API route definitions
│   └── index.ts            # Server entry point
├── shared/                 # Code shared between client and server
│   └── schema.ts           # Drizzle ORM database schema
├── attached_assets/        # ML model and other large assets
│   └── potato_disease_model.keras
├── Dockerfile              # Docker configuration for deployment
├── drizzle.config.ts       # Drizzle Kit configuration
├── package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite build configuration
