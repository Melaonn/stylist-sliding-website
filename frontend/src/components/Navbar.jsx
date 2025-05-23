import { Link } from 'react-scroll'

export default function Navbar() {
  const navItems = ['home', 'about', 'our work', 'services', 'blog', 'gallery', 'contact']
  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">BizName</h1>
        <div className="space-x-4 hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.replace(" ", "")}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="capitalize cursor-pointer text-gray-600 hover:text-blue-600 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
