import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="flex-grow pt-24 flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 min-h-screen">
      <h1 className="text-6xl font-bold mb-6 animate-bounce">We'd Love to Hear from You! 📩</h1>
      <p className="text-xl mb-10 max-w-md text-center">
      <p className="text-xl text-white mb-10 max-w-md text-center font-bold">
  Got questions, feedback, or just want to chat? Fill out the form below, and let’s connect!
</p>
</p>

      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-300 hover:scale-105">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Name</label>
          <input 
            type="text" 
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500" 
            placeholder="Your Name" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Email</label>
          <input 
            type="email" 
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500" 
            placeholder="Your Email" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Message</label>
          <textarea 
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500" 
            rows={5} 
            placeholder="Your Message" 
            required 
          ></textarea>
        </div>
        <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300 transform hover:scale-105">
        <b>Send Message</b>
        </button>
      </form>

      <div className="mt-10 text-center">
       <div className="flex justify-center space-x-4 mt-2">
          
        </div>
      </div>
    </div>
  );
}
