import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="min-h-screen flex flex-col justify-between mx-auto">
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
