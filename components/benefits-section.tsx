import { Card } from "@/components/ui/card"
import { Briefcase, Calendar, GraduationCap, Heart, Home, Laptop, PartyPopper, Plane } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Laptop,
      title: "Trabajo Remoto",
      description: "Flexibilidad total para trabajar desde donde prefieras",
    },
    {
      icon: Calendar,
      title: "Horario Flexible",
      description: "Organiza tu tiempo para un mejor balance vida-trabajo",
    },
    {
      icon: GraduationCap,
      title: "Desarrollo Profesional",
      description: "Cursos, certificaciones y conferencias cubiertas",
    },
    {
      icon: Heart,
      title: "Seguro Médico Premium",
      description: "Cobertura completa para ti y tu familia",
    },
    {
      icon: Briefcase,
      title: "Equipamiento Completo",
      description: "Laptop, periféricos y todo lo que necesites",
    },
    {
      icon: Plane,
      title: "Días de Vacaciones",
      description: "25 días al año más días personales flexibles",
    },
    {
      icon: PartyPopper,
      title: "Eventos del Equipo",
      description: "Retiros anuales y actividades mensuales",
    },
    {
      icon: Home,
      title: "Apoyo Home Office",
      description: "Presupuesto mensual para gastos de oficina en casa",
    },
  ]

  return (
    <section id="beneficios" className="w-full bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Beneficios que <span className="text-primary">importan</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Diseñamos nuestros beneficios pensando en tu bienestar integral y el de tu familia.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/50 text-accent-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
