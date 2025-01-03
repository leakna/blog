import '../css/homepage.css'
import {motion} from 'framer-motion';
import { BrowserRouter as Router, Routes,Route,useNavigate } from 'react-router-dom';

const HomePage = () => {
    
    const variant={
        hover:{scale:1.9,margin:'20px 0px',color:'rgb(102, 87, 70)',
        transition:{
            duration:0.01,
            type:'spring',
            stiffness:200


        }}
    }
    const forVisible={
        start:{x:'-100vw'},
        end:{x:0,transform :'translate(-50%,-50%)',
        transition:{
            delay:0.1
        }
        
    }
    }

    const routePath=[
        {
            title:'Makeup',
            path:'makeup'
        }
        ,{
            title:'Skincare',
            path:'skincare'
        },
        {
            title:'Outfits',
            path:'outfit'
        },
        {
            title:'Trends',
            path:'trends'
        }
    ]
    const navigate=useNavigate();
    const link=['/skincare']
    const ele=routePath.map((item,index)=>(
                <motion.li variants={variant} 
                whileHover='hover'  onClick={()=>{
                    navigate(item.path)
                }}>
                    {item.title}
                    
                </motion.li>
               
    ))
    
  return ( 
    
        <div className="body">
        <motion.div className='textGroup' variants={forVisible}
            initial='start'
            animate='end'>   
            <h1>Choose Your Option</h1>
            <ul>
               {ele}
            </ul>
        
        </motion.div>


    </div>
    
      );
}

export default HomePage;