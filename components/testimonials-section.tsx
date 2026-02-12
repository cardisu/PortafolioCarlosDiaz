import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Senior Software Engineer",
      image: "/placeholder-user.jpg",
      quote:
        "En Tracklink encontré un equipo que valora mi opinión y me impulsa a crecer. Cada día es una oportunidad para aprender algo nuevo.",
      initials: "MG",
    },
    {
      name: "Carlos Ramírez",
      role: "Product Designer",
      image: "/placeholder-user.jpg",
      quote:
        "La flexibilidad y confianza que me dan me permite balancear mi vida personal mientras desarrollo proyectos increíbles.",
      initials: "CR",
    },
    {
      name: "Ana Martínez",
      role: "Engineering Manager",
      image: "/placeholder-user.jpg",
      quote:
        "He crecido profesionalmente de formas que nunca imaginé. Aquí realmente invierten en tu desarrollo y celebran tus logros.",
      initials: "AM",
    },
    {
      name: "Luis Torres",
      role: "DevOps Engineer",
      image: "/placeholder-user.jpg",
      quote:
        "La cultura de innovación y el apoyo del equipo hacen que cada desafío se convierta en una oportunidad de aprendizaje.",
      initials: "LT",
    },
    {
      name: "Sofia Herrera",
      role: "UX Researcher",
      image: "/placeholder-user.jpg",
      quote:
        "Trabajar aquí significa ser parte de algo más grande. Mis ideas son escuchadas y tengo el espacio para experimentar.",
      initials: "SH",
    },
    {
      name: "Diego Morales",
      role: "Data Scientist",
      image: "/placeholder-user.jpg",
      quote: "Los beneficios y el ambiente de trabajo son excepcionales. Me siento valorado y motivado cada día.",
      initials: "DM",
    },
  ]

  return (
    <section id="testimonios" className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Voces de nuestro <span className="text-primary">equipo</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Conoce las experiencias reales de quienes ya forman parte de nuestra familia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" aria-hidden="true" />
              <p className="mb-6 leading-relaxed text-muted-foreground">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    loading="lazy"
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
