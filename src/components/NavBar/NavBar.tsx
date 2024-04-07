import { FC, ReactElement } from "react"
import styles from "./NavBar.module.scss";
import { useTranslation } from "react-i18next";


export const NavBar: FC = (): ReactElement => {

    const { t } = useTranslation();

    const navLinks = [
        { url: '#home', text: t('header.navbar.homeLink') },
        { url: '#about', text: t('header.navbar.aboutLink') },
        { url: '#projects', text: t('header.navbar.projectsLink') },
        { url: '#contacts', text: t('header.navbar.contactsLink') },
    ];

    return (
        <ul className={styles.navbar}>
            {
                navLinks.map((navLink, index) => {
                    return (
                        <li key={index}>
                            <a href={navLink.url}>{navLink.text}</a>
                        </li>
                    );
                })
            }
        </ul>
    )
}