import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceListItemProps {
  title: string
  description: string
  href?: string
}

export function ServiceListItem({ title, description, href }: ServiceListItemProps) {
  const content = (
    <div className="border-b border-white/8 py-4 sm:py-5 flex flex-col justify-between hover:bg-white/[0.03] px-4 rounded-xl transition-all group border hover:border-[#4DE8DC]/30">
      <div className="flex items-start gap-3">
        <span className="mt-2 w-2 h-2 rounded-full bg-[#4DE8DC] shrink-0 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(77,232,220,0.8)] transition-all" />
        <div>
          <h4 className="text-[#4DE8DC] font-bold text-base sm:text-lg transition-colors">
            {title}
          </h4>
          <p className="text-sm text-white mt-1.5 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {href && (
        <div className="mt-3 pl-5 flex items-center">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#4DE8DC] group-hover:underline group-hover:translate-x-1 transition-all">
            Explore More <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      )}
    </div>
  )

  if (href) {
    return <Link href={href} className="block">{content}</Link>
  }

  return content
}
export default ServiceListItem
