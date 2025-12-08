"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type FormState = {
    fullname: string;
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
    terms: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

type PasswordRules = {
    len: boolean;
    upper: boolean;
    special: boolean;
};

const nameRegex = /^[A-Za-zÀ-ÿ\s'-]+$/u;
const usernameRegex = /^[A-Za-z0-9._-]{3,20}$/;
const gmailRegex = /^[A-Za-z0-9._%+\-]+@gmail\.com$/i;

const Register: React.FC = () => {
    const [form, setForm] = useState<FormState>({
        fullname: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });

    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Record<keyof FormState, boolean>>(
        {} as Record<keyof FormState, boolean>
    );
    const [passwordRules, setPasswordRules] = useState<PasswordRules>({
        len: false,
        upper: false,
        special: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const filled =
            form.fullname.trim() &&
            form.username.trim() &&
            form.email.trim() &&
            form.password &&
            form.password_confirmation &&
            form.terms;

        const noErrors = Object.values(errors).every((e) => !e);
        setFormValid(Boolean(filled && noErrors));
    }, [form, errors]);

    const markTouched = (field: keyof FormState) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const updateField =
        (field: keyof FormState) =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                const value =
                    e.target.type === "checkbox"
                        ? (e.target as HTMLInputElement).checked
                        : e.target.value;

                setForm((prev) => ({ ...prev, [field]: value as never }));
                markTouched(field);
                validateField(field, value as string | boolean);
            };

    const inputBorderClass = (field: keyof FormState) => {
        if (errors[field]) return "border-red-500/80 focus:ring-red-500/40";
        if (touched[field]) return "border-neutral-400/70 focus:ring-neutral-400/40";
        return "border-white/10 focus:ring-neutral-500/40";
    };

    const ruleClass = (ok: boolean) =>
        `${ok ? "text-emerald-300" : "text-neutral-500"} cursor-help transition-colors duration-150 hover:text-neutral-100`;

    const validateField = (field: keyof FormState, value?: string | boolean) => {
        setErrors((prev) => {
            const next: Errors = { ...prev };
            const currentValue =
                typeof value === "boolean" || typeof value === "string"
                    ? value
                    : (form as any)[field];

            if (field === "fullname") {
                const text = String(currentValue || "").trim();
                if (!text) next.fullname = "Full name is required.";
                else if (!nameRegex.test(text))
                    next.fullname =
                        "Only letters, spaces, apostrophes, and dashes are allowed.";
                else delete next.fullname;
            }

            if (field === "email") {
                const text = String(currentValue || "").trim();
                if (!text) next.email = "Email is required.";
                else if (!gmailRegex.test(text))
                    next.email = "Email must be a valid @gmail.com address.";
                else delete next.email;
            }

            if (field === "username") {
                const text = String(currentValue || "").trim();
                if (!text) next.username = "Username is required.";
                else if (!usernameRegex.test(text))
                    next.username = "3–20 chars: letters, numbers, dot, underscore, dash.";
                else delete next.username;
            }

            if (field === "password") {
                const text = String(currentValue || "");
                const len = text.length >= 8;
                const upper = /[A-Z]/.test(text);
                const special = /[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?`~\\|]/.test(text);

                setPasswordRules({ len, upper, special });

                if (!text) next.password = "Password is required.";
                else if (!(len && upper && special))
                    next.password =
                        "Password should be at least 8 characters, with an uppercase letter and special character.";
                else delete next.password;

                if (touched.password_confirmation) {
                    const confirmed = form.password_confirmation;
                    if (!confirmed) next.password_confirmation = "Please confirm your password.";
                    else if (confirmed !== text)
                        next.password_confirmation = "Passwords do not match.";
                    else delete next.password_confirmation;
                }
            }

            if (field === "password_confirmation") {
                const text = String(currentValue || "");
                if (!text) next.password_confirmation = "Please confirm your password.";
                else if (text !== form.password)
                    next.password_confirmation = "Passwords do not match.";
                else delete next.password_confirmation;
            }

            if (field === "terms") {
                const checked = Boolean(currentValue);
                if (!checked) next.terms = "You must accept the terms.";
                else delete next.terms;
            }

            return next;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        (Object.keys(form) as (keyof FormState)[]).forEach((f) => {
            markTouched(f);
            validateField(f, form[f]);
        });

        if (!formValid) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Account created (mock). Hook this up to your API.");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden px-4">
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute -top-32 -left-10 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl animate-float-slow" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-neutral-500/15 blur-3xl animate-float" />
            </div>

            <div className="w-full max-w-4xl mx-auto">
                <div className="relative rounded-3xl border border-white/10 bg-linear-to-b from-zinc-900/90 via-zinc-950 to-black shadow-[0_24px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 animate-fadeInUp">
                    <div className="absolute top-4 left-5">
                        <Link
                            href="/Login"
                            className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-neutral-400 hover:text-neutral-100 transition"
                        >
                            <span className="text-base">←</span>
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                                Back
                            </span>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 mt-8">
                        <div className="hidden md:flex flex-col justify-between pr-4 border-r border-white/10">
                            <div className="space-y-4">
                                <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                                    <span className="h-1 w-6 rounded-full bg-purple-400" />
                                    New here?
                                </p>
                                <h1 className="text-3xl lg:text-4xl font-semibold text-neutral-50">
                                    Create your account
                                </h1>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    Join the platform and unlock a clean, focused registration
                                    experience. Keep your profile and preferences all in one place.
                                </p>
                                <div className="space-y-2 text-xs text-neutral-300">
                                    <div className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        <span>Secure authentication and validation</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                                        <span>Modern dark-mode interface</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                                        <span>Fast, minimal registration flow</span>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-6 text-[11px] text-neutral-500">
                                <span className="text-neutral-400">Tip:</span> Use a strong
                                password and a unique username to keep your account secure.
                            </p>
                        </div>

                        <div className="md:pl-4">
                            <div className="md:hidden mb-6 text-center">
                                <h1 className="text-2xl font-semibold text-neutral-50 mb-2">
                                    Create your account
                                </h1>
                                <p className="text-sm text-neutral-400">
                                    Join us and start your journey.
                                </p>
                            </div>

                            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-neutral-300">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full name "
                                        value={form.fullname}
                                        onChange={updateField("fullname")}
                                        className={`w-full rounded-xl border ${inputBorderClass(
                                            "fullname"
                                        )} bg-white/5 px-4 py-3 text-sm text-neutral-50 placeholder-neutral-400 outline-none backdrop-blur transition-all focus:scale-[1.01]`}
                                    />
                                    {touched.fullname && errors.fullname && (
                                        <p className="text-[11px] text-red-400">
                                            {errors.fullname}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-neutral-300">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="User name"
                                        value={form.username}
                                        onChange={updateField("username")}
                                        className={`w-full rounded-xl border ${inputBorderClass(
                                            "username"
                                        )} bg-white/5 px-4 py-3 text-sm text-neutral-50 placeholder-neutral-400 outline-none backdrop-blur transition-all focus:scale-[1.01]`}
                                    />
                                    {touched.username && errors.username && (
                                        <p className="text-[11px] text-red-400">
                                            {errors.username}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-neutral-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@gmail.com"
                                        value={form.email}
                                        onChange={updateField("email")}
                                        className={`w-full rounded-xl border ${inputBorderClass(
                                            "email"
                                        )} bg-white/5 px-4 py-3 text-sm text-neutral-50 placeholder-neutral-400 outline-none backdrop-blur transition-all focus:scale-[1.01]`}
                                    />
                                    {touched.email && errors.email && (
                                        <p className="text-[11px] text-red-400">{errors.email}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-neutral-300">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        value={form.password}
                                        onChange={updateField("password")}
                                        className={`w-full rounded-xl border ${inputBorderClass(
                                            "password"
                                        )} bg-white/5 px-4 py-3 text-sm text-neutral-50 placeholder-neutral-400 outline-none backdrop-blur transition-all focus:scale-[1.01]`}
                                    />
                                    {touched.password && errors.password && (
                                        <p className="text-[11px] text-red-400">
                                            {errors.password}
                                        </p>
                                    )}
                                    <ul className="mt-1 space-y-0.5 text-[11px]">
                                        <li className={ruleClass(passwordRules.len)}>
                                            At least 8 characters
                                        </li>
                                        <li className={ruleClass(passwordRules.upper)}>
                                            At least 1 uppercase letter
                                        </li>
                                        <li className={ruleClass(passwordRules.special)}>
                                            At least 1 special character
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-neutral-300">
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        value={form.password_confirmation}
                                        onChange={updateField("password_confirmation")}
                                        className={`w-full rounded-xl border ${inputBorderClass(
                                            "password_confirmation"
                                        )} bg-white/5 px-4 py-3 text-sm text-neutral-50 placeholder-neutral-400 outline-none backdrop-blur transition-all focus:scale-[1.01]`}
                                    />
                                    {touched.password_confirmation &&
                                        errors.password_confirmation && (
                                            <p className="text-[11px] text-red-400">
                                                {errors.password_confirmation}
                                            </p>
                                        )}
                                </div>

                                <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        checked={form.terms}
                                        onChange={updateField("terms")}
                                        className="h-3.5 w-3.5 rounded border border-white/30 bg-transparent accent-green-700"
                                    />
                                    <label htmlFor="terms">
                                        I agree to the{" "}
                                        <span className="underline underline-offset-2 cursor-pointer hover:text-neutral-200">
                                            Terms &amp; Conditions
                                        </span>
                                    </label>
                                </div>
                                {touched.terms && errors.terms && (
                                    <p className="text-[11px] text-red-400">{errors.terms}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={!formValid || isSubmitting}
                                    className="mt-2 w-full rounded-xl bg-linear-to-br from-zinc-100/10 via-zinc-300/10 to-zinc-50/5 hover:from-zinc-100/15 hover:via-zinc-300/15 hover:to-zinc-50/10 border border-zinc-500/60 px-4 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(0,0,0,0.75)] transition-all hover:scale-[1.03] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting && (
                                        <svg
                                            className="h-4 w-4 animate-spin"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                strokeWidth="4"
                                                d="M4 12a8 8 0 018-8"
                                            />
                                        </svg>
                                    )}
                                    <span>{isSubmitting ? "Submitting…" : "Create account"}</span>
                                </button>

                                <p className="mt-4 text-[11px] text-neutral-500 text-center md:text-left">
                                    By continuing, you agree to our Terms and Privacy Policy.
                                </p>
                            </form>

                            <p className="mt-6 text-center text-xs text-neutral-400">
                                Already have an account?{" "}
                                <Link
                                    href="/Login"
                                    className="text-neutral-200 hover:text-white underline underline-offset-2"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
