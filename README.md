# express-project-09-global-error-handler

A simple Express.js backend project that demonstrates centralized error handling using a global error middleware.

## Project Goal

This project is built to understand how global error handling works in Express.js.

It focuses on:

- creating routes and controllers
- throwing errors from a controller
- forwarding errors using `next(error)`
- handling all errors from one central middleware
- returning structured JSON error responses

## Tech Stack

- Node.js
- Express.js
- Nodemon

## Project Structure

```bash
express-project-09-global-error-handler
│
├─ src
│  ├─ controllers
│  │  └─ error.controller.js
│  │
│  ├─ routes
│  │  └─ error.route.js
│  │
│  └─ middleware
│     └─ error.middleware.js
│
├─ index.js
├─ api-test.rest
├─ .gitignore
├─ package.json
├─ package-lock.json
└─ README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/a2rp/express-project-09-global-error-handler.git
cd express-project-09-global-error-handler
```

Install dependencies:

```bash
npm install
```

## Run the Project

Development mode with nodemon:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs at:

```bash
http://localhost:1198
```

## API Endpoints

### GET /

Returns a success response.

```json
{
    "success": true,
    "message": "Global Error Handler API is running"
}
```

### GET /error

Throws a forced error from the controller and handles it through the global error middleware.

```json
{
    "success": false,
    "message": "This is a forced error from the controller"
}
```

## Learning Outcome

By building this project, you learn how to:

- separate routes, controllers, and middleware
- create a centralized error handler
- pass errors using `next(error)`
- keep controller code clean
- send consistent error responses

## Testing

This project includes an `api-test.rest` file for quick API testing inside VS Code using the REST Client extension.

## Author

Ashish Ranjan

Follow me

- GitHub: https://github.com/a2rp
- Portfolio: https://www.ashishranjan.net
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/

## Links

- Portfolio: [https://www.ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me A Coffee: [https://buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [https://patreon.com/a2rp](https://patreon.com/a2rp)