import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-row">
      <section className="w-72 bg-white">
        <Sidebar />
      </section>
      <main className="bg-teal-400">
        <div>
          <h1>This is the Home page</h1>
          <h2>TODO</h2>
          <span>Create Pages:</span>
        </div>
      </main>
    </div>
  );
}
