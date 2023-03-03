
export default function Achievement(props)
{
    return(
        <div style={{ backgroundColor:'#F6F7FF', borderLeft:'0.3rem solid #4451B1', padding: '2rem', marginTop:'2rem'}}>
            <div style={{ fontSize:'1.25rem', fontWeight:'600'}}>{props.title}</div>
            <div style={{ fontSize:'1.1rem'}}>{props.desc}</div>
        </div>
    )
}