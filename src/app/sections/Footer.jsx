'use client'
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Logo from "../components/Logo"
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white pt-16 pb-4">
      <div className=" max-w-10/12 max-md:max-w-11/12 mx-auto px-4 max-sm:px-0">
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-xl:grid-cols-3 max-sm:grid-cols-1 gap-10">
          {/* Logo + redes */}
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-6" />
            <p className="text-green-200 my-4">
              Del campo a tu mesa, sin intermediarios. Frutas ecológicas cultivadas con amor y respeto por la naturaleza.
            </p>
            <div className="flex space-x-4 mt-4">
              {[ 
                { Icon: Facebook, link: "https://facebook.com", label: "Facebook" },
                { Icon: Instagram, link: "https://instagram.com", label: "Instagram" },
                { Icon: Twitter, link: "https://twitter.com", label: "Twitter" }
              ].map(({ Icon, link, label }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="bg-green-700 p-2 rounded-full"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-green-700 pb-2">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Nosotros", href: "#about" },
                { label: "Beneficios", href: "#benefits" },
                { label: "Productos", href: "#products" },
                { label: "Testimonios", href: "#testimonials" },
              ].map(({ label, href }, idx) => (
                <li key={idx}>
                  <a href={href} className="text-green-200 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Próximamente */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-green-700 pb-2">Próximamente</h4>
            <ul className="space-y-2">
              {[
                "Frutas de Temporada",
                "Cítricos Ecológicos",
                "Frutos Rojos",
                "Frutas Tropicales",
                "Packs Especiales"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-green-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-green-700 pb-2">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <a
                  href="mailto:info@healthylifefruits.es"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  info@healthylifefruits.es
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+34912345678" className="text-green-200 hover:text-white transition-colors">
                  +34 912 345 678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <address className="text-green-200 not-italic">
                  Calle Agricultura, 123
                  <br />
                  28001 Madrid, España
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-300 text-sm">
          <div className="flex justify-center space-x-6 mb-4 max-md:grid max-md:grid-cols-1 max-md:gap-4
          text-left">
            <a href="#" className="text-green-300 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-green-300 hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-green-300 hover:text-white transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      <p className=" text-green-300 text-sm text-center mt-6">&copy; {new Date().getFullYear()} HealthyLife Fruits. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
