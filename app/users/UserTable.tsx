
import React from 'react'
import styles from "./users.module.css"
import Link from 'next/link';
interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortType: string
}

const UserTable = async ({ sortType }: Props) => {
    const { cardContainer } = styles
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store'
    });
    //cache:'no-store'
    //next:{revalidate:10}
    const users: User[] = await res.json()
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th><Link href="/users?sortOrder=name">Name</Link></th>
                    <th><Link href="/users?sortOrder=email">Email</Link></th>
                </tr>
            </thead>
            <tbody>
                {users.sort((a, b) => (sortType == 'name') ? a.name.localeCompare(b.name) : a.email.localeCompare(b.email))?.map(x => <tr key={x?.id} className={cardContainer}>
                    <td>{new Date().toLocaleTimeString()}-{x?.name}</td>
                    <td>{x?.email}</td>
                </tr>)}
            </tbody>
        </table>

    )
}


export default UserTable