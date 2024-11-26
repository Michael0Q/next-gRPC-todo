import styles from '../todo.module.css'
const Todo = () => {
    return (<>
        <div className={styles.todo_container}>
            {todos.map((e) => {
                return(
                    <div className={styles.todo} key={e.taskName}>
                        <span className={styles.todotext}>
                            {e.taskName}
                        </span>
                    </div>
                )
            })}

        </div>
    </>)
}

const todos = [
    {
        taskName: "買い物に行く",
        status: "",
    },
    {
        taskName: "勉強する",
        status: "",
    },
    {
        taskName: "掃除する",
        status: "",
    }
]

export default Todo;