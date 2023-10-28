
import React from 'react'
import styles from "./users.module.css"
interface User {
    id: number;
    name: string;
    email:string;
}

interface Props {
    sortType:"string"
}

const UserTable = async ({sortType}:Props) => {
    const { cardContainer } = styles
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 10 }
    });
    //cache:'no-store'
    //next:{revalidate:10}
    const users: User[] = await res.json()
    console.log(sortType,"sortTypesortType")
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {users.sort((a, b) =>a.name.localeCompare(b.name))?.map(x => <tr key={x?.id} className={cardContainer}>
                <td>{new Date().toLocaleTimeString()}-{x?.name}</td>
                <td>{x?.email}</td>
            </tr>)}
            </tbody>
        </table>

    )
}


export default UserTable