"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { hotelZones, hotelTypes } from "@/lib/data/hotels"

interface HotelsFiltersProps {
  selectedZone: string
  selectedType: string
  onZoneChange: (zone: string) => void
  onTypeChange: (type: string) => void
}

export function HotelsFilters({
  selectedZone,
  selectedType,
  onZoneChange,
  onTypeChange,
}: HotelsFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {hotelZones.map((zone) => (
          <button
            key={zone}
            onClick={() => onZoneChange(zone)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedZone === zone
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {zone}
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo de alojamiento" />
          </SelectTrigger>
          <SelectContent>
            {hotelTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
