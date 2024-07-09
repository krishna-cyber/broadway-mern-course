import { Card } from "flowbite-react";
import { SingleCardWithImageAndTitleProps } from "./singleCard.contracts";

export const ImageWithTitleCard = ({data}:{data:SingleCardWithImageAndTitleProps})=>{
    return(<>
    <Card>
        <div className="card-image">
            <img src={data.image} alt="Placeholder" />
        </div>
        <div className="card-content">
            <h2 className="card-title">Card Title</h2>
            <p className="card-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>
    </Card>
    </>)
}