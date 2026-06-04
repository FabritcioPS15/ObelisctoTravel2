"use client"

import { HelpCircle } from "lucide-react"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

export function DateInfoIcon() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          aria-label="Información sobre selección de fechas"
        >
          <HelpCircle className="h-4 w-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[220px] text-center">
        Selecciona la fecha de inicio y luego la fecha de fin para definir tu rango de viaje.
      </TooltipContent>
    </Tooltip>
  )
}
