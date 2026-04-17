import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import siteData from "../content/siteData.js";

const BookingForm = () => {
    const { profile } = siteData;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY");
    }, []);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
                {
                    to_email: profile.email,
                    from_name: formData.name,
                    from_email: formData.email,
                    reason: formData.reason,
                    reply_to: formData.email,
                }
            );

            if (res.status === 200) {
                setMessageType("success");
                setMessage("Request sent successfully. I’ll get back to you soon.");
                setFormData({ name: "", email: "", reason: "" });
            }
        } catch {
            setMessageType("error");
            setMessage("Something went wrong. Try again or email me directly.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-white text-black">
            <div className="main-container py-28 lg:py-36">

                {/* 🔥 Heading */}
                <div className="max-w-2xl mb-16">
                    <p className="uppercase text-xs tracking-[0.25em] text-gray-500 mb-4">
                        Get in Touch
                    </p>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-[1]">
                        Let’s build something together
                    </h1>
                </div>

                {/* 🔥 Form */}
                <form onSubmit={handleSubmit} className="max-w-2xl flex flex-col gap-8">

                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-all"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-all"
                    />

                    {/* Reason */}
                    <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder="Tell me about your idea or project"
                        rows="4"
                        required
                        className="border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-all resize-none"
                    />

                    {/* Message */}
                    {message && (
                        <p
                            className={`text-sm ${messageType === "success"
                                    ? "text-green-600"
                                    : "text-red-500"
                                }`}
                        >
                            {message}
                        </p>
                    )}

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-6 w-fit px-8 py-3 border border-black rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Request"}
                    </button>

                </form>

                {/* 🔥 Extra Info */}
                <p className="mt-16 text-sm text-gray-500 max-w-md">
                    Prefer email? Reach out directly at{" "}
                    <span className="text-black font-medium">{profile.email}</span>
                </p>

            </div>
        </section>
    );
};

export default BookingForm;