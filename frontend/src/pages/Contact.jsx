import React, { useRef, useEffect, useState } from 'react';

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('story');
  const [visibleSection, setVisibleSection] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced team members with more details
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director & Co-Founder",
      image: "/images/team1.jpg",
      bio: "Leading creative vision with 10+ years of experience in digital design and brand strategy.",
      expertise: ["Brand Strategy", "UI/UX Design", "Creative Direction"],
      social: { linkedin: "#", twitter: "#", dribbble: "#" },
      quote: "Design is not just what it looks like - design is how it works."
    },
    {
      name: "Michael Chen",
      role: "Technical Lead & Co-Founder",
      image: "/images/team2.jpg",
      bio: "Full-stack developer passionate about scalable architecture and emerging technologies.",
      expertise: ["React/Node.js", "Cloud Architecture", "DevOps"],
      social: { linkedin: "#", github: "#", twitter: "#" },
      quote: "Code is poetry written in logic and creativity."
    },
    {
      name: "Emma Davis",
      role: "Strategy Consultant",
      image: "/images/team3.jpg",
      bio: "Helping businesses transform through digital solutions and data-driven strategies.",
      expertise: ["Digital Strategy", "Analytics", "Project Management"],
      social: { linkedin: "#", twitter: "#" },
      quote: "Strategy without execution is hallucination."
    },
    {
      name: "Alex Rodriguez",
      role: "Senior Designer",
      image: "/images/team4.jpg",
      bio: "Crafting beautiful and functional user experiences with attention to every detail.",
      expertise: ["Motion Design", "Prototyping", "Design Systems"],
      social: { dribbble: "#", behance: "#", instagram: "#" },
      quote: "Good design is invisible, great design is unforgettable."
    },
    {
      name: "Lisa Wong",
      role: "Marketing Strategist",
      image: "/images/team5.jpg",
      bio: "Building brand stories that connect with audiences and drive meaningful engagement.",
      expertise: ["Content Strategy", "SEO/SEM", "Social Media"],
      social: { linkedin: "#", twitter: "#" },
      quote: "Marketing is no longer about the stuff you make, but the stories you tell."
    },
    {
      name: "David Kim",
      role: "Frontend Developer",
      image: "/images/team6.jpg",
      bio: "Bringing designs to life with modern web technologies and performance optimization.",
      expertise: ["React/Vue.js", "TypeScript", "Performance"],
      social: { github: "#", linkedin: "#" },
      quote: "The best code is code that doesn't need to be written."
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", description: "Successful launches across industries" },
    { number: "50+", label: "Happy Clients", description: "Long-term partnerships built on trust" },
    { number: "5+", label: "Years Experience", description: "Proven track record of excellence" },
    { number: "24/7", label: "Support Available", description: "Always here when you need us" }
  ];

  const milestones = [
    { year: "2019", title: "Founded ATHER", description: "Started with a vision to transform digital experiences" },
    { year: "2020", title: "First Major Client", description: "Landed our breakthrough project with TechCorp" },
    { year: "2021", title: "Team Expansion", description: "Grew to 10+ talented professionals" },
    { year: "2022", title: "Award Recognition", description: "Won 'Best Digital Agency' at Industry Awards" },
    { year: "2023", title: "Global Reach", description: "Expanded services to international markets" },
    { year: "2024", title: "Innovation Lab", description: "Launched R&D division for emerging technologies" }
  ];

  const tabContent = {
    story: {
      title: "Our Story",
      content: `Founded in 2019 by Sarah Johnson and Michael Chen, ATHER began as a small creative studio with big dreams. What started as late-night conversations about the future of digital experiences has evolved into a thriving agency that partners with businesses worldwide.

      Our journey hasn't always been smooth, but every challenge has made us stronger and more innovative. We've learned that the best solutions come from understanding not just what our clients need, but why they need it.

      Today, we're proud to be a team of passionate creators, strategists, and technologists who believe that great digital experiences can change the world.`
    },
    culture: {
      title: "Our Culture",
      content: `At ATHER, we believe that great work comes from great people working in an environment where they can thrive. We've built a culture based on trust, creativity, and mutual respect.

      We encourage experimentation, celebrate failures as learning opportunities, and always push each other to grow. Our team isn't just colleagues – we're a family of creators who genuinely care about each other's success.

      Remote-first, flexible schedules, unlimited learning budgets, and quarterly team retreats are just a few ways we invest in our people.`
    },
    process: {
      title: "Our Process",
      content: `Our proven 5-phase process ensures every project is delivered on time, on budget, and exceeds expectations:

      **Discovery**: We dive deep into your business, goals, and challenges
      **Strategy**: We develop a comprehensive plan tailored to your needs  
      **Design**: We create beautiful, functional experiences that users love
      **Development**: We build with the latest technologies and best practices
      **Launch & Support**: We ensure a smooth launch and provide ongoing support`
    }
  };

  return (
    <div id="about" className="relative bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-3000"></div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About ATHER
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We are a creative digital agency dedicated to transforming ideas into extraordinary digital experiences. 
                  Our passion lies in crafting innovative solutions that drive business growth and create lasting impact.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Our Story
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                  Join Us
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5+</div>
                  <div className="text-gray-600">Years</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that tell our story of growth, excellence, and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 group-hover:shadow-lg transition-all duration-300">
                  <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                To empower businesses with cutting-edge digital solutions that drive innovation, 
                enhance user experiences, and create meaningful connections between brands and their audiences.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <span className="text-lg font-semibold">Purpose-Driven Solutions</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                To be the leading creative digital agency that shapes the future of digital experiences, 
                setting new standards for innovation, creativity, and client success in the digital landscape.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <span className="text-lg font-semibold">Future-Forward Thinking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive About Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Get to Know Us Better
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our journey, culture, and the process that makes us unique.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-bold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                {tabContent[activeTab].title}
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                {tabContent[activeTab].content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 last:mb-0">
                    {paragraph.includes('**') ? (
                      <span dangerouslySetInnerHTML={{
                        __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      }} />
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and evolution.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 mr-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of creative professionals brings together unique perspectives 
              and expertise to deliver exceptional results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  {/* Social Icons Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        {platform === 'linkedin' && '💼'}
                        {platform === 'twitter' && '🐦'}
                        {platform === 'github' && '💻'}
                        {platform === 'dribbble' && '🎨'}
                        {platform === 'behance' && '🎭'}
                        {platform === 'instagram' && '📷'}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-500 italic text-sm border-l-4 border-blue-200 pl-4">
                    "{member.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation",
                description: "We constantly push boundaries and explore new possibilities in digital technology, staying ahead of trends and pioneering solutions.",
                color: "from-blue-400 to-blue-600"
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "We believe in the power of teamwork and building strong partnerships with our clients, fostering open communication and shared success.",
                color: "from-green-400 to-green-600"
              },
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for perfection in every project, delivering quality that exceeds expectations and sets new industry standards.",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: "💡",
                title: "Creativity",
                description: "We bring fresh perspectives and creative solutions to every challenge, thinking outside the box to deliver unique experiences.",
                color: "from-yellow-400 to-orange-600"
              },
              {
                icon: "🌱",
                title: "Growth",
                description: "We are committed to continuous learning and helping our clients achieve sustainable growth through strategic digital transformation.",
                color: "from-emerald-400 to-emerald-600"
              },
              {
                icon: "❤️",
                title: "Passion",
                description: "We love what we do and bring enthusiasm and dedication to every project, treating each challenge as an opportunity to excel.",
                color: "from-rose-400 to-rose-600"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-gray-50 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Get in touch and let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start a Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}