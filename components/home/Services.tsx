import Link from "next/link";
import Container from "components/shared/Container";

// Custom High-Fidelity Realistic SVG Icons
const RenovationIcon = () => (
    <svg className="h-14 w-14 transition-all duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="renoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
            <linearGradient id="renoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
        </defs>
        {/* House background accent */}
        <path d="M12 28L32 10L52 28V50C52 52.2 50.2 54 48 54H16C13.8 54 12 52.2 12 50V28Z" fill="url(#renoGrad1)" fillOpacity="0.08" className="transition-colors duration-300 group-hover:fill-white/10" />
        {/* House frame */}
        <path d="M32 10L10 29.8V51C10 52.7 11.3 54 13 54H32" stroke="url(#renoGrad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-white" />
        <path d="M32 10L54 29.8V51C54 52.7 52.7 54 51 54H44" stroke="url(#renoGrad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-white" />
        <path d="M6 31L32 8L58 31" stroke="url(#renoGrad1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-white" />
        {/* Hammer / Ruler Tool Details */}
        <path d="M22 45L40 27" stroke="url(#renoGrad2)" strokeWidth="3.5" strokeLinecap="round" className="transition-colors duration-300 group-hover:stroke-white/80" />
        <path d="M38 25L42 29" stroke="url(#renoGrad2)" strokeWidth="3.5" strokeLinecap="round" className="transition-colors duration-300 group-hover:stroke-white/80" />
        <circle cx="32" cy="38" r="7" stroke="url(#renoGrad2)" strokeWidth="2" className="transition-colors duration-300 group-hover:stroke-white/80" />
    </svg>
);

const StructuralIcon = () => (
    <svg className="h-14 w-14 transition-all duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="structGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
        </defs>
        {/* Blueprint background grid */}
        <path d="M8 8H56V56H8V8Z" fill="#3b82f6" fillOpacity="0.05" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" className="transition-all duration-300 group-hover:stroke-white/30 group-hover:fill-white/5" />
        {/* Columns */}
        <rect x="14" y="16" width="8" height="32" rx="1" fill="url(#structGrad)" fillOpacity="0.2" stroke="url(#structGrad)" strokeWidth="2" className="transition-colors duration-300 group-hover:stroke-white group-hover:fill-white/10" />
        <rect x="42" y="16" width="8" height="32" rx="1" fill="url(#structGrad)" fillOpacity="0.2" stroke="url(#structGrad)" strokeWidth="2" className="transition-colors duration-300 group-hover:stroke-white group-hover:fill-white/10" />
        {/* Horizontal Beam */}
        <path d="M10 24H54V32H10V24Z" fill="url(#structGrad)" stroke="url(#structGrad)" strokeWidth="2" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-white group-hover:fill-white/20" />
        <path d="M16 28H48" stroke="#fff" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Supports */}
        <path d="M14 32L24 42" stroke="url(#structGrad)" strokeWidth="2.5" strokeLinecap="round" className="transition-colors duration-300 group-hover:stroke-white/75" />
        <path d="M50 32L40 42" stroke="url(#structGrad)" strokeWidth="2.5" strokeLinecap="round" className="transition-colors duration-300 group-hover:stroke-white/75" />
    </svg>
);

