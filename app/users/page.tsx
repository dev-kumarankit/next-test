
import React from 'react'
import UserTable from './UserTable';

interface Props {
  searchParams: { sortOrder: string }
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (<section>
    <h1>Users</h1>
    <UserTable sortType={sortOrder} />
  </section>
  )
}


export default UsersPage