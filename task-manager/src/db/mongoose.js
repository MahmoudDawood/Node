const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true, // to access mongo easily
    useFindAndModify: false,
    useUnifiedTopology: true // Advisied by vscode
})

