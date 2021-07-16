import ReactDOM from 'react-dom';

function Portal({ children }) {
  return ReactDOM.createPortal(children, document.body);
}

export default Portal;
