

export default function Plans(props){
    return(
        <div className="border-1 border-(--navy)">
            <img src={props.image}></img>
            <p>{props.option}</p>
            <p>${props.price} /mo</p>
        </div>
    )
}