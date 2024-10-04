import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Navbar/Sidebar";
import Desenvolvimento from "@/src/components/specify/Desenvolvimento";
import Inicio from "@/src/components/specify/Inicio";

export default function Home() {
  return (
    <div className="font-sans">
      
      <Navbar />
      <Sidebar />
      <div className="p-2 sm:p-10 lg:p-20">
      <Inicio />
      <Desenvolvimento />
      </div>
    </div>
  );
}