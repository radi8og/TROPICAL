import Image from "next/image";
import Slider from "./_component/Slider";
import CategoryList from "./_component/CategoryList";
import ProductList from "./_component/ProductList";

export default function Home() {
  return (
    <div className=" p-5 md:p-10 px-16">
      <Slider />
      
      <CategoryList />
      <ProductList />
      {/* Banner */}
      <Image
        src={"/banner.jpg"}
        alt="banner"
        width={1000}
        height={400}
        className="w-full mt-12"
      />
    </div>
  );
}
