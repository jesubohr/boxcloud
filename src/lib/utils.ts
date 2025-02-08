import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export function formatSize(bytes: number) {
  const sizes = ["B", "KB", "MB", "GB", "TB"]
  if (bytes === 0) return "0 B"
  const i = Math.floor(Math.log2(bytes) / 10)
  const rawsSize = bytes / Math.pow(1024, i)
  const fixedSize = Number.isInteger(rawsSize) ? rawsSize : rawsSize.toFixed(2)
  return `${fixedSize} ${sizes[i]}`
}
