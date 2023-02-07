import { asyncFetch } from '../helpers/helpers.js';
import {db} from '../app/app.js'


export async function searchBooksService(data) {
    let searchData = data.searchData
    // let SearchDataAuth=data.SearchDataAuth
    let respData = await asyncFetch(`https://www.googleapis.com/books/v1/volumes?q=${searchData}`)
    console.log(respData);
    // console.log(respData.data);
    const resp = []
    respData.items.forEach(element => {
        let temp = {}
        temp.name = element?.volumeInfo?.title
        temp.author = Array.isArray(element?.volumeInfo?.authors) ? element?.volumeInfo?.authors[0] : ''
        temp.image = element?.volumeInfo?.imageLinks?.thumbnail
        resp.push(temp)
    });
    return resp
}
export async function favbooksService(data){
    data = data.book
    // let favdata=data.favdata
    // let favone=await asyncFetch(favdata)
    let bookfav = db.favourite.create({
        userEmail: data.userEmail,
        title:data.name,
        author:data.author,
        Image:data.image
        
    })
    // console.log(favone)
    return bookfav
}
export async function readbooksService(data){
    data = data.book
    // let favdata=data.favdata
    // let favone=await asyncFetch(favdata)
    let bookread = db.readbook.create({
        userEmail: data.userEmail,
        title:data.name,
        author:data.author,
        Image:data.image
        
    })
    // console.log(favone)
    return bookread
}
export async function getProfileService(data){
    console.log(data)
    let books = await db.favourite.findAll({
        where: {
            userEmail: data.email
        },
        raw: true
    })
    console.log(books)
    return books
}
export async function getreadService(data){
    console.log(data)
    let books = await db.read.findAll({
        where: {
            userEmail: data.email
        },
        raw: true
    })
    console.log(books)
    return books
}
// export async function favbooks(data) {
//     let FavData = data.FavData
//     let respData = await asyncFetch(``)
//     console.log(respData);
//     // console.log(respData.data);
//     const resp = []
//     respData.items.forEach(element => {
//         let temp = {}
//         temp.name = element?.volumeInfo?.title
//         temp.author = Array.isArray(element?.volumeInfo?.authors) ? element?.volumeInfo?.authors[0] : ''
//         temp.image = element?.volumeInfo?.imageLinks?.thumbnail
//         resp.push(temp)
//     });
//     return resp