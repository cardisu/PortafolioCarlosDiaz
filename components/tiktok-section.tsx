"use client"

import { Card } from "@/components/ui/card"

export function TikTokSection() {
  const videos = [
    {
      id: 1,
      title: "Festividades y compañerismo",
      tiktokId: "7585651813706206520",
    },
    {
      id: 2,
      title: "Diversión hasta en los más serios",
      tiktokId: "7514434416597273912",
    },
    {
      id: 3,
      title: "Te estamos buscando",
      tiktokId: "7525539614854089989",
    },
    {
      id: 4,
      title: "Tu eres lo más importante",
      tiktokId: "7541168762557402424",
    },
  ]

  return (
    <section id="videos" className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            La vida en <span className="text-primary">Tracklink</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Descubre cómo es trabajar con nosotros a través de los momentos que compartimos en TikTok.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="group relative overflow-hidden border-border/50 bg-card p-0 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="relative aspect-9/16 overflow-hidden -mb-5">
                <iframe
                  src={`https://www.tiktok.com/player/v1/${video.tiktokId}?loop=0&description=0&rel=0`}
                  className="h-full w-full border-0"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                  title={video.title}
                />
              </div>
              <div className="pt-2 pb-3 text-center">
                <h3 className="text-sm font-semibold">{video.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}