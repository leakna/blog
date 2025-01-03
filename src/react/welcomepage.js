import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../css/welcome.css'
import HomePage from './homepage';
const WelcomePage = () => {
  const navigate=useNavigate();
  return (
    <div className="body">
      <div className='inside'>
        <div><p className='firstText'>Welcome To My Blog</p>
        <p className='secondText'>Skin Care / MakeUp / Fashion</p></div>
        <div>
        <button className='clickButton'
        onClick={()=>{
          navigate('home')
        }}
        >Click It</button>
        </div>
      </div>
      

    </div>
 );

}
 
export default WelcomePage;