"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

type ContainerScrollProps = {
  heading: ReactNode;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
};

export function ContainerScroll({ heading, imageSrc, imageAlt, children }: ContainerScrollProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const root = rootRef.current!;
    const title = headingRef.current!;
    const stage = stageRef.current!;
    const frame = frameRef.current!;
    const image = mediaRef.current!;
    const media = gsap.matchMedia();

    media.add({
      mobile: "(max-width: 767px)",
      desktop: "(min-width: 768px)",
      reduced: "(prefers-reduced-motion: reduce)",
      pointer: "(hover: hover) and (pointer: fine)",
    }, (context) => {
      const { mobile, reduced, pointer } = context.conditions!;
      if (reduced) {
        gsap.set(frame, { rotationX: 0, scale: 1, y: 0 });
        gsap.set(title, { y: 0, opacity: 1 });
        return;
      }

      let bounds: { left: number; top: number; width: number; height: number } | undefined;
      gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          end: "top 15%",
          scrub: 0.45,
          invalidateOnRefresh: true,
          onRefresh: () => { bounds = undefined; },
        },
      })
        .fromTo(title, { y: 0, opacity: 1 }, {
          y: mobile ? -48 : -96,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        }, 0)
        .fromTo(frame, { rotationX: mobile ? 20 : 32, scale: mobile ? 0.94 : 0.88, y: 24 }, {
          rotationX: 0,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }, 0);

      if (!pointer) return;

      // The image has its own layer so hover never fights the scroll rotation.
      gsap.set(image, { transformPerspective: 1000 });
      const rotationX = gsap.quickTo(image, "rotationX", { duration: 0.5, ease: "power3.out" });
      const rotationY = gsap.quickTo(image, "rotationY", { duration: 0.5, ease: "power3.out" });
      const scale = gsap.quickTo(image, "scale", { duration: 0.5, ease: "power3.out" });
      let pointerFrame = 0;
      let clientX = 0;
      let clientY = 0;

      const measure = () => {
        const rect = stage.getBoundingClientRect();
        bounds = {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY,
          width: rect.width,
          height: rect.height,
        };
      };
      const move = (event: PointerEvent) => {
        if (event.pointerType === "touch") return;
        if (!bounds) measure();
        clientX = event.clientX;
        clientY = event.clientY;
        if (pointerFrame) return;
        pointerFrame = requestAnimationFrame(() => {
          pointerFrame = 0;
          if (!bounds) measure();
          const x = gsap.utils.clamp(-1, 1, ((clientX + window.scrollX - bounds!.left) / bounds!.width - 0.5) * 2);
          const y = gsap.utils.clamp(-1, 1, ((clientY + window.scrollY - bounds!.top) / bounds!.height - 0.5) * 2);
          rotationX(-y * 3);
          rotationY(x * 3);
          scale(1.04);
        });
      };
      const reset = () => {
        cancelAnimationFrame(pointerFrame);
        pointerFrame = 0;
        bounds = undefined;
        rotationX(0);
        rotationY(0);
        scale(1);
      };
      stage.addEventListener("pointerenter", measure);
      stage.addEventListener("pointermove", move, { passive: true });
      stage.addEventListener("pointerleave", reset);
      stage.addEventListener("pointercancel", reset);

      return () => {
        cancelAnimationFrame(pointerFrame);
        stage.removeEventListener("pointerenter", measure);
        stage.removeEventListener("pointermove", move);
        stage.removeEventListener("pointerleave", reset);
        stage.removeEventListener("pointercancel", reset);
      };
    });

    return () => media.revert();
  }, { scope: rootRef });

  return (
    <div ref={rootRef} className="container-scroll">
      <div ref={headingRef} className="container-scroll__heading">{heading}</div>
      <div ref={stageRef} className="container-scroll__stage">
        <div ref={frameRef} className="container-scroll__frame">
          <div ref={mediaRef} className="container-scroll__media">
            <Image src={imageSrc} alt={imageAlt} fill quality={90} sizes="(max-width: 1280px) calc(100vw - 48px), 1280px" className="object-cover" />
          </div>
          {children && <div className="container-scroll__caption">{children}</div>}
        </div>
      </div>
    </div>
  );
}
