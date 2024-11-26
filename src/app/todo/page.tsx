import { symlink } from 'fs'
import styles from './todo.module.css'
import Navigation from './CSR/Navigation'
import Todo from './CSR/Todo'

const Page = () => {
    return(<>
        <div className={styles.add_task_button_container}>
            <span className={styles.add_task_button}>Todoを追加</span>
        </div>
        <Navigation/>       
        <Todo/>
    </>)
}

export default Page