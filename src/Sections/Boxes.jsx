import Box from "./Box.jsx";

export default function Boxes() {
  return (
    <div className="boxes flex flex-col md:flex-row justify-center gap-8 items-center w-full h-fit">
      <Box dimW={"100"} ikon="volunteer-icon.png" name="Volunteer Support" />
      <Box dimW={"120"} ikon="review-icon.png" name="Review" />
      <Box dimW={"150"} dimH={"100"} ikon="chat-icon.png" href="/chat" name="Chatbot" />
      <Box dimW={"83"} ikon="about-icon.png" name="About Us" />
    </div>
  );
}
