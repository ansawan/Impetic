import { permanentRedirect } from 'next/navigation'

export default function RedirectPage() {
  permanentRedirect('/services/ai-search-recommendations')
}
