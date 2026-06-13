/* @ds-bundle: {"format":3,"namespace":"NaveedKhanPortfolioDesignSystem_ee97a5","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"ExperienceRow","sourcePath":"components/portfolio/ExperienceRow.jsx"},{"name":"Footer","sourcePath":"components/portfolio/Footer.jsx"},{"name":"MarqueeStripe","sourcePath":"components/portfolio/MarqueeStripe.jsx"},{"name":"NavBar","sourcePath":"components/portfolio/NavBar.jsx"},{"name":"ProjectCard","sourcePath":"components/portfolio/ProjectCard.jsx"}],"sourceHashes":{"AboutSection.jsx":"328349b2fb62","FinalCTA.jsx":"12e4c7efa8f7","Hero.jsx":"58cc15e71768","WorkSection.jsx":"0375a4e17847","components/brand/Logo.jsx":"d61e77fa3a30","components/buttons/Button.jsx":"4cb22bfc91f3","components/core/Badge.jsx":"5f5b86acca71","components/core/Card.jsx":"4d66feea6c3a","components/core/Eyebrow.jsx":"ec398021c640","components/core/Stat.jsx":"0dcc2ea29cad","components/portfolio/ExperienceRow.jsx":"e5633732b4c8","components/portfolio/Footer.jsx":"2884e3914543","components/portfolio/MarqueeStripe.jsx":"4b61e4283d4d","components/portfolio/NavBar.jsx":"1d1f321004a4","components/portfolio/ProjectCard.jsx":"f790197046a4","ui_kits/portfolio/AboutSection.jsx":"b3e1071ad04e","ui_kits/portfolio/FinalCTA.jsx":"8c299b5359b4","ui_kits/portfolio/Hero.jsx":"c974a01c2bef","ui_kits/portfolio/MetricsSection.jsx":"5d68f3ad6adc","ui_kits/portfolio/WorkSection.jsx":"c3b99f7d0992"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NaveedKhanPortfolioDesignSystem_ee97a5 = window.NaveedKhanPortfolioDesignSystem_ee97a5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// AboutSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AboutSection — story column (serif headline + prose + Resume) and experience timeline.
const {
  Eyebrow,
  Button,
  ExperienceRow
} = window.NaveedKhanPortfolioDesignSystem_ee97a5;
const EXPERIENCE = [{
  company: 'CONVESIO',
  role: 'Senior Product Designer',
  period: '2022 - 2026'
}, {
  company: 'BRAINSTORM FORCE',
  role: 'Senior Product Designer',
  period: '2021 - 2022'
}, {
  company: 'CLOUDWAYS',
  role: 'Senior UI/UX / Product Designer',
  period: '2014 - 2021'
}, {
  company: 'KNYSYS',
  role: 'UI Designer',
  period: '2014'
}, {
  company: 'FREELANCE',
  role: 'Graphic / UI Designer',
  period: '2012 - 2013'
}];
function AboutSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "pf-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "My Story"), /*#__PURE__*/React.createElement("h2", {
    className: "pf-h1",
    style: {
      fontWeight: "800"
    }
  }, "About")), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-about__story"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pf-serif",
    style: {
      fontFamily: "Geist",
      fontWeight: "400",
      fontSize: "32px",
      height: "96px",
      lineHeight: "0.25"
    }
  }, "A self-taught designer shaped by real products."), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__prose"
  }, /*#__PURE__*/React.createElement("p", null, "I learned design by building."), /*#__PURE__*/React.createElement("p", null, "What started with freelance projects evolved into more than a decade of designing SaaS, fintech, cloud infrastructure, and AI products."), /*#__PURE__*/React.createElement("p", null, "Throughout my career, I\u2019ve often been trusted as the sole designer \u2014 working closely with founders, engineers, marketers, and stakeholders to take products from early concepts to shipped experiences."), /*#__PURE__*/React.createElement("p", null, "I care about clarity, ownership, and creating products that continue delivering value long after launch.")), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#",
    variant: "secondary",
    size: "sm",
    icon: "arrow-up-right"
  }, "View Resume")), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__exp"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Experience"), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__timeline"
  }, EXPERIENCE.map((e, i) => /*#__PURE__*/React.createElement(ExperienceRow, _extends({
    key: e.company
  }, e, {
    divider: i < EXPERIENCE.length - 1
  }))))))));
}
window.AboutSection = AboutSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "AboutSection.jsx", error: String((e && e.message) || e) }); }

