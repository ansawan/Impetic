import { permanentRedirect } from 'next/navigation'

export default function RedirectPage() {
  permanentRedirect('/services/home-service-virtual-assistant')
}
