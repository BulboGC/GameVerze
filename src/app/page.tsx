//styles
import covers from "../styles/covers.module.scss";
//components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CardsGrid from "@/components/CardsGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <CardsGrid />
      <Footer />
      {/*Ruido de fundo*/}
    </main>
  );
}
