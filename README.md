# URL Shortener 🔗

A simple and fast URL shortener application built with Express.js and TypeScript. Create short, shareable links and track click statistics.

## Features

- ✨ Create short URLs from long URLs
- 📊 Track total links created and clicks
- 🎯 Redirect short URLs to original destinations
- 📋 View all created links with statistics
- 🎨 Clean and user-friendly web interface

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd urlShortner
   ```

2. **Install dependencies**
   ```bash
   npm i
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

The application will start at `http://localhost:3000`

## Available Scripts

- **`npm run dev`** - Start the development server using ts-node
- **`npm run build`** - Compile TypeScript to JavaScript
- **`npm start`** - Run the compiled JavaScript from dist folder

## Project Structure

```
urlShortner/
├── src/
│   ├── controllers/
│   │   └── url.controller.ts      # Request handlers
│   ├── services/
│   │   └── url.service.ts         # Business logic
│   ├── store/
│   │   └── memory.store.ts        # In-memory data storage
│   ├── routes/
│   │   └── url.routes.ts          # API routes
│   ├── utils/
│   │   ├── validator.ts           # URL validation
│   │   └── shortcode.ts           # Short code generation
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   ├── config.ts                  # Configuration
│   └── index.ts                   # Main application entry point
├── public/
│   └── index.html                 # Frontend UI
├── dist/                          # Compiled JavaScript (generated)
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
└── README.md                       # This file
```

## API Endpoints

- **POST** `/shorten` - Create a short URL
  - Body: `{ "longUrl": "https://example.com" }`
  - Response: `{ "newurl": "http://localhost:3000/abc123" }`

- **GET** `/:code` - Redirect to original URL

- **GET** `/stats` - Get statistics (total links, total clicks)

- **GET** `/all` - Get all created links with details

## Notes

- Short URLs are stored in memory (will be cleared on server restart)
- Only HTTP and HTTPS URLs are accepted
- Short codes are randomly generated (6 characters)

---

## 📅 5-Day Simple Project Series

This is **Day 1** of a 5-day simple projects series. ✅ Day 1 complete!

Stay tuned for upcoming projects. 🚀

