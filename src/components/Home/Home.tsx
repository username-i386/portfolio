import { FC, ReactElement } from "react";
import styles from "./Home.module.scss";
import { Bio } from "../Bio/BIo";
import { Greeting } from "../Greeting/Greeting";
import { TechStack } from "../TechStack/TechStack";


export const Home: FC = (): ReactElement => {
    return (
        <div className={styles.home}>
            <div className={styles.homeContainer}>
                <Bio />
                <Greeting />
            </div>
            <TechStack />
        </div>
    )
}