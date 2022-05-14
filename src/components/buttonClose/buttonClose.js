
import './buttonClose.scss'
//import PropTypes from 'prop-types'; {onClick}

 const ButtonClose = () => {
    return (
        <button className="button"  >
              <span className="button_vectotA"></span>  
          <span className="button_vectotB"></span>  
        </button>
    )
}
export default ButtonClose;


// ButtClose.prototype = {
//     onClick: PropTypes.func.isRequired,
// }

//<ButtonClose onClick={ handleClick}/>


// const handleClick = () => {
//     let path = JSON.parse(localStorage.getItem('prevLock'))
//     history.push(path)

// }

