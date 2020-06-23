module.exports = {
    port: process.env.PORT || 4000,
    proxy: {
        requestTimeOut: 30 * 1000,
        API: {
            publicApi: 'https://localhost:3000/public/'
        }
    }
}
