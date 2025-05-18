import React from 'react';

export default function Nav() {
  return (
    // Changed text-gray-400 to text-white for theme consistency
    <div className="text-white pt-2 pb-2 pl-4 pr-4 fixed top-0 w-full z-50 bg-blue-700">
      <ul className="flex justify-between items-center text-decoration-none"> {/* Added items-center for vertical alignment */}
        {/* Logo now also uses the white text color */}
        <li>Logo</li>
        <div className="flex gap-5 font-semibold">
          <li>
            {/* Hover remains blue-600, which fits the theme */}
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#help" className="hover:text-blue-600">
              Call
            </a>
          </li>
          <li>
            <a href="/chat" className="hover:text-blue-600">
              Chat with Bot
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}