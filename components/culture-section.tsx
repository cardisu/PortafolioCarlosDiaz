import { Card } from "@/components/ui/card"
import { Users, Shield, Lightbulb, Smile, CheckCircle, Heart } from "lucide-react"
import Image from "next/image"


export function CultureSection() {
  const values = [
    {
      icon: Shield,
      image: "/images/respeto.jpg",
      title: "Respeto",
      description: "Valoramos a nuestros clientes, manteniendo un trato cordial y sincero.",
    },
    {
      icon: CheckCircle,
      image: "/images/responsabilidad.jpg",
      title: "Responsabilidad",
      description: "Estamos comprometidos en cumplir con las expectativas de nuestros clientes y con los resultados de la compañía.",
    },
    {
      icon: Lightbulb,
      image: "/images/innovacion.jpg",
      title: "Innovación",
      description:
        "Buscamos constantemente estar a la vanguardia, ofreciendo productos y servicios innovadores a nuestros clientes para así cumplir con nuestra propuesta de valor.",
    },
    {
      icon: Smile,
      image: "/images/diversion.jpg",
      title: "Diversión",
      description: "Disfrutamos cada cosa que hacemos y vivimos con alegría cada día, siempre con actitud positiva.",
    },
    {
      icon: Users,
      image: "/images/trabajo-equipo.jpg",
      title: "Trabajo en equipo",
      description: "Somos todos para uno y uno para todos, con un mismo objetivo en común.",
    },
    {
      icon: Heart,
      image: "/images/pasion.jpg",
      title: "Pasión",
      description: "Amamos lo que hacemos; realizamos todas nuestras actividades con total entrega y entusiasmo hacia nuestros clientes.",
    },
  ]

  return (
    <section id="cultura" className="w-full bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Nuestra cultura
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Somos un equipo multidisciplinario que unen sus talentos en pro de la innovación para brindar soluciones tecnológicas de vanguardia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card p-0 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="pt-0 ps-4 pe-4 pb-6">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
