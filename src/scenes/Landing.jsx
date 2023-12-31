import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assets/profile-image.png"
const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-pink before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:-hue-rotate-15 hover:scale-105 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={profile}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={profile}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            April Kate {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush 
              before:absolute before:-left-[40px] before:-top-[90px] before:z-[-1]"
            >
              Pascual
            </span>
          </p>

          <p className="mt-10 mb-7 font-poppins text-sm text-center md:text-start">
            I have a deep passion for learning and growing in the field of computer science.
            I've always been captivated by technology, and have a strong desire to study more
            and advance my computer science career.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-custom-gradient bg-custom-bg-color text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 font-poppins"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <a
            className="rounded-r-sm bg-custom-gradient bg-custom-bg-color py-0.5 pr-0.5"
            href="https://drive.google.com/file/d/1cS4s5D_6VVfDrgJRn_QMwEVNzm4GpE8X/view?usp=sharing"
            target="_blank"  // Open in a new tab/window
            rel="noopener noreferrer"  // Recommended for security when using target="_blank"
          >
            <div className="bg-deep-blue hover:text-pink transition duration-500 w-full h-full flex items-center justify-center px-10 font-poppins">
              Resume
            </div>
          </a>

        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
