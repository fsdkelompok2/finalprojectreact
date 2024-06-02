import { Layout } from "../../components/Layout"
import Carousel from "../../components/Carousel"
import carouselProduct from "../../dummydata/carouselProduct.json"

const carousel = {
    carouselItem: carouselProduct
}

const NoMatch = () => {
    return (
        <Layout>
            <h1 className="my-8 text-xl text-center font-semibold">
                <span className="block">We can't find the page you are looking for.</span> 
                <span className="block">Sorry for the inconvenience.</span>
            </h1>
            <div className="mx-auto w-9/12">
                <Carousel data={carousel}></Carousel>
            </div>
        </Layout>
    )
}

export default NoMatch