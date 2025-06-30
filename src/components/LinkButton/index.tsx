
type LinkButtonProps = {
  label: string,
  href: string, 
}

export function LinkButton({label, href}: LinkButtonProps) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-green-600 text-white font-medium px-4 rounded-xl my-3 hover:bg-green-700 transition">{label}</a>
}