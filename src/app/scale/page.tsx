import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import scaleImg from 'public/images/scale.jpg';


export default function ScalePage() {


    return (
        <Hero imgData={scaleImg} title="scale your app to infinity" imgAlt="steel factory" />
    )
}