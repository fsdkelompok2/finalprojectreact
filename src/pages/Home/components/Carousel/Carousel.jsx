import CarouselItemModelOne from "./CarouselItem/CarouselItemModelOne";
import CarouselItemModelTwo from "./CarouselItem/CarouselItemModelTwo";

const Carousel = ({data}) => {
    return (
        <div className="carousel carousel-center rounded-box">
            {
                data.carouselItem.map((item, index) => {
                        if(data.carouselItemModel === 2) {
                            return <CarouselItemModelTwo 
                                key={index} 
                                imgUrl={item.imgUrl} 
                                alt={item.alt}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        }
                        return <CarouselItemModelOne key={index} imgUrl={item.imgUrl} alt={item.alt}/>
                    }
                )
            }
        </div>
    )
}

export default Carousel;