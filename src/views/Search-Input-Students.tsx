
const SearchInputStudents = () => (
    <div className="max-w-2xl mx-auto p-5">
        <p className="text-center text-lg text-neutral-400">Search users typing</p>
        <label htmlFor="search_input">
            <input
                autofocus
                name="q"
                type="text"
                id="search_input"
                autoComplete="off"
                hx-target="#results"
                placeholder="Search..."
                hx-get="/students/search"
                hx-trigger="input changed delay:500ms"
                className="w-full p-3 text-lg text-neutral-200 border-2 border-amber-50 rounded-xl mb-2"
            />
        </label>
    </div>
)

export default SearchInputStudents