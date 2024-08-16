import Image, { StaticImageData } from "next/image";
import styles from "@/components/Hero/Hero.module.css";
import clsx from "clsx";

export default function Hero(props: {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}) {
  return (
    <div className={clsx(styles.container)} style={{}}>
      <Image
        src={props.imgData}
        alt={props.imgAlt}
        className="border-4 border-solid border-red-800 h-full w-full inset-0 object-cover fixed -z-[1]"
      />
      <p className="text-white text-center font-bold text-6xl relative mx-auto w-fit top-1/2 -translate-y-[50%]">
        {props.title}
      </p>
      <div
        className={clsx(styles.shadow, "fixed w-full h-full inset-0 -z-[1]")}
      ></div>
    </div>
  );
}
