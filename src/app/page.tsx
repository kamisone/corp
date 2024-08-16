import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import homeBgImg from "public/images/home.jpg";


export default function Home() {
  return (
    <Hero title="Professional Cloud Hosting" imgData={homeBgImg} imgAlt="robots making cars" />
  );
}
