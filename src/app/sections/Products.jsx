'use client'
import { Check } from "lucide-react"
import { motion } from "framer-motion"
export const Products = () => {
    const fruitBaskets = [
        {
          name: "Pack Frutas de Temporada",
          description: "Selección de las mejores frutas de temporada directas del agricultor",
          features: ["5-7 variedades", "100% ecológico", "Cultivo local"],
          image: "/frutaTemporada.webp",
          tag: "Más Popular",
        },
        {
          name: "Cesta Cítricos Ecológicos",
          description: "Naranjas, limones y mandarinas cultivadas sin pesticidas",
          features: ["Rico en vitamina C", "Ideal para zumos", "Cultivo sostenible"],
          image: "/citricos.webp",
          tag: "",
        },
        {
          name: "Mix Frutos Rojos",
          description: "Fresas, frambuesas y arándanos ecológicos recién recolectados",
          features: ["Antioxidantes naturales", "Dulzura perfecta", "Máxima frescura"],
          image: "/frutosrojos.webp",
          tag: "Nuevo",
        },
        {
          name: "Pack Frutas Tropicales",
          description: "Mangos, piñas y aguacates de cultivo sostenible",
          features: ["Exótico y nutritivo", "Sabores intensos", "Maduración perfecta"],
          image: "/tropicales.webp",
          tag: "",
        },
      ]
  return (
    <section id="products" className="py-20 ">
      
    <div className=" max-w-10/12 max-md:max-w-11/12 mx-auto px-4 max-sm:px-0">
    
      <div
        className="max-w-full mx-auto text-center mb-16"
       
      >
         <motion.span 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Próximamente
          </motion.span>
          <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay:0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Nuestras futuras cestas</motion.h2>
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
          className="text-xl text-gray-700">Estas son algunas de las cestas que podrás disfrutar cuando lancemos nuestro servicio</motion.p>
      </div>

      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-8">
        {fruitBaskets.map((basket, index) => (
          <motion.article
            key={index}
            className=" rounded-xl shadow-lg overflow-hidden  border border-gray-100 hover:shadow-xl  transition-all   "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative ">
              <img
                src={basket.image }
                alt={basket.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              {basket.tag && (
                <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {basket.tag}
                </span>
              )}
            </div>
            <div className="px-6 py-3 bg-gradient-to-b from-green-400 to-green-950 h-full">
              <h3 className="text-xl font-bold mb-2 text-white">{basket.name}</h3>
              <p className="text-green-100 mb-4">{basket.description}</p>
              <ul className="space-y-2 mb-4">
                {basket.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-green-100">
                    <Check className="w-4 h-4 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a href="#join">
          <motion.button
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all cursor-pointer hover:scale-105 duration-150"
            
          >
            Sé el primero en probarlas
          </motion.button>
        </a>
      </motion.div>
    </div>
  </section>
  )
}
