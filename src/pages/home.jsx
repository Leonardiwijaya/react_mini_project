import Banner from "../components/banner";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProductCarousel from "../components/productCarousel";
import ProductList from "../components/productList";

export default function Home(props) {
  return (
    <>
      <Navbar></Navbar>
      <ProductCarousel></ProductCarousel>
      <Banner src="https://locco-site.netlify.app/assets/banner-1-f1494752.jpg"></Banner>
      <ProductList header="New Products"></ProductList>
      <Banner src="https://locco-site.netlify.app/assets/banner-hoodie-c5e0bc48.png"></Banner>
      <ProductList header="Popular Products"></ProductList>
      <Footer></Footer>
    </>
  );
}
