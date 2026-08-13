"use client";

import { useState, useRef } from "react";
import { toPng } from "html-to-image";

export default function Home() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const cardRef = useRef<HTMLDivElement>(null);

  const getBuilderTitle = () => {
    const roleLower = role.toLowerCase();

    if (roleLower.includes("ai")) return "Prompt Whisperer";
    if (roleLower.includes("frontend")) return "Pixel Wizard";
    if (roleLower.includes("backend")) return "API Alchemist";
    if (roleLower.includes("founder")) return "Startup Captain";
    if (roleLower.includes("student")) return "Future Unicorn";
    if (roleLower.includes("full")) return "Code Ninja";

    return "Hackathon Survivor";
  };

  const builderTitle = getBuilderTitle();

  const builderId =
    "HHG-2026-" +
    ((name.length + role.length) * 137 + 1000);

  const shareToX = () => {
    const text = `Just generated my Hacker House Goa 2026 Builder Pass 🚀

#FrameInGoa`;

    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;

    const dataUrl = await toPng(cardRef.current);

    const link = document.createElement("a");
    link.download = "hh-goa-builder-pass.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
        HH Goa 2026 Builder ID Generator
      </h1>

      <p className="text-gray-400 text-center mb-8">
        Upload your photo and generate your Hacker House Goa Builder Pass
      </p>

      <div className="w-full max-w-md flex flex-col gap-4">
        <label className="text-lg font-semibold">
          Upload Photo
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onloadend = () => {
              setImage(reader.result as string);
            };

            reader.readAsDataURL(file);
          }}
          className="bg-white text-black p-3 rounded-lg border-2 border-teal-400 cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-teal-500 file:text-white file:rounded-lg hover:file:bg-teal-600"
        />

        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold">
            Your Name
          </label>

          <input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg bg-white text-black border-2 border-teal-400 w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold">
            Role / Stack
          </label>

          <input
            placeholder="AI Engineer, Founder, Frontend Developer..."
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-3 rounded-lg bg-white text-black border-2 border-teal-400 w-full"
          />
        </div>
      </div>

      <div
        ref={cardRef}
       className="mt-10 w-full max-w-[380px] rounded-3xl bg-gradient-to-br from-emerald-400 via-teal-500 to-slate-900 p-6 shadow-2xl"
      >
        <div className="flex justify-between items-center">
          <div className="text-sm font-bold">
            HACKER HOUSE GOA 2026
          </div>

          <div className="text-xl">
            🌴
          </div>
        </div>

        <div className="mt-3 inline-block bg-white/20 px-3 py-1 rounded-full text-sm">
          BUILDER PASS
        </div>

        {image && (
          <img
            src={image}
            alt="profile"
            className="w-full h-64 object-cover rounded-xl mt-4"
          />
        )}

        <h2 className="text-3xl font-bold mt-4 uppercase">
          {name || "YOUR NAME"}
        </h2>

        <p className="text-lg">
          {role || "Builder"}
        </p>

        <div className="mt-5 text-sm opacity-80">
          BUILDER CLASS
        </div>

        <div className="text-2xl font-bold">
          {builderTitle}
        </div>

        <div className="mt-5 text-sm opacity-80">
          BUILDER ID
        </div>

        <div className="font-bold">
          {builderId}
        </div>

        <div className="mt-5 text-sm opacity-80">
          LOCATION
        </div>

        <div>
          Goa, India 🌴
        </div>

        <div className="mt-5 text-sm opacity-80">
          EVENT
        </div>

        <div>
          Hacker House Goa 2026
        </div>

        <div className="mt-6 border-t border-white/20 pt-4 flex justify-between text-sm">
          <span>#FrameInGoa</span>
          <span>HH Goa 2026</span>
        </div>
      </div>

      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <button
          onClick={downloadCard}
          className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-xl font-bold"
        >
          Download Card
        </button>

        <button
          onClick={shareToX}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-bold"
        >
          Share on X
        </button>
      </div>
    </main>
  );
}