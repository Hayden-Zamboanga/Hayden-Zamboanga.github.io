import React from "react";
import { RiRobot2Line } from "react-icons/ri";
import { PiDesktop, PiNetwork } from "react-icons/pi";
import { FaRegLifeRing, FaChalkboardTeacher, FaRegFileCode } from "react-icons/fa";
import { LuGraduationCap, LuAudioLines } from "react-icons/lu";
import AWS from "@/public/AWS Project.jpg";
import homeLab from "@/public/Cybersecurity Home Lab.jpg";
import securityFeatures from "@/public/Security Features Project.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // { when I can add Secrets through hosting, I will add this back 
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const titles = [
  "Full-Stack Developer",
  "IT Support Technician",
  "Robotics Assistant",
] as const;

export const experiencesData = [
  {
  title: "Senior Lifeguard / Lifeguard",
  location: "Sacramento, CA",
  description:
    "Supervised aquatic facilities ensuring safety through accident prevention, first aid, and rescue techniques. Demonstrated leadership by instructing aquatic classes, mentoring staff, and coordinating team-based safety operations.",
  icon: React.createElement(FaRegLifeRing),
  date: "Summer 2021 – Summer 2022",
},
{
  title: "Audio/Visual Technician",
  location: "Reno, NV",
  description:
    "Provided technical support for conference room AV systems and complex live event production setups. Assisted in event coordination and ensured seamless execution of multimedia and presentation systems.",
  icon: React.createElement(LuAudioLines),
  date: "June 2023 – June 2025",
},
{
  title: "IT Technician",
  location: "Reno, NV",
  description:
    "Maintained and supported IT infrastructure across the Joe Crowley Student Union, including application support, administrative system management (Windows 10 & 11), troubleshooting, and hardware/software optimization. Automated workflows using Google Scripts and managed scheduling systems to improve operational efficiency.",
  icon: React.createElement(PiDesktop),
  date: "June 2023 – June 2025",
},
{
  title: "Robotics Assistant",
  location: "Reno, NV",
  description:
    "Collaborated with Nevada educational institutions and community partners to support robotics competitions and expand computer science education. Assisted teachers in integrating robotics and engineering concepts into classroom learning.",
  icon: React.createElement(RiRobot2Line),
  date: "June 2023 – June 2025",
},
{
  title: "Network Engineering & Support Intern",
  location: "Reno, NV",
  description:
    "Audited and documented network infrastructure including device efficiency, port usage, MAC/serial numbers, and topology diagrams from multiple points of presence. Utilized PuTTY, WinBox, and The Dude for data collection and integrated documentation into Sonar monitoring software.",
  icon: React.createElement(PiNetwork),
  date: "August 2024 – December 2024",
},
{
  title: "B.S. Computer Science & Engineering",
  location: "Reno, NV",
  description:
    "Graduated with a 3.9 GPA from the University of Nevada, Reno with a minor in Cybersecurity and Mathematics. Relevant coursework includes Data Structures, Analysis of Algorithms, and Database Management Systems. Was a member of the Cybersecurity Club and CompTIA Security+ certified.",
  icon: React.createElement(LuGraduationCap),
  date: "May 2025",
},
{
  title: "Educator – RECNT Program",
  location: "Reno, NV",
  description:
    "Educated Nevada teachers in digital forensics through the Research Experiences in Cybersecurity for Nevada Teachers (RECNT) program at the University of Nevada, Reno. Taught file carving, hashing, metadata analysis, and case study investigations using tools such as Magnet, Autopsy, and ExifTool, while assisting teachers in developing cybersecurity curriculum.",
  icon: React.createElement(FaChalkboardTeacher),
  date: "June 2025 – August 2025",
},
{
  title: "Project Manager & Developer",
  location: "Las Vegas, NV",
  description:
    "Lead a team of four developers across multiple concurrent projects, managing resources and timelines to ensure efficient delivery. Designed and built a voice AI assistant using LiveKit, OpenAI, Cartesia, and Deepgram, along with developing a B2B cold email generator to support client outreach initiatives.",
  icon: React.createElement(FaRegFileCode),
  date: "September 2025 – Present",
},
] as const;

export const projectsData = [
  {
    title: "Security Features",
    description:
      "A project that conatins various security features for websites and systems.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Python", "MySQL", "Google OAuth2", "ufw"],
    hyperlink: "https://github.com/Hayden-Zamboanga/Security-Features",
    imageUrl: securityFeatures,
  },
  {
    title: "Cybersecurity Home Lab",
    description:
      "A virtualized home lab environment for practicing cybersecurity techniques.",
    tags: ["VirtualBox", "Sophos UTM", "Snort", "pfSense", "Metasploit", "Ubuntu", "Kali Linux"],
    hyperlink: "https://github.com/Hayden-Zamboanga/Home-Lab",
    imageUrl: homeLab,
  },
  {
    title: "AWS Playground",
    description:
      "A project that explores AWS services to learn about cloud computing concepts like creating and managing AWS resources.",
    tags: ["AWS S3", "Python", "MySQL", "ML", "CI/CD Pipline", "Cloud Computing", "Docker"],
    hyperlink: "https://github.com/Hayden-Zamboanga/AWS-Playground",
    imageUrl: AWS,
  },
] as const;

export const skillsData = [
  "Python",
  "MySQL",
  "PostgreSQL",
  "C++",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
