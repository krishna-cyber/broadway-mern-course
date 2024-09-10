import ProductReview from '../../components/products/product-review.component'

import ProductOverview from '../../components/products/product-overview.component'
import {  useFetchProductByName } from '../../services/queries/queries';
import { ErrorPage } from '../error/error.page';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const {productName}= useParams();
  
  const { data, isLoading, isError } = useFetchProductByName(productName);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <><ErrorPage url="/" label="Back to homepage"/></>
  }else{

    return (
    <>
     <ProductOverview product = {data?.result}/>
    <ProductReview productId ={data?.result._id} />
    </>
    
    );
  }
 
  
}

export default ProductPage