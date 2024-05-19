import Navigation from "./Navigation.jsx";
import styles from "./Header.module.css";

const Header = ({...props}) =>{
    
    return (
        <header className={styles.header}>
            <Navigation {...props} />
        </header>
    );
}

export default Header;