import { FC, ReactElement } from "react";
import styles from './TechStack.module.scss';
import { useTranslation } from "react-i18next";
import htmlIcon from '../../assets/icons/html5Icon.svg';
import cssIcon from '../../assets/icons/css3Icon.svg';
import sassIcon from '../../assets/icons/sassIcon.svg';
import cssModulesIcon from '../../assets/icons/cssmodules.svg';
import jsIcon from '../../assets/icons/javascriptIcon.svg';
import tsIcon from '../../assets/icons/typescriptIcon.svg';
import reactIcon from '../../assets/icons/reactIcon.svg';
import reduxIcon from '../../assets/icons/reduxIcon.svg';
import chakraIcon from '../../assets/icons/chakrauiIcon.svg';


export const TechStack: FC = (): ReactElement => {

    const { t } = useTranslation();

    const techStackTxt = t('home.techStack');

    return (
        <div className={styles.techStack}>
            <h3 className={styles.techStackTitle}>
                {techStackTxt}
            </h3>
            <div className={styles.techStackIcons}>
                <img src={htmlIcon} alt='html' />
                <img src={cssIcon} alt='css' />
                <img src={sassIcon} alt='sass' />
                <img src={cssModulesIcon} alt='css modules' />
                <img src={jsIcon} alt='js' />
                <img src={tsIcon} alt='ts' />
                <img src={reactIcon} alt='react' />
                <img src={reduxIcon} alt='redux' />
                <img src={chakraIcon} alt='chakra' />
            </div>
        </div>
    )
}