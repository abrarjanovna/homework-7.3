import { useSelector } from "react-redux";
import Tour from "./Tour";

export default function Tours() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {cartItems.map((item) => {
          return <Tour key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
