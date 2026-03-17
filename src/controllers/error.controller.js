const getErrorDemo = (req, res, next) => {
    try {
        throw new Error("This is a forced error from the controller");
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getErrorDemo,
};
