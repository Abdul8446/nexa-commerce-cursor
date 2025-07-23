import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Nexa-Commerce
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8"
        >
          We build stunning, high-converting eCommerce websites for modern brands. Choose from our premium themes and launch your store today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="#themes" className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition">Browse Themes</Link>
        </motion.div>
      </section>
      {/* Theme Showcase */}
      <section id="themes" className="py-16 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-10"
          >
            Choose Your Theme
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dawn Theme Card */}
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 relative h-56 md:h-auto">
                <Image
                  src="/dawn-preview.jpg"
                  alt="Dawn Theme Preview"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-all duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between md:w-1/2">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Dawn</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A clean, modern, and flexible theme inspired by Shopify's Dawn. Perfect for any eCommerce brand.</p>
                </div>
                <Link href="/themes/dawn" className="mt-4 inline-block px-5 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">View Demo</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
