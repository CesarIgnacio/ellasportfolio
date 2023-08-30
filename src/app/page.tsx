import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-row">
      <section className="w-72 bg-teal-500">
        <Sidebar />
      </section>
      <div>
        <h1>This is the Home page</h1>
        <h2>TODO</h2>
        <span>Create Pages:</span>
      </div>
    </div>
  );
}
