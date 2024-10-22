import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="relative bg-[#7F00FF] h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/new-background.jpg')] bg-cover bg-center opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-6xl py-10 font-extrabold text-white shadow-lg animate-bounce">
          Welcome to My Website
        </h1>

        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          <strong>Explore Our Insights Through Blogging!</strong> 📝 Dive into a treasure trove of knowledge with our blog, where we share the latest trends, tips, and best practices in web development, design, and digital marketing. Our expert team is dedicated to delivering valuable content that sparks creativity and equips you with essential tools for success. Whether you’re seeking practical advice to enhance your online presence, innovative design techniques, or effective marketing strategies, our blog is your ultimate resource. Join our vibrant community of enthusiastic learners and stay ahead of the curve by subscribing for updates. Together, let's unlock fresh ideas and propel your projects forward!
        </p>

        {/* Portfolio Button */}
        <Link href="/portfolio">
          <button className="bg-[#03a9f4] hover:bg-[#DE3163] text-white py-4 px-8 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105">
            <b>Portfolio Page</b>
          </button>
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#A6B37D] to-transparent"></div>

      {/* Heart Image */}
      <div className="absolute right-10 top-10 opacity-20 animate-pulse">
        <img
          src="https://media.istockphoto.com/id/1373025787/vector/heart-symbol-and-house-affection-vectors.jpg?s=612x612&w=0&k=20&c=s6SEEYtkZtVWXlBTBm4Tp9jWooctYGOGxxUooB_gnaY="
          alt="Heart Icon"
          className="w-24 h-auto"
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="animate-pulse w-1 h-1 bg-white rounded-full absolute" style={{ top: '30%', left: '25%' }} />
        <div className="animate-pulse w-1 h-1 bg-white rounded-full absolute" style={{ top: '50%', left: '70%' }} />
        <div className="animate-pulse w-1 h-1 bg-white rounded-full absolute" style={{ top: '70%', left: '40%' }} />
        <div className="animate-pulse w-1 h-1 bg-white rounded-full absolute" style={{ top: '20%', left: '85%' }} />
      </div>
    </div>
  );
};

export default Home;