// FinalCTA.jsx
try { (() => {
// FinalCTA — centered "Work Together" closing block.
const {
  Button
} = window.NaveedKhanPortfolioDesignSystem_ee97a5;
function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "pf-section pf-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-cta__inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pf-cta__title",
    style: {
      fontWeight: "800"
    }
  }, "Work Together"), /*#__PURE__*/React.createElement("p", {
    className: "pf-cta__lead"
  }, "I\u2019m looking for the next product I\u2019ll help shape, scale, and improve.", /*#__PURE__*/React.createElement("br", null), "If that sounds like what you\u2019re building, let\u2019s talk."), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "mailto:hello@naveed.design",
    variant: "primary",
    size: "lg"
  }, "Contact")));
}
window.FinalCTA = FinalCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "FinalCTA.jsx", error: String((e && e.message) || e) }); }

// Hero.jsx
try { (() => {
// Hero — full-bleed dark hero with luminosity texture, nav, big Syne title.
const {
  NavBar,
  Button
} = window.NaveedKhanPortfolioDesignSystem_ee97a5;
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    className: "pf-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__texture"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__vignette"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-col pf-hero__inner"
  }, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__content"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pf-eyebrow pf-eyebrow--lg",
    style: {
      fontFamily: "Geist",
      fontSize: "16px",
      lineHeight: "0.5"
    }
  }, "Senior Product Designer"), /*#__PURE__*/React.createElement("h1", {
    className: "pf-hero__title"
  }, "Naveed", /*#__PURE__*/React.createElement("br", null), "Khan"), /*#__PURE__*/React.createElement("p", {
    className: "pf-hero__lead"
  }, "Over 12+ years, I\u2019ve designed SaaS, fintech, cloud hosting, and AI products \u2014 leading 0\u21921 builds, redesigns, and growth initiatives from strategy to shipped UX."), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#work",
    variant: "primary",
    size: "lg"
  }, "View Selected Work")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Hero.jsx", error: String((e && e.message) || e) }); }

// WorkSection.jsx
try { (() => {
// WorkSection — eyebrow + "Work" heading + stacked ProjectCards.
const {
  ProjectCard,
  Eyebrow
} = window.NaveedKhanPortfolioDesignSystem_ee97a5;

// A lightweight stylized browser thumbnail used in card image wells.
function Shot({
  tone = 'light',
  label
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-shot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__bar"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: `pf-shot__body ${light ? 'is-light' : 'is-blue'}`
  }, label && /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__brand"
  }, label), !label && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__side"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__line",
    style: {
      width: '60%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__line",
    style: {
      width: '85%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__cards"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))))));
}
function Shots({
  variant
}) {
  if (variant === 'cloudways') {
    return /*#__PURE__*/React.createElement("div", {
      className: "pf-shots"
    }, /*#__PURE__*/React.createElement(Shot, null), /*#__PURE__*/React.createElement(Shot, {
      tone: "blue",
      label: "CLOUDWAYS"
    }), /*#__PURE__*/React.createElement(Shot, null));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-shots"
  }, /*#__PURE__*/React.createElement(Shot, null), /*#__PURE__*/React.createElement(Shot, null), /*#__PURE__*/React.createElement(Shot, null));
}
function WorkSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    className: "pf-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "lg"
  }, "Selected Work"), /*#__PURE__*/React.createElement("h2", {
    className: "pf-h1",
    style: {
      fontWeight: "800"
    }
  }, "Work")), /*#__PURE__*/React.createElement("div", {
    className: "pf-work__stack"
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    eyebrow: "CONVESIO",
    title: "Designing a fintech product from the ground up.",
    description: "Led end-to-end product design from concept to launch for a payments platform processing $1M+ in year one.",
    stats: [{
      label: 'Role',
      value: 'Lead Product Designer'
    }, {
      label: 'Outcome',
      value: '$1M+ processed (Year 1)'
    }],
    cta: {
      label: 'Read Case Study',
      href: '#case'
    },
    media: /*#__PURE__*/React.createElement(Shots, {
      variant: "convesio"
    })
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    eyebrow: "CLOUDWAYS",
    title: "Designing at scale across product, web, and brand.",
    description: "Spent 7 years designing and scaling a high-growth cloud hosting platform across product, marketing, and brand.",
    stats: [{
      label: 'Role',
      value: 'Lead Designer'
    }, {
      label: 'Outcome',
      value: 'Part of a $350M Acquisition Story'
    }],
    cta: {
      label: 'Read Case Study',
      href: '#case'
    },
    media: /*#__PURE__*/React.createElement(Shots, {
      variant: "cloudways"
    })
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    eyebrow: "CONVESIO",
    title: "Leading a self-initiated product redesign.",
    description: "Identified key usability issues, pitched a redesign strategy, secured buy-in, and led a full platform transformation.",
    stats: [{
      label: 'Role',
      value: 'Lead Product Designer'
    }, {
      label: 'Outcome',
      value: '120% Hosting Revenue Growth'
    }],
    cta: {
      label: 'Read Case Study',
      href: '#case'
    },
    media: /*#__PURE__*/React.createElement(Shots, {
      variant: "redesign"
    })
  }))));
}
window.WorkSection = WorkSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "WorkSection.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — the "NK" wordmark (Naveed Khan), rendered from the original
 * Figma vector with the white→gray brand gradient fill.
 */
