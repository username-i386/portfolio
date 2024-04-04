import { FC, ReactElement } from "react";
import styles from './Header.module.scss';
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";


export const Header: FC = (): ReactElement => {




    return (
        <header>
            <div className={styles.title}>
                <a href='#'>Eldar.portfolio</a>
                <ChangeLanguage />
            </div>
        </header>
    )
}