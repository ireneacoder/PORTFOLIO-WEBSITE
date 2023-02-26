
import './nav.css' 
import { FaHome } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa";

export default function Nav()
{
    return(
        <>
              <div className='vertical'>

                        
                        <div className='home'> <FaHome size={28}/> Home</div>
                        <div className='bio'> <FaCopy size={28}/>  Bio </div>
                        <div className='project'> <FaProjectDiagram size={28}/>  Projects </div>
                        <div className='contact'> <FaIdBadge size={28}/>  Contact </div>
                        
                        
                
                
              </div>  
        </>
    )
}