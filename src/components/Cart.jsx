import styles from "./Cart.module.scss";

function Cart({ itemsCount = 0 }) {
  return (
    <a href="#!" className={styles.cart}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.007 2.83325C20.8036 2.83325 23.9249 5.81662 24.0833 9.59688H24.0463C24.0508 9.70676 24.0296 9.81618 23.9846 9.91659H24.2058C25.9299 9.91659 27.7353 11.1116 28.4592 13.9963L28.5378 14.3367L29.6271 23.1125C30.411 28.7097 27.3487 31.0636 23.1713 31.1633L22.8912 31.1666H11.1471C6.90168 31.1666 3.63027 29.6196 4.34956 23.4933L4.39861 23.1125L5.50041 14.3367C6.0437 11.2301 7.86761 10.0048 9.625 9.92121L9.81993 9.91659H9.93067C9.912 9.81083 9.912 9.70263 9.93067 9.59688C10.0891 5.81662 13.2104 2.83325 17.007 2.83325ZM12.8874 14.6331C12.1959 14.6331 11.6354 15.21 11.6354 15.9217C11.6354 16.6334 12.1959 17.2104 12.8874 17.2104C13.5789 17.2104 14.1394 16.6334 14.1394 15.9217L14.1297 15.7601C14.0524 15.1247 13.5257 14.6331 12.8874 14.6331ZM21.0882 14.6331C20.3968 14.6331 19.8362 15.21 19.8362 15.9217C19.8362 16.6334 20.3968 17.2104 21.0882 17.2104C21.7797 17.2104 22.3403 16.6334 22.3403 15.9217C22.3403 15.21 21.7797 14.6331 21.0882 14.6331ZM16.9515 4.6783C14.2257 4.6783 12.0159 6.88042 12.0159 9.59688C12.0346 9.70263 12.0346 9.81083 12.0159 9.91659H21.9487C21.9093 9.81451 21.8884 9.70625 21.887 9.59688C21.887 6.88042 19.6773 4.6783 16.9515 4.6783Z" />
      </svg>
      <p className={styles.itemsCount}>
        {itemsCount > 99 ? "99+" : itemsCount}
      </p>
    </a>
  );
}

export default Cart;
