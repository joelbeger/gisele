import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gisele Rodrigues Da Silva, Psicóloga | Psicologia Perinatal e Parentalidade",
  description:
    "Psicóloga clínica com abordagem psicanalítica. Atendimento especializado em psicologia perinatal, parentalidade, hospitalar, luto e psicossomática.",
  keywords: [
    "psicóloga",
    "psicologia perinatal",
    "parentalidade",
    "psicanálise",
    "psicologia hospitalar",
    "luto",
    "Gisele Rodrigues",
  ],
  authors: [{ name: "Gisele Rodrigues Da Silva" }],
  openGraph: {
    title: "Gisele Rodrigues Da Silva, Psicóloga",
    description:
      "Cuidado acolhedor em cada fase da vida. Especialista em psicologia perinatal e parentalidade.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#6B7F5E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${nunito.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
