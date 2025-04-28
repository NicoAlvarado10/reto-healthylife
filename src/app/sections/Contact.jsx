'use client'
import { Check } from "lucide-react"
import { motion } from "framer-motion"
export const Contact = () => {
  return (
    <section id="join" className="py-20 bg-white">
    <div className=" max-w-11/12 max-md:max-w-11/12 mx-auto px-4">
      <div className="max-w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div
            className="text-left"
      
          >
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
              Únete a nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Forma parte de nuestra comunidad</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 mb-8"></div>
            <p className="text-lg text-gray-700 mb-6">
              Únete a nuestra comunidad de amantes de la alimentación saludable y recibe:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">Ofertas exclusivas para miembros</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">Recetas saludables con nuestras frutas</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">Información sobre nuevos productos</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">10% de descuento en tu primer pedido</p>
              </li>
            </ul>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                <img
                  src="/user1.webp"
                  alt="Usuario"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <img
                  src="/user2.webp"
                  alt="Usuario"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <img
                  src="/user3.webp"
                  alt="Usuario"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <p className="text-sm text-gray-600">Más de 500 personas se unieron este mes</p>
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-green-50 to-white p-8 md:p-10 rounded-2xl shadow-lg border border-green-100"
         
          >
      
              <form  className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                  
                    className="w-full px-4 py-3 rounded-lg border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="ejemplo@correo.com"
                    required
                  />
                
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tu número de teléfono"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300"
                      required
                    />
                  </div>
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    Acepto recibir comunicaciones comerciales y he leído la{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      política de privacidad
                    </a>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition-all cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ¡Quiero unirme!
                </motion.button>
              </form>
           
              </div>
            
      
        </div>
      </div>
    </div>
  </section>
  )
}
