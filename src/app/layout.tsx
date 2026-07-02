import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl = "https://webtech.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WebTech — Sites profissionais para empresas de tecnologia",
    template: "%s | WebTech",
  },
  description:
    "Criação de sites modernos e rápidos para empresas de tecnologia e assistência técnica conquistarem mais credibilidade e mais clientes.",
  keywords: [
    "criação de sites",
    "site para assistência técnica",
    "site para empresa de tecnologia",
    "desenvolvimento de sites",
    "landing page profissional",
  ],
  authors: [{ name: "WebTech" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "WebTech",
    title: "WebTech — Sites profissionais para empresas de tecnologia",
    description:
      "Sites modernos, rápidos e bem estruturados para transmitir credibilidade e converter mais clientes.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "WebTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebTech — Sites profissionais para empresas de tecnologia",
    description:
      "Sites modernos, rápidos e bem estruturados para transmitir credibilidade e converter mais clientes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="bg-night font-sans text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "WebTech",
              description:
                "Criação de sites profissionais para empresas de tecnologia e assistência técnica.",
              url: siteUrl,
              areaServed: "BR",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
