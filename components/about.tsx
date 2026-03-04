"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">Computer Science and Engineering</span> from the{" "}
        <span className="font-medium">University of Nevada, Reno</span>.
        I currently work as a{" "}
        <span className="font-medium">Project Manager and Software Developer</span> for AI Trusted Advisors,
        where I lead a small team of devlopers building tools like a{" "}
        <span className="font-medium">real-time voice AI assistant</span>. 
        <span className="italic"> My favorite part of programming</span> is the problem-solving process.
        I <span className="underline">love</span> the moment when a complex issue finally clicks and the solution comes together.
        I’m always exploring new tools and approaches to sharpen my skills, and I’m currently looking for a{" "}
        <span className="font-medium">full-time role in full-stack development or cybersecurity</span>.
      </p>

      <p>
        <span className="italic">When I’m not working</span>, I enjoy playing video games, playing guitar,
        watching movies, and spending time with my cats. I also have a passion for coding projects that are both fun and educational.
        I am currently working on a{" "}<span className="font-medium">personal project to build a home lab for cybersecurity practice</span>, which has been a great way to apply my skills and learn new ones in a hands-on environment.
        I plan on also learning about <span className="font-medium">AWS and cloud security</span> in the near future. I’m excited to see where my career takes me and to continue growing as a developer and cybersecurity professional.
      </p>
    </motion.section>
  );
}
