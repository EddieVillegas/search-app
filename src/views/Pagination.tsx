import { FC } from "hono/jsx"

const className="bg-neutral-900 border border-amber-50 hover:bg-blue-900 w-10 h-10 text-neutral-50 rounded-xl mr-2 cursor-pointer"

const Pagination: FC = () => (
    <div className="mx-auto">
        <button className={className}>
            &lt;
        </button>
        <button 
            className={className}
            hx-trigger="click"
            hx-get="/students/search"
            name="s"
            value="10"
        >
            1
        </button>
        <button className={className}>
            2
        </button>
        <button className={className}>
            3
        </button>
        <button className={className}>
            &gt;
        </button>
    </div>
)

export default Pagination