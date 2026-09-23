"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./splice.module.css";

// Path of the flight from Tokyo into Changi, reused by the dashed line,
// its reveal mask and the plane's motion path.
const FLIGHT = "M-20 150 C 120 20, 380 -10, 560 196";

function HeroSection() {
  const sceneRef = useRef(null);

  // Gentle parallax: write CSS variables instead of re-rendering React.
  useEffect(() => {
    const el = sceneRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            Homestays · Study tours · School exchange
          </p>
          <h1 className={styles.title}>
            <span className={styles.line}>Don&rsquo;t just</span>
            <span className={styles.line}>visit Singapore.</span>
            <span className={`${styles.line} ${styles.accent}`}>
              Live in it
              <svg className={styles.underline} viewBox="0 0 300 20" aria-hidden="true" preserveAspectRatio="none">
                <path d="M4 14 C 70 4, 150 4, 296 10" pathLength="1" />
              </svg>
            </span>
          </h1>
          <p className={styles.lede}>
            Since 2006 we&rsquo;ve matched visiting students with local host
            families, MOE-registered schools and real workplaces. A study tour
            here means breakfast at the kopitiam, debating with local
            classmates, and a family you&rsquo;ll come back to visit.
          </p>
          <div className={styles.ctas}>
            <Link href="/StudyTours" className="btn btn-solid">
              See the study tours <span className="arrow">→</span>
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Plan a group visit
            </Link>
          </div>

          <dl className={styles.facts}>
            <div>
              <dt>20</dt>
              <dd>years hosting in Singapore</dd>
            </div>
            <div>
              <dt>50+</dt>
              <dd>partner schools since 2015</dd>
            </div>
            <div>
              <dt>T3</dt>
              <dd>our office is at Changi Airport</dd>
            </div>
          </dl>
        </div>

        <div className={styles.sceneWrap} ref={sceneRef} aria-hidden="true">
          <svg className={styles.scene} viewBox="0 0 640 560" role="presentation">
            <defs>
              <mask id="flightReveal">
                <path d={FLIGHT} className={`${styles.draw} ${styles.dFlight}`} stroke="#fff" strokeWidth="8" fill="none" pathLength="1" />
              </mask>
              <clipPath id="waterClip">
                <rect x="0" y="432" width="640" height="128" />
              </clipPath>
            </defs>

            {/* Sun rising behind the skyline */}
            <g className={styles.layerBack}>
              <circle className={styles.sun} cx="410" cy="300" r="150" />
              <circle className={styles.sunRing} cx="410" cy="300" r="186" pathLength="1" />
            </g>

            {/* Drifting clouds */}
            <g className={styles.layerMid}>
              <path className={`${styles.cloud} ${styles.cloudA}`} d="M60 250 h70 a14 14 0 0 0 -14 -18 a22 22 0 0 0 -40 -4 a14 14 0 0 0 -16 22 z" />
              <path className={`${styles.cloud} ${styles.cloudB}`} d="M470 118 h86 a16 16 0 0 0 -16 -20 a26 26 0 0 0 -48 -4 a16 16 0 0 0 -22 24 z" />
            </g>

            {/* Flight route: Tokyo → Changi */}
            <g className={styles.layerFront}>
              <path d={FLIGHT} className={styles.route} mask="url(#flightReveal)" />
              <g className={styles.labelFrom}>
                <text x="4" y="164" className={styles.label}>TOKYO</text>
                <text x="4" y="180" className={styles.labelSmall}>5,300 km · 7h flight</text>
              </g>
              <g className={styles.plane}>
                <g>
                  <path d="M-12 0 L10 -2 L14 0 L10 2 Z M-2 -1 L-6 -10 L-2 -10 L4 -1 Z M-2 1 L-6 10 L-2 10 L4 1 Z M-11 -1 L-14 -5 L-12 -5 L-8 -1 Z M-11 1 L-14 5 L-12 5 L-8 1 Z" />
                  <animateMotion
                    dur="9s"
                    begin="1.4s"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="spline"
                    keyPoints="0;1;1"
                    keyTimes="0;0.62;1"
                    keySplines="0.42 0 1 1; 0 0 1 1"
                    path={FLIGHT}
                  />
                </g>
              </g>
              <g className={styles.pin}>
                <circle className={styles.pinPulse} cx="560" cy="196" r="7" />
                <circle cx="560" cy="196" r="5" className={styles.pinDot} />
                <text x="548" y="176" className={styles.label} textAnchor="end">CHANGI T3</text>
              </g>
            </g>

            {/* Skyline, drawn stroke by stroke */}
            <g className={styles.skyline}>
              {/* Shophouses */}
              <g className={styles.fillIn}>
                <path className={`${styles.draw} ${styles.d1}`} pathLength="1" d="M28 432 V356 L56 340 L84 356 V432" />
                <path className={`${styles.draw} ${styles.d2}`} pathLength="1" d="M84 432 V350 L114 332 L144 350 V432" />
                <path className={`${styles.draw} ${styles.d3}`} pathLength="1" d="M144 432 V362 L168 348 L192 362 V432" />
              </g>
              <g className={styles.detail}>
                <path className={`${styles.draw} ${styles.d2}`} pathLength="1" d="M42 432 V404 a14 14 0 0 1 28 0 V432" />
                <path className={`${styles.draw} ${styles.d3}`} pathLength="1" d="M44 368 h24 v20 h-24 z" />
                <path className={`${styles.draw} ${styles.d3}`} pathLength="1" d="M100 432 V400 a14 14 0 0 1 28 0 V432" />
                <path className={`${styles.draw} ${styles.d4}`} pathLength="1" d="M100 362 h28 v24 h-28 z M114 362 v24" />
                <path className={`${styles.draw} ${styles.d4}`} pathLength="1" d="M156 432 V404 a12 12 0 0 1 24 0 V432" />
                <path className={`${styles.draw} ${styles.d5}`} pathLength="1" d="M158 372 h20 v18 h-20 z" />
              </g>

              {/* ArtScience Museum */}
              <path className={`${styles.draw} ${styles.fillIn} ${styles.d3}`} pathLength="1" d="M204 432 L214 386 L226 432 M220 432 L234 372 L248 432 M242 432 L258 382 L270 432" />

              {/* Marina Bay Sands */}
              <g className={styles.fillIn}>
                <path className={`${styles.draw} ${styles.d4}`} pathLength="1" d="M296 432 L302 262 L322 262 L320 432 Z" />
                <path className={`${styles.draw} ${styles.d5}`} pathLength="1" d="M338 432 L342 262 L362 262 L362 432 Z" />
                <path className={`${styles.draw} ${styles.d6}`} pathLength="1" d="M380 432 L382 262 L402 262 L406 432 Z" />
                <path className={`${styles.draw} ${styles.d7}`} pathLength="1" d="M284 262 L292 250 L414 250 Q426 250 428 258 L420 262 Z" />
              </g>
              <path className={`${styles.draw} ${styles.detail} ${styles.d7}`} pathLength="1" d="M306 290 h12 M306 320 h12 M306 350 h12 M306 380 h12 M345 290 h14 M345 320 h14 M345 350 h14 M345 380 h14 M386 290 h14 M386 320 h14 M386 350 h14 M386 380 h14" />

              {/* Supertrees */}
              <g className={styles.fillIn}>
                <path className={`${styles.draw} ${styles.d5}`} pathLength="1" d="M446 432 L450 330 L454 432 Z M424 312 Q446 324 450 330 Q454 324 476 312 Q450 302 424 312 Z" />
                <path className={`${styles.draw} ${styles.d6}`} pathLength="1" d="M492 432 L496 300 L500 432 Z M466 280 Q492 294 496 300 Q500 294 526 280 Q496 268 466 280 Z" />
                <path className={`${styles.draw} ${styles.d7}`} pathLength="1" d="M526 432 L529 354 L532 432 Z M510 342 Q526 350 529 354 Q532 350 548 342 Q529 334 510 342 Z" />
              </g>

              {/* Singapore Flyer */}
              <g className={styles.flyer}>
                <path className={`${styles.draw} ${styles.d6}`} pathLength="1" d="M578 432 L592 372 L606 432" />
                <g className={styles.wheel}>
                  <circle className={`${styles.draw} ${styles.d7}`} pathLength="1" cx="592" cy="372" r="42" />
                  <path className={`${styles.draw} ${styles.d8}`} pathLength="1" d="M592 330 V414 M550 372 H634 M562 342 L622 402 M622 342 L562 402" />
                </g>
              </g>

              {/* Waterline */}
              <path className={`${styles.draw} ${styles.d1}`} pathLength="1" d="M0 432 H640" />
            </g>

            {/* Marina Bay water */}
            <g clipPath="url(#waterClip)" className={styles.water}>
              <path className={styles.waveA} d="M-160 456 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" />
              <path className={styles.waveB} d="M-160 482 q24 -8 48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0 t48 0" />
              <path className={styles.reflection} d="M300 448 h24 M342 462 h22 M382 450 h26 M306 476 h14 M386 490 h18" />
            </g>
          </svg>

          <p className={styles.caption}>
            <span>Fig. 1</span> Your first view of the city: Marina Bay, from the
            host-family HDB window you&rsquo;ll soon call yours.
          </p>
        </div>
      </div>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              Kaya toast at 7am <b>✦</b> Void-deck games <b>✦</b> SDG debates with local students <b>✦</b> Hospital &amp; kindergarten visits <b>✦</b> Hawker-centre lunches <b>✦</b> A graduation ceremony on day four <b>✦</b>{" "}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
