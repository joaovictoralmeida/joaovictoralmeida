import About from "@/components/Content/About";
import Projects from "@/components/Content/Projects";
import Footer from "@/components/Footer/Footer";
import Content from "@/components/Header/Content";
import Menu from "@/components/Header/Menu";

export default function Home() {
  return (
    <>
    <Menu/>
    <Content/>
    <About/>
    <Projects/>
    <Footer/>
    </>
  );
}
