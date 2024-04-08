import { FC, ReactElement } from "react";
import styles from './ModalLanguageList.module.scss';
import { useTranslation } from "react-i18next";
import { useModal } from "./ModalContext";
import { motion, AnimatePresence } from 'framer-motion';


export const ModalLanguageList: FC = (): ReactElement => {

    const { i18n } = useTranslation();

    const { isOpen } = useModal();
    
    // if (!isOpen) return <></>;

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

    const modalAnim = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: 100,
        },
    };

    return (
        <AnimatePresence>
            {isOpen ? 
                <motion.div key='modal'
                    className={styles.modal}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    <div className={styles.modalContent}>
                        <motion.p id='en' 
                            onClick={e => changedWebSiteLanguage(e)}
                            variants={modalAnim}
                            transition={{ delay: 0.15 }}
                        >
                            English
                        </motion.p>
                        <motion.p id='ru' 
                            onClick={e => changedWebSiteLanguage(e)}
                            variants={modalAnim}
                            transition={{ delay: 0.1 }}
                        >
                            Русский
                        </motion.p>
                    </div>
                </motion.div>
                : <></>
            }
        </AnimatePresence>
    )
}