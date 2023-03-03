
export default function Heading(props)
{
    return(
        <div>
            
           <div style={{fontSize:'5.625rem', color: '#F4F5FE', fontWeight:'800', userSelect:'none'}}>{props.heading}</div> 
           <div style={{fontSize:'2.375rem', color:'#4451B1', fontWeight:'600', marginTop:'-4rem'}}>{props.heading}</div>

        </div>
           
    )
}