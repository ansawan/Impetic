import { permanentRedirect } from 'next/navigation'

export default function RedirectPage() {
  permanentRedirect('/services/llm-chatbot-integration')
}