function Logo({
  height = 21,
  mono = false,
  style = {},
  ...rest
}) {
  const w = 76.124 / 20.923 * height;
  const gradId = React.useId();
  const fill = mono ? 'currentColor' : `url(#${gradId})`;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: w,
    height: height,
    viewBox: "0 0 76.124 20.923",
    fill: "none",
    role: "img",
    "aria-label": "Naveed Khan",
    style: {
      display: 'block',
      ...style
    }
  }, rest), !mono && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gradId,
    x1: "0",
    y1: "0",
    x2: "76.124",
    y2: "20.923",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0.54",
    stopColor: "#FFFFFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.99",
    stopColor: "#999999"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M 29.749 12.722 L 29.749 0 L 37.922 0 L 37.922 20.923 L 29.749 20.923 L 8.173 8.429 L 8.173 20.923 L 0 20.923 L 0 0 L 8.173 0 L 29.749 12.722 Z",
    fill: fill,
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 48.009 9.764 L 62.72 0 L 74.358 0 L 58.709 9.725 L 76.124 20.923 L 63.963 20.923 L 48.009 9.853 L 48.009 20.923 L 39.836 20.923 L 39.836 0 L 48.009 0 L 48.009 9.764 Z",
    fill: fill,
    fillRule: "nonzero"
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the portfolio's single action primitive.
 * Two visual styles match the Figma source exactly:
 *   primary   → solid white fill, ink text (hero & CTA actions)
 *   secondary → transparent with a strong hairline outline (Resume, etc.)
 *   ghost     → no fill, no border (inline/tertiary)
 * Sizes: lg (16px text, 16/20 padding) and sm (14px text, 12/16 padding).
 */
function Button({
  children,
  variant = 'primary',
  size = 'lg',
  icon = 'arrow-right',
  as = 'button',
  href,
  disabled = false,
  style = {},
  ...rest
}) {
  const Tag = as === 'a' ? 'a' : 'button';
  const pad = size === 'lg' ? '16px 20px' : '12px 16px';
  const fs = size === 'lg' ? 'var(--size-button-lg)' : 'var(--size-button-sm)';
  const iconSize = size === 'lg' ? 16 : 14;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-4)',
    padding: pad,
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-bold)',
    fontSize: fs,
    lineHeight: 1,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    transition: 'background var(--dur-base) var(--ease-standard), opacity var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    opacity: disabled ? 0.4 : 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--text-inverse)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      boxShadow: 'var(--inset-outline)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: as === 'a' ? href : undefined,
    disabled: as === 'button' ? disabled : undefined,
    className: `ds-btn ds-btn--${variant}`,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), icon && icon !== 'none' && /*#__PURE__*/React.createElement(Arrow, {
    kind: icon,
    size: iconSize
  }));
}
function Arrow({
  kind,
  size
}) {
  // Lucide-style line glyphs (arrow-right / arrow-up-right)
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.25,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      display: 'block',
      flexShrink: 0
    }
  };
  if (kind === 'arrow-up-right') {
    return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
      d: "M7 17 17 7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 7h10v10"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    fg: 'var(--text-secondary)',
    dot: 'var(--text-muted)',
    bg: 'var(--surface-tertiary)'
  },
  success: {
    fg: 'var(--state-success)',
    dot: 'var(--state-success)',
    bg: 'rgba(74,222,128,0.12)'
  },
  warning: {
    fg: 'var(--state-warning)',
    dot: 'var(--state-warning)',
    bg: 'rgba(250,204,21,0.12)'
  },
  error: {
    fg: 'var(--state-error)',
    dot: 'var(--state-error)',
    bg: 'rgba(248,113,113,0.12)'
  },
  info: {
    fg: 'var(--state-info)',
    dot: 'var(--state-info)',
    bg: 'rgba(96,165,250,0.12)'
  }
};

