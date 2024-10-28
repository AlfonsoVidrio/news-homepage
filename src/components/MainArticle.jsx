import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

const MainArticle = () => {
    return (
        <section className='mb-12'>
            <picture>
                <source media="(max-width: 640px)" srcSet={imageMobile} />
                <source media="(min-width: 641px)" srcSet={imageDesktop} />
                <img src={imageMobile} alt="Main article image" />
            </picture>
            <div className='sm:flex'>
                <div className='flex-1 py-6'>
                    <h2 className='text-[2.5rem] font-bold sm:text-[3.625rem] leading-none'>The Bright Future of Web 3.0?</h2>
                </div>
                <div className='flex-1 pt-9'>
                    <p className='text-sm mb-10 sm:text-base'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className='bg-soft-red w-[11.5rem] h-12 uppercase text-off-white hover:bg-very-dark-blue transition-colors duration-200'>Read more</button>
                </div>
            </div>
        </section>
    )
}

export default MainArticle