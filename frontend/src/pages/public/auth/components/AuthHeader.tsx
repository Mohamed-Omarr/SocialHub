import type { ReactNode } from "react";

type AuthHeaderProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
};

export default function AuthHeader({
  title,
  subtitle,
  children,
  footer,
}: AuthHeaderProps) {
  return (
    <div className="auth-page">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />

      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>

          {children}
        </div>

        <p className="auth-footer">{footer}</p>
      </div>
    </div>
  );
}
