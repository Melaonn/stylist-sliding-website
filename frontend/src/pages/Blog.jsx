import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = ['all', 'design', 'development', 'strategy', 'insights'];

  const posts = [
    {
      id: 1,
      title: "The Future of Web Design: Trends to Watch in 2024",
      category: "design",
      excerpt: "Discover the emerging design trends that are shaping the digital landscape and how they can transform your user experience.",
      author: "Sarah Johnson",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/images/blog1.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      tags: ["UI/UX", "Trends", "Design"]
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      category: "development",
      excerpt: "Learn the essential patterns and practices for creating maintainable and scalable React applications that grow with your business.",
      author: "Michael Chen",
      date: "May 10, 2024",
      readTime: "8 min read",
      image: "/images/blog2.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      tags: ["React", "JavaScript", "Architecture"]
    },
    {
      id: 3,
      title: "Digital Transformation: A Strategic Approach",
      category: "strategy",
      excerpt: "How to successfully navigate digital transformation and leverage technology to drive business growth and innovation.",
      author: "Emma Davis",
      date: "May 5, 2024",
      readTime: "6 min read",
      image: "/images/blog3.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      tags: ["Strategy", "Business", "Innovation"]
    },
    {
      id: 4,
      title: "The Psychology of User Experience Design",
      category: "insights",
      excerpt: "Understanding user behavior and psychological principles to create more engaging and intuitive digital experiences.",
      author: "Sarah Johnson",
      date: "April 28, 2024",
      readTime: "7 min read",
      image: "/images/blog4.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      tags: ["Psychology", "UX", "Research"]
    },
    {
      id: 5,
      title: "Mobile-First Development: Why It Matters",
      category: "development",
      excerpt: "The importance of mobile-first approach in modern web development and how it impacts user engagement and SEO.",
      author: "Michael Chen",
      date: "April 20, 2024",
      readTime: "4 min read",
      image: "/images/blog5.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      tags: ["Mobile", "Responsive", "SEO"]
    },
    {
      id: 6,
      title: "Building Brand Identity in the Digital Age",
      category: "design",
      excerpt: "Creating compelling brand experiences that resonate with your audience across all digital touchpoints.",
      author: "Emma Davis",
      date: "April 15, 2024",
      readTime: "6 min read",
      image: "/images/blog6.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      tags: ["Branding", "Identity", "Digital"]
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div id="blog" className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-rose-600 via-pink-600 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-nigga">
              Our Insights
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 font-chakka leading-relaxed">
              Stay ahead of the curve with our latest thoughts on design, development, 
              and digital strategy. Insights that inspire innovation.
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
                    ? 'bg-rose-600 text-white shadow-lg'
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

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedPost(post)}
                  layout
                >
                  <div className="aspect-video bg-gradient-to-br from-rose-100 to-orange-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-orange-400 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white opacity-50">
                        {post.id}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-randi capitalize">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 font-lauda group-hover:text-rose-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 font-chakka line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-randi">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500 font-randi">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1 font-randi">
                      {post.date}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-rose-400 to-orange-400 relative">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  ✕
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-white opacity-30">
                    {selectedPost.id}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-randi capitalize mb-4 inline-block">
                    {selectedPost.category}
                  </span>
                  <h1 className="text-3xl font-bold mb-4 font-nigga">{selectedPost.title}</h1>
                  <div className="flex items-center gap-4 text-gray-600 mb-6 font-randi">
                    <span>By {selectedPost.author}</span>
                    <span>•</span>
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed font-chakka mb-6">
                    {selectedPost.excerpt}
                  </p>
                </div>

                <div className="prose max-w-none mb-8">
                  <p className="font-chakka leading-relaxed">
                    {selectedPost.content}
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-bold mb-3 font-lauda">Tags</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedPost.tags.map((tag, i) => (
                      <span key={i} className="bg-rose-100 text-rose-700 px-3 py-2 rounded-lg font-randi">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    className="bg-rose-600 text-white px-6 py-3 rounded-lg font-lauda font-bold hover:bg-rose-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Share Article
                  </motion.button>
                  <motion.button
                    className="border-2 border-rose-600 text-rose-600 px-6 py-3 rounded-lg font-lauda font-bold hover:bg-rose-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Related Posts
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-nigga">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-chakka opacity-90">
              Subscribe to our newsletter and never miss our latest insights, tips, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 font-chakka"
              />
              <motion.button
                className="bg-white text-rose-600 px-6 py-3 rounded-lg font-lauda font-bold hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}