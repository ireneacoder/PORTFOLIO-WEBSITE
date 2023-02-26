
import './app.css'
import { FiDownload } from "react-icons/fi";
export default function App()
{
    return(
        <>
        <div className='image' id='landing'>
            <div className='space'>
                <div className='texts' >
                    <div style={{fontSize: '2.125rem' , fontWeight: '500' , color: '#333333'}}> Hello <span className='wave'>👋</span> </div>
                    <span style={{marginTop: '-0.625rem',fontSize :'3.925rem', color: '#333333', fontWeight: '500'}}>I am <span style={{color : '#4451B1'}}> Prerna Verma </span></span>
                    <div style={{marginTop: '1rem' , color: '#333333', fontSize: '1.625rem', fontWeight:'350'}}> A digital product designer. I’m passionate to provide great experience to users through my design skills.</div>
                    <button className='download'> Download Resume <span style={{ height: '2rem', borderStyle:'solid', borderWidth:'0.05rem', borderColor:'white', borderTop:'none', borderRight:'none', borderBottom:'none', marginLeft:'1.25rem', paddingLeft:'0.625rem' }}> <FiDownload size={'24'}/></span> </button>
                    
                 </div>
                 
                 <img src='DP.png' className='dp'></img>
    
            </div>
                
           
            
        </div>
        <div className='white' id='about'>

           <div style={{fontSize:'5.625rem', color: '#F4F5FE', fontWeight:'800'}}>About</div> 
           <div style={{fontSize:'2.375rem', color:'#4451B1', fontWeight:'600', marginTop:'-4rem'}}>About</div>
           <div className='division'>
                <p style={{paddingLeft: '2.5rem'}}>I am a student of Mathematics and Computing, a five years dual degree course, from Birla Institute of Technology. During the period of Lockdown I started working on enhancing the skills in field of UI/UX designing and fell in love with this field. I am passionate about designing and want to make a career in same field.</p>
                <p style={{paddingLeft: '2.5rem'}}>I approach the problem with user’s point of view and try to give a solution which is streamlined, easy to use and gives user a happy experience. I research on the problem until I get satisfied as a user. I appreciate every little ideas from all sources that I come across. I am a keen learner and keep learning things to improve my projects everyday and enhance user experience.</p>
           </div>

        </div>

        <div id='skills' className='white'>

            <div style={{fontSize:'5.625rem', color: '#F4F5FE', fontWeight:'800'}}>Skills</div> 
            <div style={{fontSize:'2.375rem', color:'#4451B1', fontWeight:'600', marginTop:'-4rem'}}>Skills</div>

        </div>
        
        </>
    )
}