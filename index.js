const express = require("express");
const errorRoutes = require("./src/routes/error.route");
const globalErrorHandler = require("./src/middleware/error.middleware");

const app = express();
const PORT = 1198;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Global Error Handler API is running",
    });
});

app.use("/", errorRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
