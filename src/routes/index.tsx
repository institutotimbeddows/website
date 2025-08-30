import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { 
  Heart, 
  MapPin, 
  Mail, 
  ArrowRight,
  Music,
  Film,
  Palette,
  Code,
  Users,
  Calendar,
  GraduationCap,
  Zap,
  Rocket,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useI18n } from "../i18n/useI18n";

import { Navbar } from "../features/navigation";
import { PEOPLE_PHOTOS } from "../assets";
import { Footer } from "../components/footer";



export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { t, language } = useI18n();

  useEffect(() => {
    document.title = t("hero.title") + " - " + t("hero.tagline");
  }, [language, t]);

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  const { t } = useI18n();
  
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className="badge badge-primary badge-lg animate-pulse">
              <Zap className="w-4 h-4 mr-1" />
              {t("index.hero.badge.coming")}
            </div>
            <div className="badge badge-secondary badge-lg">
              {t("index.hero.badge.topics")}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
{t("index.hero.title")}
          </h1>

          <p className="text-xl md:text-2xl font-semibold mb-4">
{t("index.hero.tagline")}
          </p>

          <p className="text-lg md:text-xl mb-6 max-w-3xl">
{t("index.hero.description")}
          </p>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 border border-primary/30 rounded-2xl p-8 mb-8 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Rocket className="w-6 h-6 text-primary animate-bounce" />
              <h3 className="text-lg font-bold text-base-content">{t("index.hero.development")}</h3>
            </div>
            <p className="text-base text-center text-base-content/80">
{t("index.hero.development.description")} 
              <span className="font-semibold text-base-content"> {t("index.hero.development.launch")}</span>
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/about" className="btn btn-primary btn-lg">
              <ArrowRight className="w-5 h-5" />
              {t("index.hero.cta.learn")}
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              <Mail className="w-5 h-5" />
              {t("index.hero.cta.contact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t("index.about.mission.title")}
              </h2>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
            <p className="text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
{t("index.about.mission.description")}
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
  {t("index.about.team.title")}
            </h3>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* President */}
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
                  <h4 className="text-2xl font-bold">
                    Gabriel V. Santana
                  </h4>
                  <p className="text-primary font-semibold mb-4">
                    {t("index.about.team.gabriel.role")}
                  </p>
                  <p className="text-sm leading-relaxed opacity-80">
                    {t("index.about.team.gabriel.bio")}
                  </p>
          </div>
      </div>

              {/* Vice President */}
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
                  <h4 className="text-2xl font-bold">
                    Gustavo Ruas
                  </h4>
                  <p className="text-secondary font-semibold mb-4">
                    {t("index.about.team.gustavo.role")}
                  </p>
                  <p className="text-sm leading-relaxed opacity-80">
                    {t("index.about.team.gustavo.bio")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const { t } = useI18n();
  
  const programs = [
    {
      icon: Music,
      title: t("index.programs.music.title"),
      description: t("index.programs.music.description"),
      features: [
        t("index.programs.music.features.instruments"),
        t("index.programs.music.features.theory"), 
        t("index.programs.music.features.recording"),
        t("index.programs.music.features.workshops")
      ],
      color: "primary"
    },
    {
      icon: Film,
      title: t("index.programs.cinema.title"), 
      description: t("index.programs.cinema.description"),
      features: [
        t("index.programs.cinema.features.screenwriting"),
        t("index.programs.cinema.features.production"),
        t("index.programs.cinema.features.editing"),
        t("index.programs.cinema.features.documentary")
      ],
      color: "secondary"
    },
    {
      icon: Palette,
      title: t("index.programs.visual.title"),
      description: t("index.programs.visual.description"), 
      features: [
        t("index.programs.visual.features.drawing"),
        t("index.programs.visual.features.digital"),
        t("index.programs.visual.features.photography"),
        t("index.programs.visual.features.history")
      ],
      color: "accent"
    },
    {
      icon: Code,
      title: t("index.programs.technology.title"),
      description: t("index.programs.technology.description"),
      features: [
        t("index.programs.technology.features.web"),
        t("index.programs.technology.features.mobile"), 
        t("index.programs.technology.features.marketing"),
        t("index.programs.technology.features.entrepreneurship")
      ],
      color: "info"
    },
    {
      icon: Users,
      title: t("index.programs.community.title"), 
      description: t("index.programs.community.description"),
      features: [
        t("index.programs.community.features.projects"),
        t("index.programs.community.features.exchange"),
        t("index.programs.community.features.mentorship"),
        t("index.programs.community.features.seniors")
      ],
      color: "success"
    },
    {
      icon: Calendar,
      title: t("index.programs.events.title"),
      description: t("index.programs.events.description"),
      features: [
        t("index.programs.events.features.exhibitions"),
        t("index.programs.events.features.screenings"), 
        t("index.programs.events.features.concerts"),
        t("index.programs.events.features.festivals")
      ],
      color: "warning"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                {t("index.about.programs.title")}
              </h2>
              <div className="badge badge-accent badge-sm animate-pulse">
                <Clock className="w-3 h-3 mr-1" />
                {t("index.about.programs.badge")}
              </div>
            </div>
            <p className="text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
{t("index.about.programs.description")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              const colorClass = program.color;
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden"
                >
                  <div className={`relative card bg-gradient-to-br from-${colorClass}/5 via-base-100 to-${colorClass}/10 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-${colorClass}/20 hover:border-${colorClass}/40`}>
                    <div className="card-body p-8">
                      <div className="flex flex-col items-center text-center mb-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${colorClass}/20 to-${colorClass}/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-${colorClass}/30`}>
                          <IconComponent className={`w-10 h-10 text-${colorClass} drop-shadow-sm`} />
                        </div>
                        <h3 className="text-xl font-bold">{program.title}</h3>
                      </div>

                      <p className="text-base-content/70 mb-6 leading-relaxed text-center text-sm">
                        {program.description}
                      </p>

                      <div className="space-y-3 flex-1">
                        {program.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-5 h-5 rounded-full bg-${colorClass}/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm`}>
                              <GraduationCap className={`w-3 h-3 text-${colorClass}`} />
                            </div>
                            <span className="text-sm font-medium leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="card-actions justify-center mt-8">
                        <button className={`btn btn-outline btn-${colorClass} btn-sm hover:btn-${colorClass} transition-all duration-300`} disabled>
                          <Clock className="w-4 h-4" />
                          {t("index.buttons.coming_soon")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-success/10 via-primary/5 to-info/10 border border-primary/20 rounded-2xl p-8 mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary animate-pulse" />
                  <h3 className="text-2xl font-bold">{t("index.accessibility.title")}</h3>
                </div>
                <p className="text-base-content/70 mb-6">{t("index.accessibility.description")}</p>
              {/*
                <div className="grid gap-4 md:grid-cols-3 text-sm">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span>{t("index.progress.program")}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                    <span>{t("index.progress.partnerships")}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-info rounded-full animate-pulse"></div>
                    <span>{t("index.progress.space")}</span>
                  </div>
                </div> */}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="btn btn-primary btn-lg"
                >
                  <Users className="w-5 h-5" />
                  {t("index.buttons.join_community")}
                </Link>
                <Link 
                  to="/about"
                  className="btn btn-outline btn-lg"
                >
                  <GraduationCap className="w-5 h-5" />
                  {t("index.hero.cta.learn")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
    <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t("index.hero.cta.contact")}
              </h2>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <p className="text-xl opacity-80 leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-accent">{t("index.contact.title")}</span> {t("index.contact.description")}
            </p>
        </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Email Contact */}
            <div className="group">
              <div className="card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-primary/40">
                <div className="card-body text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg border border-primary/30">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t("index.contact.email.title")}</h3>
                  <p className="text-base-content/70 mb-6">{t("index.contact.email.description")}</p>
                <a 
                  href="mailto:contato@itb.ong"
                    className="btn btn-primary btn-sm"
                >
                    {t("index.buttons.send_email")}
                </a>
                </div>
            </div>
          </div>

            {/* Location */}
            <div className="group">
              <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-secondary/40">
                <div className="card-body text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg border border-secondary/30">
                    <MapPin className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t("index.contact.location.title")}</h3>
                  <p className="text-base-content/70 mb-6">{t("index.contact.location.description")}</p>
                  <p className="font-medium text-secondary">{t("index.contact.location.address")}</p>
                </div>
              </div>
            </div>

            {/* Partnership */}
            <div className="group">
              <div className="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-accent/40">
                <div className="card-body text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg border border-accent/30">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t("index.contact.collaborate.title")}</h3>
                  <p className="text-base-content/70 mb-6">{t("index.contact.collaborate.description")}</p>
                  <Link 
                    to="/about"
                    className="btn btn-accent btn-sm"
                  >
                    {t("index.hero.cta.learn")}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Rocket className="w-6 h-6 text-primary animate-bounce" />
                <h3 className="text-2xl font-bold">{t("index.cta.title")}</h3>
              </div>
              <p className="text-base-content/70 mb-8">{t("index.cta.description")} <span className="font-semibold text-primary">{t("index.cta.highlight")}</span></p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contato@itb.ong"
                  className="btn btn-primary btn-lg"
                >
                  <Mail className="w-5 h-5" />
                  {t("index.buttons.get_involved")}
                </a>
                <Link 
                  to="/about"
                  className="btn btn-outline btn-lg"
                >
                  <Heart className="w-5 h-5" />
                  {t("index.hero.cta.learn")}
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
    </section>
  );
}
