import { useDispatch, useSelector } from "react-redux";
import { $api } from "../../atoms/config/api";
import classes from "./MainPage.module.css"
import { useEffect } from "react";
import { getProducts, getProductsLoading } from "../../atoms/store/model/selectors/product/productSelectors";
import { getProductsService } from "../../atoms/store/model/services/products/getProductsService";
import { ProductCard } from "../../molecules/ProductCard/ProductCard";
import { Skeleton } from 'primereact/skeleton';
// import { Layout } from "../../templates/Layout/Layout";



const MainPage = (props) => {

  const fetchSomething = async () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const productsLoading = useSelector(getProductsLoading);

    useEffect(() => {
      dispatch(getProductsService());
    }, [dispatch])

    const response = await $api.get('/profile');
    console.log(response.data);

    useEffect(() => {
      fetchSomething()
    }, [])
    return (
      <div className={classes.MainPage}>
        <Layout>
          <h1>Products</h1>
          <div className={classes.products}>
            {products?.map((product) => {
              return (
                <ProductCard key={product.id} product={product} />
              )
            })}
            {productsLoading && (
              <>
                <Skeleton width="300px" height="566px" />
                <Skeleton width="300px" height="566px" />
                <Skeleton width="300px" height="566px" />
                <Skeleton width="300px" height="566px" />
                <Skeleton width="300px" height="566px" />
                <Skeleton width="300px" height="566px" />
              </>
            )}
          </div>
        </Layout>
      </div>
    );
  };
}

export { MainPage };