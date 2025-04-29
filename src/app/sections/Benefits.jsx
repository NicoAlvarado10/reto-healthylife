'use client'
import { motion } from 'framer-motion'
import { HeartPulse, HandHelping, PackageCheck, Leaf, Apple, BadgeCheck } from 'lucide-react'

const benefits = [
  { title: 'Salud y bienestar', description: 'Nuestras frutas ecológicas están libres de químicos y pesticidas, aportando todos los nutrientes necesarios para una vida saludable y plena. Mejora tu sistema inmunológico y energía diaria.', Icon: HeartPulse, iconBg: 'from-green-100 to-green-200', iconColor: 'text-green-600' },
  { title: 'Apoyo local', description: 'Colaboramos directamente con agricultores locales, fomentando la economía de proximidad y el desarrollo rural sostenible. Cada compra contribuye a mantener vivas las tradiciones agrícolas y apoya a familias españolas.', Icon: HandHelping, iconBg: 'from-orange-100 to-orange-200', iconColor: 'text-orange-600' },
  { title: 'Frescura garantizada', description: 'Del campo a tu mesa en menos de 24 horas, asegurando el mejor sabor y la máxima calidad en cada entrega. Si no estás satisfecho con la frescura, te devolvemos el dinero sin preguntas.', Icon: PackageCheck, iconBg: 'from-yellow-100 to-yellow-200', iconColor: 'text-yellow-600' },
  { title: 'Sostenibilidad', description: 'Nuestros métodos de cultivo respetan el medio ambiente y la biodiversidad. Utilizamos embalajes biodegradables y compostables para reducir nuestro impacto ambiental en cada entrega.', Icon: Leaf, iconBg: 'from-purple-100 to-purple-200', iconColor: 'text-purple-600' },
  { title: 'Sabor auténtico', description: 'Frutas cultivadas en su tiempo óptimo, con el cuidado tradicional que permite desarrollar todo su sabor. Redescubre el auténtico sabor de la fruta como la que recordabas de tu infancia.', Icon: Apple, iconBg: 'from-red-100 to-red-200', iconColor: 'text-red-600' },
  { title: 'Transparencia total', description: 'Conoce el origen exacto de cada fruta, quién la ha cultivado y cómo. Compartimos información detallada sobre nuestros agricultores y sus métodos de cultivo para que sepas exactamente qué estás comiendo.', Icon: BadgeCheck, iconBg: 'from-blue-100 to-blue-200', iconColor: 'text-blue-600' },
]

export const Benefits = () => {
  return (
    <section id="benefits" className="relative py-20 bg-white">
   

      <div className="relative max-w-4xl mx-auto space-y-16 px-4">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4"
          >Por qué elegirnos</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >Beneficios</motion.h2>
        </div>

        {benefits.map((b, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="w-full md:w-1/2 p-6 bg-green-50 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{b.title}</h3>
              <p className="text-gray-700 leading-relaxed">{b.description}</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center p-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`p-6 rounded-full bg-gradient-to-br shadow-lg  ${b.iconBg}`}
              >
                <b.Icon className={`w-12 h-12 ${b.iconColor}`} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
