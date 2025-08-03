import React from "react";
import Container from "../components/Container";
import SecHead from "../components/SecHead";
import Navbar from "../components/Navbar";
import WaveBackground from "../components/lightswind/wave-background";

export default function GetStarted() {
    return (
        <section className="relative  min-h-screen bg-gray-50 overflow-hidden ">
            <WaveBackground className="absolute top-0 left-0 w-full h-full z-0" />
            <Container>
                <Navbar />
                <div className="relative ml-[-20px] bg-transparent  z-10 w-full md:w-[700px] mx-auto">
                    {/* Heading */}
                    <SecHead
                        title={
                            <span className="pt-14 text-[50px] l block text-center">
                                Get In Touch
                            </span>
                        }
                        description={
                            <span className="text-[18px] text-white leading-relaxed block text-left">
                                Feel free to reach out — Here to help, answer your questions, or just have a chat. <br /> Let's build something amazing together!
                            </span>
                        }
                    />

                    {/* Form */}
                    <div className="bg-transparent rounded-xl shadow-lg p-6">

                        <form className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-white font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Mobile */}
                            <div>
                                <label className="block text-white font-medium mb-1">Mobile</label>
                                <input
                                    type="tel"
                                    placeholder="01XXXXXXXXX"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-white font-medium mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your message..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
}
