
import React from 'react'
import styles from "./users.module.css"
interface User{
id:number;
name:string;    
}

const UsersPage = async () => {
const {cardContainer}=styles
   const res= await fetch('https://jsonplaceholder.typicode.com/users',{
    next:{revalidate:10}
   });
   //cache:'no-store'
   //next:{revalidate:10}
    const users:User[]=await res.json()
  return (<section>
    <h1>Users</h1>
   
    <ul>{users.map(x=><li key={x?.id} className={cardContainer}>
        <p>{new Date().toLocaleTimeString()}</p>
        {x?.name}
    </li>)}</ul>
    </section>
  )
}


export default UsersPage