import "./Logo.scss";

import clsx from "clsx";

import LogoImageSrc from "~/assets/img/logo.svg";
import DarkLogoImageSrc from "~/assets/img/logo-dark.svg";

interface LogoProps {
	variant?: "light" | "dark";
  className: string;
}

const Logo = ({ className, variant = "light" }: LogoProps) => {
  return (
    <a href="/" className={clsx(className, "logo")}>
      <img
        src={variant === "light" ? LogoImageSrc : DarkLogoImageSrc}
        alt="Наш логотип"
        width={293}
        height={32}
        loading="lazy"
        className="logo__image"
      />
    </a>
  );
};

export default Logo;
