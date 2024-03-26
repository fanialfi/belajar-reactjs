import PropTypes from "prop-types"

export default function Label({htmlfor, children}){
  return <label htmlFor={htmlfor} className="block text-slate-700 text-sm font-bold mb-2">{children}</label>
}

// handling props validation
Label.propTypes = {
  htmlfor: PropTypes.string,
  children: PropTypes.node
}