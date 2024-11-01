import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { BlogView } from "../components/BlogView";
import { useState } from "react";


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="p-8 max-w-9xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Dashboard</h1>
          <BlogView />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
