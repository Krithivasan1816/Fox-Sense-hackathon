import { favbooksService, searchBooksService,getProfileService,readbooksService,getreadService } from "../services/books.js"

export async function searchBooks(req, res) {
    let body = req.body
    console.log("Request Body - ", body)
    let resp = await searchBooksService(body)

    res.status(200).json(resp)
}
export async function favBooks(req, res) {
    let body = req.body
    console.log("Request Body - ", body)
    let resp = await favbooksService(body)

    res.status(200).json(resp)
}
export async function readBooks(req, res) {
    let body = req.body
    console.log("Request Body - ", body)
    let resp = await readbooksService(body)

    res.status(200).json(resp)
}
export async function getBooks(req, res) {
    let body = req.params
    console.log("Request Body - ", body)
    let resp = await getProfileService(body)

    res.status(200).json(resp)
}
export async function getreadBooks(req, res) {
    let body = req.params
    console.log("Request Body - ", body)
    let resp = await getreadService(body)

    res.status(200).json(resp)
}