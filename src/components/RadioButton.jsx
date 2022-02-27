const RadioButton = ({ id, selected, selectRating }) => {
  return (
    <li>
      <input
        type='radio'
        id={`num${id}`}
        name='rating'
        value={id}
        onChange={(e) => selectRating(+e.currentTarget.value)}
        checked={selected === id}
      />
      <label htmlFor={`num${id}`}>{id}</label>
    </li>
  )
}

RadioButton.defaultProps = {
  type: "radio",
  name: "rating",
}
export default RadioButton
