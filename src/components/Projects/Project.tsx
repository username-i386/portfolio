import { FC, ReactElement } from "react";
import styles from './Project.module.scss';
import githubIcon from '../../assets/icons/githubIcon.svg';
import linkExternalIcon from '../../assets/icons/linkExternalIcon.svg';
import { motion } from "framer-motion";

type Props = {
    imagePosition: 'left' | 'right'
    project: {
        title: string
        subtitle: string
        skills: string[]
        codeLink: string
        demoLink: string
        img: string
    }
}

export const Project: FC<Props> = (props): ReactElement => {
    
    const { imagePosition, project } = props;

    return (
        <motion.div className={styles.project}
            initial={{ x: imagePosition === 'left' ? 100 : -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 1.5}}
            viewport={{ once: true }}
        >
            <div className={imagePosition === 'right' ? styles.unable : ''}>
                <div className={styles.previewImg}>
                    <img src={project.img} alt="preview" />
                </div>
            </div>
            <div className={styles.projectInfo}>
                <h2 className={styles.projectTitle}>
                    {project.title}
                </h2>
                <p className={styles.projectSubtitle}>
                    {project.subtitle}
                </p>
                <div className={styles.projectSkills}>
                    {
                        project.skills.map((skill, index) => {
                            return (
                                <p key={index}>
                                    {skill}
                                </p>
                            )
                        })
                    }
                </div>
                <div className={styles.projectLinks}>
                    <a href={project.codeLink} target='_blank'>
                        <p>Code</p>
                        <img src={githubIcon} alt="github" />
                    </a>
                    <a href={project.demoLink} target='_blank'>
                        <p>Live demo</p>
                        <img src={linkExternalIcon} alt="demo" />
                    </a>
                </div>
            </div>
            <div className={imagePosition === 'left' ? styles.unable : ''}>
                <div className={styles.previewImg}>
                    <img src={project.img} alt="preview" />
                </div>
            </div>
        </motion.div>
    )
}