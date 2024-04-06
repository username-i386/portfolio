import { FC, ReactElement } from "react";
import styles from './SocialIcon.module.scss';
import githubIcon from '../../assets/icons/githubIcon.svg';
import telegramIcon from '../../assets/icons/telegramIcon.svg';
import gmailIcon from '../../assets/icons/gmailIcon.svg';

type Props = {
    direction: 'v' | 'h'
}

export const SocialIcon: FC<Props> = ({ direction }): ReactElement => {

    const socialIconHorizontalClass = [styles.socialIcon, styles.socialIconHorizontal].join(' ');
    const socialIconVerticalClass = [styles.socialIcon, styles.socialIconVertical].join(' ');
    
    const socialIconClass = (direction === 'h') ? socialIconHorizontalClass : socialIconVerticalClass;

    return (
        <div className={socialIconClass}>
            <a href='https://github.com/username-i386' target='_blank'>
                <img src={githubIcon} alt='github icon' />
            </a>
            <a href='mailto:guseynoveldar3@gmail.com'>
                <img src={gmailIcon} alt='gmail icon' />
            </a>
            <a href='https://t.me/red_chupic' target='_blank'>
                <img src={telegramIcon} alt='telegram icon' />
            </a>
        </div>
    )
}