import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/lib/config"

export function HeroSection() {
  return (
    <section id="inicio" className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Nuevas oportunidades disponibles
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Construye tu <span className="text-primary">futuro</span> con nosotros
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Únete a un equipo innovador donde tu talento marca la diferencia. Descubre una cultura de crecimiento,
            colaboración y oportunidades ilimitadas.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button size="lg" className="group h-12 gap-2 px-6">
              Ver Vacantes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">{siteConfig.stats.employees}</span>
              <span>Colaboradores</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">{siteConfig.stats.countries}</span>
              <span>Países</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">{siteConfig.stats.satisfaction}</span>
              <span>Satisfacción</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-border/50 shadow-2xl">
            <Image
              src="/images/hero-foto.png"
              alt="Nuestro equipo de Talento Humano"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -right-4 -top-4">
            <Image
              src="/images/logo-sb.png"
              alt="Small Logo Tracklink"
              width={40}
              height={40}
              loading="lazy"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
