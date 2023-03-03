
import { HiArrowLongRight } from "react-icons/hi2";
import './project.css'
export default function Project(props)
{
    return(
        <div style={{backgroundColor: props.color, display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem', minHeight:'20rem', marginTop:'2rem'}}>
            <div className='whitediv'>
                <div className='cover'> </div>
            </div>
            <button className='button'> View More <div style={{ width:'0.7rem'}}></div>    <HiArrowLongRight/> </button>

        </div>
    )
}