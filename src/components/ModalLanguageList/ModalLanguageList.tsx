import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import styles from './ModalLanguageList.module.scss';
import { useTranslation } from "react-i18next";

type Props = {
    isOpen: boolean
    onToggle: Dispatch<SetStateAction<boolean>>
}

export const ModalLanguageList: FC<Props> = (props): ReactElement => {

    const { isOpen, onToggle } = props;
    
    const { i18n } = useTranslation();


    if (!isOpen) return <></>;

    function changedWebSiteLanguage(event: React.MouseEvent<HTMLParagraphElement>) {
        const target = event.target as HTMLParagraphElement;
        
        switch(target.id) {
            case 'ru': i18n.changeLanguage('ru'); break;
            case 'en': 
            default: i18n.changeLanguage('en'); break;
        }
        console.log('123');
        
        onToggle(false);
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