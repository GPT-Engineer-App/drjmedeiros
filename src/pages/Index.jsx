import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Heart, Newspaper, Camera } from 'lucide-react';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideInVariants = {
  hidden: (direction) => ({
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    opacity: 0
  }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const Index = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: workRef, inView: workInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.header
        className="py-8 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <nav className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold"
            variants={slideInVariants}
            custom="left"
          >
            João Medeiros
          </motion.h1>
          <motion.ul
            className="flex space-x-4"
            variants={slideInVariants}
            custom="right"
          >
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#work" className="hover:text-gray-300">Work</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </motion.ul>
        </nav>
      </motion.header>

      <motion.main
        className="px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <motion.section
          className="py-20"
          variants={slideInVariants}
          custom="up"
        >
          <motion.h2 
            className="text-5xl sm:text-7xl font-bold mb-8"
            variants={slideInVariants}
            custom="left"
          >
            Covering Health
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl"
            variants={slideInVariants}
            custom="right"
          >
            Journalist and storyteller passionate about uncovering the truth in healthcare and making complex topics accessible to all.
          </motion.p>
          <motion.div
            variants={slideInVariants}
            custom="up"
          >
            <a href="#work" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition duration-150 ease-in-out">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </motion.section>

        <motion.section
          id="about"
          className="py-20"
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={slideInVariants}
          custom="right"
        >
          <motion.h2
            className="text-4xl font-bold mb-8"
            variants={slideInVariants}
            custom="left"
          >
            About Me
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={fadeInVariants}
          >
            <motion.div variants={slideInVariants} custom="left">
              <motion.p className="text-lg mb-4" variants={slideInVariants} custom="up">
                With over a decade of experience in health journalism, I've dedicated my career to bringing important medical stories to light. My work spans from investigative pieces on healthcare systems to in-depth features on breakthrough treatments.
              </motion.p>
              <motion.p className="text-lg" variants={slideInVariants} custom="up">
                I believe in the power of storytelling to drive change and improve lives. Whether I'm interviewing leading researchers or patients on the frontlines of new therapies, my goal is always to inform, engage, and inspire.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex justify-center items-center"
              variants={slideInVariants}
              custom="right"
            >
              <img src="/placeholder.svg" alt="João Medeiros" className="rounded-full w-64 h-64 object-cover mx-auto" />
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          id="work"
          className="py-20"
          ref={workRef}
          initial="hidden"
          animate={workInView ? "visible" : "hidden"}
          variants={slideInVariants}
          custom="left"
        >
          <motion.h2
            className="text-4xl font-bold mb-8"
            variants={slideInVariants}
            custom="right"
          >
            Featured Work
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={fadeInVariants}
          >
            <WorkCard 
              icon={<Heart className="h-12 w-12 text-red-500" />}
              title="The Future of Cardiology"
              description="An in-depth look at emerging technologies in heart disease treatment."
              custom="up"
            />
            <WorkCard 
              icon={<Newspaper className="h-12 w-12 text-blue-500" />}
              title="Healthcare Policy Decoded"
              description="Breaking down complex healthcare legislation for the general public."
              custom="up"
            />
            <WorkCard 
              icon={<Camera className="h-12 w-12 text-green-500" />}
              title="Frontline Heroes"
              description="A photo essay showcasing healthcare workers during the pandemic."
              custom="up"
            />
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-20"
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={slideInVariants}
          custom="right"
        >
          <motion.h2
            className="text-4xl font-bold mb-8"
            variants={slideInVariants}
            custom="left"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            variants={slideInVariants}
            custom="right"
          >
            Interested in collaborating or have a story idea? I'd love to hear from you.
          </motion.p>
          <motion.a
            href="mailto:joao@example.com"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition duration-150 ease-in-out"
            variants={slideInVariants}
            custom="up"
          >
            Email Me
          </motion.a>
        </motion.section>
      </motion.main>

      <motion.footer
        className="py-8 px-4 sm:px-6 lg:px-8 text-center"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <p>&copy; 2023 João Medeiros. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

const WorkCard = ({ icon, title, description, custom }) => (
  <motion.div
    className="bg-gray-900 p-6 rounded-lg"
    variants={slideInVariants}
    custom={custom}
  >
    <motion.div className="mb-4" variants={fadeInVariants}>{icon}</motion.div>
    <motion.h3 className="text-xl font-semibold mb-2" variants={slideInVariants} custom="left">{title}</motion.h3>
    <motion.p variants={slideInVariants} custom="right">{description}</motion.p>
  </motion.div>
);

export default Index;
