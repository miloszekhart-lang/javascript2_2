# Project Overview

This is a simple JavaScript web application that demonstrates API calls using the JSONPlaceholder API.

## Purpose
Educational project showcasing different types of HTTP requests (GET, POST) and data display patterns.

## Current State
✅ Fully functional and running on port 5000

## Project Structure
- `index.html` - Main HTML page with button controls
- `script.js` - JavaScript code handling API calls and DOM manipulation
- `style.css` - Styling for the page and UI elements

## Features
1. **Example Button**: Fetches all posts from JSONPlaceholder API and displays raw JSON
2. **CW1 Button**: Fetches all posts and displays them in a formatted list with loading indicator
3. **CW2 Button**: Fetches a single post (ID: 1) and displays it with loading indicator
4. **CW3 Button**: Creates a new post via POST request and displays the returned ID

## Technical Details
- Pure vanilla JavaScript (no frameworks)
- Uses Fetch API for HTTP requests
- Implements loading states and error handling
- Static file serving via Python HTTP server

## Workflow
- **WebServer**: Runs Python's HTTP server on port 5000 to serve static files

## Recent Changes
- November 4, 2025: Project imported and verified working in Replit environment
