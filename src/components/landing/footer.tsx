"use client";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-6 text-center text-muted-foreground">
        <p>© {currentYear} Pulat Zafarov. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