/**
 * Badge — a compact pill for status, tags and credentials. Uses the
 * reserved semantic state hues over a tinted dark fill. Optional dot.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--size-b4)',
      lineHeight: 'var(--lh-b4)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base surface container. The portfolio's signature card uses
 * a subtle top-lit gradient (#111 → #0A0A0A) with a 16px radius; `solid`
 * and `outline` variants cover flatter contexts.
 */
function Card({
  children,
  variant = 'gradient',
  padding = 'var(--space-40)',
  style = {},
  ...rest
}) {
  const variants = {
    gradient: {
      background: 'var(--grad-card)',
      boxShadow: 'var(--inset-hairline)'
    },
    solid: {
      background: 'var(--surface-secondary)',
      boxShadow: 'var(--inset-hairline)'
    },
    outline: {
      background: 'transparent',
      boxShadow: 'var(--inset-hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-md)',
      padding,
      overflow: 'hidden',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the uppercase Archivo section label that sits above every
 * heading ("SELECTED WORK", "MY STORY", "EXPERIENCE"). Muted gray.
 */
function Eyebrow({
  children,
  size = 'sm',
  as = 'p',
  style = {},
  ...rest
}) {
  const Tag = as;
  const fs = size === 'lg' ? 'var(--size-b1)' : 'var(--size-b4)';
  const lh = size === 'lg' ? 'var(--lh-b1)' : 'var(--lh-b4)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-label)',
      fontWeight: 'var(--weight-regular)',
      fontSize: fs,
      lineHeight: lh,
      letterSpacing: 'var(--track-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a value + label pair. Used two ways in the portfolio:
 *   lg → big centered metric figures ($350M / Acquisition)
 *   sm → inline role/outcome pairs inside project cards
 * The big value uses Geist at display weight; labels are muted gray.
 */
function Stat({
  value,
  label,
  size = 'lg',
  align = 'center',
  style = {},
  ...rest
}) {
  const isLg = size === 'lg';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: isLg ? 'var(--space-8)' : 0,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-regular)',
      fontSize: isLg ? 'var(--size-h3)' : 'var(--size-b2)',
      lineHeight: isLg ? '52px' : 'var(--lh-b2)',
      color: 'var(--text-primary)',
      letterSpacing: isLg ? 'var(--track-tight)' : 'var(--track-normal)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: isLg ? 'var(--font-body)' : 'var(--font-label)',
      fontSize: isLg ? 'var(--size-b2)' : 'var(--size-b4)',
      lineHeight: isLg ? 'var(--lh-b2)' : 'var(--lh-b4)',
      color: 'var(--text-secondary)',
      order: isLg ? 1 : -1
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ExperienceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ExperienceRow — a single line in the About timeline: company (Syne bold)
 * + role (muted Geist) on the left, year range right-aligned. Hairline
 * divider optional below.
 */
function ExperienceRow({
  company,
  role,
  period,
  divider = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-40)',
      paddingBottom: divider ? 'var(--space-24)' : 0,
      borderBottom: divider ? 'var(--border-hairline)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-b2)',
      lineHeight: 'var(--lh-h6)',
      letterSpacing: 'var(--track-normal)',
      color: 'var(--text-primary)'
    }
  }, company), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-b4)',
      lineHeight: 'var(--lh-b4)',
      color: 'var(--text-secondary)'
    }
  }, role)), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-b3)',
      lineHeight: 'var(--lh-b3)',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      textAlign: 'right'
    }
  }, period));
}
Object.assign(__ds_scope, { ExperienceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ExperienceRow.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  mail: 'M22 6 12 13 2 6 M2 6h20v12H2z',
  linkedin: 'M4 9h3v11H4z M5.5 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3 M10 9h3v1.6a3.2 3.2 0 016 1.5V20h-3v-5.4c0-1-.8-1.6-1.6-1.6S13 13.6 13 14.6V20h-3z',
  github: 'M9 19c-4 1.2-4-2-6-2.5 M15 21v-3.2a2.8 2.8 0 00-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 00-6 0C6 .9 5 1.2 5 1.2a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 003.6 7.6c0 4.7 2.8 5.7 5.5 6a2.8 2.8 0 00-.8 2.1V21',
  x: 'M4 4l16 16 M20 4 4 20'
};

/**
 * Footer — the closing bar: NK logo, copyright line, and line-icon social
 * links. Sits on the base surface with a hairline top border.
 */
function Footer({
  copyright = '© All rights reserved. Naveed Khan',
  socials = [{
    icon: 'github',
    href: '#',
    label: 'GitHub'
  }, {
    icon: 'linkedin',
    href: '#',
    label: 'LinkedIn'
  }, {
    icon: 'x',
    href: '#',
    label: 'X'
  }, {
    icon: 'mail',
    href: '#',
    label: 'Email'
  }],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-24)',
      padding: 'var(--space-32) var(--layout-gutter)',
      borderTop: 'var(--border-hairline)',
      background: 'var(--surface-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-b4)',
      color: 'var(--text-muted)'
    }
  }, copyright), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    "aria-label": s.label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-secondary)',
      transition: 'color var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--text-primary)';
      e.currentTarget.style.background = 'var(--surface-tertiary)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[s.icon] || ICONS.mail
  }))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/MarqueeStripe.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ITEMS = ['Cloudways · SaaS · $350M Acquisition · 50k Users', '12 Years · Self-Taught · Solo Ownership · Real Products', 'ConvesioPay · Fintech · Zero to One · $1M Year One'];

