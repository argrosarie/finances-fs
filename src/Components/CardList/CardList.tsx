import Card from "../Card/Card";

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card companyName="PRODUCT 1" ticker="P1" price={100}/>
        <Card companyName="PRODUCT 2" ticker="P2" price={200}/>
        <Card companyName="PRODUCT 3" ticker="P3" price={300}/>
    </div>
  )
}

export default CardList