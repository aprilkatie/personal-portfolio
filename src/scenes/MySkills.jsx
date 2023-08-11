import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-pink">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 font-poppins">
          As a frontend developer with a passion for UI/UX design and quality assurance testing, I bring a versatile skill set to every project. These skills, honed over the last four years, include proficiency in specific technical tools and the strong soft skills essential for effective teamwork.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-pink before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills.png" />
          )}
        </div>
      </div>

     

    </section>
  );
};

export default MySkills;


