import { FC, ReactElement } from "react";
import styles from './Footer.module.scss';
import heartIcon from '../../assets/icons/heartIcon.svg';
import { motion } from "framer-motion";

export const Footer: FC = (): ReactElement => {
    return (
        <footer className={styles.footer}>
            <p>created by Eldar</p>
            <motion.img src={heartIcon} 
                alt='heart'
                initial={{ scale: 1 }}
                animate={{ scale: 1.3 }}
                transition={{ repeat: Infinity, duration: 1 }} />
            <p>especially for you</p>
        </footer>
    )
}