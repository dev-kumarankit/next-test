import React from 'react'

interface Props{
    params:{slug:string[]}
    searchParams:{sortOrder:string}
}
const productPage = ({params:{slug},searchParams:{sortOrder}}:Props) => {
  //[...slug] product page not allowed
  //[[...slug]] product page allowed
  return (
    <div>productPage-{slug}{sortOrder}-hey</div>
  )
}

export default productPage