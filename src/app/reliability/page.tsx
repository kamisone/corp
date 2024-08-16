import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import reliabilityImage from 'public/images/reliability.jpg'

function ReliabilityPage() {
  return (
    <Hero imgData={reliabilityImage} title="super high reliability hosting" imgAlt="" />
  );
}

export { ReliabilityPage as default };
