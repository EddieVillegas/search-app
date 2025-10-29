import * as z from "zod"

const queryParamSchema = z.object({
    q: z.string().min(1),
    l: z.number().default(5),
    p: z.number().default(0)
})

export default queryParamSchema