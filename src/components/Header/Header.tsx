import Link from "next/link";
import styles from "./Header.module.css";
import clsx from "clsx";

export default function Header() {
  return (
    <article className="text-white grid grid-cols-[auto,1fr] items-center px-4 py-6">
      <section>
        <Link className="font-extrabold text-2xl" href="/">Cloud Corp</Link>
      </section>
      <section className="text-xl">
        <div
          className={clsx(
            styles["action-links"],
            "flex items-center justify-around w-[min(100%, 800px)] mx-auto"
          )}
        >
          <Link href="performance">Performance</Link>
          <Link href="scale">Scale</Link>
          <Link href="reliability">Reliability</Link>
        </div>
      </section>
    </article>
  );
}
