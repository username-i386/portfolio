import { FC, ReactElement } from "react";
import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";
import mockImg from "../../assets/images/mockImg.jpg";

export const About: FC = (): ReactElement => {

    const { t } = useTranslation();

    const aboutTxt = {
        title: t('about.title'),
        subtitle: t('about.subtitle'),
        text: t('about.text'),
    };

    return (
        <div className={styles.about}>
            <div>
                <img src={mockImg} alt='about me' />
            </div>
            <div className={styles.aboutText}>
                <h2 className='sectionTitle'>
                    {aboutTxt.title}
                </h2>
                <p className={styles.subtitle}>
                    {aboutTxt.subtitle}
                </p>
                <p className={styles.text}>
                    {aboutTxt.text}
                </p>
            </div>
        </div>
    )
}