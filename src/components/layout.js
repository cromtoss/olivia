import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => {

  const linkStyle = `
    Hover:opacity-70
    text-sm
    sm:text-lg
  `;
 const logoStyle = `
    text-white 
    font-rammetto
    sm:text-base
    text-sm 
  `;

  return (
    <div>
      <nav className="flex sm:justify-between justify-around items-center bg-gray-600 lg:px-20 sm:px-6 py-8 text-gray-100">
        <h3 className={logoStyle}>Remembering Olivia</h3>
        <ul className="flex">
            <li className={linkStyle}><Link to="/">Home</Link></li>
            <li className={linkStyle}><Link to="/about">About</Link></li>
        </ul>
      </nav>
      
      <main>
        {children}
      </main>

      <footer className="text-center py-8 bg-gray-600 text-gray-100">
        <p>To contact the site administrators, click here.</p>
      </footer>

    </div>
  );
}

export default Layout