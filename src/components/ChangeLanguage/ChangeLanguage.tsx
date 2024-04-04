import { FC, ReactElement } from "react";
import styles from './ChangeLanguage.module.scss';
import changeLanguagesIcon from '../../assets/changeLanguagesIcon.svg';
import arrowDown from '../../assets/arrowDown.svg';

export const ChangeLanguage: FC = (): ReactElement => {
    return (
        <div className={styles.changeLanguage}>
            <img className={styles.changeLanguageIcon} src={changeLanguagesIcon} alt='change language' />
            <img className={styles.changeLanguageArrowDown} src={arrowDown} alt='change language' />
        </div>
    )
}