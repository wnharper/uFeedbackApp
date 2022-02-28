import spin from "../assets/spinner.webp"

const Spinner = () => {
  const mystyle = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
  }
  return (
    <div style={mystyle}>
      <img style={{ width: "235px" }} src={spin} />
    </div>
  )
}
export default Spinner
