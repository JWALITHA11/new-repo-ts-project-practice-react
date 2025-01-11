import ComponentD from "./ComponentD"


const ComponentC : React.FC = () => {
  return (
    <div className="box">
      <h1>ComponentC</h1>  
   <ComponentD />
    </div>
  )
}

export default ComponentC