/**
 * MarqueeStripe — the thin #111 band of credentials that scrolls between
 * sections. Items are separated by a "+" glyph and loop seamlessly.
 * Pauses on hover; respects prefers-reduced-motion (renders static).
 */
function MarqueeStripe({
  items = DEFAULT_ITEMS,
  speed = 40,
  style = {},
  ...rest
}) {
  const sep = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--text-muted)',
      margin: '0 var(--space-40)',
      fontFamily: 'var(--font-body)'
    }
  }, "+");
  const Row = ({
    aria
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    },
    "aria-hidden": aria
  }, items.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-b3)',
      lineHeight: 'var(--lh-b3)',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, t), sep)));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "ds-marquee",
    style: {
      background: 'var(--surface-secondary)',
      borderTop: 'var(--border-hairline)',
      borderBottom: 'var(--border-hairline)',
      padding: 'var(--space-32) 0',
      overflow: 'hidden',
      width: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-marquee__track",
    style: {
      display: 'flex',
      width: 'max-content',
      animation: `ds-marquee-scroll ${speed}s linear infinite`
    }
  }, /*#__PURE__*/React.createElement(Row, null), /*#__PURE__*/React.createElement(Row, {
    aria: true
  })), /*#__PURE__*/React.createElement("style", null, `
        @keyframes ds-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ds-marquee:hover .ds-marquee__track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .ds-marquee__track { animation: none !important; } }
      `));
}
Object.assign(__ds_scope, { MarqueeStripe });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/MarqueeStripe.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavBar — the top navigation: NK logo on the left, text links + an
 * outlined Resume button on the right. Sits on the dark hero, 74px tall.
 */
function NavBar({
  links = [{
    label: 'Work',
    href: '#work'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Contact',
    href: '#contact'
  }],
  cta = {
    label: 'Resume',
    href: '#'
  },
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-32)',
      padding: 'var(--space-16) 0',
      width: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    "aria-label": "Naveed Khan \u2014 home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-32)'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-32)',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-b3)',
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      transition: 'color var(--dur-base) var(--ease-standard)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-primary)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-secondary)'
  }, l.label)))), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: cta.href,
    variant: "secondary",
    size: "sm",
    icon: "arrow-up-right"
  }, cta.label)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProjectCard — the signature "Work" case-study card. A gradient surface
 * with an eyebrow + title + blurb and role/outcome stats up top, a
 * "Read Case Study" action, and an image well below for project shots.
 * Drop screenshots (or <image-slot>s) into `children` / `media`.
 */
