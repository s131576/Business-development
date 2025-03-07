"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

const questions = [
  {
    id: 1,
    question: "Welk type woning wilt u beveiligen?",
    options: ["Een huis", "Een appartement"],
  },
  {
    id: 2,
    question: "Welke beveiligingsopties heeft u nodig?",
    options: ["Alarmsysteem", "Camera's", "Bewegingssensoren", "Rookmelders"],
  },
  {
    id: 3,
    question: "Heeft u al een bestaand beveiligingssysteem?",
    options: ["Ja", "Nee"],
  },
];

const QuotationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    responses: {} as Record<number, string>,
  });

  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionSelect = (questionId: number, option: string) => {
    setFormData((prev) => ({
      ...prev,
      responses: { ...prev.responses, [questionId]: option },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Versturen...");

    try {
      const response = await emailjs.send(
        "service_1ioqr29",
        "template_9roqmob", 
        {
          from_name: formData.name,
          to_name: "SmartVentraWindow", 
          reply_to: formData.email,
          phone: formData.phone,
          responses: JSON.stringify(formData.responses),
        },
        "6I16Yyx00-iulQTk2" 
      );

      if (response.status === 200) {
        setStatus("Offerte aanvraag verzonden! ✅");
        setFormData({ name: "", email: "", phone: "", responses: {} });
        setStep(0);
      } else {
        throw new Error("Fout bij verzenden.");
      }
    } catch (error) {
      console.error("Fout bij verzenden:", error);
      setStatus("Fout bij verzenden. Probeer opnieuw. ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 py-20">
      <div className="w-full max-w-xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">Vraag een Offerte Aan 📝</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step < questions.length ? (
            <>
              <h3 className="text-white text-lg font-semibold">{questions[step].question}</h3>
              <div className="space-y-3 mt-4">
                {questions[step].options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-full p-4 rounded-lg border-2 text-white text-left transition ${
                      formData.responses[questions[step].id] === option
                        ? "border-yellow-400 bg-gray-700"
                        : "border-gray-600 bg-gray-800 hover:border-yellow-300"
                    }`}
                    onClick={() => handleOptionSelect(questions[step].id, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                {step > 0 && (
                  <button
                    type="button"
                    className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                    onClick={() => setStep((prev) => prev - 1)}
                  >
                    Vorige
                  </button>
                )}
                <button
                  type="button"
                  className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition"
                  onClick={() => setStep((prev) => prev + 1)}
                  disabled={!formData.responses[questions[step].id]}
                >
                  Volgende
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-white text-lg font-semibold">Vul uw contactgegevens in:</h3>
              <input
                type="text"
                name="name"
                placeholder="Naam"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 mt-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 mt-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefoonnummer"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 mt-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-yellow-400"
              />
              <button
                type="submit"
                className="w-full mt-6 bg-yellow-400 text-gray-900 font-bold py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
              >
                Offerte Aanvragen
              </button>
            </>
          )}
        </form>
        {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
      </div>
    </div>
  );
};

export default QuotationForm;
