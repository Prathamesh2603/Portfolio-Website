import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Movie Ticket Booking",
    description: "It's a MERN stack project, where user can sign up explore the movies and book the tickets with their choice of seats. Admin dashboard is created where admin can add new movies and manage the bookings.",
    image: "projects/movie ticket booking.png",
    tags: ["React", "tailwindCSS", "Nodejs", "Express", "MongoDB", "Stripe", "Inngest", "Clerk"],
    link: "https://quick-show-booking-blush.vercel.app/",
    github: "https://github.com/Prathamesh2603/Movie-Ticket-Booking" 
  }
];

export const Projects = () => {
  return (
    <section
      id="projects" 
      className="py-32 relative overflow-hidden">

      {/* Bg glows */}
      <div className="absolute top1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl text-secondary-foreground md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Learning Through
            <span className="font-serif italic font-normal text-white"> 
              {" "}
              Projects
            </span>
          </h2>
          
        </div>

        {/* Projects Grid */}
        <div>
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                 
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    target="_blank"
                    href={project.link}
                    className="p-3 border-none outline-none rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5"/>
                  </a>
                  <a
                    target="_blank"
                    href={project.github}
                    className="p-3 border-none outline-none rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5"/>
                  </a>
                </div>

              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) =>(
                    <span 
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a 
              href="https://github.com/Prathamesh2603?tab=repositories"
              target="_blank"
              className="flex items-center gap-2"
            >
              <span className="cursor-pointer">View All Projects</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </AnimatedBorderButton>
        </div>

      </div>

    </section>   
  )
}
