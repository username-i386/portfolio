import { FC, ReactElement } from "react";
import styles from './Project.module.scss';
import { useTranslation } from "react-i18next";
import mockImg from '../../assets/images/mockImg.jpg'
import { Project } from "./Project";


export const ProjectsList: FC = (): ReactElement => {

    const { t } = useTranslation();

    const projects = [
        {
            title: t('projects.todoProject.title'),
            subtitle: t('projects.todoProject.subtitle'),
            skills: [ 'React', 'TypeScript', 'Redux', 'Chakra UI' ],
            codeLink: 'https://github.com/username-i386/todo--list',
            demoLink: 'https://todo-list-iota-gilt.vercel.app/',
            img: mockImg,
        },
        {
            title: t('projects.weatherProject.title'),
            subtitle: t('projects.weatherProject.subtitle'),
            skills: [ 'React', 'TypeScript', 'Redux', 'RTK Query', 'Chakra UI' ],
            codeLink: 'https://github.com/username-i386/weather',
            demoLink: 'https://weather-gray-five.vercel.app/',
            img: mockImg,
        },
        {
            title: t('projects.beautySalonProject.title'),
            subtitle: t('projects.beautySalonProject.subtitle'),
            skills: [ 'React', 'TypeScript', 'Chakra UI', 'MUI', 'Styled Components', 'CSS', 'CSS Modules' ],
            codeLink: 'https://github.com/username-i386/beauty_salon',
            demoLink: 'https://aphrodite-nu.vercel.app/',
            img: mockImg,
        },
    ];

    const projectsTxt = {
        title: t('projects.title'),
        subtitle: t('projects.subtitle'),
    }

    return (
        <div>
            <h2 className='sectionTitle'>
                {projectsTxt.title}
            </h2>
            <p className={styles.projectListSubtitle}>
                {projectsTxt.subtitle}
            </p>
            <div className={styles.projectList}>
                {
                    projects.map((project, index) => {
                        const imagePosition = (index % 2 === 0) ? 'left' : 'right';
                        return (
                            <Project key={index} imagePosition={imagePosition} project={project} />
                        )
                    })
                }
            </div>
        </div>
    )
}