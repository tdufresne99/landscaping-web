import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ÉcoHarmonie Paysages",
  description: "Site officiel de l'entreprise ÉcoHarmonie Paysages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={roboto.className}>
      <body className="bg-background">
        <Header className=""/>
        <div className="lg:mx-32">{children}</div>
        {/* <div className="flex flex-col items-center justify-center min-h-screen bg-light">
          <div className="bg-background w-full h-16 border-black border-1 flex items-center justify-center"><p className="text-center text-foreground">background</p></div>
          <div className="bg-foreground w-full h-16 border-black border-1 flex items-center justify-center"><p className="text-center text-background">foreground</p></div>
          <div className="bg-primary w-full h-16 border-black border-1 flex items-center justify-center"><p className="text-center text-primary-foreground">primary</p></div>
          <div className="bg-secondary w-full h-16 border-black border-1 flex items-center justify-center"><p className="text-center text-secondary-foreground">secondary</p></div>
          <div className="bg-muted w-full h-16 border-black border-1 flex items-center justify-center"><p className="text-center text-muted-foreground">muted</p></div>
          <div className="bg-accent w-full h-16 border-black border-1 flex items-center justify-center"><p className="text-center text-accent-foreground">accent</p></div>
        </div> */}
        <Footer />
      </body>
    </html>
  );
}
