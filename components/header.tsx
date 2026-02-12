"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { siteConfig } from "@/lib/config"
import { animateScroll } from "react-scroll"
import Image from "next/image"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace("#", "")

    if (id === "inicio") {
      animateScroll.scrollToTop({
        duration: 600,
        smooth: "easeInOutQuart",
      })
      setMobileMenuOpen(false)
      return
    }

    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 64
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      animateScroll.scrollTo(offsetPosition, {
        duration: 600,
        smooth: "easeInOutQuart",
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-all ${isScrolled ? "border-b border-border/40" : ""}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
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

        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9"
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Cambiar tema</span>
          </Button>
          <Button className="hidden md:inline-flex">Aplicar ahora</Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full">Aplicar Ahora</Button>
          </div>
        </nav>
      )}
    </header>
  )
}
