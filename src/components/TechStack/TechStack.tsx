import { FC, ReactElement } from "react";
import styles from './TechStack.module.scss';
import { useTranslation } from "react-i18next";
import htmlIcon from '../../assets/icons/html5Icon.svg';
import cssIcon from '../../assets/icons/css3Icon.svg';
import sassIcon from '../../assets/icons/sassIcon.svg';
import cssModulesIcon from '../../assets/icons/cssmodules.svg';
import tailwindIcon from '../../assets/icons/tailwindIcon.svg';
import jsIcon from '../../assets/icons/javascriptIcon.svg';
import tsIcon from '../../assets/icons/typescriptIcon.svg';
import reactIcon from '../../assets/icons/reactIcon.svg';
import nextJsIcon from '../../assets/icons/nextJsIcon.svg';
import reduxIcon from '../../assets/icons/reduxIcon.svg';
import chakraIcon from '../../assets/icons/chakrauiIcon.svg';
import { motion } from "framer-motion";


export const TechStack: FC = (): ReactElement => {

    const { t } = useTranslation();

    const techStackTxt = t('home.techStack');

    const textStackImg = [
        { src: htmlIcon, alt: 'html' },
        { src: cssIcon, alt: 'css' },
        { src: sassIcon, alt: 'sass' },
        { src: cssModulesIcon, alt: 'css modules' },
        { src: tailwindIcon, alt: 'tailwind css' },
        { src: jsIcon, alt: 'js' },
        { src: tsIcon, alt: 'ts' },
        { src: reactIcon, alt: 'react' },
        { src: nextJsIcon, alt: 'next js' },
        { src: reduxIcon, alt: 'redux' },
        { src: chakraIcon, alt: 'chakra' },
    ];

    return (
        <div className={styles.techStack}>
            <h3 className={styles.techStackTitle}>
                {techStackTxt}
            </h3>
            <div className={styles.techStackIcons}>
                {textStackImg.map(((techImg, index) => {
                    return (
                        <motion.img key={index} 
                            src={techImg.src} 
                            alt={techImg.alt}  
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index / 5 }}
                        />
                    );
                }))}
            </div>
        </div>  
    )
}