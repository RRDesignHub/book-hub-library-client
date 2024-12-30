import { useParams } from "react-router-dom"

export const CategorizedBooks = () => {
  const {category} = useParams();
  console.log(category)
  return (
    <div>CategorizedBooks</div>
  )
}
