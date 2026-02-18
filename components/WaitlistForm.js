"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!email.includes("@") || !email.includes(".")) return;

    setStatus("loading");

    // If Supabase is configured, save to DB
    if (supabase) {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        if (error.code === "23505") {
          // Duplicate email
          setStatus("success");
          return;
        }
        setErrorMsg("Something went wrong. Try again.");
        setStatus("error");
        return;
      }
    }

    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="animate-fade-up px-8 py-5 rounded-2xl bg-brand-400/[0.06] border border-brand-400/20 text-center">
        <p className="font-display text-[17px] font-bold text-brand-400 mb-1">
          You&apos;re on the list! 🎉
        </p>
        <p className="text-[13px] text-gray-500">
          We&apos;ll reach out when early access opens.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="email-box flex items-center max-w-[460px] w-full mx-auto bg-white/[0.025] rounded-[14px] border border-brand-400/[0.12] p-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3.5 rounded-[10px] text-[14px] bg-transparent text-gray-50 border border-transparent focus:border-brand-400/50 focus:shadow-[0_0_0_3px_rgba(52,211,153,0.06)] transition-all placeholder:text-gray-700"
        />
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="cta-glow px-7 py-3.5 rounded-[11px] text-[14px] font-bold font-display bg-gradient-to-br from-brand-600 to-brand-500 text-white flex-shrink-0 cursor-pointer disabled:opacity-60"
        >
          {status === "loading" ? "Joining..." : "Join Waitlist →"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-400 text-[12px] text-center mt-2">{errorMsg}</p>
      )}
    </div>
  );
}