function ProjectCard({
  eyebrow,
  title,
  description,
  stats = [],
  cta = {
    label: 'Read Case Study',
    href: '#'
  },
  media,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      position: 'relative',
      width: '100%',
      borderRadius: 'var(--radius-md)',
      background: 'var(--grad-card)',
      boxShadow: 'var(--inset-hairline)',
      padding: 'var(--space-40)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-48)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-20)',
      maxWidth: 780
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    size: "lg"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-h5)',
      lineHeight: 'var(--lh-h5)',
      letterSpacing: 'var(--track-tight)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-b2)',
      lineHeight: 'var(--lh-b2)',
      color: 'var(--text-secondary)'
    }
  }, description), stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-40)',
      marginTop: 'var(--space-4)'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    key: i,
    size: "sm",
    align: "left",
    label: s.label,
    value: s.value
  })))), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: cta.href,
    variant: "secondary",
    size: "sm",
    icon: "arrow-right",
    style: {
      flexShrink: 0
    }
  }, cta.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-tertiary)',
      overflow: 'hidden',
      minHeight: 320,
      display: 'flex'
    }
  }, media || children));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AboutSection — story column (serif headline + prose + Resume) and experience timeline.
const {
  Eyebrow,
  Button,
  ExperienceRow
} = window.NaveedKhanPortfolioDesignSystem_ee97a5;
const EXPERIENCE = [{
  company: 'CONVESIO',
  role: 'Senior Product Designer',
  period: '2022 - 2026'
}, {
  company: 'BRAINSTORM FORCE',
  role: 'Senior Product Designer',
  period: '2021 - 2022'
}, {
  company: 'CLOUDWAYS',
  role: 'Senior UI/UX / Product Designer',
  period: '2014 - 2021'
}, {
  company: 'KNYSYS',
  role: 'UI Designer',
  period: '2014'
}, {
  company: 'FREELANCE',
  role: 'Graphic / UI Designer',
  period: '2012 - 2013'
}];
function AboutSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "pf-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "My Story"), /*#__PURE__*/React.createElement("h2", {
    className: "pf-h1"
  }, "About")), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-about__story"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pf-serif"
  }, "A self-taught designer shaped by real products."), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__prose"
  }, /*#__PURE__*/React.createElement("p", null, "I learned design by building."), /*#__PURE__*/React.createElement("p", null, "What started with freelance projects evolved into more than a decade of designing SaaS, fintech, cloud infrastructure, and AI products."), /*#__PURE__*/React.createElement("p", null, "Throughout my career, I\u2019ve often been trusted as the sole designer \u2014 working closely with founders, engineers, marketers, and stakeholders to take products from early concepts to shipped experiences."), /*#__PURE__*/React.createElement("p", null, "I care about clarity, ownership, and creating products that continue delivering value long after launch.")), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#",
    variant: "secondary",
    size: "sm",
    icon: "arrow-up-right"
  }, "View Resume")), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__exp"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Experience"), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__timeline"
  }, EXPERIENCE.map((e, i) => /*#__PURE__*/React.createElement(ExperienceRow, _extends({
    key: e.company
  }, e, {
    divider: i < EXPERIENCE.length - 1
  }))))))));
}
window.AboutSection = AboutSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/FinalCTA.jsx
try { (() => {
// FinalCTA — centered "Work Together" closing block.
const {
  Button
} = window.NaveedKhanPortfolioDesignSystem_ee97a5;
function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "pf-section pf-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-cta__inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pf-cta__title"
  }, "Work Together"), /*#__PURE__*/React.createElement("p", {
    className: "pf-cta__lead"
  }, "I\u2019m looking for the next product I\u2019ll help shape, scale, and improve.", /*#__PURE__*/React.createElement("br", null), "If that sounds like what you\u2019re building, let\u2019s talk."), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "mailto:hello@naveed.design",
    variant: "primary",
    size: "lg"
  }, "Contact")));
}
window.FinalCTA = FinalCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/FinalCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero — full-bleed dark hero with luminosity texture, nav, big Syne title.
const {
  NavBar,
  Button
} = window.NaveedKhanPortfolioDesignSystem_ee97a5;
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    className: "pf-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__texture"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__vignette"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-col pf-hero__inner"
  }, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__content"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pf-eyebrow pf-eyebrow--lg"
  }, "Senior Product Designer"), /*#__PURE__*/React.createElement("h1", {
    className: "pf-hero__title"
  }, "Naveed", /*#__PURE__*/React.createElement("br", null), "Khan"), /*#__PURE__*/React.createElement("p", {
    className: "pf-hero__lead"
  }, "Over 12+ years, I\u2019ve designed SaaS, fintech, cloud hosting, and AI products \u2014 leading 0\u21921 builds, redesigns, and growth initiatives from strategy to shipped UX."), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#work",
    variant: "primary",
    size: "lg"
  }, "View Selected Work")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/MetricsSection.jsx
