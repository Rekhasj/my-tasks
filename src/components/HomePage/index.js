import {Component} from 'react'
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
  state = {userInput: ''}

  onChangeTask = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="main-container">
        <form className="task-container">
          <h1 className="heading">Create a task!</h1>
          <div className="input-card">
            <label htmlFor="task" className="label-task">
              Task
            </label>
            <input
              id="task"
              type="text"
              placeholder="Enter the task here"
              className="input-text"
              onChange={this.onChangeTask}
            />
          </div>
          <div className="input-card">
            <label htmlFor="task" className="label-task">
              Tags
            </label>
            <select
              id="task"
              type="select"
              placeholder="Enter the task here"
              className="select-tag"
            >
              {tagsList.map(eachTag => (
                <option key={eachTag.optionId}>{eachTag.displayText}</option>
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
              <li key={eachTag.optionId}>
                <button type="button" className="display-button">
                  {eachTag.displayText}
                </button>
              </li>
            ))}
          </ul>
          <h1 className="heading">Tasks</h1>
          <ul className="tasks-list-card">
            <li>{userInput}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HomePage
