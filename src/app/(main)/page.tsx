import Image from "next/image";
import ProductGrid from "@/components/products/ProductGrid";
export default function Home() {
  return (
    <div className="w-full h-full">
      <ProductGrid />
    </div>
  );
}
