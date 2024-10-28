const Article = ({ imgArticle, number, title, description }) => {
  return (
    <article className='flex items-center mt-5 h-44 md:w-[22rem] md:flex-grow'>
      <div className='w-24 flex-none'>
        <img src={imgArticle} alt={title} />
      </div>
      <div className='pl-6'>
        <p className='text-grayish-blue text-3xl mb-3 font-bold'>{number}</p>
        <h2 className='font-bold mb-3 hover:text-soft-orange transition-colors duration-200 cursor-pointer'>{title}</h2>
        <p className='text-dark-grayish-blue text-base'>{description}</p>
      </div>
    </article>
  )
}

export default Article