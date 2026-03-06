"use client"

import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer } from "@/components/scroll-animations"
import { Navigation, Music, Phone, MessageSquare, Shield, Mic } from "lucide-react"

const features = [
  {
    icon: Navigation,
    title: "GPS Intégré",
    description: "Utilisez Apple Plans ou Google Maps directement sur votre écran de voiture.",
  },
  {
    icon: Music,
    title: "Musique & Podcasts",
    description: "Spotify, Apple Music, podcasts... Toutes vos apps audio préférées accessibles.",
  },
  {
    icon: Phone,
    title: "Appels Mains Libres",
    description: "Passez et recevez des appels en toute sécurité sans quitter la route des yeux.",
  },
  {
    icon: MessageSquare,
    title: "Messages",
    description: "Dictez et écoutez vos messages SMS et iMessage grâce à Siri.",
  },
  {
    icon: Shield,
    title: "Sécurité Routière",
    description: "Interface optimisée pour minimiser les distractions au volant.",
  },
  {
    icon: Mic,
    title: "Contrôle Vocal",
    description: "Siri répond à toutes vos demandes pour une conduite 100% mains libres.",
  },
]

export function FeaturesSection() {
  return (
    <section id="avantages" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <FadeInLeft>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                Avantages
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
                Pourquoi choisir CarPlay ?
              </h2>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                CarPlay transforme votre expérience de conduite en connectant votre iPhone 
                directement à votre véhicule. Une interface intuitive, sécurisée et 
                parfaitement intégrée.
              </p>
            </FadeInLeft>
            
            <FadeInLeft delay={200}>
              <div className="mt-8 p-6 bg-muted rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-accent">95%</span>
                  </div>
                  <p className="text-foreground">
                    de nos clients recommandent CarPlay Pro à leurs proches
                  </p>
                </div>
              </div>
            </FadeInLeft>
          </div>

          {/* Right grid */}
          <FadeInRight>
            <StaggerContainer className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="stagger-child p-6 bg-card rounded-xl border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300 opacity-0 translate-y-8"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </StaggerContainer>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}
