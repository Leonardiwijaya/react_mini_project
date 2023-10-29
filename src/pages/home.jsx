import Banner from "../components/banner";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProductCarousel from "../components/productCarousel";
import ProductSection from "../components/productSection";

export default function Home(props) {
  return (
    <>
      <Navbar></Navbar>
      <ProductCarousel></ProductCarousel>
      <Banner src="https://locco-site.netlify.app/assets/banner-1-f1494752.jpg"></Banner>
      <ProductSection header="New Products"></ProductSection>
      <Banner src="https://locco-site.netlify.app/assets/banner-hoodie-c5e0bc48.png"></Banner>
      <ProductSection header="Popular Products"></ProductSection>
      <Footer></Footer>
    </>
  );
}
