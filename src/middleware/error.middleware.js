const globalErrorHandler = (error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }

    if (error.type === "entity.parse.failed") {
        return res.status(400).json({
            success: false,
            message: "Request body must contain valid JSON.",
        });
    }

    console.error("Global Error Handler:", error);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
};

module.exports = globalErrorHandler;
