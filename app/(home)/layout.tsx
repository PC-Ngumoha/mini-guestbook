import { Navbar, Footer } from "@/components";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="max-w-350 mx-auto py-4 px-6 w-full">
      <Navbar />

      {children}
      <Footer />
    </main>
  );
}
