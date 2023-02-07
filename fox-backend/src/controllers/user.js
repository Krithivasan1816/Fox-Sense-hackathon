import { RegisterUserService, AuthorizeUserService } from '../services/user.js'

export async function AuthorizeUser(req, res) {
    const body = req.body
    console.log("Request Body - ", body)
    let resp = await AuthorizeUserService(body)

    res.status(200).json(resp)
}

export async function RegisterUser(req, res) {
    const body = req.body
    console.log("Request Body - ", body)
    let resp = await RegisterUserService(body)

    res.status(200).json(resp)
}

