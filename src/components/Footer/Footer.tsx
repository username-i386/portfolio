import { FC, ReactElement } from "react";
import styles from './Footer.module.scss';
import heartIcon from '../../assets/icons/heartIcon.svg';

export const Footer: FC = (): ReactElement => {
    return (
        <footer className={styles.footer}>
            <p>created by Eldar</p>
            <img src={heartIcon} alt='heart' />
            <p>especially for you</p>
        </footer>
    )
}