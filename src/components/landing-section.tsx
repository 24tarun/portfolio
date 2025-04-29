import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function LandingSection() {
  return (
    <section id="home" className="text-center py-16 md:py-24">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary">
          <Image
            src="https://picsum.photos/200/200" // Placeholder image
            alt="Tarun - Profile Photo"
            layout="fill"
            objectFit="cover"
            priority // Load image early
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
          Hi, I’m Tarun.
        </h1>
        <Card className="max-w-2xl mx-auto bg-secondary shadow-md border-none">
           <CardContent className="p-6">
             <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed">
                I use this website as a portfolio and to showcase my projects. Click
                around and find out.
             </p>
           </CardContent>
        </Card>
      </div>
    </section>
  );
}
