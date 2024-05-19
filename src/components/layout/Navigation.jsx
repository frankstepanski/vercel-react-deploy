import {NavLink} from 'react-router-dom';
import styles from "./Navigation.module.css";

const Navigation = ({links}) => {
    return (
        <nav className={styles.nav}>
            <ul>
            {
                links.map((link, index) => {
                    return (
                        <li 
                            key={index}>
                            <NavLink to={link.url}>{link.text}</NavLink>
                        </li>
                    )
             })
            }
            </ul>
        </nav>
)
}

export default Navigation;