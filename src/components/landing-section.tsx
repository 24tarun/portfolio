import Image from "next/image";

export function LandingSection() {
  return (
    <section id="home" className="relative text-center py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Optional: Subtle background shapes/gradients if desired */}
      {/* Example subtle gradient circle */}
       {/* Removed animate-pulse-slow for a more subtle effect */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-transparent rounded-full blur-3xl opacity-50"></div>
       </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center space-y-8">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight max-w-3xl">
          Hi, I’m <span className="text-primary">Tarun</span>.
          {/* Make the second part smaller and less bold */}
          <span className="font-normal text-2xl md:text-3xl lg:text-4xl text-foreground/80 block mt-2">
            I use this website as a portfolio and to showcase my projects.
          </span>
        </h1>
        {/* Sub-headline/description */}
        <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
           Click around and find out more about my work.
        </p>

        {/* Profile Image */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-background mt-12 group">
          <Image
            src="https://picsum.photos/300/300" // Placeholder image - use a larger one for better quality
            alt="Tarun - Profile Photo"
            layout="fill"
            objectFit="cover"
            priority // Load image early
            className="scale-105 transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
           {/* Optional: Inner glow or subtle effect */}
           <div className="absolute inset-0 rounded-full ring-2 ring-primary/10 ring-inset"></div>
        </div>
      </div>
    </section>
  );
}

// Add animation to tailwind config if needed:
// Add this inside extend: { ... } in tailwind.config.ts
// animation: {
//  'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
// }
