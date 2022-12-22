import './index.css'

const TagItem = prop => {
  const {tagDetails, onClickActiveTag} = prop
  const {displayText, optionId} = tagDetails

  const onClickTag = () => {
    onClickActiveTag(displayText)
  }

  return (
    <li key={optionId}>
      <button
        type="button"
        value={optionId}
        className="display-button"
        onClick={onClickTag}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TagItem
