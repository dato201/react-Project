import { useDispatch, useSelector } from "react-redux";
import classes from "./MainPage.module.css"
import { useEffect, useState } from "react";
import { getProducts, getProductsLoading, getProductsTotalCount } from "../../atoms/store/model/selectors/product/productSelectors";
import { getProductsService } from "../../atoms/store/model/services/products/getProductsService";
import { ProductCard } from "../../molecules/ProductCard/ProductCard";
import { Skeleton } from 'primereact/skeleton';
import { Layout } from "../../templates/Layout/Layout";
import { Paginator } from 'primereact/paginator';




const MainPage = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const [page, setPage] = useState(0);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(20)
  const productsLoading = useSelector(getProductsLoading);
  const totalCount = useSelector(getProductsTotalCount);

  useEffect(() => {
    dispatch(getProductsService({
      page: page + 1,
      limit: 20,
    }));
  }, [dispatch, page]);

  const onPageChange = (event) => {
    setPage(event.page);
    setFirst(event.first);
  };
  return (
    <div className={classes.MainPage}>
      <div className={classes.Layout}>
        <h1 className={classes.h1}>Products</h1>
        <div className={classes.products}>
          {!productsLoading && products?.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })}
          {productsLoading && (
            <>
              {/* <Skeleton width="300px" height="566px" />
          <Skeleton width="300px" height="566px" />
          <Skeleton width="300px" height="566px" />
          <Skeleton width="300px" height="566px" />
          <Skeleton width="300px" height="566px" />
          <Skeleton width="300px" height="566px" /> */}
              <div className={classes.loader}></div>
            </>
          )}
          {!productsLoading && (
            <Paginator className={classes.b16} first={first} rows={rows} totalRecords={totalCount} onPageChange={onPageChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export { MainPage };