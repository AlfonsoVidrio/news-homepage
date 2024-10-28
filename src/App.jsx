import ArticlesContainer from "./components/ArticlesContainer"
import Header from "./components/Header"
import MainArticle from "./components/MainArticle"
import NewContainer from "./components/NewContainer"

const App = () => {
  return (
    <main className = "px-5 pt-6 font-inter">
      <Header />
      <div className="lg:flex lg:gap-8">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticlesContainer />
    </main>
  )
}

export default App