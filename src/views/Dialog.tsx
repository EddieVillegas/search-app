import { FC } from "hono/jsx"

type Props = {
    open: boolean
}

const Dialog: FC<Props> = ({
    open
}) => (
    <dialog id="modal" open={open}>
        <form hx-post='/students' hx-triger='submit' hx-target='#results' hx-swapt='afterbegin'>
            <div>
                <label htmlFor="firstName">name</label>
                <input type="text" placeholder="first name" name="firstName" id="firstName"/>
            </div>
            <div>
                <label htmlFor="email">last name</label>
                <input type="text" placeholder="last name" name="lastName" id="lastName"/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" placeholder="email" name="email" id="email"/>
            </div>
            <input type="submit">send</input>
        </form>
    </dialog>
)

export default Dialog