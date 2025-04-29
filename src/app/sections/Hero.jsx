'use client'
import { Star } from "lucide-react"
import { motion } from "framer-motion"
export const Hero = () => {
  return (
    <section className="py-20 max-sm:pb-0" id="hero">
        <div className="grid grid-cols-2 max-md:grid-cols-1 mx-auto max-md:max-w-11/12 max-md:px-4 pt-10 max-xl:gap-4 max-sm:px-0 justify-center items-center">
            <div className=" 2xl:pl-20 md:p-4 ">
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              100% Ecológico y Sostenible
            </motion.span>
            <motion.h1
  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  Frutas{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 ">
    ecológicas
  </span>{" "}
  directas a tu hogar
</motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-700 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Frutas cultivadas con dedicación, respetando el equilibrio natural y conservando todo su sabor. Del campo a tu mesa en menos de 24 horas.
            </motion.p>
                <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                action="/">
                <div className="flex items-center flex-wrap max-sm:flex-col gap-2 max-sm:gap-1">
                <input
                      type="email"
                      className=
                      " px-4 py-3 max-w-lg rounded-lg border border-gray-300"
                      
                      placeholder="Tu correo electrónico"
                      required
                    />
                <motion.button
                    type="submit"
                    className="bg-gradient-to-r cursor-pointer from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all whitespace-nowrap"

                  >
                    Mantente informado
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-2 max-sm:mt-4  max-w-lg">
                Sé el primero en conocer nuestro lanzamiento y recibe un 10% de descuento en tu primer pedido.
              </p>
                </motion.form>
                <motion.div
              className="flex items-center gap-6 mt-10 max-md:mt-5 max-sm:flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex -space-x-2">
                <img
                  src="/user2.webp"
                  alt="Usuario"
                  width={40}
                  height={40}
                  className="rounded-full border-2 object-cover border-white"
                />
                <img
                  src="/user3.webp"
                  alt="Usuario"
                  width={40}
                  height={40}
                  className="rounded-full border-2 object-cover border-white"
                />
                <img
                  src="/user1.webp"
                  alt="Usuario"
                  width={40}
                  height={40}
                  className="rounded-full border-2 object-cover border-white"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-sm text-gray-600">Más de 500 personas ya se han registrado</p>
              </div>
            </motion.div>
            </div>
         
                <motion.img 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.6}}
                className="max-w-full object-cover h-full mx-auto" src="/hero-2.webp" alt="hero-image" />
           
        </div>
    </section>
  )
}
