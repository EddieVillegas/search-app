import * as z from 'zod'

import queryParamSchema from '../schemas/QueryParams'
import studenSchema from '../schemas/Student'

export type QueryParams = z.infer<typeof queryParamSchema>
export type Student = z.infer<typeof studenSchema>