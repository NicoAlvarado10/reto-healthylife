'use client'
import { motion } from "framer-motion"
import { Check } from "lucide-react"; 

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-x-hidden">
    <div className=" max-w-10/12 mx-auto max-xl:max-w-11/12 px-4">
      <div
        className="max-w-4xl mx-auto text-center mb-16">
        <motion.span
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
        className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
          Nuestra Historia
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Sobre Nosotros</motion.h2>
        <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, delay: 0.2 }}
        className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-8"></motion.div>
        <motion.p 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg text-gray-700">
          Descubre cómo nació HealthyLife Fruits y por qué nos apasiona llevar lo mejor de la naturaleza a tu hogar.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row  gap-10">
        <motion.div
          className="md:w-1/2 overflow-hidden group"
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y:0  }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-full  rounded-lg overflow-hidden shadow-xl">
            <img
              src="/filosofia.webp"
              alt="Agricultores felices"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="font-medium">Nuestros agricultores en Murcia</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div
          className="md:w-1/2"

        >
          <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl font-bold mb-4 text-gray-900">Nuestra filosofía</motion.h3>
          <motion.p 
              initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg mb-4 leading-relaxed text-gray-700">
            En HealthyLife Fruits creemos que la alimentación saludable debe ser accesible para todos. Nacimos en
            2020 con una misión clara: conectar directamente a los agricultores ecológicos con los consumidores.
          </motion.p>
          <motion.p 
              initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg mb-4 leading-relaxed text-gray-700">
            Trabajamos con una red de más de 30 agricultores locales que cultivan frutas ecológicas sin el uso de
            químicos ni pesticidas, siguiendo métodos tradicionales que respetan los ciclos naturales.
          </motion.p>
          <motion.p 
              initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 1 }}
          className="text-lg mb-4 leading-relaxed text-gray-700">
            Nuestro compromiso es ofrecer productos frescos, de temporada y con el mejor sabor, respetando siempre
            el medio ambiente y apoyando a las comunidades agrícolas locales.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 mt-8 max-sm:grid-cols-1">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <span
              
              >100% Ecológico</span>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <span
                
              >Sin intermediarios</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >Precio justo</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay:1.4 }}
            className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <span
            
              >Máxima frescura</span>
            </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 " >
            <a
              href="#benefits"
              className="inline-block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-3 px-6 rounded-full  hover:scale-105 transition duration-150"
            >
              Descubre los beneficios
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  )
}
