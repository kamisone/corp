import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import perfImg from "public/images/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero imgData={perfImg} title="we serve high performance applications" imgAlt="working welding" />
  );
}
