import React from 'react'

interface props {
    params: { photoid: number }
}
const photoid = ({ params: { photoid } }: props) => {
  return (
    <div>photoid-{photoid}</div>
  )
}

export default photoid