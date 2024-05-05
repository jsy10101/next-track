import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <Link href="/users" className="link link-primary">
        Users
      </Link>
      <hr className="pb-5" />
      <div className="flex flex-wrap">
        {[...Array(20)].map((_) => (
          <ProductCard />
        ))}
      </div>
    </main>
  );
}
