import Cart from "@/components/global/Cart";
import ProductGrid from "@/components/products/ProductGrid";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center ">
      <main className="px-8 py-16 lg:py-24 container grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        <section className="col-span-1 lg:col-span-2">{children}</section>
        <section className="col-span-1">
          <Cart />
        </section>
      </main>
    </div>
  );
}
