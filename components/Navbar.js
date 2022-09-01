import Link from 'next/link'
import Image from 'next/image'
import Styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={Styles.navbar}>
        <div className={Styles.logo}>
            <Image className={Styles.logo_image} src="/images/pokeball.png" width="30" height="30" alt="pokedex"/>
            <h1 className=''>Pokedex</h1>
        </div>
        <ul className={Styles.link_items}>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <Link href="/About"><a>About</a></Link>
            </li>
        </ul>
        </nav>
    );
}