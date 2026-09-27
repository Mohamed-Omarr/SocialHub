import { useState, type FormEvent } from "react";
import AuthLayout from "./components/AuthLayout";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = new FormData(event.currentTarget);
    const firstName = String(form.get("firstName") ?? "").trim();
    const lastName = String(form.get("lastName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    const confirmPassword = String(form.get("confirmPassword") ?? "");
    const agreed = form.get("terms") === "on";

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Fill in every field to create your account.");
      setIsSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don\u2019t match. Give them another look.");
      setIsSubmitting(false);
      return;
    }

    if (password.length < 8) {
      setError("Use at least 8 characters for your password.");
      setIsSubmitting(false);
      return;
    }

    if (!agreed) {
      setError("Agree to the terms to create your account.");
      setIsSubmitting(false);
      return;
    }

    // Replace with real registration call.
    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 900);
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join SocialHub and start sharing your world."
      footer={
        <>
          Already have an account?{" "}
          <a className="form-link" href="#login">
            Sign in
          </a>
        </>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        {error && <p className="auth-error">{error}</p>}

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="register-first-name">
              First name
            </label>
            <div className="form-field">
              <input
                id="register-first-name"
                name="firstName"
                type="text"
                className="form-input"
                placeholder="Maya"
                autoComplete="given-name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="register-last-name">
              Last name
            </label>
            <div className="form-field">
              <input
                id="register-last-name"
                name="lastName"
                type="text"
                className="form-input"
                placeholder="Chen"
                autoComplete="family-name"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="register-email">
            Email
          </label>
          <div className="form-field">
            <input
              id="register-email"
              name="email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="register-password">
            Password
          </label>
          <div className="form-field">
            <input
              id="register-password"
              name="password"
              type={showPassword ? "text" : "password"}
              className="form-input"
              placeholder="At least 8 characters"
              autoComplete="new-password"
              required
              minLength={8}
            />
            <button
              type="button"
              className="field-action"
              onClick={() => setShowPassword((v) => !v)}
              aria-pressed={showPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="register-confirm-password">
            Confirm password
          </label>
          <div className="form-field">
            <input
              id="register-confirm-password"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              className="form-input"
              placeholder="Re-enter your password"
              autoComplete="new-password"
              required
              minLength={8}
            />
          </div>
        </div>

        <label className="form-terms">
          <input type="checkbox" name="terms" required />
          <span>
            I agree to SocialHub&rsquo;s{" "}
            <a className="form-link" href="#terms">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="form-link" href="#privacy">
              Privacy Policy
            </a>
            .
          </span>
        </label>

        <button
          className="btn btn-primary btn-lg auth-submit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating account…" : "Create account"}
        </button>
      </form>
    </AuthLayout>
  );
}
