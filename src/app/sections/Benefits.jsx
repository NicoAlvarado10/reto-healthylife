'use client'
import { motion } from "framer-motion"
import { HeartPulse, HandHelping, PackageCheck, Leaf, Apple, BadgeCheck } from "lucide-react"

const benefits = [
  {
    title: "Salud y bienestar",
    description: "Nuestras frutas ecológicas están libres de químicos y pesticidas, aportando todos los nutrientes necesarios para una vida saludable y plena. Mejora tu sistema inmunológico y energía diaria.",
    iconBg: "from-green-100 to-green-200",
    Icon: HeartPulse,
    iconColor: "text-green-600",
  },
  {
    title: "Apoyo local",
    description: "Colaboramos directamente con agricultores locales, fomentando la economía de proximidad y el desarrollo rural sostenible. Cada compra contribuye a mantener vivas las tradiciones agrícolas y apoya a familias españolas.",
    iconBg: "from-orange-100 to-orange-200",
    Icon: HandHelping,
    iconColor: "text-orange-600",
  },
  {
    title: "Frescura garantizada",
    description: "Del campo a tu mesa en menos de 24 horas, asegurando el mejor sabor y la máxima calidad en cada entrega. Si no estás satisfecho con la frescura, te devolvemos el dinero sin preguntas.",
    iconBg: "from-yellow-100 to-yellow-200",
    Icon: PackageCheck,
    iconColor: "text-yellow-600",
  },
  {
    title: "Sostenibilidad",
    description: "Nuestros métodos de cultivo respetan el medio ambiente y la biodiversidad. Utilizamos embalajes biodegradables y compostables para reducir nuestro impacto ambiental en cada entrega.",
    iconBg: "from-purple-100 to-purple-200",
    Icon: Leaf,
    iconColor: "text-purple-600",
  },
  {
    title: "Sabor auténtico",
    description: "Frutas cultivadas en su tiempo óptimo, con el cuidado tradicional que permite desarrollar todo su sabor. Redescubre el auténtico sabor de la fruta como la que recordabas de tu infancia.",
    iconBg: "from-red-100 to-red-200",
    Icon: Apple,
    iconColor: "text-red-600",
  },
  {
    title: "Transparencia total",
    description: "Conoce el origen exacto de cada fruta, quién la ha cultivado y cómo. Compartimos información detallada sobre nuestros agricultores y sus métodos de cultivo para que sepas exactamente qué estás comiendo.",
    iconBg: "from-blue-100 to-blue-200",
    Icon: BadgeCheck,
    iconColor: "text-blue-600",
  },
]

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b w-full from-green-50 to-white">
      <div className="w-10/12 max-md:w-11/12 mx-auto px-4 max-sm:px-0">
        <div
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            Por qué elegirnos
          </motion.span>
          <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay:0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Beneficios</motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.2 }}
          className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-8"></motion.div>
          <motion.p 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay:0.4 }}
          className="text-xl text-gray-700">¿Por qué elegir HealthyLife Fruits?</motion.p>
        </div>

        <div
          className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8"
        >
          {benefits.map(({ title, description, iconBg, Icon, iconColor }, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 max-sm:p-4 rounded-xl shadow-lg text-center bg-gradient-to-t from-green-200 to-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`bg-gradient-to-br ${iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Icon className={`w-10 h-10 ${iconColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
              <p className="text-gray-800 max-sm:text-left">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
