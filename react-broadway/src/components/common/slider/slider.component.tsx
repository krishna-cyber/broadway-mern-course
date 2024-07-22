
import { Carousel } from "flowbite-react"
import { SingleSlider } from "./__contracts/slider.contract"

export const SliderComponent = ({data}:{data:Array<SingleSlider>}) => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-[33.5rem] 2xl:h-3/6">
      <Carousel slideInterval={5000}>
       {
        data && data.map((item:SingleSlider,index:number)=>{
          return(

          item.link? <a key={index+1} href={item.link}> <img  src={item.image} /> </a> : <img key={index+1} src={item.image} />
         
         
          )
       })
      }
      </Carousel>
    </div>
    </div>
  )
}

