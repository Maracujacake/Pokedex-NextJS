import Styles from '../styles/Footer.module.css'

export default function Footer(){
    return(
        <footer className={Styles.footer}>
            <p><span>Pokedex - Next JS</span>&copy; 2022</p>
        </footer>
    );
}