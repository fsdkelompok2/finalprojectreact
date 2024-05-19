import Accordion from "./components/Accordion"
import Carousel from "../../components/Carousel"
import DoubleFeaturedProduct from "./components/DoubleFeaturedProduct"
import FeaturedProduct from "./components/FeaturedProduct"
import FeaturedProductSection from "./components/FeaturedProductSection"
import News from "./components/News"
import carouselProduct from "../../dummydata/carouselProduct.json";
import { Layout } from "../../components/Layout"

const alwaysIconicCarousel = {
  title: "Always Iconic",
  carouselItem: carouselProduct
}

const shopBySportCarousel = {
  title: "Shop By Sport",
  carouselItemModel: 2,
  carouselItem: carouselProduct
}

const banner = {
  product: {
    title: "STEP INTO THE LUNAR NEW YEAR",
    description: "Get into the festive spirit in all day looks that take you where you want to be. Shop our Lunar New Year collection.",
    destinationURL: "/",
    media: {
      type: "img",
      url: {
        small: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/6d98b914-1097-44ab-8171-f5cf2396acac/nike-just-do-it.png",
        normal: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1167,c_limit/21254ece-bbb3-457a-bcdc-3af7b7a73093/nike-just-do-it.png"
      }
    }
  }
}

const featuredProduct = {
  product: [
    {
      title: "NIKE G.T CUT 3",
      description: "Built for players who are constantly cutting, stopping on a dime and changing the game.",
      destinationURL: "/",
      media: {
        type: "video",
        url: {
          small: "https://assets.mixkit.co/videos/preview/mixkit-basketball-player-dribbling-then-dunking-2285-large.mp4",
          normal: "https://assets.mixkit.co/videos/preview/mixkit-basketball-player-dribbling-ball-744-large.mp4"
        }
      }
    }
  ]
}

const dontMissFeaturedProduct = {
  title: "Don't miss",
  product: [
    {
      title: "New Phantom GX",
      category: "Early Member Access",
      destinationURL: "/",
      media: {
        type: "img",
        url: {
          small: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_500,c_limit/85a704a9-239c-47f6-b86a-361f25ff82cc/nike-just-do-it.jpg",
          normal: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_714,c_limit/85a704a9-239c-47f6-b86a-361f25ff82cc/nike-just-do-it.jpg",
        }
      }
    },
    {
      title: "Retro Running Shoes",
      category: "",
      destinationURL: "/",
      media: {
        type: "img",
        url: {
          small: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_500,c_limit/137b4cea-c665-4681-bdc2-b41078512a3b/nike-just-do-it.png",
          normal: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_712,c_limit/90fd6e48-3c9d-4568-bc54-10b6fe1220d8/nike-just-do-it.png",
        }
      }
    },
  ]
}

const dontMissDoubleFeaturedProduct = {
  title: "Don't Miss",
  product: [
    [
      {
        title: "New Phantom GX",
        category: "Early Member Access",
        destinationURL: "/",
        img: {
          small: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_500,c_limit/85a704a9-239c-47f6-b86a-361f25ff82cc/nike-just-do-it.jpg",
          normal: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_714,c_limit/85a704a9-239c-47f6-b86a-361f25ff82cc/nike-just-do-it.jpg",
        }
      },
      {
        title: "Retro Running Shoes",
        category: "",
        destinationURL: "/",
        img: {
          small: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_500,c_limit/137b4cea-c665-4681-bdc2-b41078512a3b/nike-just-do-it.png",
          normal: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_712,c_limit/90fd6e48-3c9d-4568-bc54-10b6fe1220d8/nike-just-do-it.png",
        }
      },
    ]
  ]
}

const categoryAccordion = [
  {
    title: "Icons",
    content: [
      {
        text: "Air Force 1",
        destinationURL: "/",
      }, 
      {
        text: "Huarache",
        destinationURL: "/",
      }, 
      {
        text: "Air Max 90",
        destinationURL: "/",
      }, 
      {
        text: "Air Max 95",
        destinationURL: "/",
      }, 
      {
        text: "Air Max 97",
        destinationURL: "/",
      }, 
      {
        text: "Air Max 270",
        destinationURL: "/",
      }, 
      {
        text: "Air Max 720",
        destinationURL: "/",
      }, 
      {
        text: "All Air Max",
        destinationURL: "/",
      }, 
      {
        text: "Vapormax",
        destinationURL: "/",
      },
    ] 
  },
  {
    title: "Shoes",
    content: [
      {
      text: "All Shoes",
      destinationURL: "/",
      }, 
      {
        text: "Custom Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Jordan Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Running Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Basketball Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Football Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Gym & Training Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Lifestyle Shoes",
        destinationURL: "/",
      },
    ]
  },
  {
    title: "Clothing",
    content: [
      {
        text: "Modest Wear",
        destinationURL: "/",
      }, 
      {
        text: "Hooedies and Pullovers",
        destinationURL: "/",
      }, 
      {
        text: "Shirts & Tops",
        destinationURL: "/",
      }, 
      {
        text: "Jackets",
        destinationURL: "/",
      }, 
      {
        text: "Compression & Nike Pro",
        destinationURL: "/",
      }, 
      {
        text: "Trousers & Leggings",
        destinationURL: "/",
      },
    ]
  },
  {
    title: "Kids",
    content: [
      {
        text: "Infant & Toddler Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Kids\" Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Kids\" Jordan Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Kids\" Basketball Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Kids\" Running Shoes",
        destinationURL: "/",
      }, 
      {
        text: "Kids\" Clothing",
        destinationURL: "/",
      },
      {
        text: "Kids\" Backpacks",
        destinationURL: "/",
      },
      {
        text: "Kids\" Socksing",
        destinationURL: "/",
      },
    ]
  },
]

const Home = () => {
  return (
    <Layout>
      <div>
        <News />

        {
          banner && (
            <FeaturedProductSection>
              <FeaturedProduct data={banner.product}/>
            </FeaturedProductSection>
          )
        }

        {
          featuredProduct && (
            <FeaturedProductSection>
              {
                featuredProduct.product.map((item, index) => <FeaturedProduct key={index} data={item} />)
              }
            </FeaturedProductSection>
          )
        }

        {
          dontMissFeaturedProduct && (
            <FeaturedProductSection title={dontMissFeaturedProduct.title}>
              {
                dontMissFeaturedProduct.product.map((item, index) => <FeaturedProduct key={index} data={item} />)
              }
            </FeaturedProductSection>
          )
        }

        {
          dontMissDoubleFeaturedProduct && (
            <FeaturedProductSection title={dontMissDoubleFeaturedProduct.title}>
              {
                dontMissDoubleFeaturedProduct.product.map((item, index) => <DoubleFeaturedProduct key={index} data={item} />)
              }
            </FeaturedProductSection>
          )
        }

        {
          alwaysIconicCarousel && (
            <FeaturedProductSection title={alwaysIconicCarousel.title}>
              <Carousel data={alwaysIconicCarousel} />
            </FeaturedProductSection>
          )
        }

        {
          shopBySportCarousel && (
            <FeaturedProductSection  title={shopBySportCarousel.title}>
              <Carousel data={shopBySportCarousel} />
            </FeaturedProductSection>
          )
        }

        <FeaturedProductSection>
          <Accordion data={categoryAccordion} />
        </FeaturedProductSection>
      </div>
    </Layout>
  )
}

export default Home