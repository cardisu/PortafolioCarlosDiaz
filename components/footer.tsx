"use client"

import { SiTiktok, SiInstagram, SiLinkedin } from 'react-icons/si'
import { siteConfig } from "@/lib/config"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="w-full border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-2 -ms-1">
              {mounted ? (
                <Image
                  src={theme === "dark" ? "/images/tracklink-dark.png" : "/images/tracklink.png"}
                  alt="Logo Tracklink"
                  width={200}
                  height={0}
                  loading="lazy"
                  className="object-contain"
                />
              ) : (
                <Image
                  src="/images/tracklink.png"
                  alt="Logo Tracklink"
                  width={200}
                  height={0}
                  loading="lazy"
                  className="object-contain"
                />
              )}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Construyendo el futuro del trabajo, una persona a la vez.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Producto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Para personas
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Para empresas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Recursos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Política de Protección de Datos Personales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target='_blank'
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target='_blank'
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target='_blank'
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Tiktok"
              >
                <SiTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.author}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
