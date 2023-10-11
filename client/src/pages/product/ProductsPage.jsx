import { useState, useEffect, useRef } from 'react';
import Container from "react-bootstrap/Container";
import * as styles from './ProductsPage.css';

import productService from '../../services/productService';
import ProductsList from "../../components/features/products/ProductsList"
import RdrLoader from '../../components/common/RdrLoader';

function ProductsPage() {
  // PRODUCTS STATE
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // HOOK: ON-LOAD SIDE EFFECTS
  const effectRan = useRef(false);
  useEffect(() => {
    console.log("Effect Ran");
    if (effectRan.current === false) {
      fetchProducts();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        console.log("Unmounted");
        effectRan.current = true;
      }
    }
  }, []);

  // [5A] COMPONENT FUNCTION
  async function fetchProducts() {
    try {
      // Rdr API Request
      const response = await productService.getAll();

      // Access Object Properties to Find Data Array & Save to Variable 
      const data = await response.data;

      // SUCCESS: Output needs to override data state
      console.log(data);
      setData(data);

    } catch(err) {
      console.log(err?.response);
      setError(true); 
    }
  }

  // CONDITIONAL LOAD: ERROR
  if (error) {
    return (
      <Container className="text-center mt-4">
        <p>Error page</p>
      </Container>
    )
  }

  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return (
      <Container className="text-center mt-4">
        <RdrLoader />
      </Container>
    )
  }

  return (
    <Container className={` text-center mt-4 ${styles.productsPageHeading}`}>
      <h1>RubberDuck Rampage Games &amp; Merchandises</h1>
      <p>Unlock Your Gaming Adventure with RubberDuck Rampage: Dive into Fun!</p>

      {/* Products Menu */}
      {<ProductsList products={data} />}
    </Container>
  )
}

export default ProductsPage