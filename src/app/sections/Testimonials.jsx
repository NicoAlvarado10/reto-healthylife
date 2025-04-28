'use client'
import { motion } from "framer-motion"
import { Star } from "lucide-react"
export const Testimonials = () => {
    const testimonials = [
        {
          name: "María García",
          role: "Cliente desde 2022",
          image: "/user1.webp",
          quote:
            "Desde que descubrí HealthyLife Fruits, mi familia y yo disfrutamos de frutas más frescas y sabrosas. ¡La diferencia es increíble!",
          stars: 5,
        },
        {
          name: "Carlos Rodríguez",
          role: "Chef profesional",
          image: "/user2.webp",
          quote:
            "Como chef, la calidad de los ingredientes es fundamental. Sus frutas ecológicas elevan mis postres a otro nivel.",
          stars: 5,
        },
        {
          name: "Lautaro Martínez",
          role: "Nutricionista",
          image: "/user3.webp",
          quote:
            "Recomiendo HealthyLife Fruits a todos mis pacientes. La calidad nutricional de sus productos es excepcional.",
          stars: 4,
        },
      ]
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-green-50">
    <div className="max-w-10/12 max-md:max-w-11/12 mx-auto px-4 max-sm:px-0">
      <div
        className="max-w-4xl mx-auto text-center mb-16"
      >
         <motion.span 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            Testimonios
          </motion.span>
          <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay:0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Lo que dicen nuestros clientes</motion.h2>
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
          className="text-xl text-gray-700">Descubre por qué nuestros clientes confían en nosotros</motion.p>
      </div>

      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonial.image  }
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.stars ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}
