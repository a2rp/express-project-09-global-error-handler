# express-project-09-global-error-handler

A learning API showing centralized Express.js error handling with consistent JSON responses.

## What it demonstrates

- Forwarding route errors to one error-handling middleware
- Hiding internal exception details from API responses
- Returning JSON for malformed request bodies and unknown routes

## Requirements and setup

Use Node.js 18 or later. Install dependencies:

```bash
npm install
```

Start with automatic restarts during development:

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

The API listens at `http://localhost:1198`. Example requests are in [`api-test.rest`](./api-test.rest) for the VS Code REST Client.

## Endpoints

### `GET /`

Returns a status response:

```json
{
  "success": true,
  "message": "Global Error Handler API is running"
}
```

### `GET /error`

The controller forwards a deliberate exception to the global error middleware. The API responds with status `500` and does not expose the exception details:

```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

The full error is written to the server log.

Unknown paths return `404` with a JSON `Route not found` message. Malformed JSON request bodies return `400` with a JSON error response.

## How it works

The error route calls `next(error)`. Express skips regular middleware and routes, then invokes the four-argument error middleware registered after the routes. The error middleware checks whether the response has already started, handles malformed JSON, logs unexpected errors, and sends a safe response.

## Author and links

- GitHub: https://github.com/a2rp
- Portfolio: https://www.ashishranjan.net
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- CodePen: https://codepen.io/ash1198
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: ash.ranjan09@gmail.com
- Support: https://a2rp-donation-page.netlify.app/
- Buy Me a Coffee: https://buymeacoffee.com/ashishranjan
- Patreon: https://patreon.com/ashishranjan