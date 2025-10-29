import * as z from "zod"

const studenSchema = z.object({
    email: z.email(),
    lastName: z.string(),
    firstName: z.string(),
})

export default studenSchema