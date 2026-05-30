import { Globe, Award, Calendar } from "lucide-react"
import type { Guide } from "@/lib/data/guides"

interface GuideCardProps {
  guide: Guide
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={guide.image}
          alt={guide.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{guide.name}</h3>
          <p className="text-sm text-white/80">{guide.role}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Stats */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{guide.experience} años</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Globe className="h-4 w-4" />
            <span>{guide.languages.join(", ")}</span>
          </div>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-4">
          {guide.specialties.map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {specialty}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {guide.bio}
        </p>

        {/* Certifications */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 mb-2">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-foreground">Certificaciones</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {guide.certifications.map((cert) => (
              <span
                key={cert}
                className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
