"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Github, Linkedin, Twitter } from "lucide-react"

// Updated team members with more detailed content
const teamMembers = [
  {
    name: "Rahul Sharma",
    position: "CEO & Founder",
    bio: "With over 10 years of experience in software development, Rahul leads the vision and strategy of Codersque Technologies. His expertise in business development and technology innovation has been instrumental in our growth.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["Strategic Planning", "Business Development", "Technology Leadership"],
  },
  {
    name: "Priya Singh",
    position: "CTO",
    bio: "Priya oversees all technical aspects of the company, ensuring we stay at the cutting edge of technology. Her background in cloud architecture and AI has shaped our technical direction and innovation strategy.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["Cloud Architecture", "AI/ML", "System Design"],
  },
  {
    name: "Amit Das",
    position: "Lead UI/UX Designer",
    bio: "Amit brings creativity and user-centered thinking to all our projects, creating intuitive and beautiful interfaces. His design philosophy focuses on creating experiences that delight users while meeting business objectives.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["UI/UX Design", "User Research", "Design Systems"],
  },
  {
    name: "Meera Patel",
    position: "Senior Developer",
    bio: "Meera is an expert in full-stack development with a passion for creating clean, efficient code. Her technical expertise spans multiple frameworks and languages, making her a versatile problem-solver on our team.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["Full-Stack Development", "React/Next.js", "Database Design"],
  },
  {
    name: "Vikram Choudhury",
    position: "Project Manager",
    bio: "Vikram ensures that all our projects are delivered on time and to the highest standards of quality. His methodical approach to project management and client communication ensures smooth project execution.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["Project Management", "Agile Methodologies", "Client Relations"],
  },
  {
    name: "Sunita Roy",
    position: "Marketing Director",
    bio: "Sunita leads our marketing efforts, helping us connect with clients and showcase our work. Her strategic approach to digital marketing has significantly increased our brand visibility and lead generation.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    skills: ["Digital Marketing", "Content Strategy", "Brand Development"],
  },
]

export default function Team() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-800 to-transparent" />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-purple-300/20 dark:bg-purple-900/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-blue-300/20 dark:bg-blue-900/20 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            Our Experts
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            Meet Our Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            The talented professionals behind Codersque Technologies
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
                damping: 10,
              }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-purple-100 dark:border-purple-900/30 group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-center space-x-4">
                      <a
                        href={member.social.twitter}
                        className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter size={20} />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={member.social.github}
                        className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 text-sm mb-4">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">{member.bio}</p>

                  <div className="mt-auto">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
