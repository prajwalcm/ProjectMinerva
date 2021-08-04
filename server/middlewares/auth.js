const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
    try {
        const firebaseUser = await admin
            .auth()
            .verifyIdToken(req.headers.authtoken);
        // console.log('FIREBASE USER IN ATHCHECK', firebaseUser);
        req.user = firebaseUser;
        next();
    } catch (err) {
        res.status(401).json({
            err: 'Invalid or expired token',
        })
    }
};