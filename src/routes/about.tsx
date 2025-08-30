import { createFileRoute } from "@tanstack/react-router";
import { 
  Code,
  Users,
  ExternalLink
} from "lucide-react";
import { Navbar } from "../features/navigation";
import { useI18n } from "../i18n/useI18n";
import { PEOPLE_PHOTOS } from "../assets";
import { Footer } from "../components/footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutPageContent />
    </>
  );
}

function AboutPageContent() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <main>
        <HeroSection />
        <TeamSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  const { t } = useI18n();
  
  return (
    <section className="hero py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t("about.page.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl opacity-80">
            {t("about.page.description")}
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const { t } = useI18n();
  
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{t('about.team.title')}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Gabriel */}
            <div className="card bg-gradient-to-br from-primary/8 via-base-100 to-primary/12 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-primary/40">
              <div className="card-body text-center">
                <div className="avatar mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto ring-4 ring-primary/20">
                    <img
                      src={PEOPLE_PHOTOS.gabrielSantana}
                      alt="Gabriel V. Santana"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Gabriel V. Santana</h3>
                <p className="text-primary font-semibold mb-4">{t('about.team.gabriel.role')}</p>
                <p className="text-sm leading-relaxed opacity-80 mb-4">{t('about.team.gabriel.bio')}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="badge badge-primary">{t('about.team.gabriel.skills.programming')}</div>
                  <div className="badge badge-primary">{t('about.team.gabriel.skills.music')}</div>
                  <div className="badge badge-primary">{t('about.team.gabriel.skills.languages')}</div>
                  <div className="badge badge-primary">{t('about.team.gabriel.skills.education')}</div>
                </div>
              </div>
            </div>

            {/* Gustavo */}
            <div className="card bg-gradient-to-br from-secondary/8 via-base-100 to-secondary/12 border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-secondary/40">
              <div className="card-body text-center">
                <div className="avatar mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto ring-4 ring-secondary/20">
                    <img
                      src={PEOPLE_PHOTOS.gustavoRuas}
                      alt="Gustavo Ruas"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Gustavo Ruas</h3>
                <p className="text-secondary font-semibold mb-4">{t('about.team.gustavo.role')}</p>
                <p className="text-sm leading-relaxed opacity-80 mb-4">{t('about.team.gustavo.bio')}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="badge badge-secondary">{t('about.team.gustavo.skills.drawing')}</div>
                  <div className="badge badge-secondary">{t('about.team.gustavo.skills.cinema')}</div>
                  <div className="badge badge-secondary">{t('about.team.gustavo.skills.music')}</div>
                  <div className="badge badge-secondary">{t('about.team.gustavo.skills.teaching')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { t } = useI18n();
  
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{t('about.mission.title')}</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Arts */}
            <div className="group">
              <div className="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-accent/40">
                <div className="card-body text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg border border-accent/30">
                    <Code className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t('about.mission.arts.title')}</h3>
                  <p className="text-base-content/70 mb-6">{t('about.mission.arts.description')}</p>
                  <div className="space-y-1 text-sm text-base-content/60">
                    <p>• {t("about.mission.arts.features.music")}</p>
                    <p>• {t("about.mission.arts.features.film")}</p>
                    <p>• {t("about.mission.arts.features.visual")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="group">
              <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-secondary/40">
                <div className="card-body text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg border border-secondary/30">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t('about.mission.community.title')}</h3>
                  <p className="text-base-content/70 mb-6">{t('about.mission.community.description')}</p>
                  <div className="space-y-1 text-sm text-base-content/60">
                    <p>• {t("about.mission.community.features.workshops")}</p>
                    <p>• {t("about.mission.community.features.exchange")}</p>
                    <p>• {t("about.mission.community.features.projects")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="group">
              <div className="card bg-gradient-to-br from-success/10 to-success/5 border border-success/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-success/40">
                <div className="card-body text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-success/20 to-success/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg border border-success/30">
                    <ExternalLink className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t('about.mission.impact.title')}</h3>
                  <p className="text-base-content/70 mb-6">{t('about.mission.impact.description')}</p>
                  <div className="space-y-1 text-sm text-base-content/60">
                    <p>• {t("about.mission.impact.features.exhibitions")}</p>
                    <p>• {t("about.mission.impact.features.screenings")}</p>
                    <p>• {t("about.mission.impact.features.celebrations")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

