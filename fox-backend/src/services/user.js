import { db } from '../app/app.js'
import jwt from "jsonwebtoken";
import { asyncFetch, BcryptHash, BcryptCompare } from '../helpers/helpers.js';


export async function RegisterUserService(body) {
    console.log("Services : ", body)
    let passwordHash = await BcryptHash(body.password, 10)
    let resp = db.User.create({
        Name: body.name,
        Email: body.email,
        PasswordHash: passwordHash,
    })
        .then((data) => {
            let tokendata = {
                email: body.email,
                // exp 1 hour
                exp: Date.now() + (60 * 60 * 1000)
            }
            let token = jwtSign(tokendata)
            return {
                success: true,
                token,
            }
        })
        .catch((err) => {
            console.log("Couldnt save User in DB : ", err)
            return {
                success: false,
                data: "Internal server error"
            }
        });
    return resp
}

export async function AuthorizeUserService(body) {
    let user = await db.User.findAll({
        where: {
            Email: body.email
        },
        raw: true
    })
    if (user.length === 0) {
        let res = {
            error: "User not registered",
        }
        return res
    }
    // let passwordHash = BcryptHash(body.password, 10)
    let isAuth = await BcryptCompare(body.password, user[0].PasswordHash)
    console.log('---->>>', isAuth);
    let resp = {}
    if (isAuth === true) {
        let jwtData = {
            email: user.email,
            // exp 1 hour
            exp: Date.now() + (60 * 60 * 1000)
        }
        let token = jwtSign(jwtData)
        resp.success = true
        resp.token = token
    } else {
        resp.error = 'Invalid username or password'
    }
    return resp
}

function jwtSign(data) {
    const secretKey = "ro8BS6Hiivgzy8Xuu09JDjlNLnSLldY5";
    // Generate the token
    let token = jwt.sign(data, secretKey);
    return token
}