
import React from 'react'
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string }
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (<section>
    <h1>Users</h1>
    <Link href="/users/new" className='btn'>New User</Link>
    <UserTable sortType={sortOrder} />
  </section>
  )
}


export default UsersPage