import image_Banner___3 from '../imports/Banner_-_3.png'
import image_Banner___2 from '../imports/Banner_-_2_V2.png'
import image_Banner___1 from '../imports/Banner_-_1-1.png'
import { motion } from "motion/react";
import svgPaths from "../imports/ExpertHubPaginaDeLinks/svg-d2oc7gn16t";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import imgContainer from "figma:asset/acecbb15544a706eea19a431dad10cbaa2dfb7e1.png";

const PLACEHOLDER_BANNER =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80";

// ─── Banner Card ─────────────────────────────────────────────────────────────
interface BannerProps {
  href: string;
  image?: string;
}

function BannerCard({ href, image = PLACEHOLDER_BANNER }: BannerProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full max-w-[916px] rounded-2xl overflow-hidden cursor-pointer block"
      style={{ aspectRatio: "1145 / 425", border: "0.875px solid rgba(255,255,255,0.05)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.99 }}
    >
      <ImageWithFallback
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.a>
  );
}

// ─── Social Icon Button ────────────────────────────────────────────────────────
function SocialButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center size-10 rounded-full bg-[rgba(207,164,86,0.2)] border border-[rgba(207,164,86,0.3)] cursor-pointer"
      whileHover={{
        scale: 1.15,
        backgroundColor: "rgba(207,164,86,0.35)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
}

// ─── Instagram Icon ───────────────────────────────────────────────────────────
function InstagramIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <g clipPath="url(#ig-clip)">
        <path
          d={svgPaths.p299a6200}
          stroke="#cfa456"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d={svgPaths.p3cad6d80}
          stroke="#cfa456"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M13.125 4.875H13.1325"
          stroke="#cfa456"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="ig-clip">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </svg>
  );
}

// ─── LinkedIn Icon ────────────────────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path
        d={svgPaths.p204bd7c0}
        stroke="#cfa456"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.pad25e80}
        stroke="#cfa456"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p127a4d00}
        stroke="#cfa456"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// ─── YouTube Icon ─────────────────────────────────────────────────────────────
function YouTubeIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path
        d={svgPaths.p1e200900}
        stroke="#cfa456"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p35138200}
        stroke="#cfa456"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// ─── Facebook Icon ────────────────────────────────────────────────────────────
function FacebookIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
      <path
        d={svgPaths.p3c358280}
        stroke="#cfa456"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center"
      style={{
        background: "#000000",
      }}
    >
      {/* ── Profile Section ────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-4 pt-20 pb-2 px-4 w-full max-w-[800px]">
        {/* Name */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1
            className="uppercase tracking-widest"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 8vw, 56px)",
              letterSpacing: "0.05em",
              lineHeight: "1.1",
            }}
          >
            <span style={{ color: "#cfa456" }}>Daniele </span>
            <span style={{ color: "#cfa456" }}>Meger</span>
          </h1>
          <p
            className="max-w-[440px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#d1d5dc",
              lineHeight: "1.65",
              letterSpacing: "-0.01em",
            }}
          >
            Traduzo o sistema financeiro para que médicos parem de apenas faturar alto e comecem a construir patrimônio real com estratégia consciente.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            {[
              "24 anos de sistema financeiro",
              "Arquiteta de patrimônio médico",
              "Mentora do Método MMD",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-5 py-2 rounded-full bg-[rgba(207,164,86,0.15)] border border-[rgba(207,164,86,0.25)]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#cfa456",
                  letterSpacing: "0.06em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Banner Cards ───────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-6 w-full max-w-[916px] px-4 mt-8">
        <BannerCard
          href="https://dnafinanceiro.danielemeger.com.br/"
          image={image_Banner___1}
        />
        <BannerCard
          href="https://dnafinanceiro.danielemeger.com.br/"
          image={image_Banner___2}
        />
        <BannerCard
          href="https://wa.me/5511941335119?text=Ol%C3%A1%2C%20desejo%20aplicar%20para%20o%20M%C3%A9todo%20MMD."
          image={image_Banner___3}
        />
      </div>

      {/* ── Footer / Social ────────────────────────────────────────────────── */}
      <motion.div
        className="flex flex-col items-center gap-6 py-16 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4">
          <SocialButton href="https://www.instagram.com/danimeger/">
            <InstagramIcon />
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/danielemeger/">
            <LinkedInIcon />
          </SocialButton>
          <SocialButton href="https://www.youtube.com/@danielemeger">
            <YouTubeIcon />
          </SocialButton>
          <SocialButton href="https://www.facebook.com/daniele.megerkeppen.9">
            <FacebookIcon />
          </SocialButton>
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            color: "#666666",
            letterSpacing: "0.2px",
            textAlign: "center",
          }}
        >
          © 2026 Finanças de Quem Cuida • Todos os direitos reservados
        </p>
      </motion.div>
    </div>
  );
}