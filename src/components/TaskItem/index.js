import './index.css'

const TaskItem = prop => {
  const {taskDetails} = prop
  const {userInput, initialTag} = taskDetails

  return (
    <li className="task-item-card">
      <p className="task-item-heading">{userInput}</p>
      <p className="task-item-button">{initialTag}</p>
    </li>
  )
}

export default TaskItem
