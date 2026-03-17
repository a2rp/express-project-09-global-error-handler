const globalErrorHandler = (error, req, res, next) => {
    console.error("Global Error Handler:", error.message);

    res.status(500).json({
        success: false,
        message: error.message || "Internal Server Error",
    });
};

module.exports = globalErrorHandler;
