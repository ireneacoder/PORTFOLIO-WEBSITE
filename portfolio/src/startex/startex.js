

import Table from '../table/table'
import Banner from '../banner/banner'
import './startex.css'
import Heading from '../heading/heading'
export default function Startex()
{
    return(
        <div>
            <div><Banner color='#E1F4FF'img='./startex.png'/></div>

            <div>
                <Table title='Assigned Project (Solo)' role=' UI/UX Designer' duration='1.5 Months' tool=' Figma'/> 
            </div>

            <div className='headings'> <Heading heading='About StartEx'/> </div>
            <div className='line'>
                <p>StartEx is a web application which was intended to solve all the concerns of person willing to start his/her own startup and to provide maximum best services for their help.</p>
            </div>

            <div className='headings'> <Heading heading='Problem Statement'/> </div>
            <div className='line'>
                <p>When one thinks of starting own business, they face some problems due to lack of idea and experience. Being a startup company, the main aim of Floxus-an ed-tech company, was to provide the solutions to the problems which people face some of which are:
                         <ul>
                             <li> Guidance from experienced person </li>
                             <li> Correct procedure </li>
                             <li> More exposure and many more </li>
                         </ul>  
                </p>
            </div>

            <div className='headings'> <Heading heading='My Responsibilities'/> </div>
            <div className='line'>
                <p> I had to start the project from scratch. The mains things I had to do was-
                         <ul>
                             <li> Understanding the mindset of our target audience. </li>
                             <li> Searching who our competitors where. </li>
                             <li> Deciding what good and what bad are our competitors doing. </li>
                             <li> Decide the color scheme, sections to be included in the website and giving user the best possible experience. </li>
                         </ul>  
                </p>
            </div>

            <div className='headings'> <Heading heading='The UX Research'/> </div>
            <div className='line'>
                <p> The research was done to validate the ideas for the project and understand the user perspective. It involved primary and secondary research, which included talking to different people in the same field, taking interviews of the client and making web searches for the data of current product . </p>
                <div className='subheading'> My Conclusions: </div>
                <div className='subsection'> Target Audience</div>
                <p> From the data I concluded that people of age between 22-30 are the main user we are targeting for and beside that people of age group between 16-22 and 30-55 can also be the audience of our product. So, I decided to move ahead with the research keeping people of age 21-36 as our target audience. </p>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./AUDIENCE.png" alt="Target Audience" /> </div>
                </div>

                <div className='subsection'> Color Code </div>
                <p> For color scheme various possibilities were thought of but the best I could think of according to the color rule was Blue which is also used to symbolize TRUST.  </p>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./COLOR(S).png" alt="Color Code" /> </div>
                </div>

                <div className='subsection'> Active State </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ACTIVE STATE.png" alt="Active state for navigation" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ACTIVE STATE BUTTONS.png" alt="Active State for Button" /> </div>
                </div>
            </div>

                <div className='headings'> <Heading heading='User Flow'/> </div>
                <div className='line'>
                    <div className='row'>

                        <div style={{width:'30rem', padding:'3rem', marginTop:'2rem', marginRight:'4rem'}}>       
                            <p> This was the rough idea I began with, after completing my research. </p>
                            <p> The sections were decided according to the needs of user. Our clients section was important to build the feeling of trust in user . The About Us section showed the brief idea of what the company did. There was a Previous work section, The Process Step section and the Industries in which we had our experience in.</p>
                            <p> It is important for the user to know about the documentation work before-hand so the section of Needed Documents was added.</p>         
                        </div>

                        <div style={{width:'24rem'}}>
                            <div className='marginbox'> 
                                <img style={{width:'100%'}} src="./userflow(s).png" alt="Active state for navigation" />
                            </div>
                        </div>
                    </div>
                </div>


           
        </div>
    )
}