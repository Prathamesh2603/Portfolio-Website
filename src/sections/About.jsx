import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const higlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing clean, readable, and maintainable code."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Focusing on fast load times and smooth user experience."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working well with others and communicating ideas clearly."
  },
  {
    icon: Lightbulb,
    title: "Learning & Growth",
    description: "Continuously learning new technologies and best practices."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building modern web interfaces,
              <span className="font-serif italic font-normal text-white"> 
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a frontend developer passionate about creating modern, responsive web interfaces.
                My journey into web development started with curiosity about how websites work, and 
                over time it turned into a strong interest in creating real-world projects using modern 
                frontend technologies.
              </p>
              <p>
                I work primarily with HTML, CSS, JavaScript, React, and Tailwind CSS, focusing on 
                writing clean code and building layouts that look good across all devices. I enjoy 
                turning designs into functional, interactive experiences while continuously improving 
                my skills.
              </p>
              <p>
                I believe in learning by building, experimenting, and improving with every project I work on.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My goal is to create digital experiences that are not just functional, 
                but enjoyable to use—while keeping the code clean and maintainable.”
              </p>
            </div>

          </div>

          {/* Right Column - Highlights */}
           <div className="grid sm:grid-cols-2 gap-6">
            {higlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in" 
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
           </div>

        </div>
      </div>

    </section>   
  )
}
