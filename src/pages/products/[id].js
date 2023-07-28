import RootLayout from "@/components/Layout/RootLayout";
import ProductDetails from "@/components/UI/ProductDetails";
import axios from "axios";
import Head from "next/head";

const ProductDetailsPage = ({ product }) => {
    return (
      <div>
         <Head>
                <title>Product</title>
            </Head>
        <ProductDetails product={product} />
      </div>
    );
  };
  
  export default ProductDetailsPage;

  ProductDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
  }

  export const getStaticPaths = async () => {
    const apiUrl = 'https://product-crud-server.vercel.app/products';
    try {
      const response = await axios.get(apiUrl);
      const products = response.data;
      const paths = products?.map((product) => ({
        params: { id: product._id },
        
      }));
  
      return {
        paths,
        fallback: false, 
      };
    } catch (error) {
      console.error('Error fetching product IDs:', error);
      return {
        paths: [],
        fallback: false,
      };
    }
  }
  
  export const  getStaticProps= async({ params })=> {
    console.log(params.id)
    const apiUrl = `https://product-crud-server.vercel.app/product/${params?.id}`; 
    try {
      const response = await axios.get(apiUrl);
      const product = response.data;
      return {
        props: {
          product:product
        },
      };
    } catch (error) {
      console.error('Error fetching product data:', error);
      return {
        props: {
          product: {},
        },
      };
    }
  }