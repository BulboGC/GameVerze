//styles
import covers from "../styles/covers.module.scss";
//components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
//import CardsGrid from "@/components/CardsGrid";
import Teste from "@/components/teste";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Teste />
      <Footer />
      {/*Ruido de fundo*/}
    </main>
  );
}
