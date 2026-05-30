import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full border border-white/20 p-12 text-center">
        
        <FaCheckCircle className="text-green-600 text-8xl mx-auto mb-8" />

        <h1 className="text-xl text-green-400 md:text-3xl mb-6">
          Form Submitted Successfully!
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed">
          Thank you for reaching out.
          <br />
          I have received your message and will reply to you shortly.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 px-8 py-3 font-xl  text-blue-800 hover:underline"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}