const express = require("express")
const {faker} = require("@faker-js/faker")
const Student = require("./models/student")
const {getMongoUri} = require("./config/db") 
const mongoose = require("mongoose")

const PORT = 3000
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

async function seed(){
    const students = []
    for(let i = 0; i< 100; i++){
        const student = new Student({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
        })
        students.push(student)
    }

    try {
        await Student.insertMany(students)
    } catch (error) {
        console.error("Error seeding database", error)
    }
}

async function connectDB(){
    const uri = await getMongoUri();
    await mongoose.connect(uri, {})
    console.log(`Connected to in-memory MongoDB`)
}

app.get('/', (rq, rs) => {
    rs.render('index', {
        title: "search Page",
    })
})

app.get('/search', async (rq, rs) => {

    const {searchTerm} = rq.query
    
    if(!searchTerm) throw new Error("Fails");
    
    const regex = new RegExp(searchTerm, 'i')

    try {
        const students = await Student.find({
            $or:[
                {firstName: regex}, {lastName: regex}, {email: regex}
            ]
        })
        rs.render('students', { students })
    } catch (error) {
        rs.status(500).json({error: "Internal server error"})
    }

    
})

async function start(params) {
    await connectDB()
    await seed()
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}

start()