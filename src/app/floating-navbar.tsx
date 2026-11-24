"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDribbble, FaInstagram, FaTelegram } from "react-icons/fa6";
import { VroomLogo } from "./vroom-logo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, CustomEase, ScrollTrigger);
  CustomEase.create("navbar-fold", "0.22,1,0.36,1");
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Race calendar", href: "#schedule" },
  { label: "Drivers", href: "#collective" },
  { label: "Teams", href: "#works" },
  { label: "Stories", href: "#insights" },
] as const;

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "Dribbble", href: "https://dribbble.com", Icon: FaDribbble },
  { label: "Telegram", href: "https://telegram.org", Icon: FaTelegram },
];

export function FloatingNavbar() {
  const headerRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const navSurfaceRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeHref, setActiveHref] = useState<string>("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const header = headerRef.current!;
    const row = rowRef.current!;
    const surface = surfaceRef.current!;
    const brand = brandRef.current!;
    const nav = navRef.current!;
    const navSurface = navSurfaceRef.current!;
    const socialLinks = socialsRef.current!;
    const toggle = toggleRef.current!;
    const media = gsap.matchMedia();

    media.add({
      desktop: "(min-width: 960px)",
      mobile: "(max-width: 959px)",
      reduced: "(prefers-reduced-motion: reduce)",
    }, (context, contextSafe) => {
      const { desktop, reduced } = context.conditions!;
      let compact = window.scrollY > 32;
      let currentHref: string | undefined;
      let timeline: gsap.core.Timeline | undefined;
      let transition: gsap.core.Tween | undefined;
      let resizeFrame = 0;
      let sectionPositions: { href: string; top: number }[] = [];
      const sections = navItems.map(({ href }) => ({
        href,
        element: document.querySelector<HTMLElement>(href),
      }));

      const syncState = () => {
        header.dataset.compact = String(compact);
        socialLinks.inert = compact;
        socialLinks.setAttribute("aria-hidden", String(compact));
      };

      const animate = () => {
        if (!timeline) return;
        transition?.kill();
        const destination = compact ? 1 : 0;
        if (reduced) {
          timeline.progress(destination).pause();
          return;
        }
        // Both directions ease from the current frame, including interrupted folds.
        transition = timeline.tweenTo(destination, {
          duration: Math.max(0.16, Math.abs(destination - timeline.progress()) * 0.5),
          ease: "navbar-fold",
          overwrite: true,
        });
      };

      const measure = contextSafe!(() => {
        const progress = timeline?.progress() ?? Number(compact);
        const moving = timeline && progress !== Number(compact);
        // Read geometry only at setup/resize/refresh, before any animation writes.
        // offset values stay stable because the row never changes its layout.
        const rowWidth = row.offsetWidth;
        const brandWidth = brand.offsetWidth;
        const navWidth = nav.offsetWidth;
        const compactWidth = desktop
          ? brandWidth + navWidth + 24 + 32
          : Math.min(320, rowWidth);
        const compactLeft = (rowWidth - compactWidth) / 2;
        const brandX = compactLeft + 16 - brand.offsetLeft;
        const navX = desktop ? compactLeft + 16 + brandWidth + 24 - nav.offsetLeft : 0;
        const toggleX = desktop ? 0 : compactLeft + compactWidth - 16 - toggle.offsetWidth - toggle.offsetLeft;
        const scrollY = window.scrollY;
        sectionPositions = sections
          .filter((section) => section.element)
          .map(({ href, element }) => ({ href, top: element!.getBoundingClientRect().top + scrollY }))
          .sort((a, b) => a.top - b.top);

        transition?.kill();
        timeline?.kill();
        surface.style.width = `${compactWidth}px`;
        timeline = gsap.timeline({ paused: true, defaults: { duration: 1, ease: "none" } })
          .fromTo(brand, { x: 0 }, { x: brandX }, 0)
          .fromTo(nav, { x: 0 }, { x: navX }, 0)
          .fromTo(toggle, { x: 0 }, { x: toggleX }, 0)
          .fromTo(surface,
            { xPercent: -50, scaleX: desktop ? navWidth / compactWidth : rowWidth / compactWidth, opacity: 0 },
            { xPercent: -50, scaleX: 1, opacity: 1 }, 0)
          .fromTo(navSurface, { opacity: 1 }, { opacity: 0 }, 0)
          .fromTo(socialLinks, { opacity: 1, y: 0 }, { opacity: 0, y: -8 }, 0)
          .progress(progress).pause();
        if (moving) animate();
      });

      const update = contextSafe!(() => {
        // Hysteresis avoids jitter when the scroll position hovers near the top.
        const nextCompact = compact ? window.scrollY > 8 : window.scrollY > 32;
        if (compact !== nextCompact) {
          compact = nextCompact;
          syncState();
          animate();
        }

        const current = sectionPositions.findLast((section) => section.top <= window.scrollY + 120);
        const nextHref = current?.href ?? "#home";
        if (currentHref !== nextHref) {
          currentHref = nextHref;
          setActiveHref(nextHref);
        }
      });

      const refresh = () => { measure(); update(); };
      syncState();
      refresh();
      ScrollTrigger.create({ start: 0, end: "max", onUpdate: () => update(), onRefresh: refresh });

      // Font loading and viewport changes can alter the end positions.
      const observer = new ResizeObserver(() => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(refresh);
      });
      [row, brand, nav, toggle].forEach((element) => observer.observe(element));
      return () => {
        observer.disconnect();
        cancelAnimationFrame(resizeFrame);
        transition?.kill();
        timeline?.kill();
        surface.style.removeProperty("width");
      };
    });

    return () => {
      media.revert();
      delete header.dataset.compact;
      socialLinks.inert = false;
      socialLinks.removeAttribute("aria-hidden");
    };
  }, { scope: headerRef });

  useGSAP(() => {
    const dialog = dialogRef.current;
    if (!menuOpen || !dialog) return;

    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = gsap.matchMedia();
    media.add({ reduced: "(prefers-reduced-motion: reduce)", motion: "(prefers-reduced-motion: no-preference)" }, (context) => {
      const reduced = context.conditions!.reduced;
      gsap.fromTo(dialog, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power4.out" });
      gsap.fromTo(menuLinksRef.current.filter(Boolean),
        { opacity: 0, y: reduced ? 0 : 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: reduced ? 0 : 0.06, ease: "power4.out" },
      );
    });

    const desktop = window.matchMedia("(min-width: 960px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      media.revert();
      desktop.removeEventListener("change", closeOnDesktop);
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, { scope: headerRef, dependencies: [menuOpen], revertOnUpdate: true });

  return (
    <header ref={headerRef} className="floating-header" data-compact="false">
      <div ref={rowRef} className="floating-header__row">
        <div ref={surfaceRef} className="floating-header__surface" aria-hidden="true" />
        <div ref={brandRef} className="floating-header__brand">
          <VroomLogo variant="white" className="text-white" />
        </div>
        <nav ref={navRef} className="floating-header__nav" aria-label="Primary navigation">
          <div ref={navSurfaceRef} className="floating-header__nav-surface" aria-hidden="true" />
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className="floating-header__link title-4" aria-current={activeHref === href ? "location" : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <div ref={socialsRef} className="floating-header__socials">
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
        <button ref={toggleRef} type="button" className="floating-header__toggle" aria-label="Open navigation" aria-expanded={menuOpen} aria-controls="vroom-mobile-navigation" onClick={() => setMenuOpen(true)}>
          <span /><span />
        </button>
      </div>

      <dialog ref={dialogRef} id="vroom-mobile-navigation" className="floating-header__menu" aria-labelledby="vroom-menu-title" onCancel={(event) => { event.preventDefault(); setMenuOpen(false); }}>
        <div className="floating-header__menu-top">
          <p id="vroom-menu-title" className="title-4">Explore Vroom</p>
          <button type="button" className="floating-header__toggle" data-open="true" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
            <span /><span />
          </button>
        </div>
        <nav className="floating-header__menu-links" aria-label="Mobile navigation">
          {navItems.map(({ label, href }, index) => (
            <a key={href} ref={(element) => { menuLinksRef.current[index] = element; }} href={href} className="heading-4" aria-current={activeHref === href ? "location" : undefined} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </dialog>
    </header>
  );
}
