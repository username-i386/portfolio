import { FC, ReactElement } from "react";
import styles from './ChangeLanguage.module.scss';
import changeLanguagesIcon from '../../assets/icons/changeLanguagesIcon.svg';
import arrowDown from '../../assets/icons/arrowDown.svg';
import { ModalLanguageList } from "../ModalLanguageList/ModalLanguageList";
import { useModal } from "../ModalLanguageList/ModalContext";


export const ChangeLanguage: FC = (): ReactElement => {

    const { onToggle } = useModal();

    return (
        <div className={styles.changeLanguage}>
            <div id='changeLanguage' onClick={() => onToggle()}>
                <img id='changeLanguage' className={styles.changeLanguageIcon} src={changeLanguagesIcon} alt='change language' />
                <img id='changeLanguage' className={styles.changeLanguageArrowDown} src={arrowDown} alt='change language' />
            </div>
            <ModalLanguageList />
        </div>
    )
}