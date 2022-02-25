import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";
import products from "./service/products.json";

function App() {
  const [money, setMoney] = useState(100000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {total > 0 && (
          <Basket
            resetBasket={resetBasket}
            products={products}
            total={total}
            basket={basket}
          />
        )}
        {products.map((product) => (
          <Product
            key={product.id}
            total={total}
            money={money}
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default App;