const PaintingIcon = () => (
    <svg className="h-14 w-14 transition-all duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="paintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
        </defs>
        {/* Background wet paint shape */}
        <path d="M12 12C12 12 24 6 36 12C48 18 52 14 52 14V30H12V12Z" fill="url(#paintGrad)" fillOpacity="0.08" className="transition-colors duration-300 group-hover:fill-white/10" />
        {/* Roller Handle */}
        <path d="M22 40H36V46C36 47.8 34.5 49 33 49H25C23.5 49 22 47.8 22 46V40Z" stroke="#475569" strokeWidth="2" className="transition-colors duration-300 group-hover:stroke-white/80" />
        <path d="M29 40V53" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" className="transition-colors duration-300 group-hover:stroke-white" />
        <path d="M46 22V36H36" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-white" />
        {/* Roller Cylinder */}
        <rect x="16" y="14" width="30" height="12" rx="3" fill="url(#paintGrad)" stroke="url(#paintGrad)" strokeWidth="2" className="transition-colors duration-300 group-hover:stroke-white" />
        {/* Paint droplets */}
        <path d="M20 26V31C20 32 20.8 33 21.8 33C22.8 33 23.6 32 23.6 31V26" fill="url(#paintGrad)" className="transition-colors duration-300 group-hover:fill-white" />
        {/* Waterproofing droplet detail */}
        <path d="M10 44C10 44 13 41 16 44C19 47 22 44 22 44" stroke="url(#waterGrad)" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 51C12.5 51 11 49.5 11 48C11 46.5 14 43 14 43C14 43 17 46.5 17 48C17 49.5 15.5 51 14 51Z" fill="url(#waterGrad)" />
    </svg>
);

const GlazingIcon = () => (
    <svg className="h-14 w-14 transition-all duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
        </defs>
        {/* Glossy glass */}
        <rect x="14" y="14" width="36" height="36" rx="2" fill="url(#glassGrad)" fillOpacity="0.3" className="transition-colors duration-300 group-hover:fill-white/20" />
        {/* Metal frame */}
        <rect x="10" y="10" width="44" height="44" rx="4" stroke="url(#frameGrad)" strokeWidth="3" className="transition-colors duration-300 group-hover:stroke-white" />
        <line x1="32" y1="10" x2="32" y2="54" stroke="url(#frameGrad)" strokeWidth="2" className="transition-colors duration-300 group-hover:stroke-white" />
        <line x1="10" y1="32" x2="54" y2="32" stroke="url(#frameGrad)" strokeWidth="2" className="transition-colors duration-300 group-hover:stroke-white" />
        {/* Reflective light shine lines */}
        <path d="M18 26L24 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M38 26L44 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M18 48L24 42" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M38 48L44 42" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
);

const MEPIcon = () => (
    <svg className="h-14 w-14 transition-all duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="elecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
            <linearGradient id="plumbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
        </defs>
        {/* Pipes/wires background */}
        <circle cx="32" cy="32" r="22" fill="#0d9488" fillOpacity="0.05" className="transition-colors duration-300 group-hover:fill-white/10" />
        {/* Pipes */}
        <path d="M12 24H32V44H52" stroke="url(#plumbGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-white" />
        {/* Connectors */}
        <rect x="29" y="20" width="6" height="8" rx="1" fill="url(#plumbGrad)" className="transition-colors duration-300 group-hover:fill-white" />
        {/* Lightning Spark */}
        <path d="M37 12L23 30H33L29 48L43 30H33L37 12Z" fill="url(#elecGrad)" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
        {/* Waves for HVAC */}
        <path d="M16 48C18 48 20 46 22 48" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" className="transition-colors duration-300 group-hover:stroke-white/60" />
    </svg>
);

const SolarIcon = () => (
    <svg className="h-14 w-14 transition-all duration-300 group-hover:scale-110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="solarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
        </defs>
        {/* Sun glowing rays */}
        <circle cx="48" cy="18" r="8" fill="url(#sunGrad)" fillOpacity="0.25" className="animate-pulse" />
        <circle cx="48" cy="18" r="5" fill="url(#sunGrad)" />
        <line x1="48" y1="8" x2="48" y2="10" stroke="url(#sunGrad)" strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="18" x2="40" y2="18" stroke="url(#sunGrad)" strokeWidth="2" strokeLinecap="round" />
        {/* Solar Panel frame */}
        <path d="M12 46L24 24H50L38 46H12Z" fill="url(#solarGrad)" stroke="#1e3a8a" strokeWidth="2" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-white group-hover:fill-white/20" />
        {/* Grid divisions */}
        <line x1="21" y1="46" x2="33" y2="24" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
        <line x1="30" y1="46" x2="42" y2="24" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
        <line x1="18" y1="35" x2="44" y2="35" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
    </svg>
);

const services = [
    {
        title: "Renovation & Upgrading",
        icon: RenovationIcon,
        slug: "renovation-upgrading",
    },
    {
        title: "Structural & Exterior Works",
        icon: StructuralIcon,
        slug: "structural-exterior-works",
    },
    {
        title: "Painting & Waterproofing",
        icon: PaintingIcon,
        slug: "painting-waterproofing",
    },
    {
        title: "Aluminium & Glazing Works",
        icon: GlazingIcon,
        slug: "aluminium-glazing-works",
    },
    {
        title: "Electrical, Plumbing & Aircon",
        icon: MEPIcon,
        slug: "electrical-plumbing-aircon",
    },
    {
        title: "Solar Panel Installation",
        icon: SolarIcon,
        slug: "solar-panel-installation",
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-white py-8 lg:py-12">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                        What We Do
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
                        Our Services
                    </h2>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
                    {services.map(({ title, icon: Icon, slug }) => (
                        <Link
                            key={title}
                            href={`/services/${slug}`}
                            className="group flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white px-5 py-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:bg-primary hover:shadow-[0_12px_30px_rgba(100,18,21,0.15)] sm:min-h-[200px]"
                        >
                            <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
                                <Icon />
                            </div>

                            <h3 className="mt-2 text-base font-bold leading-snug text-slate-950 transition-colors duration-300 group-hover:text-white">
                                {title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}