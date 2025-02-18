import Typography from "../../components/Typography";
import Styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";

import { Product } from "../../common/types/product";
import CartItem from "../../components/CartItem";
import CartEmptyMessage from "../../components/CartEmptyMessage";
import CartSummary from "../../components/CartSummary";

type CartPageProps = {
  cartItems: Product[];
  removeFromCart: (id: number) => void;
};

const CartPage = ({ cartItems, removeFromCart }: CartPageProps) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const freight = cartItems.length > 0 ? 8 : 0;

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <main className="container">
      <div className={Styles.cartTitle}>
        <Typography variant="h4">Carrinho de Compras</Typography>
      </div>

      <section className={Styles.cartPage}>
        <div className={Styles.cartItems}>
          <Typography
            variantStyle="body-large-bold"
            className={Styles.cartItemTitle}
          >
            Detalhes da compra
          </Typography>
          {cartItems?.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                item={item}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <CartEmptyMessage />
          )}
        </div>
        <CartSummary cartItems={cartItems} total={total} freight={freight} handleRedirect={handleRedirect} />
      </section>
    </main>
  );
};

export default CartPage;
