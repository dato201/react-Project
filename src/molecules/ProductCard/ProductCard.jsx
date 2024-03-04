import classes from "./ProductCard.module.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { cartActions } from "../../atoms/store/model/slices/cartSlice";


const ProductCard = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const header = (
    <>
      <h2 className={classes.title}>{product.title}</h2>
      <img className={classes.img} alt="Card" src={product.images[0]} />
      </>
  );

  const onCartAdd = () => {
    dispatch(cartActions.addToCart(product));
  }

  const footer = (
    <>
      <div className={classes.actions}>
        <h2 className={classes.price}>{product.price}₾</h2>
        <Button onClick={onCartAdd} icon="pi pi-shopping-cart" className={classes.rounded} ><i className="fa-solid fa-cart-shopping"></i></Button>
      </div>

    </>
  );

  return (
    <div className={classes.ProductCard}>
      <Card
        footer={footer}
        header={header}
        className="md:w-25rem"
      >
        <p className={classes.text}><span className={classes.span}>category:</span> {product.category.join(', ')}</p>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
}

export { ProductCard };