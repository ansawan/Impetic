'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2, ShieldAlert } from 'lucide-react'

interface AuditModalProps {
  isOpen: boolean
  onClose: () => void
}

const SERVICE_OPTIONS = [
  'SEO Audit',
  'Digital Marketing',
  'AI Automation / AI Agents',
  'Software Development',
  'Virtual Assistant Services',
  'GoHighLevel Setup/Management',
  'Other',
]

export function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    services: [] as string[],
    message: '',
  })

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Reset form when opened
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false)
      setErrorMsg('')
    }
  }, [isOpen])

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(option)
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== option) }
      } else {
        return { ...prev, services: [...prev.services, option] }
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    // Client-side validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.')
      return
    }
    if (formData.services.length === 0) {
      setErrorMsg('Please select at least one service area you need help with.')
      return
    }

    const subject = encodeURIComponent(`Audit & Strategy Request from ${formData.name}`)
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\nEmail Address: ${formData.email}\nPhone Number: ${formData.phone || 'N/A'}\nCompany: ${formData.company || 'N/A'}\nWebsite URL: ${formData.website || 'N/A'}\nServices Needed: ${formData.services.join(', ')}\n\nAdditional Details:\n${formData.message || 'N/A'}`
    )

    // Send email notification to info@impetic.com
    window.location.href = `mailto:info@impetic.com?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0D1417] border border-white/15 p-6 sm:p-8 text-[#EAF6F5] shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 select-none"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-[#8FA6A3] hover:text-[#4DE8DC] hover:bg-white/10 transition-all focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6 pr-10">
                  <span className="inline-block font-mono text-xs text-[#4DE8DC] uppercase tracking-wider mb-1">
                    Free Technical Assessment
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Request a <span className="flux-word">Free Audit</span>
                  </h2>
                  <p className="text-sm text-white/80 mt-1.5 leading-relaxed">
                    Tell us about your website, system, or growth goals. Our lead engineers will analyze your setup and send an actionable audit report.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-white uppercase tracking-wider">
                        Full Name <span className="text-[#4DE8DC]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl text-white px-4 py-3 text-sm focus:border-[#4DE8DC] focus:shadow-[0_0_0_2px_rgba(77,232,220,0.2)] outline-none transition-all placeholder:text-[#47585A]"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-white uppercase tracking-wider">
                        Email Address <span className="text-[#4DE8DC]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl text-white px-4 py-3 text-sm focus:border-[#4DE8DC] focus:shadow-[0_0_0_2px_rgba(77,232,220,0.2)] outline-none transition-all placeholder:text-[#47585A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-white uppercase tracking-wider">
                        Phone Number <span className="text-[#47585A]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl text-white px-4 py-3 text-sm focus:border-[#4DE8DC] focus:shadow-[0_0_0_2px_rgba(77,232,220,0.2)] outline-none transition-all placeholder:text-[#47585A]"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-white uppercase tracking-wider">
                        Company Name <span className="text-[#47585A]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl text-white px-4 py-3 text-sm focus:border-[#4DE8DC] focus:shadow-[0_0_0_2px_rgba(77,232,220,0.2)] outline-none transition-all placeholder:text-[#47585A]"
                      />
                    </div>
                  </div>

                  {/* Website URL */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-white uppercase tracking-wider">
                      Website URL <span className="text-[#47585A]">(Optional for SEO Audit)</span>
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yourcompany.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl text-white px-4 py-3 text-sm focus:border-[#4DE8DC] focus:shadow-[0_0_0_2px_rgba(77,232,220,0.2)] outline-none transition-all placeholder:text-[#47585A]"
                    />
                  </div>

                  {/* Services Needed (Checkboxes) */}
                  <div className="space-y-2">
                    <label className="block font-mono text-xs text-white uppercase tracking-wider">
                      What do you need help with? <span className="text-[#4DE8DC]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {SERVICE_OPTIONS.map((option) => {
                        const isChecked = formData.services.includes(option)
                        return (
                          <label
                            key={option}
                            onClick={() => handleCheckboxChange(option)}
                            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                              isChecked
                                ? 'bg-[#4DE8DC]/15 border-[#4DE8DC] text-[#4DE8DC] font-bold'
                                : 'bg-white/[0.02] border-white/10 text-white/80 hover:bg-white/[0.05] hover:text-white'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="sr-only"
                            />
                            <span
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                isChecked
                                  ? 'bg-[#4DE8DC] border-[#4DE8DC] text-black'
                                  : 'border-white/30 bg-transparent'
                              }`}
                            >
                              {isChecked && (
                                <svg className="w-3 h-3 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </span>
                            <span className="truncate">{option}</span>
                          </label>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-white uppercase tracking-wider">
                      Additional Details <span className="text-[#47585A]">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe specific issues, goals, or current bottlenecks..."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl text-white px-4 py-3 text-sm focus:border-[#4DE8DC] focus:shadow-[0_0_0_2px_rgba(77,232,220,0.2)] outline-none transition-all placeholder:text-[#47585A] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2FBFB0] to-[#4DE8DC] text-[#12191C] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(77,232,220,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                  >
                    Request Audit
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-10 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#4DE8DC]/10 border border-[#4DE8DC]/40 flex items-center justify-center text-[#4DE8DC] mb-6 shadow-[0_0_24px_rgba(77,232,220,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Audit Request Received!
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-md mx-auto mb-8 leading-relaxed">
                  Thanks! We&apos;ll analyze your details and be in touch shortly at <span className="text-[#4DE8DC] font-mono">{formData.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl border border-white/15 bg-white/5 text-[#EAF6F5] font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
export default AuditModal
