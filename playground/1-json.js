const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer)

data.name = 'Mahmoud'
data.age = 24

const newDataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', newDataJSON)