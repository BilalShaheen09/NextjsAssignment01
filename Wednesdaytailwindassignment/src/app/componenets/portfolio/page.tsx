"use client";
import { useState } from "react";
import Link from "next/link";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "JavaScript",
        description: "Proficient in modern JavaScript (ES6+) for building interactive web applications.",
        icon: "🔧",
        level: 90,
        projectLink: "/projects/javascript",
      },
      {
        name: "React",
        description: "Skilled in building dynamic user interfaces with React and related libraries.",
        icon: "⚛️",
        level: 85,
        projectLink: "/projects/react",
      },
      {
        name: "CSS & Tailwind CSS",
        description: "Expertise in styling web applications using CSS and Tailwind CSS for utility-first design.",
        icon: "🎨",
        level: 80,
        projectLink: "/projects/css",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        description: "Familiar with building RESTful APIs and back-end services using Node.js.",
        icon: "🌐",
        level: 75,
        projectLink: "/projects/node",
      },
      {
        name: "Express.js",
        description: "Experience with Express.js for building web applications and APIs.",
        icon: "📡",
        level: 70,
        projectLink: "/projects/express",
      },
    ],
  },
  {
    category: "DevOps",
    skills: [
      {
        name: "Docker",
        description: "Knowledge of containerization using Docker for deployment and environment management.",
        icon: "🐳",
        level: 65,
        projectLink: "/projects/docker",
      },
      {
        name: "AWS",
        description: "Experience with Amazon Web Services for cloud computing solutions.",
        icon: "☁️",
        level: 60,
        projectLink: "/projects/aws",
      },
    ],
  },
];

const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
      <div className="mb-6">
        <button onClick={() => handleCategoryChange("All")} className="mx-2 bg-[#B99470] hover:bg-[#C5705D] text-white py-2 px-4 rounded">
          All
        </button>
        {skillsData.map((category) => (
          <button
            key={category.category}
            onClick={() => handleCategoryChange(category.category)}
            className="mx-2 bg-[#B99470] hover:bg-[#C5705D] text-white py-2 px-4 rounded"
          >
            {category.category}
          </button>
        ))}
      </div>
      <div className="max-w-2xl w-full">
        {skillsData.map((category) =>
          (selectedCategory === "All" || selectedCategory === category.category) ? (
            <div key={category.category} className="mb-8">
              <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-4">{category.category}</h2>
              {category.skills.map((skill, idx) => (
                <div key={idx} className="bg-white shadow-md rounded-lg p-4 mb-4 transition-transform transform hover:scale-105 animate-fadeIn">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <h3 className="text-2xl font-semibold text-[#4A4A4A]">{skill.name}</h3>
                  </div>
                  <p className="text-gray-600 mt-2">{skill.description}</p>
                  <div className="mt-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#B99470] h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{skill.level}% Proficiency</p>
                  </div>
                  <Link href={skill.projectLink} className="text-[#B99470] hover:underline mt-2 block">
                    View Project
                  </Link>
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>
      <Link href="/" className="mt-8 bg-[#B99470] hover:bg-[#C5705D] text-white font-bold py-2 px-4 rounded">
        Go Back Home 🌍
      </Link>
    </div>
  );
};

export default SkillsPage;
