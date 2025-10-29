import Layout from "./Layaout"
import SearchInputStudents from "./Search-Input-Students"

export default function App(){
    return(
        <Layout>
            <h1 className="text-center text-4xl text-white mb-5">Search app</h1>
            <SearchInputStudents />
            <div id="results"></div>
        </Layout>
    )
}