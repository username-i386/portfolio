import { FC, ReactElement } from "react";
import styles from './Header.module.scss';
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";
import { NavBar } from "../NavBar/NavBar";


export const Header: FC = (): ReactElement => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <a href='#'>Eldar.portfolio</a>
                <ChangeLanguage />
            </div>
            <NavBar />
        </header>
    )
}