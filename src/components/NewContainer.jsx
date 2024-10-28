import NewArticle from "./NewArticle"
import { articles } from "../data/articles"

const NewContainer = () => {
    return (
        <aside className="bg-very-dark-blue text-off-white py-6 px-5">
            <h2 className="text-soft-orange text-4xl font-bold">News</h2>
            {articles.map((article, index) => 
            <NewArticle 
                key={index} 
                title={article.title} 
                description={article.description} 
            />)}
        </aside>
    )
}

export default NewContainer