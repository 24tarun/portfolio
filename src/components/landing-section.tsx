import Image from "next/image";

export function LandingSection() {
  return (
    // Reduced vertical padding, ensure it fits within its flex container
    <section id="home" className="relative text-center py-8 md:py-12 bg-background flex flex-col items-center justify-center h-full">
      {/* Background elements might need removal/adjustment if space is tight */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
         <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-transparent rounded-full blur-3xl"></div>
       </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center space-y-4 md:space-y-6">
        {/* Headline - Reduced font size and margin */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight max-w-3xl">
          Hi, I’m <span className="text-primary">Tarun</span>.
          {/* Reduced font size and margin */}
          <span className="font-normal text-xl md:text-2xl lg:text-3xl text-foreground/80 block mt-1">
            I use this website as a portfolio and to showcase my projects.
          </span>
        </h1>
        {/* Sub-headline/description - Reduced font size */}
        <p className="text-base md:text-lg text-foreground/80 max-w-xl">
           Click around and find out more about my work.
        </p>

        {/* Profile Image - Reduced size and margin */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl border-2 border-background mt-6 group">
          <Image
            src="https://picsum.photos/200/200" // Smaller placeholder
            alt="Tarun - Profile Photo"
            layout="fill"
            objectFit="cover"
            priority
            className="transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
           <div className="absolute inset-0 rounded-full ring-1 ring-primary/10 ring-inset"></div>
        </div>
      </div>
    </section>
  );
}
