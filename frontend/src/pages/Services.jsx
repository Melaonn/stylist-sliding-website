import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredPackage, setHoveredPackage] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "🌐",
      description: "Custom websites and web applications built with modern technologies",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Modern Frameworks",
        "E-commerce Integration",
        "CMS Development"
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "WordPress", "Shopify"]
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: "📱",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization",
        "Backend Integration"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"]
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: "🎨",
      description: "User-centered design solutions that create meaningful experiences",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Miro"]
    },
    {
      id: 4,
      title: "Digital Marketing",
      icon: "📈",
      description: "Data-driven marketing strategies to grow your online presence",
      features: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Email Marketing",
        "Analytics & Reporting",
        "Conversion Optimization"
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "Mailchimp", "Hootsuite", "SEMrush"]
    },
    {
      id: 5,
      title: "Brand Identity",
      icon: "✨",
      description: "Complete brand identity solutions that make your business memorable",
      features: [
        "Logo Design",
        "Brand Strategy",
        "Visual Identity",
        "Brand Guidelines",
        "Marketing Materials",
        "Brand Messaging"
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Market Research"]
    },
    {
      id: 6,
      title: "Cloud Solutions",
      icon: "☁️",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: [
        "Cloud Migration",
        "DevOps Implementation",
        "Scalable Architecture",
        "Security Implementation",
        "Performance Monitoring",
        "Cost Optimization"
      ],
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"]
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$2,999",
      duration: "2-4 weeks",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Mobile-friendly design",
        "Contact form integration",
        "3 months support",
        "Google Analytics setup"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      duration: "4-8 weeks",
      description: "Ideal for growing businesses",
      features: [
        "15-page custom website",
        "Advanced SEO optimization",
        "E-commerce integration",
        "CMS implementation",
        "6 months support",
        "Performance optimization",
        "Social media integration",
        "Email marketing setup"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      duration: "8-16 weeks",
      description: "For large-scale projects",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Multi-language support",
        "12 months support",
        "Dedicated project manager",
        "Training sessions",
        "Priority support",
        "Custom reporting dashboard"
      ],
      popular: false
    }
  ];

  return (
    <div id="services" className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-nigga">
              What We Offer
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 font-chakka leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. 
              From concept to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-nigga text-gray-800">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-chakka">
              We offer a comprehensive suite of digital services designed to help your business thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveService(index)}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-lauda group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-chakka leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700 font-randi">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                  <div className="text-sm text-emerald-600 font-semibold font-randi">
                    +{service.features.length - 3} more features
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-randi">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{services[activeService]?.icon}</span>
                    <h2 className="text-3xl font-bold font-nigga">{services[activeService]?.title}</h2>
                  </div>
                  <button
                    onClick={() => setActiveService(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ✕
                  </button>
                </div>
                
                <p className="text-gray-600 text-lg mb-8 font-chakka leading-relaxed">
                  {services[activeService]?.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-lauda">What's Included</h3>
                    <div className="space-y-3">
                      {services[activeService]?.features.map((feature, i) => (
                        <div key={i} className="flex items-center font-chakka">
                          <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-lauda">Technologies We Use</h3>
                    <div className="flex flex-wrap gap-2">
                      {services[activeService]?.technologies.map((tech, i) => (
                        <span key={i} className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-lg font-randi">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <motion.button
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-lauda font-bold hover:bg-emerald-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Quote
                  </motion.button>
                  <motion.button
                    className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-lauda font-bold hover:bg-emerald-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-nigga text-gray-800">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-chakka">
              Flexible pricing options to fit your budget and requirements. All packages include our core quality guarantee.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-500 ${
                  pkg.popular 
                    ? 'border-emerald-500 transform scale-105' 
                    : 'border-gray-200 hover:border-emerald-300'
                } ${hoveredPackage === index ? 'shadow-2xl' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredPackage(index)}
                onHoverEnd={() => setHoveredPackage(null)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold font-lauda">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 font-lauda">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-2 font-nigga">{pkg.price}</div>
                  <p className="text-gray-500 font-randi">{pkg.duration}</p>
                  <p className="text-gray-600 mt-4 font-chakka">{pkg.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center font-chakka">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-3 rounded-lg font-lauda font-bold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-nigga text-gray-800">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-chakka">
              A streamlined approach that ensures quality results and client satisfaction at every step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We understand your business goals and requirements through detailed consultation."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We create a comprehensive plan and timeline tailored to your project needs."
              },
              {
                step: "03",
                title: "Design & Development",
                description: "Our team brings your vision to life with cutting-edge design and development."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We deploy your project and provide ongoing support to ensure continued success."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 font-lauda">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3 font-lauda group-hover:text-emerald-600 transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-600 font-chakka">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-nigga">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-chakka opacity-90">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-lauda font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-lauda font-bold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}