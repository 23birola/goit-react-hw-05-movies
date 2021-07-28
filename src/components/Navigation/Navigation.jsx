import { NavLink } from 'react-router-dom';
import css from "./Navigation.module.css";

const Navigation = () => {
    return (
    <nav>
        <NavLink exact to='/' className={css.link} activeClassName={css.activeLink}>Home</NavLink>
        <NavLink to='/movies' className={css.link} activeClassName={css.activeLink}>Movies</NavLink>
    </nav>
    )
}

export default Navigation;