import Banner from "@/components/home/Banner";
import Footer from "@/components/home/Footer";
import Header from "@/components/layout/Header";
import {Poppins} from  'next/font/google'

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
export default function Home() {
  return (
    <div  className={poppins.className}>
      <div className=" bg-gradient-to-br from-[#08b0be] to-[#087ad5]">
        <Header />
        <Banner/>
      </div>
      <Footer/>
    </div>

  );
}
