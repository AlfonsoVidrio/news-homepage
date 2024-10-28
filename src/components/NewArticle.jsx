const NewArticle = ({title, description}) => {
    return (
        <article className="h-[180px] border-b-2 border-grayish-blue py-7 last:border-none  lg:py-4">
            <h2 className="cursor-pointer hover:text-soft-orange text-[20px] transition-colors duration-200  mb-3 font-bold lg:text-base xl:text-xl">{title}</h2>
            <p className="text-base">{description}</p>
        </article>
    )
}

export default NewArticle