import { useI18n } from "../i18n/useI18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <aside>
        <div className="flex flex-col items-center gap-4 mb-6">
          <img src="/logo-with-text.png" alt="Instituto Tim Beddows" className="h-12 object-contain" />
        </div>
        <p className="max-w-md">{t("index.footer.tagline")}</p>
        <div className="flex items-center gap-2 mt-4 justify-center">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <p className="text-sm font-medium text-success">{t("index.footer.development")}</p>
        </div>
        <p className="text-sm opacity-70 mt-2">
          © {new Date().getFullYear()} Instituto Tim Beddows • All rights reserved
        </p>
      </aside>
    </footer>
  );
}
