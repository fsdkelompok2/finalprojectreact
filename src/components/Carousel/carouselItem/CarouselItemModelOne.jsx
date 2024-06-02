const CarouselItemModelOne = ({imgUrl, alt}) => {
    return (
        <div className="carousel-item">
            <div className="p-4">
                <img src={imgUrl} alt={alt} />
            </div>
        </div> 
    )
}

export default CarouselItemModelOne