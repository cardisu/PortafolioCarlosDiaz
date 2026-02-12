import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Briefcase } from "lucide-react"

export function CTASection() {
  return (
    <section id="vacantes" className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <Card className="relative overflow-hidden border-border/50 bg-primary/5 p-8 md:p-12 lg:p-16">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Briefcase className="h-8 w-8" />
            </div>

            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              ¿Listo para dar el <span className="text-primary">siguiente paso?</span>
            </h2>

            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Tenemos múltiples posiciones abiertas en diferentes áreas. Encuentra la oportunidad perfecta para ti y
              únete a nuestro equipo.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group h-12 gap-2 px-8">
                Ver Vacantes abiertas
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent">
                Enviar CV
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
