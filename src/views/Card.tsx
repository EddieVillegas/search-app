import { FC } from "hono/jsx"
import { Student } from "../types"

type Props = {
    student: Student
}

const Card: FC<Props> = ({
    student: {firstName, lastName, email}
}) => (
    <div 
        className='rounded-2xl hover:bg-neutral-800 bg-neutral-700 text-white mb-2 flex flex-row p-5 cursor-pointer'
    >
        <div className="rounded-full bg-blue-700 text-white w-10 h-10 uppercase mr-5 flex justify-center items-center">
            <p>{firstName.charAt(0)}{lastName.charAt(0)}</p>
        </div>
        <div>
            <p>{firstName} {lastName}</p>
            <p>{email}</p>
        </div>
    </div>
)

export default Card