import Link from "next/link";
import logoImage from '@/assets/logo.png';
import classes from './main-header.module.css'
import NavLink from './nav-link';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href={"/"}>
                <img src={logoImage.src} alt="Neighborhood incidents" />
                Kvartovske zgode
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href={"/about"}> O nama </NavLink>
                    </li>
                    <li>
                        <NavLink href={"/posts"}> Objave </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default MainHeader;