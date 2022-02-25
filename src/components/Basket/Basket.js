import BasketItem from "../BasketItem/BasketItem";
import { moneyFormat } from "../../helpers/common";
import "./index.scss";

function Basket({ basket, resetBasket, total, products }) {
  return (
    <>
      <div className="basket-container container">
        <h3>Sepetim</h3>
        <ul>
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          ))}
        </ul>
        <div className="total">Toplam: ${moneyFormat(total)}</div>
        <button className="basket-reset-btn" onClick={resetBasket}>
          Sepeti Boşalt
        </button>
      </div>
    </>
  );
}

export default Basket;
