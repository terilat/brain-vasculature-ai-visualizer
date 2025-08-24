import { Header } from "@/components/ui/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Technology } from "@/components/sections/technology";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Technology />
    </div>
  );
};

export default Index;
