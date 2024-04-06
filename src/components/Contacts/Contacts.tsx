import { FC, ReactElement } from "react";
import styles from './Contacts.module.scss';
import { useTranslation } from "react-i18next";
import { SocialIcon } from "../SocialIcons/SocialIcon";


export const Contacts: FC = (): ReactElement => {

    const { t } = useTranslation();

    const contactsTxt = {
        title: t('contacts.title'),
        text: {
            first: t('contacts.text.first'),
            second: t('contacts.text.second'),
            third: t('contacts.text.third'),
        },
    };

    return (
        <div>
            <h2 className='sectionTitle'>
                {contactsTxt.title}
            </h2>
            <div className={styles.contacts}>
                <div className={styles.contactsItem}>
                    <SocialIcon direction='v' />
                    <div>
                        <p>
                            {contactsTxt.text.first}
                        </p>
                        <p>
                            {contactsTxt.text.second}
                        </p>
                        <p>
                            {contactsTxt.text.third}
                        </p>
                    </div>
                </div>
                <div className={styles.contactsItem}>
                    <div className={styles.contactsLinks}>
                        <p>
                            Github: <a href='https://github.com/username-i386'>https://github.com/username-i386</a>
                        </p>
                        <p>
                            Mail: <a href='mailto:guseynoveldar3@gmail.com'>guseynoveldar3@gmail.com</a>
                        </p>
                        <p>
                            Telegram: <a href='https://t.me/red_chupic'>https://t.me/red_chupic</a>
                        </p>
                    </div>
                    <SocialIcon direction='v' />
                </div>
            </div>
        </div>
    )
}