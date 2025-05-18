export default function Nav() {
  return (
    <div className="text-gray-400 pt-2 pb-2 pl-4 pr-4 fixed top-0 w-full z-50 bg-blue-200/50 backdrop-blur-lg">
      <ul className="flex justify-between text-decoration-none">
        <li>Logo</li>
        <div className="flex gap-5 font-semibold">
          <li>
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
        </div>
      </ul>
    </div>
  );
}
