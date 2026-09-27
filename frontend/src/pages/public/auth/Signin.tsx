import { useState, type FormEvent } from "react";
import AuthLayout from "./components/AuthLayout";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");

    if (!email || !password) {
      setError("Enter your email and password to continue.");
      setIsSubmitting(false);
      return;
    }

    // Replace with real authentication call.
    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 900);
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to catch up with your circle."
      footer={
        <>
          New to SocialHub?{" "}
          <a className="form-link" href="#register">
            Create an account
          </a>
        </>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        {error && <p className="auth-error">{error}</p>}

        <div className="form-group">
          <label className="form-label" htmlFor="login-email">
            Email
          </label>
          <div className="form-field">
            <input
              id="login-email"
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
          <label className="form-label" htmlFor="login-password">
            Password
          </label>
          <div className="form-field">
            <input
              id="login-password"
              name="password"
              type={showPassword ? "text" : "password"}
              className="form-input"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
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

        <div className="form-meta">
          <label className="form-check">
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <a className="form-link" href="#forgot-password">
            Forgot password?
          </a>
        </div>

        <button
          className="btn btn-primary btn-lg auth-submit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </AuthLayout>
  );
}
