'use client'
import styles from '../todo.module.css'
import '../todo.css'



const Navigation = () => {
    return(<>
        <div className={styles.navigation_container}>
            <div className={styles.filter_container}>
                <div className={styles.add_filter_button}></div>
            </div>
            <div className={styles.status_container}>
                {statuses.map((e) => {
                    return (
                        <div className={`${e.prefix} ${styles.status}`} key={e.prefix}>
                            <span>{e.label}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </>)
}

const statuses = [
    {
        label : "未完了",
        prefix: "undone"
    },
    {   label: "完了",
        prefix: "done",
    }
]

export default Navigation