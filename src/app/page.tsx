"use client";

import { useState } from "react";

export default function Home() {
  const [jd, setJd] = useState("");
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const generateEmail = async () => {
    if (!jd || !details) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setEmail("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ jd, details }),
      });

      const data = await res.json();
      setEmail(data.email);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white px-6 py-10">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
  src="/phoenix.png" 
  alt="Phoenix Logo" 
  className="w-8 h-8 object-contain"
/>
          <h1 className="text-2xl font-bold tracking-wide">
            MOZEN
          </h1>
        </div>
        <span className="text-sm text-gray-400">
          AI Email Agent
        </span>
      </div>

      {/* HERO */}
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-4xl font-bold mb-3 leading-tight">
          Turn Job Descriptions into <br />
          <span className="text-blue-400">Powerful Recruiter Emails</span>
        </h2>
        <p className="text-gray-400">
          Paste a JD, add your details, and let MOZEN craft a perfect cold email.
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl">
        
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* JD */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">
              Job Description
            </label>
            <textarea
              placeholder="Paste job description here..."
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
              rows={8}
              onChange={(e) => setJd(e.target.value)}
            />
          </div>

          {/* DETAILS */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">
              Your Details
            </label>
            <textarea
              placeholder="Skills, experience, projects..."
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
              rows={8}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={generateEmail}
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            {loading ? "Generating..." : "Generate Email"}
          </button>
        </div>

        {/* OUTPUT */}
        {email && (
          <div className="mt-8 bg-gray-900 border border-gray-700 p-5 rounded-xl">
            <h3 className="text-blue-400 mb-3 font-semibold">
              Generated Email
            </h3>
            <p className="whitespace-pre-wrap text-gray-200">
              {email}
            </p>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 text-sm mt-10">
        Built with AI • MOZEN
      </div>
    </div>
  );
}