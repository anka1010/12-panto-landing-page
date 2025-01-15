import { useDispatch, useSelector } from "react-redux";
import { openCart } from "./cartSlice";
import CartItem from "./CartItem";
import ButtonRound from "../../components/ButtonRound";
import styles from "./Cart.module.scss";

function Cart() {
  const cartOpen = useSelector((state) => state.cart.cartOpen);
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const cartTotal = cartProducts.reduce(
    (acc, el) => acc + el.count * el.price,
    0
  );

  return (
    <div className={`${styles.cart} ${cartOpen ? styles.open : ""}`}>
      <div className={styles.topRow}>
        <div className={styles.header}>
          <h2 className="h2">Cart</h2>
          <ButtonRound
            onClick={() => {
              dispatch(openCart(false));
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.1342 12.2102C22.1342 11.4411 21.5107 10.8176 20.7415 10.8176H13.7782V3.85427C13.7782 3.08512 13.1547 2.46161 12.3856 2.46161C11.6164 2.46161 10.9929 3.08512 10.9929 3.85427V10.8176H4.02962C3.26048 10.8176 2.63696 11.4411 2.63696 12.2102C2.63696 12.9794 3.26048 13.6029 4.02962 13.6029H10.9929V20.5662C10.9929 21.3353 11.6164 21.9588 12.3856 21.9588C13.1547 21.9588 13.7782 21.3353 13.7782 20.5662V13.6029H20.7415C21.5107 13.6029 22.1342 12.9794 22.1342 12.2102Z" />
            </svg>
          </ButtonRound>
        </div>
        <div className={styles.content}>
          {cartProducts.map((p) => (
            <CartItem
              key={p.id}
              id={p.id}
              imgSrc={p.imgSrc}
              productType={p.productType}
              productName={p.productName}
              price={p.price}
              count={p.count}
            />
          ))}
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.total}>
          <p>Total</p>
          <p>
            ${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
