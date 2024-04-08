import { FC, ReactElement } from "react";
import styles from './Header.module.scss';
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";
import { NavBar } from "../NavBar/NavBar";


export const Header: FC = (): ReactElement => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <a href='https://github.com/username-i386' target='_blank'>
                    Eldar.portfolio
                </a>
                <ChangeLanguage />
            </div>
            <NavBar />
        </header>
    )
}