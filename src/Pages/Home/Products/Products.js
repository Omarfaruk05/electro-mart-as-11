import { CardGroup } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'
 
const Products = () => {
    const [products] = useProducts();
    const slicedProducts = products.slice(0, 6);
    return (
       <div className='container mx-auto mt-5'>
           <h1 className='products text-center mt-4 mx-auto'>Products</h1>
            <div>
                <CardGroup>
                {
                    slicedProducts.map(product => <Product key={product._id} product={product}></Product>)
                }
                </CardGroup>
            </div>
       </div>
    );
};

export default Products;