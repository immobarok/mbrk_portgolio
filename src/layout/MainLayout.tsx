import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/pages/About/About";
import Home from "@/pages/Home/Home";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-primary">
      <Navbar />
      <main className="min-h-screen flex-1 bg-background">
        <Home />
        <About/>
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
