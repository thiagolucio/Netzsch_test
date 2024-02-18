import Header from "./components/header";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
      <div className="w-full h-full flex items-center justify-center">
        <Dashboard />
      </div>
  );
}
