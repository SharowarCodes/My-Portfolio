import React from "react";
import Container from "../components/Container";
import SecHead from "../components/SecHead";
import Navbar from "../components/Navbar";
import WaveBackground from "../components/lightswind/wave-background";
import AnimatedNotification from '../components/lightswind/animated-notification';
import { TeamCarousel } from '../components/lightswind/team-carousel';


import img01 from "../assets/test/images.jpg"
import img02 from "../assets/test/images (1).jpg"
import img03 from "../assets/test/images (2).jpg"
import img04 from "../assets/test/images (3).jpg"
import img05 from "../assets/test/images (4).jpg"
import img06 from "../assets/test/images (5).jpg"
import img07 from "../assets/test/Albert-Einstein-generated-by-AI-1024x683.webp"
import img08 from "../assets/test/13215530bbd4ce42c21c898055e9ddbb.jpg"
import img09 from "../assets/test/987597de-7690-4c24-bf3a-c657ebe1021f.jpg"
import img010 from "../assets/test/5323e94b2979da88ae8c9c52b60b6c55.jpg"


const notifications = [
    {
        id: "1",
        user: { name: "John Doe", color: "hsl(200, 70%, 80%)" },
        message: "Task completed successfully!",
        timestamp: new Date().toLocaleTimeString(),
        priority: "high"
    },
    {
        id: "2",
        user: { name: "Jane Smith", color: "hsl(340, 65%, 75%)" },
        message: "New comment on your post.",
        timestamp: new Date(Date.now() - 600000).toLocaleTimeString(), // 10 minutes ago
        priority: "medium"
    },
    {
        id: "3",
        user: { name: "Alex Johnson", color: "hsl(120, 60%, 70%)" },
        message: "Your password was changed.",
        timestamp: new Date(Date.now() - 3600000).toLocaleTimeString(), // 1 hour ago
        priority: "low"
    },
    {
        id: "4",
        user: { name: "Emily Clark", color: "hsl(45, 80%, 70%)" },
        message: "New follower: @emilyclark",
        timestamp: new Date(Date.now() - 86400000).toLocaleTimeString(), // 1 day ago
        priority: "medium"
    },
    {
        id: "5",
        user: { name: "Michael Brown", color: "hsl(290, 60%, 70%)" },
        message: "System maintenance scheduled for midnight.",
        timestamp: new Date(Date.now() - 1800000).toLocaleTimeString(), // 30 minutes ago
        priority: "high"
    }
];

const teamMembers = [
  {
    id: "1",
    name: "Albert Einstein",
    role: "Founder",
    image: img01,
    bio: "Visionary leader with 10+ years of experience.",
  },
  {
    id: "2",
    name: "Albert Einstein",
    role: "CTO",
    image: img02,
    bio: "Technology enthusiast who loves solving complex problems.",
  },
  {
    id: "3",
    name: "Albert Einstein",
    role: "Head of Design",
    image: img03,
    bio: "Passionate about creating intuitive and beautiful designs.",
  },
  {
    id: "4",
    name: "Albert Einstein",
    role: "Lead Developer",
    image: img04,
    bio: "Full-stack developer who builds scalable systems.",
  },
  {
    id: "5",
    name: "Albert Einstein",
    role: "Product Manager",
    image: img05,
    bio: "Loves connecting users' needs with product strategy.",
  },
  {
    id: "6",
    name: "Albert Einstein",
    role: "UX Researcher",
    image: img06,
    bio: "Turns user feedback into actionable insights.",
  },
  {
    id: "7",
    name: "Albert Einstein",
    role: "Marketing Lead",
    image: img07,
    bio: "Crafts campaigns that drive growth and engagement.",
  },
  {
    id: "8",
    name: "Albert Einstein",
    role: "Frontend Engineer",
    image: img08,
    bio: "Focused on performance and pixel-perfect UI.",
  },
  {
    id: "9",
    name: "Albert Einstein",
    role: "QA Engineer",
    image: img09,
    bio: "Ensures software quality through automated testing.",
  },
  {
    id: "10",
    name: "Albert Einstein",
    role: "DevOps Engineer",
    image: img010,
    bio: "Automates infrastructure for smoother deployments.",
  },
];



export default function Testimonials() {
    return (
        <section className="relative min-h-screen bg-gray-50 overflow-hidden">
            {/* Background wave */}
            <WaveBackground className="absolute top-0 left-0 w-full h-full z-0" />

            <Container>
                {/* Navbar */}
                <Navbar />

                {/* Content */}
                <div className="relative z-10 pb-20">
                    <div className="pt-3 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                        {/* Left: Section Head */}
                        <SecHead
                            title={
                                <span className="text-[50px] leading-relaxed">
                                    Testimonials
                                </span>
                            }
                            description={
                                <span className="text-[18px] text-white leading-relaxed">
                                    My code is modular, reusable, and deployment-ready. <br />
                                    I prioritize structure, performance, and accessibility—without compromising creativity.
                                    <br />
                                    I enjoy combining subtle motion with clean layouts to bring static designs to life,
                                    <br />
                                    ensuring every site feels intuitive across all devices.
                                </span>
                            }
                        />

                        {/* Right: Seasonal Hover Cards */}
                        <div className="md:ml-auto h-[150px] w-full md:w-[400px] pt-3 relative">
                            <AnimatedNotification
                                autoGenerate={true}
                                maxNotifications={2}
                                variant="glass"
                                autoInterval={1000}
                                showAvatars={true}
                                allowDismiss={true}
                                customMessages={["Welcome!", "Task completed!"]}
                                onNotificationClick={(notification) => console.log(notification)}
                            />
                        </div>

                    </div>

                    <div className="mt-3 text-white">
                        <TeamCarousel
                            members={teamMembers}
                            title="OUR TEAM"
                            autoPlay={2000}
                            onMemberChange={(member, index) => {
                                console.log('Active member:', member.name);
                            }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
