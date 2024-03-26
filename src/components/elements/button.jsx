import PropTypes from "prop-types"

export default function Button({children, classname, onClick, type = "button"}){
  return <button type={type} className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} onClick={onClick}>{children}</button>
}

// handling props validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}