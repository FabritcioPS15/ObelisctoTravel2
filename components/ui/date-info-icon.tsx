"use client"

import { HelpCircle } from "lucide-react"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { useLang } from "@/lib/store/lang"

const tooltipTexts = {
  es: "Selecciona la fecha de inicio y luego la fecha de fin para definir tu rango de viaje.",
  en: "Select the start date and then the end date to define your travel range.",
  pt: "Selecione a data de início e depois a data de término para definir seu intervalo de viagem."
}

export function DateInfoIcon() {
  const { locale } = useLang()
  const tooltipText = tooltipTexts[locale] || tooltipTexts.es

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
        {tooltipText}
      </TooltipContent>
    </Tooltip>
  )
}
