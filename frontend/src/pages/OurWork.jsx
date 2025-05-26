import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OurWork() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['all', 'web design', 'mobile app', 'branding', 'e-commerce'];

  const projects = [
    {
      id: 1,
      title: "TechCorp Website Redesign",
      category: "web design",
      image: "/images/project1.jpg",
      description: "Complete website overhaul for a leading technology company, focusing on modern UX/UI design.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      client: "TechCorp Inc.",
      year: "2024",
      link: "https://example.com"
    },
    {
      id: 2,
      title: "FitTracker Mobile App",
      category: "mobile app",
      image: "/images/project2.jpg",
      description: "Comprehensive fitness tracking application with real-time analytics and social features.",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      client: "FitLife Solutions",
      year: "2024",
      link: "https://example.com"
    },
    {
      id: 3,
      title: "GreenEarth Brand Identity",
      category: "branding",
      image: "/images/project3.jpg",
      description: "Complete brand identity design for an environmental sustainability company.",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
      client: "GreenEarth Co.",
      year: "2023",
      link: "https://example.com"
    },
    {
      id: 4,
      title: "ShopSmart E-commerce Platform",
      category: "e-commerce",
      image: "/images/project4.jpg",
      description: "Full-featured e-commerce platform with advanced payment integration and inventory management.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      client: "ShopSmart Ltd.",
      year: "2024",
      link: "https://example.com"
    },
    {
      id: 5,
      title: "ArtGallery Portfolio Website",
      category: "web design",
      image: "/images/project5.jpg",
      description: "Elegant portfolio website for contemporary art gallery with immersive gallery experience.",
      technologies: ["Three.js", "React", "GSAP", "WebGL"],
      client: "Modern Art Gallery",
      year: "2023",
      link: "https://example.com"
    },
    {
      id: 6,
      title: "FoodieApp Mobile Experience",
      category: "mobile app",
      image: "/images/project6.jpg",
      description: "Social food discovery app with AR menu scanning and restaurant recommendations.",
      technologies: ["Flutter", "ARCore", "Firebase", "Google Maps API"],
      client: "Foodie Network",
      year: "2024",
      link: "https://example.com"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div id="ourwork" className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-nigga">
              Our Creative Projects
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 font-chakka leading-relaxed">
              Discover our portfolio of innovative digital solutions that have transformed 
              businesses and created exceptional user experiences across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-lauda font-bold capitalize transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                  layout
                >
                  <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white opacity-50">
                        {project.id}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-randi capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-lauda group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 font-chakka line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-randi">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-randi">
                          +{project.technologies.length - 2} more
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500 font-randi">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-indigo-400 to-purple-400 relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  ✕
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-white opacity-30">
                    {selectedProject.id}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-randi capitalize mb-4 inline-block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold mb-4 font-nigga">{selectedProject.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-chakka">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-lauda">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg font-randi">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-lauda">Project Details</h3>
                    <div className="space-y-2 font-chakka">
                      <p><span className="font-semibold">Client:</span> {selectedProject.client}</p>
                      <p><span className="font-semibold">Year:</span> {selectedProject.year}</p>
                      <p><span className="font-semibold">Category:</span> {selectedProject.category}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-lauda font-bold hover:bg-indigo-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live Project
                  </motion.a>
                  <motion.button
                    className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-lauda font-bold hover:bg-indigo-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Case Study
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-nigga">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-chakka opacity-90">
              Let's collaborate to bring your vision to life with innovative design and cutting-edge technology.
            </p>
            <motion.button
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-lauda font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}