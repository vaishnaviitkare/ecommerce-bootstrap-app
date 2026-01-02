import React, { useState } from "react";
export const DataCon=React.createContext();
export const DataContext=(props)=>{
    const productsArr = [

{
id:1,
title: 'Album 1',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
quantity:1
},

{
id:2,
title: 'Album 2',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
quantity:1
},

{
id:3,
title: 'Album 3',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
quantity:1
},

{
id:4,
title: 'Album 4',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
quantity:1
}

]
const[data,setData]=useState([]);
const addToCart=(product)=>{
   setData((prevItem)=> {
    const existingItem=prevItem.find((item)=>(
       item.id===product.id
     ))
    if(existingItem){
        return prevItem.map((item)=>
            item.id===product.id ? {...item,quantity:item.quantity+1}: item
        )
    }
    return [...prevItem,{...product}]
   })
}
return(
    <DataCon.Provider value={{data,addToCart,productsArr}}>
        {props.children}
    </DataCon.Provider>

)
}
