import jwt from "jsonwebtoken";

export function TokenAuthMiddleware(req, res, next) {
    console.log('---->>', req.headers);
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'ro8BS6Hiivgzy8Xuu09JDjlNLnSLldY5', (err, user) => {
            if (err) res.status(403).json("token is not valid")
            if (Date.now() > user.exp) {
                return res.status(401).json("Token Expired")
            }
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("You are not authenticated")
    }
}
