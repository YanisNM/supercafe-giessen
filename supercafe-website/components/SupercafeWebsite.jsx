"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Coffee,
  Instagram,
  MapPin,
  Clock,
  Leaf,
  Heart,
  Home as HomeIcon,
  ArrowRight,
  Menu as MenuIcon,
  X,
  Send,
  Phone,
  Mail,
  Beer,
  Snowflake,
  Sunrise,
  Utensils,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  supercafé — Gießen                                                 */
/*  Warm, editorial, "zweites Wohnzimmer" brand site, single page.     */
/* ------------------------------------------------------------------ */

/* Ribbon divider — the recurring signature motif: a soft hand-drawn
   curve, like the trace of a stirred cup, used instead of hairlines. */
function Ribbon({ className = "", tone = "stone" }) {
  const stroke =
    tone === "amber" ? "#92400e" : tone === "emerald" ? "#065f46" : "#d6d3d1";
  return (
    <svg
      viewBox="0 0 400 24"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 12 C 60 -4, 100 28, 160 12 S 260 -4, 320 12 S 380 24, 400 12"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Neutral placeholder for a future real photo — keeps the exact
   footprint/shape of the original image so layout stays untouched. */
function ImagePlaceholder({ className = "", iconSize = 26 }) {
  return (
    <div className={`bg-stone-200 flex items-center justify-center ${className}`}>
      <Coffee className="text-stone-400" size={iconSize} strokeWidth={1.5} />
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} ${shown ? "reveal" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const NAV_LINKS = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#menu", label: "Menü" },
  { href: "#galerie", label: "Galerie" },
  { href: "#besuch", label: "Besuch" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-50/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,25,23,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a
          href="#top"
          className="font-display italic text-2xl tracking-tight text-stone-900"
        >
          supercafé
        </a>
        <nav className="hidden md:flex items-center gap-9 font-body text-[13px] tracking-wide uppercase text-stone-700">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-amber-800 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#besuch"
          className="hidden md:inline-flex items-center gap-2 bg-stone-900 text-stone-50 font-body text-[13px] tracking-wide uppercase px-5 py-2.5 rounded-full hover:bg-amber-900 transition-colors"
        >
          Besuch planen <ArrowRight size={14} />
        </a>
        <button
          className="md:hidden text-stone-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü öffnen"
        >
          {open ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200 px-6 py-6 flex flex-col gap-5 font-body text-sm uppercase tracking-wide text-stone-700">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#besuch" onClick={() => setOpen(false)} className="text-amber-900 font-medium">
            Besuch planen →
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end pt-28 overflow-hidden bg-stone-100">
      <ImagePlaceholder className="absolute inset-0" iconSize={44} />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-stone-900/10" />

      {/* signature steam motif, top-left, quiet */}
      <div className="absolute top-28 left-6 md:left-10 hidden sm:block opacity-90">
        <svg width="48" height="70" viewBox="0 0 48 70" fill="none">
          <path className="steam-path" d="M14 60 C 8 50, 20 44, 14 34" stroke="#faf8f3" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path className="steam-path delay-1" d="M24 62 C 18 52, 30 46, 24 36" stroke="#faf8f3" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path className="steam-path delay-2" d="M34 60 C 28 50, 40 44, 34 34" stroke="#faf8f3" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
        <Reveal>
          <p className="font-body uppercase tracking-[0.25em] text-[12px] text-stone-100/90 mb-5">
            Gießen · Ludwigstraße 64
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-display text-stone-50 text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-3xl">
            Kaffee, Kuchen <br className="hidden sm:block" />
            und ein Platz zum <em className="italic text-amber-200">Bleiben</em>.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="font-body text-stone-100/90 text-base md:text-lg max-w-xl mt-6 leading-relaxed">
            Ein veganes Café in Gießen mit hausgemachten Spezialitäten,
            besonderem Kaffee und einer Atmosphäre zum Verweilen.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-stone-50 text-stone-900 font-body text-sm tracking-wide uppercase px-6 py-3.5 rounded-full hover:bg-amber-100 transition-colors"
            >
              Menü entdecken
            </a>
            <a
              href="#besuch"
              className="inline-flex items-center gap-2 border border-stone-50/70 text-stone-50 font-body text-sm tracking-wide uppercase px-6 py-3.5 rounded-full hover:bg-stone-50/10 transition-colors"
            >
              Besuch planen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber-uns" className="bg-stone-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <Reveal className="md:col-span-5 md:order-2">
          <div className="relative">
            <ImagePlaceholder className="w-full aspect-[4/5] rounded-2xl" iconSize={32} />
            <div className="absolute -bottom-6 -left-6 bg-amber-900 text-stone-50 font-display italic text-lg px-6 py-4 rounded-xl hidden sm:block max-w-[200px]">
              „Ein zweites Wohnzimmer.“
            </div>
          </div>
        </Reveal>
        <div className="md:col-span-7 md:order-1">
          <Reveal>
            <span className="font-body uppercase tracking-[0.25em] text-[12px] text-amber-800">
              Über uns
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4 leading-tight">
              Ein kleiner Ort <br />für große Momente.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-stone-600 leading-relaxed mt-6 max-w-xl">
              supercafé ist ein Ort für guten Kaffee, besondere Kreationen und
              Menschen, die gerne zusammenkommen. Mit Liebe gemacht, bewusst
              gedacht und geschaffen, um sich wie Zuhause zu fühlen — egal ob
              zum Arbeiten, Verabreden oder einfach, um für einen Moment
              innezuhalten.
            </p>
          </Reveal>
          <Ribbon className="w-40 h-5 mt-8" tone="amber" />
          <Reveal delay={280}>
            <div className="grid sm:grid-cols-3 gap-8 mt-8">
              <div>
                <p className="font-display text-2xl text-stone-900 mb-1">Geschichte</p>
                <p className="font-body text-sm text-stone-500 leading-relaxed">
                  Entstanden aus der Idee, Gießen einen Ort zu geben, den es
                  hier noch nicht gab.
                </p>
              </div>
              <div>
                <p className="font-display text-2xl text-stone-900 mb-1">Team</p>
                <p className="font-body text-sm text-stone-500 leading-relaxed">
                  Ein kleines, herzliches Team, das jeden Gast wie einen
                  Freund empfängt.
                </p>
              </div>
              <div>
                <p className="font-display text-2xl text-stone-900 mb-1">Philosophie</p>
                <p className="font-body text-sm text-stone-500 leading-relaxed">
                  Bewusst, pflanzlich, handgemacht — ohne Kompromiss beim
                  Geschmack.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const MENU_CATEGORIES = [
  {
    key: "bier",
    label: "Bier",
    subtitle: "0,33l Flasche",
    icon: Beer,
    items: [
      { name: "Ratsherrn Pilsener", price: "€4.20", desc: "Beste Zutaten, sonst nichts: das Hamburger Original, ganz ohne Schnickschnack." },
      { name: "Ratsherrn Pilsener 0,0%", price: "€4.20", desc: "Frei von Alkohol, aber voll mit feinsten Hopfenaromen." },
      { name: "Ratsherrn Helles", price: "€4.20", desc: "Hopfig, feinwürzig und süffig-frisch." },
      { name: "Ratsherrn Alster", price: "€4.20", desc: "Zitronig erfrischend statt übermäßig süß." },
      { name: "Ratsherrn Mildes Lime 0.0%", price: "€4.20", desc: "Spritzige Limette ohne Alkohol." },
      { name: "Der Tim", price: "€7.50", desc: "Ratsherrn Pilsener, Picon Bière Aperitif à l'Orange, Eis, Orangenscheibe." },
    ],
  },
  {
    key: "kalte-getraenke",
    label: "Kalte Getränke",
    icon: Snowflake,
    items: [
      { name: "Selbstgemachte Limo", price: "€4.90", desc: "Sorten: Himbeer-Zimt, Ananas-Limette." },
      { name: "Espresso-Tonic", price: "€5.60" },
      { name: "Iced Latte", price: "€5.60" },
      { name: "Iced Americano", price: "€4.20" },
      { name: "Iced Golden Milk", price: "€5.60" },
      { name: "Iced Cortado Condensado", price: "€4.50", desc: "Mit Sojamilch & Oatly Barista Edition." },
      { name: "Mineralwasser", price: "€2.50" },
      { name: "Apfelschorle", price: "€3.80" },
    ],
  },
  {
    key: "warme-getraenke",
    label: "Warme Getränke",
    icon: Coffee,
    items: [
      { name: "Cappuccino", price: "€3.90" },
      { name: "Flat White", price: "€4.30" },
      { name: "Latte Macchiato", price: "€4.60" },
      { name: "Espresso", price: "€2.60", desc: "Einfach oder doppelt." },
      { name: "Americano", price: "€3.20" },
      { name: "Cortado", price: "€3.60" },
      { name: "Selbstgemachter Apfel-Chai", price: "€4.60" },
      { name: "Selbstgemachte Golden Milk", price: "€4.60" },
      { name: "Heiße Schokolade", price: "€3.90" },
      { name: "Tee", price: "€3.70", desc: "Verschiedene Sorten." },
      { name: "Extra Shot Espresso", price: "€0.60" },
    ],
  },
  {
    key: "fruehstueck",
    label: "Frühstück",
    subtitle: "Täglich bis 13 Uhr",
    icon: Sunrise,
    items: [
      { name: "Frühstücksplatte", price: "€19.50", desc: "Ein Brötchen, ein Croissant, eine Scheibe Brot, zwei herzhafte Aufstriche, Nicht-Butter, süßer Aufstrich, zwei Nicht-Butter-Variationen, Nicht-Thunfisch-Crème, Hummus und Möhrensalat." },
      { name: "Frühstücksplatte & Portion „Nicht-Rührei“", price: "€26.00" },
      { name: "Extra Brötchen", price: "€2.50" },
      { name: "Extra Scheibe Brot", price: "€1.50" },
      { name: "Nicht-Rührei", price: "€8.50", desc: "Dazu eine Scheibe Brot & Nicht-Butter mit Petersilie." },
      { name: "Belegtes Croissant „Nicht-Rührei“", price: "€10.50", desc: "Wildkräutersalat, Frühlingszwiebel, Rauchwalnuss, Pickled Grapes, Gewürzketchup, Petersilie." },
      { name: "Belegtes Croissant „Nicht-Lachs“", price: "€10.50", desc: "Wildkräutersalat, Frühlingszwiebel, Nicht-Frischkäse, Senfkaviar, Dill, Preiselbeer-Meerrettich-Soße." },
      { name: "Selbstgemachtes Granola", price: "€9.50", desc: "Mit Nicht-Joghurt, Obstsalat, Nussmus & Nicht-Honig." },
      { name: "Selbstgemachte Overnight Oats", price: "€9.00", desc: "Mit Nicht-Joghurt, Obstsalat, Nussmus & Nicht-Honig." },
      { name: "Croissant", price: "€4.50", desc: "Mit Nicht-Butter oder Konfitüre." },
    ],
  },
  {
    key: "kleinigkeiten",
    label: "Kleinigkeiten",
    icon: Utensils,
    items: [
      { name: "Selbstgemachtes Granola", price: "€8.50", desc: "Mit Nicht-Joghurt, Obstsalat, Nussmus & Nicht-Honig." },
      { name: "Selbstgemachte Overnight Oats", price: "€8.00", desc: "Mit Nicht-Joghurt, Obstsalat, Nussmus & Nicht-Honig." },
      { name: "Croissant", price: "€4.50", desc: "Wahlweise mit Nicht-Butter oder Konfitüre." },
    ],
  },
];

function Menu() {
  const [active, setActive] = useState(MENU_CATEGORIES[0].key);
  const category = MENU_CATEGORIES.find((c) => c.key === active);
  return (
    <section id="menu" className="bg-stone-100 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="text-center max-w-xl mx-auto">
          <span className="font-body uppercase tracking-[0.25em] text-[12px] text-amber-800">
            Speisekarte
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">
            Was uns schmeckt
          </h2>
        </Reveal>

        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`inline-flex items-center gap-2 font-body text-sm px-5 py-2.5 rounded-full border transition-colors ${
                active === cat.key
                  ? "bg-stone-900 text-stone-50 border-stone-900"
                  : "bg-transparent text-stone-600 border-stone-300 hover:border-stone-500"
              }`}
            >
              <cat.icon size={15} strokeWidth={1.75} />
              {cat.label}
            </button>
          ))}
        </div>

        <Reveal key={category.key} className="mt-12">
          <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
              <div className="flex items-center gap-3">
                <category.icon className="text-amber-800" size={24} strokeWidth={1.5} />
                <h3 className="font-display text-2xl text-stone-900">{category.label}</h3>
              </div>
              {category.subtitle && (
                <span className="font-body text-[11px] uppercase tracking-wide text-stone-400 whitespace-nowrap mt-1.5">
                  {category.subtitle}
                </span>
              )}
            </div>
            <Ribbon className="w-24 h-4 mb-1" tone="amber" />
            <div className="divide-y divide-stone-200">
              {category.items.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-4 py-4">
                  <div className="pr-4">
                    <h4 className="font-display text-lg text-stone-900 leading-snug">{item.name}</h4>
                    {item.desc && (
                      <p className="font-body text-[13px] text-stone-500 italic mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <span className="font-body text-sm text-amber-800 whitespace-nowrap shrink-0 mt-1">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Zweites Wohnzimmer", "Specialty Coffee", "Handgemacht", "Vegan", "Gießen"];
  const track = [...words, ...words];
  return (
    <div className="bg-amber-900 py-5 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap w-max">
        {track.map((w, i) => (
          <span key={i} className="font-display italic text-2xl md:text-3xl text-amber-100/90 mx-8 flex items-center gap-8">
            {w} <span className="text-amber-200/50 font-body not-italic text-lg">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const GALLERY_IMAGES = [
  { alt: "Innenraum des supercafé mit warmem Licht" },
  { alt: "Kaffeezubereitung an der Espressomaschine" },
  { alt: "Frisch gebackener Kuchen auf dem Tresen" },
  { alt: "Gäste im Gespräch bei Kaffee" },
  { alt: "Pflanzen und natürliche Materialien im Café" },
  { alt: "Detailaufnahme einer Kaffeetasse auf Holztisch" },
];

function Gallery() {
  return (
    <section id="galerie" className="bg-stone-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-xl">
          <span className="font-body uppercase tracking-[0.25em] text-[12px] text-amber-800">
            Galerie
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">
            Da möchte ich hin.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 [&>*:nth-child(1)]:row-span-2 [&>*:nth-child(4)]:row-span-2">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal key={i} delay={i * 60} className="h-full">
              <ImagePlaceholder className="w-full h-full rounded-2xl min-h-[160px]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const HIGHLIGHTS = [
  { icon: Leaf, title: "Vegan", text: "Bewusst genießen ohne Kompromisse." },
  { icon: Coffee, title: "Specialty Coffee", text: "Mit Liebe zubereitet, Tasse für Tasse." },
  { icon: Heart, title: "Handgemacht", text: "Eigene Kreationen und wechselnde Specials." },
  { icon: HomeIcon, title: "Wohlfühlort", text: "Ein Café wie ein zweites Zuhause." },
];

function Highlights() {
  return (
    <section className="bg-stone-100 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="text-center max-w-xl mx-auto">
          <span className="font-body uppercase tracking-[0.25em] text-[12px] text-amber-800">
            Warum supercafé
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">
            Vier gute Gründe
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 100}>
              <div className="bg-stone-50 rounded-2xl p-7 h-full">
                <h.icon className="text-amber-800" size={28} strokeWidth={1.5} />
                <h3 className="font-display text-xl text-stone-900 mt-5">{h.title}</h3>
                <p className="font-body text-sm text-stone-500 mt-2 leading-relaxed">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="bg-stone-50 py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <span className="font-body uppercase tracking-[0.25em] text-[12px] text-amber-800">
            @supercafe.giessen
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">
            Folge unserem Alltag
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <a
            href="https://www.instagram.com/supercafe.giessen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 font-body text-sm uppercase tracking-wide text-stone-900 border-b border-stone-900 pb-1 hover:text-amber-800 hover:border-amber-800 transition-colors"
          >
            <Instagram size={16} /> supercafe.giessen
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const HOURS = [
  { day: "Montag – Freitag", time: "08:00 – 18:00" },
  { day: "Samstag", time: "09:00 – 18:00" },
  { day: "Sonntag", time: "10:00 – 17:00" },
];

function Visit() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section id="besuch" className="bg-stone-900 text-stone-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14">
        <div>
          <Reveal>
            <span className="font-body uppercase tracking-[0.25em] text-[12px] text-amber-300">
              Besuch
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Wir freuen uns <br /> auf dich.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex gap-4">
              <MapPin className="text-amber-300 shrink-0 mt-1" size={20} />
              <div>
                <p className="font-body text-sm text-stone-300 uppercase tracking-wide mb-1">Adresse</p>
                <p className="font-display text-lg">Ludwigstraße 64, 35392 Gießen</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex gap-4">
              <Clock className="text-amber-300 shrink-0 mt-1" size={20} />
              <div className="w-full">
                <p className="font-body text-sm text-stone-300 uppercase tracking-wide mb-2">Öffnungszeiten</p>
                <div className="space-y-1.5">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between max-w-xs font-body text-sm text-stone-200">
                      <span>{h.day}</span>
                      <span className="text-stone-400">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex gap-4">
              <Phone className="text-amber-300 shrink-0 mt-1" size={20} />
              <div>
                <p className="font-body text-sm text-stone-300 uppercase tracking-wide mb-1">Telefon</p>
                <a href="tel:+4964194469409" className="font-display text-lg hover:text-amber-300 transition-colors">
                  0641 94469409
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex gap-4">
              <Mail className="text-amber-300 shrink-0 mt-1" size={20} />
              <div>
                <p className="font-body text-sm text-stone-300 uppercase tracking-wide mb-1">E-Mail</p>
                <a href="mailto:hallo@supercafe-giessen.de" className="font-display text-lg hover:text-amber-300 transition-colors">
                  hallo@supercafe-giessen.de
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ludwigstra%C3%9Fe+64+35392+Gie%C3%9Fen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-50 text-stone-900 font-body text-sm uppercase tracking-wide px-6 py-3.5 rounded-full hover:bg-amber-200 transition-colors"
              >
                Route planen <ArrowRight size={14} />
              </a>
              <a
                href="https://www.instagram.com/supercafe.giessen/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-stone-50/40 font-body text-sm uppercase tracking-wide px-6 py-3.5 rounded-full hover:bg-stone-50/10 transition-colors"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="rounded-2xl overflow-hidden h-72 md:h-full min-h-[280px] bg-stone-800 relative">
            <iframe
              title="supercafé Standort"
              className="w-full h-full grayscale contrast-125 opacity-80"
              loading="lazy"
              src="https://www.google.com/maps?q=Ludwigstra%C3%9Fe+64,+35392+Gie%C3%9Fen&output=embed"
            />
          </div>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-20 pt-14 border-t border-stone-700/60">
        <Reveal className="max-w-lg">
          <h3 className="font-display text-2xl">Bleib auf dem Laufenden</h3>
          <p className="font-body text-sm text-stone-400 mt-2 leading-relaxed">
            Saisonale Specials, neue Kreationen und was heute im Café los ist —
            direkt in dein Postfach.
          </p>
          {sent ? (
            <p className="font-body text-sm text-amber-300 mt-5">Danke! Wir melden uns bald.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="flex gap-3 mt-5 flex-col sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="bg-stone-800 border border-stone-700 rounded-full px-5 py-3 font-body text-sm text-stone-50 placeholder-stone-500 focus:outline-none focus:border-amber-400 flex-1"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-700 transition-colors font-body text-sm uppercase tracking-wide px-6 py-3 rounded-full"
              >
                Anmelden <Send size={14} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-14">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <a href="#top" className="font-display italic text-2xl text-stone-50">
          supercafé
        </a>
        <nav className="flex gap-7 font-body text-xs uppercase tracking-wide">
          <a href="#top" className="hover:text-stone-50 transition-colors">Startseite</a>
          <a href="#menu" className="hover:text-stone-50 transition-colors">Menü</a>
          <a href="#ueber-uns" className="hover:text-stone-50 transition-colors">Über uns</a>
          <a href="#besuch" className="hover:text-stone-50 transition-colors">Kontakt</a>
        </nav>
        <a
          href="https://www.instagram.com/supercafe.giessen/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-stone-50 transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </div>
      <p className="text-center font-body text-[11px] text-stone-600 mt-10">
        © {new Date().getFullYear()} supercafé, Gießen — Ludwigstraße 64
      </p>
    </footer>
  );
}

export default function SupercafeWebsite() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Marquee />
      <Gallery />
      <Highlights />
      <InstagramSection />
      <Visit />
      <Footer />
    </div>
  );
}
