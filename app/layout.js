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
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
