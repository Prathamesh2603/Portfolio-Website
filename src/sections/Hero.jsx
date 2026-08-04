import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Button } from "../components/Button";
import { ArrowRight, Github, Twitter, Linkedin, Mail, ChevronDown, Download } from "lucide-react";

export const Hero = () => {
  const skills = ["HTML","CSS","Javascript","React","TailwindCSS","Git","Github"];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover opacity-40" 
          src="../../hero-bg.png" 
          alt="Background Image" 
        />
      </div>
      
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background">
      </div>

      {/* Floating Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i} 
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#7c7cff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s
              ease-in-out ${Math.random() * 5}s infinite`
            }}>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> {/* animate-pulse is a built-in tailwindcss animation*/}
                Frontend Developer • React
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">clean,</span> 
                <br />
                responsive web
                <br />
                <span className="font-serif italic font-normal text-white">
                  experiences
                </span>
              </h1>
              <p className="md:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I’m Prathamesh Pawar — a frontend developer working with React, Tailwind CSS, and JavaScript to build modern, responsive web applications.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                <a href="#contact" className="flex items-center gap-1.5">Contact Me <ArrowRight className="w-5 h-5"/></a>
              </Button>
              <AnimatedBorderButton>
                <a 
                  href="/Prathamesh-Pawar-Frontend-Developer--Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5"/>
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me:</span>
              {[{icon: Github, href: "https://github.com/Prathamesh2603"},
                {icon: Linkedin, href: "https://linkedin.com/in/prathamesh-pawar-23a821387"},
                {icon: Twitter, href: "https://x.com/Pratham_twitt"},
                {icon: Mail, href: "https://gmail.com"}
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  target="_blank"
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <social.icon className="w-5 h-5"/>
                </a>
              ))}
            </div>

          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300"> { /* Image Section div */ }

              {/* Profile Image */}
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                <div className="relative glass rounded-3xl p-2 glow-border">  { /* Image div */ }
                  <img 
                    src="profile.png" 
                    alt="Prathamesh Pawar"
                    className="w-full h-full aspect-4/5 object-cover object-top rounded-2xl"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"/>
                      <span className="text-sm font-medium">Available For Work</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  {/* <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-400">
                    <div className="text-2xl font-bold text-primary">0+</div>
                    <div className="text-xs text-muted-foreground">Years Exp.</div>
                  </div> */}

                </div>
              </div>

          </div>

        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I Work With
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      
      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a 
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" /> { /* Animate Bounce animation is given by tailwindcss */ }
        </a>
      </div>

    </section>   
  );
};
