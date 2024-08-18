import { useParams } from "react-router-dom"

export const UserDetail = () => {
  const params = useParams();
  return (
   <div>Category detail of {params.slug}</div>
  )
}
