import { FC, ReactElement, useState } from "react";
import styles from './ChangeLanguage.module.scss';
import changeLanguagesIcon from '../../assets/changeLanguagesIcon.svg';
import arrowDown from '../../assets/arrowDown.svg';
import { useTranslation } from "react-i18next";
import { ModalLanguageList } from "../ModalLanguageList/ModalLanguageList";

export const ChangeLanguage: FC = (): ReactElement => {

    const { t } = useTranslation();

    const [open, setOpen] = useState<boolean>(true);

    const onOpenModal = () => setOpen(true);

    return (
        <div className={styles.changeLanguage} >
            <div onClick={onOpenModal}>
                <img className={styles.changeLanguageIcon} src={changeLanguagesIcon} alt='change language' />
                <img className={styles.changeLanguageArrowDown} src={arrowDown} alt='change language' />
            </div>
            <ModalLanguageList isOpen={open} onToggle={setOpen} />
        </div>
    )
}