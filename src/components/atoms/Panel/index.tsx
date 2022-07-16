import styles from './index.module.scss'
import {Props} from "../../../types/globals";

export default function Panel({children}: Props){
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
