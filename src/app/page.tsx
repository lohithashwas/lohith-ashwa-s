"use client"

import { BackgroundPaths } from "@/components/ui/background-paths"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { SplineScene } from "@/components/ui/splite"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { CertificateModal } from "@/components/ui/certificate-modal"
import { Home, User, Briefcase, FileText, Linkedin, Youtube, Mail, Cpu, Wind, Activity, Droplets, HeartPulse, Rocket, Zap, Globe, Maximize2, Award, GraduationCap } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

export default function Portfolio() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: FileText },
    { name: 'Hackathons', url: '#hackathons', icon: Award },
    { name: 'Certifications', url: '#certifications', icon: GraduationCap },
    { name: 'Contact', url: '#contact', icon: User }
  ]

  const experiences = [
    {
      id: 1,
      role: "Intern",
      company: "Hyundai Motor India Ltd.",
      period: "Dec 2024 - Jan 2025 · 2 mos",
      location: "Sriperumbudur, Tamil Nadu, India",
      description: "Design for Manufacturing, Manufacturing and +7 skills",
      image: "/images/cert_hyundai.png",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg",
      color: "bg-white text-black"
    },
    {
      id: 2,
      role: "Internet of Things (IoT) Intern",
      company: "TANSAM Center of Excellence",
      period: "Jul 2025 - Aug 2025 · 2 mos",
      location: "Chennai, Tamil Nadu",
      description: "Embedded Systems, Internet of Things (IoT) and +8 skills",
      image: "/images/cert_tansam_iot.png",
      logo: "/images/logo_tansam.png",
      color: "bg-blue-500 text-white"
    },
    {
      id: 3,
      role: "Embedded Systems Intern",
      company: "TANSAM Center of Excellence",
      period: "Sep 2025 - Oct 2025 · 2 mos",
      location: "Chennai, Tamil Nadu",
      description: "Embedded Systems, Internet of Things (IoT) and +9 skills",
      image: "/images/cert_tansam_embedded.jpg",
      logo: "/images/logo_tansam.png",
      color: "bg-blue-500 text-white"
    },
    {
      id: 4,
      role: "Mentor & Mentee",
      company: "RACE SVCE",
      period: "Jul 2024 - Present",
      location: "Sriperumbudur, Tamil Nadu",
      description: "Full-time · 1 yr 5 mos",
      image: null,
      logo: "/images/logo_race.png",
      color: "bg-red-600 text-white"
    }
  ]

  const projects = [
    {
      title: "Smart Tourist Safety Monitoring & Incident Response System",
      description: "An AI-powered safety system using geo-fencing and blockchain-based digital ID to monitor tourist locations, detect incidents in real-time, and provide emergency response coordination.",
      icon: Globe
    },
    {
      title: "Automatic Agricultural Bot",
      description: "A smart farming robot that automates irrigation, fertilization, pest detection, and plant health monitoring using sensors, AI, and mobility features.",
      icon: Cpu
    },
    {
      title: "Tunnel Booster Fan Control System",
      description: "A safety system for tunnels that monitors air quality and automatically operates booster fans to remove toxic gases and maintain safe ventilation for workers and vehicles.",
      icon: Wind
    },
    {
      title: "AI-based Remote Plant Monitoring System",
      description: "An advanced agricultural monitoring system using AI to detect diseases, nutrient deficiencies, and pests in crops remotely, enabling early intervention and better crop management.",
      icon: Activity
    },
    {
      title: "RO Water Re-mineralization System",
      description: "A system that reintroduces essential minerals into RO-purified water using controlled dosing and water quality sensors, enhancing the health benefits of drinking water.",
      icon: Droplets
    },
    {
      title: "Fetal Health Monitoring System",
      description: "A healthcare device that monitors fetal heart rate and maternal health parameters using sensors and IoT to help ensure safe pregnancy outcomes.",
      icon: HeartPulse
    }
  ]

  const hackathons = [
    {
      id: 1,
      name: "BLUEPRINTS 2025",
      image: "/images/hackathons/BLUEPRINTS 2025.jpg"
    },
    {
      id: 2,
      name: "CHEMINNOTHON'24",
      image: "/images/hackathons/CHEMINNOTHON'24.jpg"
    },
    {
      id: 3,
      name: "HACKELITE'25",
      image: "/images/hackathons/HACKELITE'25.jpg"
    },
    {
      id: 4,
      name: "HACKELITE",
      image: "/images/hackathons/HACKELITE.jpg"
    },
    {
      id: 5,
      name: "HACKINFINITY",
      image: "/images/hackathons/HACKINFINITY.jpg"
    },
    {
      id: 6,
      name: "HIDDEN LEAF HACKATHON 2025",
      image: "/images/hackathons/HIDDEN LEAF HACAKTHON 2025.jpg"
    },
    {
      id: 7,
      name: "Hack the Horizon 2.0",
      image: "/images/hackathons/Hack the Horizon 2.0.jpg"
    },
    {
      id: 8,
      name: "MAKE-A-THON 6.0",
      image: "/images/hackathons/MAKE-A-THON 6.0.jpg"
    },
    {
      id: 9,
      name: "ROTA-TECHX",
      image: "/images/hackathons/ROTA-TECHX.jpg"
    },
    {
      id: 10,
      name: "SIH INTERNALS 2025",
      image: "/images/hackathons/SIH INTERNALS 2025.jpg"
    },
    {
      id: 11,
      name: "THE THIRD EDITION OF iCUBE",
      image: "/images/hackathons/THE THIRD EDITION OF iCUBE.jpg"
    },
    {
      id: 12,
      name: "Arduino Project-A-Thon",
      image: "/images/hackathons/Arduino Project -A-Thon.jpg"
    }
  ]

  const certifications = [
    { id: 1, name: "AWS S3 BASICS", image: "/images/certifications/AWS S3 BASICS_1.jpg" },
    { id: 2, name: "Assets, Threats, and Vulnerabilities", image: "/images/certifications/Assets, Threats, and Vulnerabilities_1.jpg" },
    { id: 3, name: "Automate Cybersecurity Tasks with Python", image: "/images/certifications/Automate Cybersecurity Tasks with Python_1.jpg" },
    { id: 4, name: "Automating Real-World Tasks with Python", image: "/images/certifications/Automating Real-World Tasks with Python_1.jpg" },
    { id: 5, name: "Azure Synapse SQL Pool - Implement Polybase", image: "/images/certifications/Azure Synapse SQL Pool - Implement Polybase_1.jpg" },
    { id: 6, name: "BUSINESS PRESENCE WITH FACEBOOK", image: "/images/certifications/BUSINESS PRESENCE WITH FACEBOOK_1.jpg" },
    { id: 7, name: "COMPUTER VISION APP WITH AZURE", image: "/images/certifications/COMPUTER VISION APP WITH AZURE_1.jpg" },
    { id: 8, name: "CYBERSECURITY", image: "/images/certifications/CYBERSECURITY_1.jpg" },
    { id: 9, name: "Configuration Management and the Cloud", image: "/images/certifications/Configuration Management and the Cloud_1.jpg" },
    { id: 10, name: "Connect and Protect Networks and Network Security", image: "/images/certifications/Connect and Protect Networks and Network Security_1.jpg" },
    { id: 11, name: "Crash Course on Python", image: "/images/certifications/Crash Course on Python_1.jpg" },
    { id: 12, name: "Create Charts and Dashboards Using Microsoft Excel", image: "/images/certifications/Create Charts and Dashboards Using Microsoft Excel_1.jpg" },
    { id: 13, name: "Create a Business Marketing Brand Kit Using Canva", image: "/images/certifications/Create a Business Marketing Brand Kit Using Canva_1.jpg" },
    { id: 14, name: "Create a Virtual Private Cloud (VPC) Using AWS", image: "/images/certifications/Create a Virtual Private Cloud (VPC) Using AWS_1.jpg" },
    { id: 15, name: "DATA ANALYSIS USING MS EXCEL", image: "/images/certifications/DATA ANALYSIS USING MS EXECEL_1.jpg" },
    { id: 16, name: "Data Encryption using AWS KMS From UST", image: "/images/certifications/Data Encryption using AWS KMS From UST_1.jpg" },
    { id: 17, name: "Database Structures and Management with MySQL", image: "/images/certifications/Database Structures and Management with MySQL_1.jpg" },
    { id: 18, name: "Deep Learning and Reinforcement Learning", image: "/images/certifications/Deep Learning and Reinforcement Learning_1.jpg" },
    { id: 19, name: "Detection and Response", image: "/images/certifications/Detection and Response_1.jpg" },
    { id: 20, name: "EXCEL", image: "/images/certifications/EXCEL_1.jpg" },
    { id: 21, name: "EXCEL BA", image: "/images/certifications/EXCEL_BA_1.jpg" },
    { id: 22, name: "Exploratory Data Analysis for Machine Learning", image: "/images/certifications/Exploratory Data Analysis for Machine Learning_1.jpg" },
    { id: 23, name: "Generative AI with Large Language Models", image: "/images/certifications/Generative AI with Large Language Models_1.jpg" },
    { id: 24, name: "Google Cybersecurity", image: "/images/certifications/Google Cybersecurity_1.jpg" },
    { id: 25, name: "Google IT Automation with Python", image: "/images/certifications/Google IT Automation with Python_1.jpg" },
    { id: 26, name: "IBM Machine Learning", image: "/images/certifications/IBM Machine Learning_1.jpg" },
    { id: 27, name: "Introduction to Git and GitHub", image: "/images/certifications/Introduction to Git and GitHub_1.jpg" },
    { id: 28, name: "Linux and SQL", image: "/images/certifications/Linux and SQL_1.jpg" },
    { id: 29, name: "MICROSOFT 365", image: "/images/certifications/MICROSOFT 365_1.jpg" },
    { id: 30, name: "Machine Learning Capstone", image: "/images/certifications/Machine Learning Capstone_1.jpg" },
    { id: 31, name: "Machine Learning Pipelines with Azure ML Studio", image: "/images/certifications/Machine Learning Pipelines with Azure ML Studio_1.jpg" },
    { id: 32, name: "Manage Security Risks", image: "/images/certifications/Manage Security Risks_1.jpg" },
    { id: 33, name: "PROJECT CHARTER CERTIFICATE", image: "/images/certifications/PROJECT CHARTER CERTIFICATE_1.jpg" },
    { id: 34, name: "PROMPT ENGINEERING", image: "/images/certifications/PROMPT ENGINEERING_1.jpg" },
    { id: 35, name: "Put It to Work Prepare for Cybersecurity Jobs", image: "/images/certifications/Put It to Work Prepare for Cybersecurity Jobs_1.jpg" },
    { id: 36, name: "Python for Data Science, AI & Development", image: "/images/certifications/Python for Data Science, AI & Development_1.jpg" },
    { id: 37, name: "SEMANTIC SEGMENTATION", image: "/images/certifications/SEMANTIC SEGMENTATION_1.jpg" },
    { id: 38, name: "Search Engine Optimization (SEO) with Squarespace", image: "/images/certifications/Search Engine Optimization (SEO) with Squarespace_1.jpg" },
    { id: 39, name: "Supervised Machine Learning Regression", image: "/images/certifications/Supervised Machine Learning Regression_1.jpg" },
    { id: 40, name: "Supervised Machine Learning", image: "/images/certifications/Supervised Machine Learning_1.jpg" },
    { id: 41, name: "TROUBLESHOOTING", image: "/images/certifications/TROUBLESHOOTING_1.jpg" },
    { id: 42, name: "Unsupervised Machine Learning", image: "/images/certifications/Unsupervised Machine Learning_1.jpg" },
    { id: 43, name: "Use Canva to Create Desktop and Mobile-friendly Web Pages", image: "/images/certifications/Use Canva to Create Desktop and Mobile-friendly Web Pages._1.jpg" },
    { id: 44, name: "Using Python to Interact with the Operating System", image: "/images/certifications/Using Python to Interact with the Operating System_1.jpg" },
    { id: 45, name: "Work Smarter with Microsoft Excel", image: "/images/certifications/Work Smarter with Microsoft Excel_1.jpg" },
    { id: 46, name: "Work Smarter with Microsoft PowerPoint", image: "/images/certifications/Work Smarter with Microsoft PowerPoint_1.jpg" },
    { id: 47, name: "Work Smarter with Microsoft Word", image: "/images/certifications/Work Smarter with Microsoft Word_1.jpg" }
  ]

  // Mouse move effect for robot container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useSpring(useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-5, 5]), { stiffness: 150, damping: 20 });


  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 overflow-x-hidden">
      <NavBar items={navItems} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <BackgroundPaths />
        </div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full pointer-events-none">
          <div className="flex-1 text-left pointer-events-auto z-20 mt-20 md:mt-0">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 tracking-tighter">
                LOHITH ASHWA S
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 max-w-lg mb-8 font-light flex items-center gap-2">
                <Rocket className="w-6 h-6 text-blue-400 animate-pulse" />
                Techie. Innovator. Creator.
              </p>
              <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/lohith-ashwa-s-480842277/" target="_blank">
                  <Button variant="outline" className="gap-2 bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full px-6 hover:scale-105 transition-transform">
                    <Linkedin size={20} /> LinkedIn
                  </Button>
                </Link>
                <Link href="https://www.youtube.com/channel/UCHDZ-Fl12JNR38wBvMn0IYg" target="_blank">
                  <Button variant="outline" className="gap-2 bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full px-6 hover:scale-105 transition-transform">
                    <Youtube size={20} /> YouTube
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="flex-1 w-full h-[50vh] md:h-screen relative pointer-events-auto"
          >
            {/* Spline Scene for 3D effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none" />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Experience Section - Timeline Format */}
      <section id="experience" className="py-20 relative z-10 bg-black/80 backdrop-blur-sm min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight flex items-center justify-center gap-3"
          >
            <Zap className="w-8 h-8 text-yellow-400" /> Experience
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-900 border-2 border-white z-10 mt-6 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-1/2 px-4">
                  <CertificateModal
                    imageSrc={exp.image || ""}
                    altText={`${exp.role} Certificate`}
                    trigger={
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl hover:border-neutral-500 transition-all duration-300 relative group cursor-pointer hover:shadow-2xl hover:shadow-blue-900/20"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white p-1.5`}>
                            {exp.logo ? (
                              <Image src={exp.logo} alt={exp.company} width={48} height={48} className="object-cover rounded-full" />
                            ) : (
                              <span className="text-black font-bold">{exp.company.charAt(0)}</span>
                            )}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                            <p className="text-neutral-400">{exp.company}</p>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-500 mb-2">{exp.period}</p>
                        <p className="text-sm text-neutral-500 mb-4">{exp.location}</p>
                        <p className="text-neutral-300">{exp.description}</p>

                        {exp.image && (
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-5 h-5 text-neutral-400" />
                          </div>
                        )}
                      </motion.div>
                    }
                  />
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight flex items-center justify-center gap-3"
          >
            <Globe className="w-8 h-8 text-green-400" /> Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-neutral-900/30 border-neutral-800 text-white hover:bg-neutral-900/60 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/30 group h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                        <Icon size={24} />
                      </div>
                      <CardTitle className="text-xl mb-2 group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-400 leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-20 relative z-10 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight flex items-center justify-center gap-3"
          >
            <Award className="w-8 h-8 text-purple-400" /> Hackathons
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <CertificateModal
                  imageSrc={hackathon.image}
                  altText={`${hackathon.name} Certificate`}
                  trigger={
                    <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/50 group cursor-pointer relative">
                      <div className="relative w-full bg-white p-4">
                        <div className="relative w-full h-auto">
                          <Image
                            src={hackathon.image}
                            alt={hackathon.name}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="bg-neutral-900 p-4">
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors text-center">
                          {hackathon.name}
                        </h3>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 rounded-full p-2">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENSES & CERTIFICATIONS Section */}
      <section id="certifications" className="py-20 relative z-10 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight flex items-center justify-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-emerald-400" /> LICENSES & CERTIFICATIONS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                viewport={{ once: true }}
              >
                <CertificateModal
                  imageSrc={certification.image}
                  altText={`${certification.name} Certificate`}
                  trigger={
                    <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/50 group cursor-pointer relative">
                      <div className="relative w-full bg-white p-4">
                        <div className="relative w-full h-auto">
                          <Image
                            src={certification.image}
                            alt={certification.name}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="bg-neutral-900 p-4">
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors text-center">
                          {certification.name}
                        </h3>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 rounded-full p-2">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="contact" className="py-20 relative z-10 bg-gradient-to-b from-black to-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-neutral-800 mb-8 relative shadow-2xl group"
          >
            <Image src="/images/profile_latest.png" alt="Lohith Ashwa S" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-lg">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <div className="flex justify-center gap-8 relative z-20">
            <Link href="mailto:lohithashwa51@gmail.com" className="text-neutral-400 hover:text-white transition-colors transform hover:scale-110 duration-200 cursor-pointer">
              <Mail size={40} />
            </Link>
            <Link href="https://www.linkedin.com/in/lohith-ashwa-s-480842277/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors transform hover:scale-110 duration-200 cursor-pointer">
              <Linkedin size={40} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCHDZ-Fl12JNR38wBvMn0IYg" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors transform hover:scale-110 duration-200 cursor-pointer">
              <Youtube size={40} />
            </Link>
          </div>
          <div className="mt-20 text-neutral-600 text-sm">
            © 2025 Lohith Ashwa S. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  )
}
