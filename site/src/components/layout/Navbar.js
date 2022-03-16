import { Link } from "react-router-dom"

import Container from "./Container"
import logo from "../../img/logo.png"
import styles from "./Navbar.module.css"

function NavBar(){
    return(
        <nav className={styles.navbar}>
            <Container>
            <Link to="/"> <img src={logo} alt="Costs"/> </Link>
               <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/"> Home </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Person"> Usuarios </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="company"> Company</Link>
                    </li>
               </ul>
            </Container>
        </nav>
    )
}

export default NavBar