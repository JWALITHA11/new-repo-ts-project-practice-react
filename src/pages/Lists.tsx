import {useLayoutEffect, useState,useEffect}from 'react'
type FruitListProps = {
    fruit : string[];
}

type NumberListProps = {
    numbers : number[];
}

const Lists = (props : FruitListProps) =>{
   
    return(
        <>
       <h4>List of fruits </h4>
        <div>
            {props.fruit.map((item,index) => (
               
                    <ul >
                        <li key = {index} >{item}</li>
                    </ul>
            
           )) }
          
        </div>
        </>
    );
    

}
export default Lists;

const NumList = (props : NumberListProps) => {
    const numsGreaterthanHunderd = props.numbers.filter(ele => ele>100);
    const numsLessthanTen = props.numbers.filter(ele => ele <10);
    return (
    <>
   <div>
    <h4>All the array numbers :-</h4>
    <p>{props.numbers.join(' , ')} </p>
      </div>
    
<div>
    <h4>All the numbers greater than 50 :-</h4>
   {props.numbers.filter(ele => ele > 50).join(' , ')}
</div>
 
 <h4>Numbers Greater than 100 :-</h4>
 {numsGreaterthanHunderd.length > 0 ? numsGreaterthanHunderd.join(',') : "There are no numbers that are less than 100"}

<h4>Numbers less than 10 :-</h4>
{numsLessthanTen.length > 0 ? numsLessthanTen.join(' , ') : "There are no numbers less than 10"};



      </>
);
}
export {NumList};

const Cart : React.FC = () =>{
   const[operation,setOperation] = useState<number>(0);
   const addToCart = () =>{
    setOperation(operation+1);
   }
   const removeFromCart = () =>{
    setOperation(operation-1);
   }
   return(
    <>
    <div className='cart-container'> 
    <h4>Your Cart has :  {operation} items</h4>
    <button type = "button" onClick={addToCart}>Add</button>
    <button type = "button" onClick = {removeFromCart}>Remove</button>
    </div>
    </>
   )
}
export {Cart}


const Layout : React.FC = () =>{
    useLayoutEffect (()=>{
        console.log("useLayout effect ")
    })
    useEffect(()=>{
        console.log("useeffect");
    })

    return(
<></>
    )
}
export  {Layout}