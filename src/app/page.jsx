import HeaderComponent from "@/components/Header";
import HeroComponent from "@/components/HeroComponent";
import InfoComponent from "@/components/InfoComponent";
import NewsComponent from "@/components/NewsComponent";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto gap-2.5 px-4 sm:px-0">
        <HeroComponent></HeroComponent>
        <NewsComponent></NewsComponent>
        <InfoComponent></InfoComponent>
        <Partners></Partners>
      </div>
    </div>
  );
}
