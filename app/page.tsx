import Banner from "@/components/home/Banner";
import Footer from "@/components/home/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div>
      <div className=" bg-gradient-to-br from-[#08b0be] to-[#087ad5]">
        <Header />
        <Banner/>
      </div>
      <Footer/>
    </div>

  );
}
