const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=260d673ea4d59451384eba5284a04c4d&query=40,-75&unit=m'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => { // fires when data comes in
        data = data + chunk.toString()
        console.log(chunk)
    })
    response.on('end' , () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()