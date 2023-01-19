export function Card(props){

    return(
        <div className="card">
            <img src={props.img} alt={props.name} />
            <p>{props.name}</p>
        </div>
    );
}