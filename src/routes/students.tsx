import { Hono } from "hono"
import { zValidator } from '@hono/zod-validator'

//methods
import { findMany } from "../models/student"

//schemas
import queryParamSchema from "../schemas/QueryParams"

//views
import Message from "../views/Message"
import ListStudents from "../views/List-Students"

const students = new Hono()

students
    .get(
        '/search',
        zValidator('query', queryParamSchema, async (result, { html }) => {
        if(!result.success) {
            console.log(result.error)
            return html(<Message text="Something was wrong try again"/>)
        }
        const students = await findMany(result.data)
        return students.length ? html(<ListStudents students={students} />) : html(<Message text="No results, try again"/>)
    }))

export default students