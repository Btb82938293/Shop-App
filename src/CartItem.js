export default function CartItem(props) {
    return (
        <div className="cartItem">
        <p>{props.name}</p>
        <p>{props.price} USD</p>
        <p>{props.qwt} pc{props.qwt !== 1 && "s"}</p>
        <p>{props.totalPrice} USD</p>
        <button onClick={() => props.removeItems(props.id)} className="removeBtn">REMOVE</button>
        </div>
    )
}