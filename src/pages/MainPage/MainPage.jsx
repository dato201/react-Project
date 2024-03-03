import { useDispatch, useSelector } from "react-redux";
import classes from "./MainPage.module.css"
import { useEffect } from "react";
import { getProducts, getProductsLoading } from "../../atoms/store/model/selectors/product/productSelectors";
import { getProductsService } from "../../atoms/store/model/services/products/getProductsService";
import { ProductCard } from "../../molecules/ProductCard/ProductCard";
import { Skeleton } from 'primereact/skeleton';
import { Layout } from "../../templates/Layout/Layout";
import { Paginator } from 'primereact/paginator';




const MainPage = (props) => {
  const dispatch = useDispatch();
  // const products = useSelector(getProducts);
  // const [page, setPage] = useState(0);
  // const [first, setFirst] = useState(0);
  // const [rows, setRows] = useState(20)
  // const productsLoading = useSelector(getProductsLoading);

  // useEffect(() => {
    dispatch(getProductsService({
      // page: page + 1,
      // limit: 20,
    }));
  // }, [dispatch, page]);

  // const onPageChange = (event) => {
  //   setPage(event.page);
  //   setFirst(event.first);
  // };
  return (
    <div className={classes.MainPage}>
      <Layout>
        <h1>Products</h1>
        <div className={classes.products}>
          {/* {!productsLoading && products?.map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })} */}
          <Skeleton className="mb-2"></Skeleton>
          {/* {productsLoading && ( */}
          {/* <> */}
          <Skeleton width="300px" height="566px" />
          <Skeleton width="300px" height="566px" />
          <Skeleton width="300px" height="566px" />
          <Skeleton width="300px" height="566px" />
          <Skeleton width="300px" height="566px" />
          <Skeleton width="300px" height="566px" />
          {/* </> */}
          {/* )} */}
          {/* <Paginator
            first={first}
            rows={rows}
            totalRecords={totalCount}
            onPageChange={onPageChange}
          /> */}
        </div>
      </Layout>
    </div>
  );
};

export { MainPage };