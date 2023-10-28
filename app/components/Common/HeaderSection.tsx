import Link from 'next/link'
import React from 'react'

const HeaderSection = () => {
    let styleBtn = "mx-4 btn border"
    return (
        <header>
            <div className='flex'>
                <Link href="/" className={styleBtn}>Home</Link>
                <Link href="/admin" className={styleBtn}>Store</Link>
                <Link href="/products" className={styleBtn}>User</Link>
                <Link href="/users" className={styleBtn}>About Us</Link>
            </div>
        </header >
    )
}

export default HeaderSection