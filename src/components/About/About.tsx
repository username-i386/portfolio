import { FC, ReactElement } from "react";
import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";
import aboutImg from "../../assets/images/aboutImg.png";
import { motion } from "framer-motion";

export const About: FC = (): ReactElement => {

    const { t } = useTranslation();

    const aboutTxt = {
        title: t('about.title'),
        subtitle: t('about.subtitle'),
        text: t('about.text'),
    };

    const aboutTextAnim = {
        hidden: {
            y: -150,
            opacity: 0,
        },
        visible: {
            y: -0,
            opacity: 1,
        },
    };

    return (
        <div className={styles.about}>
            <div>
                <motion.img src={aboutImg} alt='about me' 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }} />
            </div>
            <motion.div className={styles.aboutText}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
                <motion.h2 className='sectionTitle'
                    variants={aboutTextAnim}
                    transition={{ delay: 0.3 }}
                >
                    {aboutTxt.title}
                </motion.h2>
                <motion.p className={styles.subtitle}
                    variants={aboutTextAnim}
                    transition={{ delay: 0.25 }}
                >
                    {aboutTxt.subtitle}
                </motion.p>
                <motion.p className={styles.text}
                    variants={aboutTextAnim}
                    transition={{ delay: 0.2 }}
                >
                    {aboutTxt.text}
                </motion.p>
            </motion.div>
        </div>
    )
}