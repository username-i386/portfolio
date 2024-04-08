import { FC, ReactElement } from "react";
import styles from './Greeting.module.scss';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


export const Greeting: FC = (): ReactElement => {

    const { t } = useTranslation();

    const greetingTxt = {
        jobTitle: ['FRONTEND', 'REACT', 'DEVELOPER'],
        first: t('home.greeting.first'),
        second: t('home.greeting.second'),
        third: t('home.greeting.third'),
    };

    return (
        <div className={styles.greet}>
            <div className={styles.jobTitle}>
                <h2>
                    {greetingTxt.jobTitle.map((word, index) => {
                        return (
                            <motion.span key={index}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index / 10 }}
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </h2>
            </div>
            <motion.p className={styles.greeting}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
            >
                {greetingTxt.first} <br />
                {greetingTxt.second} <br />
                {greetingTxt.third}
            </motion.p>
        </div>
    )
}