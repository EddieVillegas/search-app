import { Hono } from "hono";
import {faker} from "@faker-js/faker"
import prisma from "../config/db"

async function seeder(){
    const students = Array.from({ length: 100 }, () => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
    }))
    try {
        await prisma.student.createMany({
            data: students
        })
    } catch (error) {
        console.error("Error seeding database", error)
    }
}

const seed = new Hono()

seed.get('/', c => {
    seeder()
    return c.json("Database seeded with 100 products")  
})

export default seed