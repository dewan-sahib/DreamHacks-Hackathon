// src/components/Box.jsx

const Box = ({ ikon, dimW, name, href }) => {
  // Use 'a' tag if href is present for better accessibility and SEO for links
  const Tag = href ? 'a' : 'div';

  return (
    <Tag
      href={href}
      className={`
        group // Added for potential group-hover states if needed later
        relative 
        flex flex-col items-center justify-center 
        w-[80%] sm:w-[60%] md:w-[240px] lg:w-[260px] // More responsive and fixed medium+ widths
        min-h-[200px] // Ensures a minimum height for consistency
        p-6 sm:p-8 // Responsive padding
        text-center
        bg-sky-50 // A very light blue base background
        rounded-xl // Slightly larger rounding
        shadow-lg // A nice starting shadow
        hover:shadow-2xl // More pronounced shadow on hover
        transform // Enable transforms
        hover:-translate-y-2 // Subtle lift effect on hover
        // Smooth transitions for multiple properties
        transition-all duration-300 ease-in-out
        cursor-pointer // Indicate it's clickable (especially if it's a div acting like a button)
      `}
    >
      <div 
        className="
          mb-5 p-4 // Padding around the icon
          bg-sky-500 // A vibrant blue background for the icon
          rounded-full // Make the icon background circular
          inline-block // To make the circle wrap the icon
          transition-all duration-300 ease-in-out
          group-hover:bg-sky-600 // Darken icon background on box hover
        "
      >
        <img
          width={dimW || "50"} // Default icon width, adjust as needed
          height={dimW || "50"} // Assuming square icons, adjust as needed
          className="
            filter brightness-0 invert // This will make a black icon white, suitable for dark backgrounds
            // If your icons are already white or a light color, you might remove or adjust this filter
            // For colored SVGs, you might pass className to SVG and use fill-current
          "
          src={ikon} // e.g., "/icons/volunteer-icon.svg"
          alt={`${name} icon`}
        />
      </div>
      <p className="text-xl font-semibold text-sky-800">
        {name}
      </p>
      {/* Optional: Add a short description if you like */}
      {/* <p className="text-sm text-sky-600 mt-1">A short description here.</p> */}
    </Tag>
  );
};

export default Box;