import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Newspaper, Camera } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-8 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">João Medeiros</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#work" className="hover:text-gray-300">Work</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="px-4 sm:px-6 lg:px-8">
        <section className="py-20">
          <motion.h2 
            className="text-5xl sm:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Covering Health
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Journalist and storyteller passionate about uncovering the truth in healthcare and making complex topics accessible to all.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#work" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition duration-150 ease-in-out">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                With over a decade of experience in health journalism, I've dedicated my career to bringing important medical stories to light. My work spans from investigative pieces on healthcare systems to in-depth features on breakthrough treatments.
              </p>
              <p className="text-lg">
                I believe in the power of storytelling to drive change and improve lives. Whether I'm interviewing leading researchers or patients on the frontlines of new therapies, my goal is always to inform, engage, and inspire.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img src="/placeholder.svg" alt="João Medeiros" className="rounded-full w-64 h-64 object-cover mx-auto" />
            </div>
          </div>
        </section>

        <section id="work" className="py-20">
          <h2 className="text-4xl font-bold mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WorkCard 
              icon={<Heart className="h-12 w-12 text-red-500" />}
              title="The Future of Cardiology"
              description="An in-depth look at emerging technologies in heart disease treatment."
            />
            <WorkCard 
              icon={<Newspaper className="h-12 w-12 text-blue-500" />}
              title="Healthcare Policy Decoded"
              description="Breaking down complex healthcare legislation for the general public."
            />
            <WorkCard 
              icon={<Camera className="h-12 w-12 text-green-500" />}
              title="Frontline Heroes"
              description="A photo essay showcasing healthcare workers during the pandemic."
            />
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8">
            Interested in collaborating or have a story idea? I'd love to hear from you.
          </p>
          <a href="mailto:joao@example.com" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition duration-150 ease-in-out">
            Email Me
          </a>
        </section>
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2023 João Medeiros. All rights reserved.</p>
      </footer>
    </div>
  );
};

const WorkCard = ({ icon, title, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Index;
