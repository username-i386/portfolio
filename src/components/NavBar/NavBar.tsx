import { FC, ReactElement, useState } from "react"
import styles from "./NavBar.module.scss";
import { useTranslation } from "react-i18next";
import { FaHamburger } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import { ImCross } from "react-icons/im";
import { useResize } from "../../hooks/useResize";


export const NavBar: FC = (): ReactElement => {

    const { t } = useTranslation();

    const navLinks = [
        { url: '#home', text: t('header.navbar.homeLink') },
        { url: '#about', text: t('header.navbar.aboutLink') },
        { url: '#projects', text: t('header.navbar.projectsLink') },
        { url: '#contacts', text: t('header.navbar.contactsLink') },
    ];

    const { windowWidth } = useResize();
    
    const [open, setOpen] = useState<boolean>(false);

    const toggleMenu = () => setOpen(!open);

    const navMenuAnim = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        visible: {
            opacity: 1,
            y: -0,
        },
        exit: {
            opacity: 0,
            y: 5
        }
    };

    return (
        <div>
            {(windowWidth <= 750) ?
                <div className={styles.burgerMenu} onClick={toggleMenu}>
                    {open ?
                        <ImCross  /> 
                        : 
                        <FaHamburger />
                    }
                </div>
                :  <></>
            }
            <AnimatePresence initial={false}>
                {(open || windowWidth > 750) ? 
                    <motion.ul className={styles.navbar}
                        key='navMenu'
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        {
                            navLinks.map((navLink, index) => {
                                return (
                                    <motion.li key={index}
                                        variants={navMenuAnim}
                                        transition={{ delay: index / 10 }}
                                        onClick={() => setOpen(false)}
                                    >
                                        <a href={navLink.url}>{navLink.text}</a>
                                    </motion.li>
                                );
                            })
                        }
                    </motion.ul>
                    : <></>
                }
            </AnimatePresence>
        </div>
    )
}