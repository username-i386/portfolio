import { FC, ReactElement } from "react";
import styles from './Bio.module.scss';
import avatar from '../../assets/images/avatar.jpg';
import dateIcon from '../../assets/icons/dateIcon.svg';
import locationIcon from '../../assets/icons/locationIcon.svg';
import { useTranslation } from "react-i18next";
import { SocialIcon } from "../SocialIcons/SocialIcon";

export const Bio: FC = (): ReactElement => {

    const { t } = useTranslation();

    const bioTxt = {
        name: t('home.bio.name'),
        age: {
            now: t('home.bio.age.now'),
            born: t('home.bio.age.born'),
        },
        location: t('home.bio.location'),
    };

    return (
        <div>
            <div className={styles.avatar}>
                <img src={avatar} alt='avatar' />
            </div>
            <div  className={styles.bio}>
                <h2 className={styles.name}>{bioTxt.name}</h2>
                <div className={styles.bioAttribute}>
                    <img src={dateIcon} alt='date' />
                    <p>
                        {bioTxt.age.now} <span>{bioTxt.age.born}</span>
                    </p>
                </div>
                <div className={styles.bioAttribute}>
                    <img src={locationIcon} alt='location' />
                    <p>{bioTxt.location}</p>
                </div>
                <div className={styles.bioSocialIcon}>
                    <SocialIcon direction='h' />
                </div>
            </div>
        </div>
    )
}