try { (() => {
// MetricsSection — the centered figure row.
const {
  Stat
} = window.NaveedKhanPortfolioDesignSystem_ee97a5;
const METRICS = [{
  value: '12+',
  label: 'Years Experience'
}, {
  value: '$350M',
  label: 'Acquisition (Cloudways)'
}, {
  value: '$1M',
  label: 'Processed (Year 1)'
}, {
  value: '0 → 1',
  label: 'Products Built'
}];
function MetricsSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-metrics"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-col pf-metrics__row"
  }, METRICS.map(m => /*#__PURE__*/React.createElement(Stat, {
    key: m.label,
    size: "lg",
    value: m.value,
    label: m.label
  }))));
}
window.MetricsSection = MetricsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/MetricsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkSection.jsx
try { (() => {
// WorkSection — eyebrow + "Work" heading + stacked ProjectCards.
const {
  ProjectCard,
  Eyebrow
} = window.NaveedKhanPortfolioDesignSystem_ee97a5;

// A lightweight stylized browser thumbnail used in card image wells.
function Shot({
  tone = 'light',
  label
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-shot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__bar"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: `pf-shot__body ${light ? 'is-light' : 'is-blue'}`
  }, label && /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__brand"
  }, label), !label && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__side"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__line",
    style: {
      width: '60%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__line",
    style: {
      width: '85%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-shot__cards"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))))));
}
function Shots({
  variant
}) {
  if (variant === 'cloudways') {
    return /*#__PURE__*/React.createElement("div", {
      className: "pf-shots"
    }, /*#__PURE__*/React.createElement(Shot, null), /*#__PURE__*/React.createElement(Shot, {
      tone: "blue",
      label: "CLOUDWAYS"
    }), /*#__PURE__*/React.createElement(Shot, null));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-shots"
  }, /*#__PURE__*/React.createElement(Shot, null), /*#__PURE__*/React.createElement(Shot, null), /*#__PURE__*/React.createElement(Shot, null));
}
function WorkSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    className: "pf-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "lg"
  }, "Selected Work"), /*#__PURE__*/React.createElement("h2", {
    className: "pf-h1"
  }, "Work")), /*#__PURE__*/React.createElement("div", {
    className: "pf-work__stack"
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    eyebrow: "CONVESIO",
    title: "Designing a fintech product from the ground up.",
    description: "Led end-to-end product design from concept to launch for a payments platform processing $1M+ in year one.",
    stats: [{
      label: 'Role',
      value: 'Lead Product Designer'
    }, {
      label: 'Outcome',
      value: '$1M+ processed (Year 1)'
    }],
    cta: {
      label: 'Read Case Study',
      href: '#case'
    },
    media: /*#__PURE__*/React.createElement(Shots, {
      variant: "convesio"
    })
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    eyebrow: "CLOUDWAYS",
    title: "Designing at scale across product, web, and brand.",
    description: "Spent 7 years designing and scaling a high-growth cloud hosting platform across product, marketing, and brand.",
    stats: [{
      label: 'Role',
      value: 'Lead Designer'
    }, {
      label: 'Outcome',
      value: 'Part of a $350M Acquisition Story'
    }],
    cta: {
      label: 'Read Case Study',
      href: '#case'
    },
    media: /*#__PURE__*/React.createElement(Shots, {
      variant: "cloudways"
    })
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    eyebrow: "CONVESIO",
    title: "Leading a self-initiated product redesign.",
    description: "Identified key usability issues, pitched a redesign strategy, secured buy-in, and led a full platform transformation.",
    stats: [{
      label: 'Role',
      value: 'Lead Product Designer'
    }, {
      label: 'Outcome',
      value: '120% Hosting Revenue Growth'
    }],
    cta: {
      label: 'Read Case Study',
      href: '#case'
    },
    media: /*#__PURE__*/React.createElement(Shots, {
      variant: "redesign"
    })
  }))));
}
window.WorkSection = WorkSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.ExperienceRow = __ds_scope.ExperienceRow;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.MarqueeStripe = __ds_scope.MarqueeStripe;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

})();
