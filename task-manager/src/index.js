const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method == 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => { // Express Middleware
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json()) // Auto parse all incoming json
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

// const main = async () => {
//     const task = await Task.findById('61c71621bf536b3c04698ee1')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)

//     const user = await User.findById('61c7152ca3127632ac67e62b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()