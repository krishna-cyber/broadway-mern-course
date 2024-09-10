import ProductReview from '../../components/products/product-review.component'

import ProductOverview from '../../components/products/product-overview.component'
import { useSelector } from 'react-redux';
import { useFetchProductById } from '../../services/queries/queries';
import { ErrorPage } from '../error/error.page';

const ProductPage = () => {
  const { product } = useSelector((state: any) => state.productView);
  const { data, isLoading, isError } = useFetchProductById(product);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <><ErrorPage url="/" label="Back to homepage"/></>
  }else{

    return (
    <>
     <ProductOverview product = {data?.result}/>
    <ProductReview productId ={product} />
    </>
    
    );
  }
 
  
}

export default ProductPage