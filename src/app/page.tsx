import Header from "./components/header";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-full bg-white">
        <Dashboard />
      </div>
    </>
  );
}
