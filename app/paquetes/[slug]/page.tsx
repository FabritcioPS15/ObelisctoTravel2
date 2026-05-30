import { packages } from "@/lib/data/packages"
import { PackageDetailClient } from "@/components/paquetes/package-detail-client"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const pkg = packages.find((p) => p.slug === resolvedParams.slug)
  if (!pkg) return {}
  const tr = pkg.translations.es
  return {
    title: `${tr.name} | Obelisco Travel`,
    description: tr.description,
  }
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const pkg = packages.find((p) => p.slug === resolvedParams.slug)
  if (!pkg) notFound()
  return <PackageDetailClient pkg={pkg} />
}
