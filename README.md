# AI-Generated-Email-Reply

A full-stack project that uses AI to generate professional email replies. It consists of a React-based frontend, a Spring Boot backend, and a Chrome extension for seamless integration with Gmail, enabling AI-powered email replies with a single click.

---

## Features

### Frontend
- **Email Reply Generation**: Input email content and an optional tone (e.g., professional, casual, friendly) to generate a reply.
- **Dynamic Themes**: Toggle between dark and light modes for a personalized experience.
- **Clipboard Copy**: Copy the generated email reply to your clipboard with a single click.
- **Modern UI**: Built using Material-UI for responsiveness and style.

### Backend
- **AI Integration**: A Spring Boot service integrated with the Gemini API to generate AI-powered email replies.
- **API Endpoints**: Provides secure and scalable endpoints for frontend and extension use.

### Chrome Extension
- **Gmail Integration**: Adds an "AI Reply" button directly to Gmail's interface.
- **Single-Click Reply**: Generate and send AI-powered replies without leaving Gmail.
- **Seamless Workflow**: Built for ease of use and minimal setup.

---

## Prerequisites

- **Node.js** (v16 or above)
- **npm** or **yarn**
- **Java** (JDK 11 or above)
- **Maven** (for backend)
- **Google Chrome** (for extension)

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/raviteja6031/AI-Generated-Email-Reply.git
cd AI-Generated-Email-Reply
```
## Backend Setup

Navigate to the backend directory:
```bash
cd backend
```
 Update api_url and api_key in the environment variables
 Build and run the Spring Boot application

The backend will be available at 
```bash
http://localhost:8080
```
## Frontend Setup

Navigate to the frontend directory:
```bash
cd frontend
```
Install Dependencies and run the server

```bash
npm install
npm install axios
npm install @mui/material @emotion/react @emotion/styled
npm run dev
```
The frontend will be available at:

```bash
http://localhost:5173/
```

## Chrome Extension Setup

Navigate to the email-writer-ext directory:
```bash
cd email-writer-ext
```

Open Google Chrome and navigate to chrome://extensions.

Enable Developer Mode in the top-right corner.

Click "Load unpacked" and select the email-writer-ext folder.

The extension will be added to Chrome and integrated into Gmail.



## Usage

### Frontend

Open the frontend in your browser (http://localhost:5173).
Paste the original email content into the input box.
Select an optional tone (e.g., professional, casual, friendly).
Click the "Generate Reply" button to get an AI-generated response.
Use the "Copy to Clipboard" button to copy the reply.

### Chrome Extension

Open Gmail in Google Chrome.
Compose or reply to an email.
Click the "AI Reply" button added by the extension.
The extension will use the backend to generate a reply and insert it into the email body.

## Project Structure

```
AI-Generated-Email-Reply/
├── frontend/              # React-based frontend
├── backend/               # Spring Boot backend
├── email-writer-ext/      # Chrome extension code
```






 
