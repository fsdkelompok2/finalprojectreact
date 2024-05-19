import CarouselItemModelOne from "./CarouselItem/CarouselItemModelOne";
import CarouselItemModelTwo from "./CarouselItem/CarouselItemModelTwo";

const Carousel = ({data}) => {
    return (
        <div className="carousel carousel-center rounded-box">
            {
                data.carouselItem.map((item, index) => {
                        if(data.carouselItemModel === 2) {
                            return <CarouselItemModelTwo key={index} {...item}/>
                        }
                        return <CarouselItemModelOne key={index} {...item}/>
                    }
                )
            }
        </div>
    )
}

export default Carousel;