import Image from 'next/image'
import Styles from '../styles/About.module.css'

export default function About(){
    return(
        <div className={Styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Cillum cillum irure excepteur magna nostrud officia tempor labore. Officia Lorem quis do aliquip dolore irure dolor et. Ad esse nulla aliquip exercitation voluptate cillum. Id pariatur anim mollit pariatur et. Adipisicing quis nulla non reprehenderit dolor. Do in ipsum aliquip ad aliquip nulla exercitation.</p>
            <Image src="/images/charizard.png"
             width="300" 
             height="300" 
             alt='Charizard Image'/>
        </div>
    );
}