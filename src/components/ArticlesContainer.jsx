import Article from "./Article"
import { articlesData } from '../data/articles.js'

const ArticlesContainer = () => {
    return (
        <section className = 'mt-6 md:flex md:flex-wrap md:gap-3 mb-8'>
            {articlesData.map( (article, index) => 
                        <Article
                        key = {index} 
                        imgArticle = {article.imgArticle}
                        number = {article.number}
                        title = {article.title}
                        description = {article.description}
                    />)}
        </section>
    )
}

export default ArticlesContainer