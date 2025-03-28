import CoffeeEtc from "@/components/CoffeeEtc";
import Day from "@/components/Day";
import Hero from "@/components/Hero";
import Night from "@/components/Night";
import Wine from "@/components/Wine";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Day />
      <Night />
      <CoffeeEtc />
    </div>
  );
}
