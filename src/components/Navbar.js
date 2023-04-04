import React from 'react'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'

function Navbar() {
    return (
        <div>
            <div className={styles.navbar}>
                <Link href='/'><h1> bitbybit.com</h1></Link>
                <ul >
                    <Link href='/'><li className="navlinks">Home</li> </Link>
                    <Link href='/about'><li className="navlinks">About</li> </Link>
                    <Link href='/blog'><li className="navlinks">blogs</li> </Link>
                    <Link href='/contact'><li className="navlinks">contact</li> </Link>
                    <Link href='/pro'><li className="navlinks">pro</li> </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
