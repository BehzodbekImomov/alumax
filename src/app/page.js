import About from "@/components/About";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Protection from "@/components/Protection";
import "antd/dist/reset.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Protection />
      <About />
      <Category />
    </>
  );
}
