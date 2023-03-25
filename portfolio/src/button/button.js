
import './button.css'
import { HiArrowLongRight } from "react-icons/hi2";
export default function Button(props)
{
    return(
        <div className='odiv'>
            <a className='button' target={'_blank'} href={props.link}>  {props.text} <div style={{ width:'0.7rem'}}></div><HiArrowLongRight/> </a>
            {/* <div className="backdiv"></div> */}
        </div>
    )
}