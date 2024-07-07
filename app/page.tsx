import Activities from "@/components/main/Activites";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Lifestyle from "@/components/main/Lifestyle";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col bg-[#242526] items-center">
      <div className="mx-auto px-8 items-center place-content-center">
        <Hero />
        <Lifestyle />
        <Experience />
        <Activities />
      </div>
    </main>
  );
}
