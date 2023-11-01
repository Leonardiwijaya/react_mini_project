import Banner from "../components/banner";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProductCarousel from "../components/productCarousel";
import ProductSection from "../components/productSection";
import banner1 from "../assets/img/banner-1.jpg";
import banner2 from "../assets/img/banner-2.png";
import Chat from "../components/chat";

export default function Home(props) {
  return (
    <>
      <Navbar></Navbar>
      <ProductCarousel></ProductCarousel>
      <Banner src={banner1}></Banner>
      <ProductSection header="New Products"></ProductSection>
      <Banner src={banner2}></Banner>
      <ProductSection header="Popular Products"></ProductSection>
      <Footer></Footer>
      <Chat></Chat>
    </>
  );
}
