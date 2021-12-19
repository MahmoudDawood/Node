require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61bc7ea5a1b54e1c9cd5d761').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    return await Task.countDocuments({ completed: false })
}

deleteTaskAndCount('61bc80157ca1172c805acac1').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})