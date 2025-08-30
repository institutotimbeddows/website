import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "../i18n/useI18n";
import { Navbar } from "../features/navigation";
import { Footer } from "../components/footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Users, 
  Award,
  Building,
  Scale,
  Calculator,
  Heart
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactPageContent />
      <Footer />
    </>
  );
}

function ContactPageContent() {
  const { t } = useI18n();

  const teamMembers = [
    {
      name: t('contact.team.gabriel.name'),
      role: t('contact.team.gabriel.role'),
      photo: '/gabriel-santana-president.jpg',
      description: t('contact.team.gabriel.detailedDescription'),
      expertise: [
        t('contact.team.gabriel.expertise.music'), 
        t('contact.team.gabriel.expertise.audiovisual'), 
        t('contact.team.gabriel.expertise.social')
      ],
      icon: Heart,
      color: 'text-primary',
      bgGradient: 'from-primary/20 via-primary/10 to-primary/5',
      borderColor: 'border-primary/30'
    },
    {
      name: t('contact.team.gustavo.name'),
      role: t('contact.team.gustavo.role'),
      photo: '/gustavo-ruas-vice-president.jpg',
      description: t('contact.team.gustavo.detailedDescription'),
      expertise: [
        t('contact.team.gustavo.expertise.projects'), 
        t('contact.team.gustavo.expertise.community'), 
        t('contact.team.gustavo.expertise.strategy')
      ],
      icon: Users,
      color: 'text-secondary',
      bgGradient: 'from-secondary/20 via-secondary/10 to-secondary/5',
      borderColor: 'border-secondary/30'
    },
    {
      name: t('contact.team.felipe.name'),
      role: t('contact.team.felipe.role'),
      photo: '/felipe-arruda-contador.jpg',
      description: t('contact.team.felipe.detailedDescription'),
      expertise: [
        t('contact.team.felipe.expertise.accounting'), 
        t('contact.team.felipe.expertise.finance'), 
        t('contact.team.felipe.expertise.compliance')
      ],
      icon: Calculator,
      color: 'text-success',
      bgGradient: 'from-success/20 via-success/10 to-success/5',
      borderColor: 'border-success/30'
    },
    {
      name: t('contact.team.juliana.name'),
      role: t('contact.team.juliana.role'),
      photo: '/juliana-girardi-advogada.jpg',
      description: t('contact.team.juliana.detailedDescription'),
      expertise: [
        t('contact.team.juliana.expertise.civil'), 
        t('contact.team.juliana.expertise.administrative'), 
        t('contact.team.juliana.expertise.legal')
      ],
      icon: Scale,
      color: 'text-warning',
      bgGradient: 'from-warning/20 via-warning/10 to-warning/5',
      borderColor: 'border-warning/30'
    }
  ];

  const contactInfo = {
    email: t('contact.info.email'),
    phone: t('contact.info.phone'),
    address: t('contact.info.address'),
    workingHours: t('contact.info.hours'),
    socialMedia: {
      instagram: '@institutotimbeddows',
      facebook: 'Instituto Tim Beddows',
      linkedin: 'instituto-tim-beddows'
    }
  };

  const departments = [
    {
      name: t('contact.departments.administrative.title'),
      contact: t('contact.departments.general.email'),
      description: t('contact.departments.administrative.description'),
      icon: Building,
      color: 'text-primary',
      bgGradient: 'from-primary/10 to-primary/5',
      iconBg: 'bg-primary/15',
      borderColor: 'border-primary/20'
    },
    {
      name: t('contact.departments.projects.title'),
      contact: t('contact.departments.projects.email'),
      description: t('contact.departments.projects.description'),
      icon: Award,
      color: 'text-secondary',
      bgGradient: 'from-secondary/10 to-secondary/5',
      iconBg: 'bg-secondary/15',
      borderColor: 'border-secondary/20'
    },
    {
      name: t('contact.departments.volunteering.title'),
      contact: t('contact.departments.volunteering.email'),
      description: t('contact.departments.volunteering.description'),
      icon: Users,
      color: 'text-success',
      bgGradient: 'from-success/10 to-success/5',
      iconBg: 'bg-success/15',
      borderColor: 'border-success/20'
    },
    {
      name: t('contact.departments.donations.title'),
      contact: t('contact.departments.donations.email'),
      description: t('contact.departments.donations.description'),
      icon: Heart,
      color: 'text-warning',
      bgGradient: 'from-warning/10 to-warning/5',
      iconBg: 'bg-warning/15',
      borderColor: 'border-warning/20'
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl opacity-80">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-base-content">
              {t('contact.team.title')}
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              {t('contact.team.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => {
              const colorMap: Record<string, { bg: string; border: string; hover: string }> = {
                'text-primary': { bg: 'from-primary/8 via-base-100 to-primary/12', border: 'border-primary/20', hover: 'hover:border-primary/40' },
                'text-secondary': { bg: 'from-secondary/8 via-base-100 to-secondary/12', border: 'border-secondary/20', hover: 'hover:border-secondary/40' },
                'text-success': { bg: 'from-success/8 via-base-100 to-success/12', border: 'border-success/20', hover: 'hover:border-success/40' },
                'text-warning': { bg: 'from-warning/8 via-base-100 to-warning/12', border: 'border-warning/20', hover: 'hover:border-warning/40' }
              };
              const colors = colorMap[member.color] || colorMap['text-primary'];
              
              return (
                <div key={index} className={`card bg-gradient-to-br ${colors.bg} ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-300 ${colors.hover}`}>
                  <div className="card-body text-center">
                    <div className="avatar mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto ring-4 ring-primary/20">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold">{member.name}</h4>
                    <p className={`${member.color} font-semibold mb-4`}>
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed opacity-80 mb-4">
                      {member.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className={`badge badge-sm ${member.color.replace('text-', 'badge-')}`}>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-base-content">
              {t('contact.info.title')}
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              {t('contact.info.subtitle')}
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
                  <h3 className="text-xl font-bold mb-4">{t('contact.info.email.title')}</h3>
                  <p className="text-base-content/70 mb-6">{t('contact.info.email.description')}</p>
                  <p className="font-medium text-primary">{contactInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group">
              <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-secondary/40">
                <div className="card-body text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg border border-secondary/30">
                    <Phone className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t('contact.info.phone.title')}</h3>
                  <p className="text-base-content/70 mb-6">{t('contact.info.phone.description')}</p>
                  <p className="font-medium text-secondary">{contactInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="group">
              <div className="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-accent/40">
                <div className="card-body text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg border border-accent/30">
                    <MapPin className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t('contact.info.location.title')}</h3>
                  <p className="text-base-content/70 mb-6">{t('contact.info.location.description')}</p>
                  <p className="font-medium text-accent">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Departments */}
      <div className="container mx-auto px-4 py-16 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-base-content">
              {t('contact.departments.title')}
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              {t('contact.departments.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {departments.map((dept, index) => {
              const DeptIcon = dept.icon;
              const colorMap: Record<string, { bg: string; border: string; hover: string; iconBg: string; iconBorder: string }> = {
                'text-primary': { bg: 'from-primary/10 to-primary/5', border: 'border-primary/20', hover: 'hover:border-primary/40', iconBg: 'bg-gradient-to-br from-primary/20 to-primary/30', iconBorder: 'border-primary/30' },
                'text-secondary': { bg: 'from-secondary/10 to-secondary/5', border: 'border-secondary/20', hover: 'hover:border-secondary/40', iconBg: 'bg-gradient-to-br from-secondary/20 to-secondary/30', iconBorder: 'border-secondary/30' },
                'text-accent': { bg: 'from-accent/10 to-accent/5', border: 'border-accent/20', hover: 'hover:border-accent/40', iconBg: 'bg-gradient-to-br from-accent/20 to-accent/30', iconBorder: 'border-accent/30' },
                'text-success': { bg: 'from-success/10 to-success/5', border: 'border-success/20', hover: 'hover:border-success/40', iconBg: 'bg-gradient-to-br from-success/20 to-success/30', iconBorder: 'border-success/30' }
              };
              const colors = colorMap[dept.color] || colorMap['text-primary'];
              
              return (
                <div key={index} className="group">
                  <div className={`card bg-gradient-to-br ${colors.bg} ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-300 ${colors.hover}`}>
                    <div className="card-body text-center p-8">
                      <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg border ${colors.iconBorder}`}>
                        <DeptIcon className={`w-8 h-8 ${dept.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{dept.name}</h3>
                      <p className="text-base-content/70 mb-6">{dept.description}</p>
                      <p className={`font-medium ${dept.color}`}>{dept.contact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 py-16 bg-base-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-base-content">
              {t('contact.form.title')}
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              {t('contact.form.subtitle')}
            </p>
          </div>

          <div className="card bg-base-100 shadow-xl border border-primary/20">
            <div className="card-body">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">{t('contact.form.name')}</span>
                    </label>
                    <input 
                      type="text" 
                      className="input input-bordered w-full" 
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">{t('contact.form.email')}</span>
                    </label>
                    <input 
                      type="email" 
                      className="input input-bordered w-full" 
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-medium">{t('contact.form.subject')}</span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option value="">{t('contact.form.subjectSelect')}</option>
                    <option value="general">{t('contact.form.subjectGeneral')}</option>
                    <option value="projects">{t('contact.form.subjectProjects')}</option>
                    <option value="volunteer">{t('contact.form.subjectVolunteer')}</option>
                    <option value="donations">{t('contact.form.subjectDonations')}</option>
                    <option value="partnership">{t('contact.form.subjectPartnership')}</option>
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-medium">{t('contact.form.message')}</span>
                  </label>
                  <textarea 
                    className="textarea textarea-bordered w-full h-32" 
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>

                <div>
                  <button className="btn btn-primary w-full">
                    {t('contact.form.send')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      {/* <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6">{t('contact.social.title')}</h2>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              {t('contact.social.subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <span className="font-medium">{t('contact.social.labels.instagram')}</span>
                <span className="text-sm text-base-content/70">{contactInfo.socialMedia.instagram}</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📘</span>
                </div>
                <span className="font-medium">{t('contact.social.labels.facebook')}</span>
                <span className="text-sm text-base-content/70">{contactInfo.socialMedia.facebook}</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <span className="font-medium">{t('contact.social.labels.linkedin')}</span>
                <span className="text-sm text-base-content/70">{contactInfo.socialMedia.linkedin}</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
