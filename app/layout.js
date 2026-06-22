import { Inter, DM_Sans } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "mPay Network | Pan-Caribbean Payment Solutions",
  description:
    "mPay Network — A secure, modern pan-Caribbean payment infrastructure enabling domestic, cross-border, and eCommerce payments across the Caribbean.",
  keywords: ["payment network", "caribbean payments", "cross-border", "fintech", "mpay"],
  openGraph: {
    title: "mPay Network | Pan-Caribbean Payment Solutions",
    description:
      "Shaping the future of financial services across the Caribbean with zero-fraud, cardless payment technology.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('mpay-theme') || 'light';
                if (t === 'dark') document.documentElement.classList.add('dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-[#0a0f1c] text-slate-900 dark:text-slate-50 antialiased overflow-x-hidden transition-colors duration-300">
        
        {/* ── Global Background Effects ─────────────────────────────────── */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
          {/* Soft, premium glow blobs */}
          <div className="absolute top-[-10%] left-[10%] w-[50vw] max-w-[600px] aspect-square rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-[120px] animate-[mesh-move_15s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[60vw] max-w-[700px] aspect-square rounded-full bg-cyan-400/10 dark:bg-cyan-400/10 blur-[130px] animate-[mesh-move_12s_ease-in-out_infinite_reverse]" />
        </div>

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
