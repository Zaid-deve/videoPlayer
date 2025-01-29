# Video Player with Remote Streaming

A video player built with **React**, **Node.js**, and **Express.js**, allowing users to stream videos stored on remote servers without any preview. The project utilizes **Video.js** for video playback and **Cheerio** for scraping HTML content.

## Features
- Stream videos from remote servers
- No need for local storage or previews
- Responsive UI using React
- Backend powered by Express.js
- HTML parsing and data extraction with Cheerio

## Installation
### Prerequisites
- Node.js installed
- npm or yarn package manager

### Steps
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/video-player.git
   cd video-player
   ```
2. **Install Dependencies:**
   - Client (React App):
     ```sh
     cd client
     npm install  # or yarn install
     ```
   - Server (Node.js & Express):
     ```sh
     cd server
     npm install  # or yarn install
     ```
3. **Run the Project:**
   - Start the backend server:
     ```sh
     cd server
     npm start  # or yarn start
     ```
   - Start the frontend:
     ```sh
     cd client
     npm start  # or yarn start
     ```

## Usage
- Open `http://localhost:3000` to access the video player.
- Enter a video URL from a remote server to start streaming.

## Tech Stack
- **Frontend:** React, Video.js
- **Backend:** Node.js, Express.js, Cheerio

## License
This project is open-source and available under the [MIT License](LICENSE).

