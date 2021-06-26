import { Link } from 'react-router-dom';
import img from './img/404.png';
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry</h1>
      <img src={img} style={{
        width: '50%',
      }}></img>
      <p style={{ fontSize: '25px' }}>We've lost you 😔</p>
      <br />

      <Link to='/'
        style={{
          color: 'white',
          borderRadius: '8px',
          backgroundColor: '#f1356d',
          padding: '6px',
        }}>
        Back to HomePage...</Link>
    </div>
  );
}

export default NotFound;