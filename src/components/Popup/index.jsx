import "./style.css";

function Popup({ children, ...props }) {
  return (
    <div className="popup-wrapper">
      <div {...props}>
        {children}
      </div>
    </div>
  )
}

export default Popup