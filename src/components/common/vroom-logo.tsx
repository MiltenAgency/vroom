import React from "react";
import Link from "next/link";

export interface VroomLogoProps {
  className?: string;
  variant?: "default" | "white";
}

export function VroomLogo({
  className = "",
  variant = "default",
}: VroomLogoProps) {
  const isWhite = variant === "white";
  return (
    <Link
      href="/"
      className={`inline-flex items-center group ${className}`}
      aria-label="Vroom Home"
    >
      <svg
        viewBox="0 0 138 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 sm:h-9 w-auto select-none transition-transform duration-200 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="vr-badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5a22" />
            <stop offset="50%" stopColor="#f3440f" />
            <stop offset="100%" stopColor="#c52800" />
          </linearGradient>
          <path
            id="vr-blade"
            d="M 10.50 -233.50 L 48.50 -231.50 L 51.50 -224.50 L -40.50 -86.50 L -48.50 -81.50 L -102.50 -71.50 L -107.50 -74.50 L -118.50 -100.50 L -147.50 -164.50 L -147.50 -170.50 L -122.50 -190.50 L -99.50 -203.50 L -94.50 -199.50 L -75.50 -156.50 L -70.50 -154.50 L -18.50 -230.50 Z"
          />
        </defs>

        {/* 6-Blade Rotational Vortex Emblem */}
        <g
          transform="translate(18, 18) scale(0.058)"
          fill={isWhite ? "#ffffff" : "url(#vr-badge-grad)"}
          stroke={isWhite ? "#ffffff" : "url(#vr-badge-grad)"}
          strokeWidth="8"
          strokeLinejoin="round"
        >
          <use href="#vr-blade" />
          <use href="#vr-blade" transform="rotate(60)" />
          <use href="#vr-blade" transform="rotate(120)" />
          <use href="#vr-blade" transform="rotate(180)" />
          <use href="#vr-blade" transform="rotate(240)" />
          <use href="#vr-blade" transform="rotate(300)" />
        </g>

        {/* Wordmark: Helvetica Bold Vectors */}
        <g fill="currentColor" style={{ fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif" }}>
          {/* V */}
          <path
            d="M834 0H535L14 1409H322L612 504Q639 416 686 238L707 324L758 504L1047 1409H1352Z"
            transform="translate(44.00, 25.50) scale(0.010788, -0.010788)"
          />
          {/* R */}
          <path
            d="M1105 0 778 535H432V0H137V1409H841Q1093 1409 1230.0 1300.5Q1367 1192 1367 989Q1367 841 1283.0 733.5Q1199 626 1056 592L1437 0ZM1070 977Q1070 1180 810 1180H432V764H818Q942 764 1006.0 820.0Q1070 876 1070 977Z"
            transform="translate(58.30, 25.50) scale(0.010788, -0.010788)"
          />
          {/* O 1 */}
          <path
            d="M1507 711Q1507 491 1420.0 324.0Q1333 157 1171.0 68.5Q1009 -20 793 -20Q461 -20 272.5 175.5Q84 371 84 711Q84 1050 272.0 1240.0Q460 1430 795 1430Q1130 1430 1318.5 1238.0Q1507 1046 1507 711ZM1206 711Q1206 939 1098.0 1068.5Q990 1198 795 1198Q597 1198 489.0 1069.5Q381 941 381 711Q381 479 491.5 345.5Q602 212 793 212Q991 212 1098.5 342.0Q1206 472 1206 711Z"
            transform="translate(73.83, 25.50) scale(0.010788, -0.010788)"
          />
          {/* O 2 */}
          <path
            d="M1507 711Q1507 491 1420.0 324.0Q1333 157 1171.0 68.5Q1009 -20 793 -20Q461 -20 272.5 175.5Q84 371 84 711Q84 1050 272.0 1240.0Q460 1430 795 1430Q1130 1430 1318.5 1238.0Q1507 1046 1507 711ZM1206 711Q1206 939 1098.0 1068.5Q990 1198 795 1198Q597 1198 489.0 1069.5Q381 941 381 711Q381 479 491.5 345.5Q602 212 793 212Q991 212 1098.5 342.0Q1206 472 1206 711Z"
            transform="translate(90.58, 25.50) scale(0.010788, -0.010788)"
          />
          {/* M */}
          <path
            d="M1307 0V854Q1307 883 1307.5 912.0Q1308 941 1317 1161Q1246 892 1212 786L958 0H748L494 786L387 1161Q399 929 399 854V0H137V1409H532L784 621L806 545L854 356L917 582L1176 1409H1569V0Z"
            transform="translate(107.34, 25.50) scale(0.010788, -0.010788)"
          />
        </g>

        {/* Active Racing Beacon Dot */}
        <circle cx="130.5" cy="23.5" r="2.4" fill={isWhite ? "#ffffff" : "#f3440f"} />
      </svg>
    </Link>
  );
}
