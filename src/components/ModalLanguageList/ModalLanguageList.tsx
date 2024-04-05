import { FC, ReactElement } from "react";
import styles from './ModalLanguageList.module.scss';
import { useTranslation } from "react-i18next";
import { useModal } from "./ModalContext";

export const ModalLanguageList: FC = (): ReactElement => {

    const { i18n } = useTranslation();

    const { isOpen } = useModal();
    
    if (!isOpen) return <></>;

    function changedWebSiteLanguage(event: React.MouseEvent<HTMLParagraphElement>) {
        const target = event.target as HTMLParagraphElement;
        
        switch(target.id) {
            case 'ru': 
                if (i18n.language !== 'ru') {
                    i18n.changeLanguage('ru'); 
                }
                break;

            case 'en': 
            default: 
                if (i18n.language !== 'en') {
                    i18n.changeLanguage('en'); 
                }
                break;
        };
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <p id='en' onClick={e => changedWebSiteLanguage(e)}>English</p>
                <p id='ru' onClick={e => changedWebSiteLanguage(e)}>Русский</p>
            </div>
        </div>
    )
}