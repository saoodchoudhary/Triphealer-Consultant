"use client";
import Script from "next/script";
import { useState } from "react";

const languages = [
  { label: "English",  value: "en", flag: "EN" },
  { label: "العربية", value: "ar", flag: "AR" },
  { label: "اردو",    value: "ur", flag: "🇵🇰" },
];

function googleTranslateElementInit() {
  new (window).google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,ar,ur",
      autoDisplay: false,
    },
    "google_translate_element"
  );
}

export default function LanguageTranslator() {
  const [selected, setSelected] = useState("en");
  const [open, setOpen] = useState(false);

  const changeLanguage = (value) => {
    setSelected(value);
    setOpen(false);

    // Google Translate cookie set karo
    const element = document.querySelector(
      ".goog-te-combo"
    ) ;
    if (element) {
      element.value = value;
      element.dispatchEvent(new Event("change"));
    }
  };

  const currentLang = languages.find((l) => l.value === selected);

  return (
    <>
      {/* Hidden Google Translate div */}
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", width: 0, height: 0, overflow: "hidden" }}
      />

      {/* Custom Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-lg border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          aria-label="Select language"
        >
          <span>{currentLang?.flag}</span>
          <span className="hidden sm:inline">{currentLang?.label}</span>
          <svg
            className={`h-3.5 w-3.5 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 top-full z-50 mt-1.5 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang.value}
                onClick={() => changeLanguage(lang.value)}
                className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-sm transition hover:bg-slate-50 ${
                  selected === lang.value
                    ? "font-semibold text-[#01696f]"
                    : "text-slate-700"
                }`}
              >
                <span>{lang.flag}</span>
                {lang.label}
                {selected === lang.value && (
                  <span className="ml-auto text-[#01696f]">✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Google Translate Script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        onLoad={() => {
          (window).googleTranslateElementInit = googleTranslateElementInit;
        }}
      />
    </>
  );
}