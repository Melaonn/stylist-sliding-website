import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children }) {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex items-center justify-center p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl w-full text-center">
        {children}
      </div>
    </motion.section>
  )
}
