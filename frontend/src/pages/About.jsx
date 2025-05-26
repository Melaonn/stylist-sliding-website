import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "/images/team1.jpg",
      bio: "Leading creative vision with 10+ years of experience"
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      image: "/images/team2.jpg",
      bio: "Full-stack developer passionate about innovation"
    },
    {
      name: "Emma Davis",
      role: "Strategy Consultant",
      image: "/images/team3.jpg",
      bio: "Helping businesses transform through digital solutions"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div id="about" className="relative bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-nigga bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About ATHER
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-chakka leading-relaxed">
                We are a creative digital agency dedicated to transforming ideas into extraordinary digital experiences. 
                Our passion lies in crafting innovative solutions that drive business growth and create lasting impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-lauda font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Story
                </motion.button>
                <motion.button 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-lauda font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Us
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/about-hero.jpg" 
                  alt="About Us"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 font-nigga">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-lauda">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 font-nigga">Our Mission</h2>
              <p className="text-xl leading-relaxed font-chakka opacity-90">
                To empower businesses with cutting-edge digital solutions that drive innovation, 
                enhance user experiences, and create meaningful connections between brands and their audiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 font-nigga">Our Vision</h2>
              <p className="text-xl leading-relaxed font-chakka opacity-90">
                To be the leading creative digital agency that shapes the future of digital experiences, 
                setting new standards for innovation, creativity, and client success in the digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-chakka">
              Our diverse team of creative professionals brings together unique perspectives 
              and expertise to deliver exceptional results for every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-lauda">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3 font-randi">{member.role}</p>
                  <p className="text-gray-600 font-chakka">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation",
                description: "We constantly push boundaries and explore new possibilities in digital technology."
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "We believe in the power of teamwork and building strong partnerships with our clients."
              },
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for perfection in every project, delivering quality that exceeds expectations."
              },
              {
                icon: "💡",
                title: "Creativity",
                description: "We bring fresh perspectives and creative solutions to every challenge we encounter."
              },
              {
                icon: "🌱",
                title: "Growth",
                description: "We are committed to continuous learning and helping our clients achieve sustainable growth."
              },
              {
                icon: "❤️",
                title: "Passion",
                description: "We love what we do and bring enthusiasm and dedication to every project."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-lauda">{value.title}</h3>
                <p className="text-gray-600 font-chakka">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}