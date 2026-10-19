import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsContent from "@/components/ProductsContent";

export const metadata: Metadata = {
  title: "Products — ADIS",
  description:
    "Professional agricultural spraying drones: the L-Series, M-Series and C-Series, with field results from vineyards, citrus, greenhouses and broadacre sunflower.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <ProductsContent />
      <Footer />
    </>
  );
}
