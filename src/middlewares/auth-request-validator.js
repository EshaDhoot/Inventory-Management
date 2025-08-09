const validateUserAuth = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !username.trim() || !password || !password.trim()) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'Username or password is missing or empty'
        });
    }

    next();
};

module.exports = {
    validateUserAuth
}