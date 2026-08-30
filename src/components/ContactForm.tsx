"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter your message.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(initialState);
    setErrors({});
  };

  return (
    <div className="rounded-[2rem] border border-[#e7e0d6] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)] sm:p-8">
      {submitted ? (
        <div className="rounded-[1.5rem] border border-[#d9e9df] bg-[#f2faf5] p-6 text-[#214d43]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]">Thank you</p>
          <h3 className="mt-3 text-2xl font-semibold">Your message has been prepared successfully.</h3>
          <p className="mt-3 text-sm leading-6 text-[#355d55]">
            This form is ready for an email or API integration. Once connected, your message will be sent to the foundation team.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                value={formData.name}
                onChange={(event) => handleChange("name", event.target.value)}
                className="w-full rounded-2xl border border-[#dfe5e1] bg-[#fbfbfa] px-4 py-3 text-slate-900 outline-none transition focus:border-[#78a89d] focus:ring-4 focus:ring-[#dfece8]"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) => handleChange("email", event.target.value)}
                className="w-full rounded-2xl border border-[#dfe5e1] bg-[#fbfbfa] px-4 py-3 text-slate-900 outline-none transition focus:border-[#78a89d] focus:ring-4 focus:ring-[#dfece8]"
                placeholder="your@email.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                id="phone"
                value={formData.phone}
                onChange={(event) => handleChange("phone", event.target.value)}
                className="w-full rounded-2xl border border-[#dfe5e1] bg-[#fbfbfa] px-4 py-3 text-slate-900 outline-none transition focus:border-[#78a89d] focus:ring-4 focus:ring-[#dfece8]"
                placeholder="Your mobile number"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone ? <p className="mt-2 text-sm text-red-600">{errors.phone}</p> : null}
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                Subject
              </label>
              <input
                id="subject"
                value={formData.subject}
                onChange={(event) => handleChange("subject", event.target.value)}
                className="w-full rounded-2xl border border-[#dfe5e1] bg-[#fbfbfa] px-4 py-3 text-slate-900 outline-none transition focus:border-[#78a89d] focus:ring-4 focus:ring-[#dfece8]"
                placeholder="How can we help?"
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject ? <p className="mt-2 text-sm text-red-600">{errors.subject}</p> : null}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(event) => handleChange("message", event.target.value)}
              className="w-full rounded-2xl border border-[#dfe5e1] bg-[#fbfbfa] px-4 py-3 text-slate-900 outline-none transition focus:border-[#78a89d] focus:ring-4 focus:ring-[#dfece8]"
              placeholder="Write your message here"
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message}</p> : null}
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a9cc9] to-[#72d1d9] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
