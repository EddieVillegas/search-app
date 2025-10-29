import Card from "./Card"
import { FC } from "hono/jsx"
import type { Student } from "../types"

type Props = {
    students: Student[]
}

const ListStudents: FC<Props> = ({
    students,
}) => (
    <div className="p-3 mx-auto mb-5">
        {students.map(student => <Card student={student}/> )}
    </div>
)

export default ListStudents