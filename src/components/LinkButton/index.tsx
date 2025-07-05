import { LucideIcon } from "lucide-react"

type LinkButtonProps = {
  label: string,
  href: string, 
  icon: LucideIcon,
}

export function LinkButton({ label, href, icon: Icon }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 w-full bg-green-600 text-white font-medium py-3 px-4 rounded-xl my-2 hover:bg-green-700 transition text-sm sm:text-base"
    >
      <Icon className="w-5 h-5" />
      <span className="flex-1 text-center">{label}</span>
    </a>
  );
}