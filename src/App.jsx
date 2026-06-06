import blog from "./blog"
import Header from "./components/Header"
import About from "./components/About"
import ArticleList from "./components/ArticleList"

function App() {
return (
<>
<Header name={The Trip to the Last Frontier} />
<ArticleList posts={blog.posts} />
</>
)
}

export default App