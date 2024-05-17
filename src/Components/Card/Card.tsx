import "./Card.css";

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="details">
            <h2>Product</h2>
            <p>$1200</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, et.</p>

    </div>
  )
}

export default Card