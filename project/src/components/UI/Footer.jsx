import { Confetti } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer>
      <small>
        Developed with fun by Jennifer Magpantay{" "}
        <Confetti size={18} color="#fafafa" />
      </small>
      <small>
        Perfectly explained by{" "}
        <a
          href="https://twitter.com/maxedapps"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maximilian Schwarzmüller
        </a>
      </small>
    </footer>
  );
};
