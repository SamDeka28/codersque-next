import Link from "next/link"
import { Linkedin, Github, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { Container } from "@/components/ui/container"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Insights", href: "/blog" },
    { label: "Partnerships", href: "/future-ready-partnerships" },
    { label: "Contact", href: "/contact" },
  ]

  const services = [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "AI Solutions", href: "/services/ai-solutions" },
    { label: "Cloud Services", href: "/services/cloud-services" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
  ]

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/logo.png" alt="" width={28} height={28} className="h-7 w-7" />
              <span className="font-heading text-lg font-semibold tracking-tight">Codersque</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Software engineering for teams that need to own what they ship. Based in Guwahati, Assam.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "mailto:sales@codersque.com", icon: Mail, label: "Email" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <item.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-tight">Company</h3>
            <ul className="space-y-2.5">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-tight">Services</h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-tight">Office</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <span>
                  Codersque Technologies Pvt. Ltd.
                  <br />
                  H.No. 34, Ashirwaad Path,
                  <br />
                  Sonai Mikir Path, Satgaon,
                  <br />
                  Guwahati, Assam 781171
                </span>
              </li>
              <li>
                <a href="mailto:sales@codersque.com" className="inline-flex items-center gap-1 hover:text-white">
                  sales@codersque.com
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center">
          <p>© {currentYear} Codersque Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/site" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
