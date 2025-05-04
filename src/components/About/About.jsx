import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-kanit font-light text-white mb-2 leading-tight">
            {t("componentAbout.line1")}
          </h1>
          {/* Name */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-kanit font-light text-white mb-2 leading-tight">
            {t("componentAbout.line2")}
          </h2>
          {/* Skills Heading with Typing Effect */}
          {/* <h3 className="text-1xl sm:text-2xl md:text-3xl font-kanit font-light text-white mb-2 leading-tight">ผมเป็น</h3> */}
          <h3 className="text-xl sm:text-1xl md:text-2xl font-kanit font-bold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white font-kanit font-light">
              {t("componentAbout.line3")}
            </span>
            <ReactTypingEffect
              text={[
                "IT Support",
                "Android Apps Developer",
                "Python Developer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <div className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            <p className="indent-8 mb-2 font-kanit">
              {t("componentAbout.line4")}
            </p>

            <p className="indent-8 mb-2 font-kanit">
              {t("componentAbout.line5")}
            </p>

            <p className="indent-8 mb-2 font-kanit">
              {t("componentAbout.line6")}
            </p>

            <p className="indent-8 mb-2 font-kanit">
              {t("componentAbout.line7")}
            </p>

            <p className="indent-8 mb-10 font-kanit">
              {t("componentAbout.line8")}
            </p>

            <p className="indent-8 mb-2 font-kanit font-semibold">
              {t("componentAbout.line9")}
            </p>
          </div>
          <h4 className="text-white font-kanit font-light text-xl sm:text-1xl md:text-2xl mb-4 leading-tight">
            {t("componentAbout.line10")}
          </h4>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[42rem]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={false}
          >
            <img
              src={profileImage}
              alt="Tarun Kaushik"
              className="w-full h-full object-cover object-top rounded-b-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
