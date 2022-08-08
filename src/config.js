// بسم الله الرحمن الرحيم
const baseUrl = process.env.REACT_APP_ENV===' '?process.env.REACT_APP_BASE_URL :process.env.REACT_APP_BASE_URL_DEV
console.log(baseUrl)
const appConfig= {
    baseUrl
}
export default appConfig