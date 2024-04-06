import { FC, ReactElement } from "react";
import styles from './Greeting.module.scss';
import { useTranslation } from "react-i18next";


export const Greeting: FC = (): ReactElement => {

    const { t } = useTranslation();

    const greetingTxt = {
        first: t('home.greeting.first'),
        second: t('home.greeting.second'),
    };

    return (
        <div>
            <div className={styles.jobTitle}>
                <h2>
                    FRONTEND <br/> 
                    REACT <br/>
                    DEVELOPER
                </h2>
            </div>
            <p className={styles.greeting}>
                {greetingTxt.first} <br />
                {greetingTxt.second}
            </p>
        </div>
    )
}