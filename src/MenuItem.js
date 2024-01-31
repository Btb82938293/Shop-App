export default function MenuItem(props) {
    return (
        <div className="menuItem">
            <p>{props.name}</p>
            <p>Price per 1 pc {props.price} USD</p>
            <button onClick={() => props.addItems(props.id)} className="addBtn">ADD</button>
            </div>
    )
}