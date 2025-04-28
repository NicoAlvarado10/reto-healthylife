import "./globals.css"
import { Inter, Poppins } from "next/font/google"

// Fuentes
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "HealthyLife Fruits - Frutas ecológicas a domicilio",
  description:
    "Disfruta de frutas ecológicas frescas y saludables, directas del agricultor a tu hogar. Sin intermediarios, 100% naturales y con entrega a domicilio en toda España.",
  openGraph: {
    title: "HealthyLife Fruits - Frutas ecológicas a domicilio",
    description:
      "Disfruta de frutas ecológicas frescas y saludables, directas del agricultor a tu hogar.",
    siteName: "HealthyLife Fruits",
   
  icons: {
    icon: "/favicon.ico",
  },
}
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Etiquetas meta adicionales */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="HealthyLife Fruits" />
        <meta name="keywords" content="frutas ecológicas, frutas a domicilio, entrega de frutas, alimentación saludable, frutas frescas" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
