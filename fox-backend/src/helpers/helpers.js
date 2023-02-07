import fetch from "node-fetch";
import bcrypt from 'bcryptjs';


export async function asyncFetch(url, body) {
    let response = await fetch(url, body);
    console.log('fetching URL - ', url)
    return response.json();
}

export async function BcryptHash(plaintext, saltrounds) {
    let hash = bcrypt
        .genSalt(saltrounds)
        .then(salt => {
            console.log('Salt: ', salt)
            return bcrypt.hash(plaintext, salt)
        })
        .then(hash => {
            console.log('Hash: ', hash)
            return hash
        })
        .catch(err => console.error(err.message))
    return hash
}

export async function BcryptCompare(plaintext, hash) {
    let result = bcrypt
        .compare(plaintext, hash)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
    return result
}