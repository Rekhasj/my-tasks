import {Component} from 'react'
import {v4} from 'uuid'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class HomePage extends Component {
  state = {
    activeTag: 'INITIAL',
    userInput: '',
    taskList: [],
    activeId: '',
    initialTag: tagsList[0].optionId,
  }

  onChangeTask = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeTag = event => {
    this.setState({initialTag: event.target.value})
  }

  onClickActiveTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {userInput, initialTag} = this.state

    const updatedTaskList = {
      id: v4(),
      userInput,
      initialTag,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, updatedTaskList],
      userInput: '',
      initialTag: tagsList[0].displayText,
    }))
  }

  render() {
    const {taskList, userInput, initialTag, activeId, activeTag} = this.state

    const filteredTaskList =
      activeTag === 'INITIAL'
        ? taskList
        : taskList.filter(eachTag => eachTag.initialTag === activeTag)

    console.log(taskList)

    return (
      <div className="main-container">
        <form className="task-container" onSubmit={this.onSubmitTask}>
          <h1 className="heading">Create a task!</h1>
          <div className="input-card">
            <label htmlFor="task" className="label-task">
              Task
            </label>
            <input
              id="task"
              value={userInput}
              type="text"
              placeholder="Enter the task here"
              className="input-text"
              onChange={this.onChangeTask}
            />
          </div>
          <div className="input-card">
            <label htmlFor="tags" className="label-task">
              Tags
            </label>
            <select
              id="tags"
              value={initialTag}
              type="select"
              className="select-tag"
              onChange={this.onChangeTag}
            >
              {tagsList.map(eachTag => (
                <option value={eachTag.optionId} key={eachTag.optionId}>
                  {eachTag.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="add-button">
            Add Task
          </button>
        </form>
        <div className="tag-container">
          <h1 className="tag">Tags</h1>
          <ul className="tag-list-card">
            {tagsList.map(eachTag => (
              <TagItem
                key={eachTag.optionId}
                tagDetails={eachTag}
                onClickActiveTag={this.onClickActiveTag}
                isActive={eachTag.optionId === activeId}
              />
            ))}
          </ul>
          <h1 className="heading">Tasks</h1>
          <ul className="tasks-list-card">
            {filteredTaskList.length === 0 ? (
              <p>No Tasks Added Yet</p>
            ) : (
              filteredTaskList.map(eachTask => (
                <TaskItem key={eachTask.id} taskDetails={eachTask} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default HomePage
