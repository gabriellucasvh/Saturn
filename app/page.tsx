import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Navbar/Sidebar";
import Desenvolvimento from "@/src/components/specify/Desenvolvimento";
import Inicio from "@/src/components/specify/Inicio";

export default function Home() {
  return (
    <div className="font-sans">
      
      <Navbar />
      <Sidebar />
      <div className="px-8 sm:px-10 lg:px-20">
      <Inicio />
      <Desenvolvimento />
      </div>
    </div>
  );
}