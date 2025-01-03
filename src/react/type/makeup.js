
import '../../css/type/makeup/makeup.css'
import '../../css/type/makeup/softmakeup.css'
import imagechild from '../../image/makeup/child1.png';
import imagechild2 from '../../image/makeup/child2.png';
import imagechild3 from '../../image/makeup/child3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faYoutube,faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Outlet, useNavigate,NavLink,useLocation } from 'react-router-dom';
const AllType = () => {
  const listname=['soft','daily','events']
  const route=['softmakeup','dailymakeup','eventmakeup']
  const location=useLocation();
  const createList=
    listname.map((ele,index)=>(
     <NavLink to={(location.pathname!=route[index])?route[index]:window.location.href}>
        {ele}
     </NavLink>
    ))
  
  const navigate=useNavigate();
  return ( <div className="makeupDiv">
      <div className='cover'>
        <img src={imagechild} className='child1'></img>
        <img src={imagechild2} className='child2'></img>
        <p className='coverText'>Makeup</p>
        <img src={imagechild3} className='child3'></img>
      </div>
      <div className='menubar'>
        <div className='navleft'>
          Makeup
        </div>
        <ul className='navright'>
          {
            createList
          }

        </ul>
      </div>
      <div className='outlet'>
      <Outlet />
      </div>
      <footer className='footer'>
       More about us
        <ul className='footer-icon'>
          <li> <FontAwesomeIcon onClick={()=>{
            window.open('https://web.facebook.com/na.leak.7771/', '_blank');
          }} icon={faFacebook} /></li>
          <li> <FontAwesomeIcon  onClick={()=>{
            https://www.youtube.com/channel/UCvoU0A58TiERZCtPpr4kEQg
            window.open('https://www.youtube.com/channel/UCvoU0A58TiERZCtPpr4kEQg', '_blank');

          }} icon={faYoutube} /></li>
          <li> <FontAwesomeIcon icon={faTiktok} /></li>
        
        </ul>
      </footer>

  </div> );
}
 
export default AllType;