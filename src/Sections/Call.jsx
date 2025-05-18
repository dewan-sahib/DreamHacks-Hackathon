import { useState } from "react";
// Assuming Field component is available and correctly implemented
// import Field from "./Field";

// Placeholder for the Field component for demonstration purposes
// In a real application, you would import your actual Field component
const Field = ({ name, placeHolder, updateField }) => {
  const fieldName = placeHolder.toLowerCase().replace(/\s/g, ''); // Generate a simple field name like 'fullname', 'email'
  return (
    <input
      type={fieldName === 'phone' || fieldName === 'availablity' ? 'text' : fieldName} // Simple type guess
      value={name}
      onChange={(e) => updateField({ e, field: fieldName })}
      placeholder={placeHolder}
      className="p-3 border border-blue-300 rounded-md w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
    />
  );
};


export default function Call() {
  // State to manage form fields
  const [fields, setFields] = useState({
    fullname: "", // Changed from name to fullname for clarity
    email: "",
    phone: "", // Changed null to empty string for input value
    availablity: "", // Changed null to empty string for input value
  });

  // State to manage the submission message visibility
  const [submitted, setSubmitted] = useState(false);

  // Function to update individual fields
  const updateField = ({ e, field }) => {
    setFields((prev) => ({ ...prev, [field]: e.target.value }));
    // Hide the submitted message when the user starts typing again
    setSubmitted(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted with data:", fields); // Log form data (replace with actual submission logic)
    // Display the submission message
    setSubmitted(true);
    // Optionally, clear the form fields after submission
    // setFields({ fullname: "", email: "", phone: "", availablity: "" });
  };

  return (
    // Main container with enhanced styling
    // Adjusted width classes: w-[95%] for mobile, md:w-3/4 for medium screens, lg:w-1/2 for large screens
    // Centered horizontally using mx-auto
    <div
      id="call"
      className="mt-[5%] mx-auto w-[95%] md:w-1 lg:w-1/2 flex flex-col items-center p-6 shadow-2xl rounded-xl bg-white border border-blue-100"
    >
      {/* Title section */}
      <p className="self-center md:w-full h-fit p-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white text-center text-2xl font-bold mb-6 shadow-md">
        Volunteer Support
      </p>
      {/* Icon/Image (assuming volunteer-icon.png exists) */}
      {/* Added margin-bottom for spacing */}
      <img
        src="volunteer-icon.png"
        className="self-center w-20 h-20 mb-6" // Adjusted size and added margin
        alt="Volunteer Support Icon"
        // Optional: Add an onError handler if the image might not load
        // onError={(e) => e.target.style.display = 'none'}
      />
      {/* Form fields container */}
      {/* Added gap and centered items */}
      <form onSubmit={handleSubmit} className="flex gap-4 flex-col justify-center items-center w-full">
        {/* Using the Field component for each input */}
        <Field
          name={fields["fullname"]}
          placeHolder="Full Name"
          updateField={updateField}
        />
        <Field
          name={fields["email"]}
          placeHolder="Email"
          updateField={updateField}
        />
        <Field
          name={fields["phone"]}
          placeHolder="Phone"
          updateField={updateField}
        />
        <Field
          name={fields["availablity"]}
          placeHolder="Availability" // Corrected typo
          updateField={updateField}
        />

        {/* Submit Button */}
        {/* Enhanced button styling with hover effects */}
        <button
          type="submit" // Changed to type="submit" for form submission
          className="p-3 mt-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-xl text-white w-full max-w-xs font-semibold shadow-md transition duration-200 ease-in-out transform hover:scale-105"
        >
          Submit
        </button>
      </form>

      {/* Submission success message */}
      {submitted && (
        <p className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center w-full max-w-sm">
          Thanks for filling the form! You will be contacted soon.
        </p>
      )}
    </div>
  );
}
