const { verify } = require('jsonwebtoken')
const secret = process.env.SECRET

const checkIfLogin = (request, response) => {
    if (!request.headers.cookie) {
        return null
    }

    const { token } = parse(request.headers.cookie)

    if (!token) {
        return null
    }

    return verify(token, secret, (err, userData) => {
        if (err) {
            return err
        } else {
            console.log(userData)
            return userData
        }
    })
}
module.exports = checkIfLogin