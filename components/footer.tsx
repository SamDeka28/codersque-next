import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter - Moved to the top */}
        <div className="bg-gray-800/50 rounded-xl p-8 mb-16 backdrop-blur-sm border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400">
                Stay updated with the latest trends, insights, and news from the
                world of technology.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Codersque Technologies
              </div>
            </div>

            <p className="text-gray-400 max-w-xs">
              Building smarter digital solutions for businesses around the
              world. Based in Guwahati, Assam.
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
              >
                <Github size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About",
                "Services",
                "Portfolio",
                "Blog",
                "Future-Ready Partnerships",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-0 mr-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "AI Solutions",
                "Cloud Services",
                "Digital Marketing",
                "IP Services",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-0 mr-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  Codersque Technologies Pvt. Ltd.
                  <br />
                  H.No. 34, Ashirwaad Path,
                  <br />
                  Sonai Mikir Path, Satgaon,
                  <br />
                  Guwahati, Assam 781171
                  <br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-3" />
                <a
                  href="mailto:info@codersque.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  sales@codersque.com
                </a>
              </li>
              {/* <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-3" />
                <a
                  href="tel:+919706202403 "
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  +91 97062 02403
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Codersque Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/site"
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
