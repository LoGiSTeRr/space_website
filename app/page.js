import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Encryption from "@/components/Encryption";
import Projects from "@/components/Projects";

export default function Home() {
    return (

        <main className="h-full w-full">
            <div className="flex flex-col gap-20 h-auto w-full">
                <Hero/>
                <Skills/>
                <Encryption/>
                <Projects/>
            </div>
        </main>
    );
}
