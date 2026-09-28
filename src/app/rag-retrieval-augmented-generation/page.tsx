import { permanentRedirect } from 'next/navigation'

export default function RedirectPage() {
  permanentRedirect('/services/rag-retrieval-augmented-generation')
}
