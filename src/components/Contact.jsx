import React, { useState } from "react";
import { useTheme } from "../context/Theme";
import { Mail, Send, Copy, Check } from "lucide-react";

function Contact() {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);

  const email = "sahilhussainsahil76@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-20 mb-6">
      <h1 className="text-xl font-bold">Contact</h1>

      <div
        className={`mt-4 p-6 rounded-2xl ${
          darkMode ? "bg-[#061E29]" : "bg-gray-100"
        }`}
      >
        {/* Heading */}
        <div className="flex items-center gap-2 mb-1">
          <Mail size={18} className="text-amber-400" />
          <h2 className="font-semibold text-base">Get in touch</h2>
        </div>

        <p
          className={`text-sm mb-4 ${
            darkMode ? "text-zinc-400" : "text-zinc-500"
          }`}
        >
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>

        {/* Email Row */}
        <div
          className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl border 
          ${
            darkMode
              ? "border-zinc-700 bg-black"
              : "border-zinc-300 bg-white"
          }`}
        >
          <span className="text-sm font-medium truncate">{email}</span>

          <div className="flex gap-2 shrink-0">
            {/* Copy */}
            <button
              onClick={handleCopy}
              className={`p-1.5 rounded-lg transition ${
                darkMode
                  ? "hover:bg-zinc-800"
                  : "hover:bg-zinc-100"
              }`}
              title="Copy email"
            >
              {copied ? (
                <Check size={15} className="text-green-400" />
              ) : (
                <Copy size={15} className="text-zinc-400" />
              )}
            </button>

            {/* Send Mail */}
            <a
              href={`mailto:${email}`}
              className={`p-1.5 rounded-lg transition ${
                darkMode
                  ? "hover:bg-zinc-800"
                  : "hover:bg-zinc-100"
              }`}
              title="Send email"
            >
              <Send size={15} className="text-amber-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;