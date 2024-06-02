import { Link } from "react-router-dom"

const CarouselItemModelTwo = ({imgUrl, alt, title, subtitle}) => {
    return (
        <div className="carousel-item">
            <section className="p-4">
                <img src={imgUrl} alt={alt} className="mb-4" />
                <h1 className="mb-4 text-lg font-semibold">{title}</h1>
                <p className="mb-8">{subtitle}</p>
                <Link className="underline pt-4" to="/">Shop</Link>
            </section>
        </div> 
    )
}

export default CarouselItemModelTwo