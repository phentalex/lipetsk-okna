/* @ds-bundle: {"format":4,"namespace":"DesignSystem_52c6a7","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"ContactBlock","sourcePath":"components/content/ContactBlock.jsx"},{"name":"GeoCoverage","sourcePath":"components/content/GeoCoverage.jsx"},{"name":"PriceExplainer","sourcePath":"components/content/PriceExplainer.jsx"},{"name":"SeoProse","sourcePath":"components/content/SeoProse.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"StepList","sourcePath":"components/content/StepList.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"MeasureForm","sourcePath":"components/forms/MeasureForm.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"StickyCallBar","sourcePath":"components/navigation/StickyCallBar.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"d93aa36d0b9d","components/content/ContactBlock.jsx":"3839873a934c","components/content/GeoCoverage.jsx":"29a98c20aeee","components/content/PriceExplainer.jsx":"fb8e5f1c9544","components/content/SeoProse.jsx":"253adbaf57c1","components/content/ServiceCard.jsx":"d93b7a339bf0","components/content/StepList.jsx":"beccd55024c0","components/core/Badge.jsx":"6677d0f7ce4c","components/core/Button.jsx":"396e68c65987","components/core/Card.jsx":"4740e30d259c","components/core/Icon.jsx":"c7a5dd942e3d","components/core/IconButton.jsx":"a2d63e118972","components/core/Logo.jsx":"4d401347cb1f","components/core/SectionHeading.jsx":"47fa46c4595a","components/core/Tag.jsx":"e4390da631f4","components/forms/Checkbox.jsx":"93103aa47a83","components/forms/Input.jsx":"1ef988db7e9c","components/forms/MeasureForm.jsx":"15e9d7cd45d6","components/forms/Radio.jsx":"64c76ef625d8","components/forms/Select.jsx":"09fae569b055","components/forms/Textarea.jsx":"f906d511b4a6","components/navigation/Breadcrumbs.jsx":"61c75a8e5c2e","components/navigation/SiteFooter.jsx":"fa97723828bb","components/navigation/SiteHeader.jsx":"8a4210669f26","components/navigation/StickyCallBar.jsx":"b456d63bbbdc","ui_kits/website/App.jsx":"ff5513805acd","ui_kits/website/Contacts.jsx":"a21c25c93cc6","ui_kits/website/Home.jsx":"0685752237fd","ui_kits/website/MeasureScreen.jsx":"19d86dc84cb2","ui_kits/website/ServiceLanding.jsx":"bc42d8f37ead","ui_kits/website/Shared.jsx":"3b5283a9d9dc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_52c6a7 = window.DesignSystem_52c6a7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/SeoProse.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Bottom-of-page SEO text, 1500–2500 characters: readable, with subheads and lists. */
function SeoProse({
  title,
  children,
  collapsible = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(!collapsible);
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: "var(--surface-subtle)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "var(--space-12) 0",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--measure)",
      margin: "0 auto",
      padding: "0 var(--space-4)"
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--type-h3-size)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)",
      fontSize: "var(--text-base)",
      maxHeight: open ? "none" : 260,
      overflow: open ? "visible" : "hidden",
      maskImage: open ? "none" : "linear-gradient(#000 62%,transparent)",
      WebkitMaskImage: open ? "none" : "linear-gradient(#000 62%,transparent)"
    }
  }, children), collapsible && !open ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(true),
    style: {
      marginTop: "var(--space-4)",
      minHeight: 48,
      padding: "0 4px",
      background: "none",
      border: "none",
      font: "inherit",
      fontWeight: 600,
      color: "var(--text-accent)",
      cursor: "pointer"
    }
  }, "\u0427\u0438\u0442\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E") : null));
}
Object.assign(__ds_scope, { SeoProse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SeoProse.jsx", error: String((e && e.message) || e) }); }

// components/content/StepList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Numbered process: замер → договор → изготовление → монтаж. */
function StepList({
  steps = [],
  columns = 4,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      display: "grid",
      gap: "var(--space-6)",
      gridTemplateColumns: `repeat(auto-fit,minmax(${Math.round(1000 / columns)}px,1fr))`,
      listStyle: "none",
      margin: 0,
      padding: 0,
      counterReset: "s",
      ...style
    }
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      paddingTop: "var(--space-4)",
      borderTop: "2px solid var(--red-500)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-accent)",
      letterSpacing: "var(--tracking-caps)",
      marginBottom: "var(--space-2)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-md)",
      margin: "0 0 6px"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, s.text))));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepList.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  plain: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-subtle)"
  },
  tint: {
    background: "var(--surface-tint)",
    border: "1px solid var(--red-100)"
  },
  subtle: {
    background: "var(--surface-subtle)",
    border: "1px solid var(--border-subtle)"
  },
  accent: {
    background: "var(--surface-card)",
    border: "1px solid var(--red-200)"
  }
};

/* Border-first cards; shadow only on hover or when explicitly raised. */
function Card({
  children,
  tone = "plain",
  padding = "var(--space-6)",
  raised = false,
  hoverable = false,
  as = "div",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: hoverable ? () => setHover(true) : undefined,
    onMouseLeave: hoverable ? () => setHover(false) : undefined,
    style: {
      borderRadius: "var(--radius-card)",
      padding,
      boxShadow: raised ? "var(--shadow-md)" : hover ? "var(--shadow-sm)" : "none",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      ...TONES[tone],
      ...(hover ? {
        borderColor: "var(--red-200)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 18,
  md: 22,
  lg: 28
};

/* Lucide (CDN, lucide-static) masked to currentColor so icons inherit text colour. */
function Icon({
  name,
  size = "md",
  color,
  title,
  style,
  ...rest
}) {
  const px = typeof size === "number" ? size : SIZES[size] || SIZES.md;
  const url = `url("https://unpkg.com/lucide-static@0.474.0/icons/${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: title ? "img" : "presentation",
    "aria-label": title || undefined,
    "aria-hidden": title ? undefined : "true",
    style: {
      display: "inline-block",
      flex: "none",
      width: px,
      height: px,
      backgroundColor: color || "currentColor",
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FAQ block — real headings + text so FAQPage JSON-LD matches the visible content. */
function Accordion({
  items = [],
  defaultOpen = 0,
  headingLevel = 3,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const H = "h" + headingLevel;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(H, {
      style: {
        margin: 0,
        fontSize: "var(--text-md)",
        letterSpacing: "-0.01em"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": isOpen,
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        width: "100%",
        minHeight: 64,
        padding: "var(--space-4) 0",
        background: "none",
        border: "none",
        font: "inherit",
        color: isOpen ? "var(--text-accent)" : "var(--text-primary)",
        textAlign: "left",
        cursor: "pointer",
        transition: "var(--transition-control)"
      }
    }, it.q, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? "minus" : "plus",
      size: "sm",
      color: isOpen ? "var(--red-500)" : "var(--gray-500)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: isOpen ? "block" : "none",
        paddingBottom: "var(--space-5)",
        maxWidth: "var(--measure)",
        color: "var(--text-secondary)"
      }
    }, typeof it.a === "string" ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, it.a) : it.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/ContactBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ROWS = [{
  icon: "map-pin",
  label: "Салон",
  value: "Липецк, ул. Водопьянова, 17 — ТВЦ, 1 этаж"
}, {
  icon: "phone",
  label: "Телефон",
  value: "+7 (4742) 00-00-00",
  href: "tel:+74742000000"
}, {
  icon: "clock",
  label: "Часы работы",
  value: "Пн–Пт 9:00–19:00, Сб 10:00–16:00"
}];
function ContactBlock({
  rows = ROWS,
  dense = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      display: "grid",
      gap: dense ? "var(--space-3)" : "var(--space-5)",
      listStyle: "none",
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), rows.map(r => /*#__PURE__*/React.createElement("li", {
    key: r.label,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: "var(--radius-sm)",
      background: "var(--red-50)",
      color: "var(--red-600)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.icon,
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-2xs)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-caps)",
      color: "var(--text-muted)"
    }
  }, r.label), r.href ? /*#__PURE__*/React.createElement("a", {
    href: r.href,
    style: {
      fontSize: "var(--text-base)",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, r.value) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-primary)"
    }
  }, r.value)))));
}
Object.assign(__ds_scope, { ContactBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/GeoCoverage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* «Работаем в Липецке и области» — geo-relevance block. */
function GeoCoverage({
  title = "Работаем в Липецке и Липецкой области",
  districts = ["Советский район", "Октябрьский район", "Правобережный район", "Левобережный район", "Сокол", "Тракторный", "Опытная станция", "Университетский", "Матырский"],
  towns = ["Грязи", "Липецкий район", "Елец", "Лебедянь", "Задонск", "Усмань", "Данков", "Чаплыгин", "Добринка"],
  note = "Выезд замерщика по городу бесплатный. По области — согласуем при заявке.",
  style,
  ...rest
}) {
  const row = (label, list) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-base)",
      marginBottom: "var(--space-3)"
    }
  }, label), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, list.map(d => /*#__PURE__*/React.createElement("li", {
    key: d,
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--gray-700)",
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-pill)",
      padding: "7px 14px"
    }
  }, d))));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-subtle)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: "var(--type-h3-size)",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: "md",
    color: "var(--red-500)"
  }), title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, row("Районы Липецка", districts), row("Область", towns)), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-6) 0 0",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { GeoCoverage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GeoCoverage.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceExplainer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_REASONS = [{
  icon: "ruler",
  title: "Размеры всегда индивидуальные",
  text: "Проёмы в панельных домах, коттеджах и на балконах различаются на сантиметры. Конструкция считается по факту."
}, {
  icon: "layers",
  title: "Комплектация меняет цену",
  text: "Профиль, число камер, стеклопакет, фурнитура и цвет дают разброс в разы при одном и том же размере."
}, {
  icon: "hard-hat",
  title: "Монтаж зависит от объекта",
  text: "Этаж, состояние проёма, демонтаж старой рамы, вынос мусора — всё это видно только на месте."
}];

/* Replaces a price calculator: explains why numbers appear only after a site visit. */
function PriceExplainer({
  title = "Почему на сайте нет калькулятора и цен",
  lead = "Мы не публикуем прайс, потому что честную цифру можно назвать только после замера. Любой калькулятор дал бы вам цену, которая изменится при первом визите мастера.",
  reasons = DEFAULT_REASONS,
  footnote = "Замер бесплатный и ни к чему не обязывает: после него вы получаете точную смету с фиксированной ценой.",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-tint)",
      border: "1px solid var(--red-100)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: "var(--space-3)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "var(--measure)",
      color: "var(--text-secondary)",
      marginBottom: "var(--space-6)"
    }
  }, lead), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, reasons.map(r => /*#__PURE__*/React.createElement("li", {
    key: r.title,
    style: {
      background: "var(--white)",
      border: "1px solid var(--red-100)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.icon,
    size: "md",
    color: "var(--red-500)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-base)",
      margin: "var(--space-3) 0 6px"
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, r.text)))), footnote ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-6) 0 0",
      fontSize: "var(--text-sm)",
      color: "var(--gray-700)"
    }
  }, footnote) : null);
}
Object.assign(__ds_scope, { PriceExplainer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceExplainer.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Links to a service landing page — the main internal-linking surface on the homepage. */
function ServiceCard({
  icon = "square",
  title,
  description,
  href = "#",
  tags = [],
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-card)",
      border: "1px solid " + (hover ? "var(--red-200)" : "var(--border-subtle)"),
      padding: "var(--space-6)",
      boxShadow: hover ? "var(--shadow-sm)" : "none",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: hover ? "var(--red-100)" : "var(--red-50)",
      color: "var(--red-600)",
      transition: "background-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "md"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, title)), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, description) : null, tags.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      listStyle: "none",
      margin: "var(--space-1) 0 0",
      padding: 0
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--gray-600)",
      background: "var(--gray-50)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-pill)",
      padding: "4px 10px"
    }
  }, t))) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginTop: "auto",
      paddingTop: "var(--space-4)",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-accent)"
    }
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  accent: {
    background: "var(--red-50)",
    color: "var(--red-700)",
    border: "1px solid var(--red-200)"
  },
  solid: {
    background: "var(--accent)",
    color: "var(--text-on-red)",
    border: "1px solid transparent",
    fontWeight: 600
  },
  neutral: {
    background: "var(--gray-100)",
    color: "var(--gray-700)",
    border: "1px solid var(--gray-200)"
  },
  success: {
    background: "var(--success-50)",
    color: "var(--success-600)",
    border: "1px solid #CFE7DA"
  }
};
function Badge({
  children,
  tone = "accent",
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: 500,
      lineHeight: 1.2,
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      ...TONES[tone],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  fontFamily: "var(--font-body)",
  fontWeight: 600,
  letterSpacing: "0",
  borderRadius: "var(--radius-control)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  transition: "var(--transition-control)",
  whiteSpace: "nowrap"
};
const SIZES = {
  sm: {
    fontSize: "16px",
    padding: "9px 16px",
    minHeight: 40
  },
  md: {
    fontSize: "17px",
    padding: "13px 22px",
    minHeight: 48
  },
  lg: {
    fontSize: "19px",
    padding: "16px 28px",
    minHeight: 56
  }
};
const VARIANTS = {
  primary: {
    background: "var(--accent)",
    color: "var(--text-on-red)",
    boxShadow: "var(--shadow-red)"
  },
  secondary: {
    background: "var(--white)",
    color: "var(--text-primary)",
    borderColor: "var(--border-default)"
  },
  outline: {
    background: "var(--white)",
    color: "var(--text-accent)",
    borderColor: "var(--red-300)"
  },
  soft: {
    background: "var(--accent-soft)",
    color: "var(--text-accent)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-accent)"
  }
};
const HOVER = {
  primary: {
    background: "var(--accent-hover)"
  },
  secondary: {
    background: "var(--gray-50)",
    borderColor: "var(--border-strong)"
  },
  outline: {
    background: "var(--red-50)",
    borderColor: "var(--red-400)"
  },
  soft: {
    background: "var(--accent-soft-hover)"
  },
  ghost: {
    background: "var(--accent-soft)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  children,
  iconLeft,
  iconRight,
  href,
  block = false,
  disabled = false,
  type = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const css = {
    ...BASE,
    ...(SIZES[size] || SIZES.md),
    ...(VARIANTS[variant] || VARIANTS.primary),
    ...(hover && !disabled ? HOVER[variant] : null),
    ...(press && !disabled ? {
      transform: "translateY(1px)",
      background: variant === "primary" ? "var(--accent-active)" : undefined
    } : null),
    ...(block ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      background: "var(--gray-100)",
      color: "var(--gray-400)",
      borderColor: "transparent",
      boxShadow: "none",
      cursor: "not-allowed"
    } : null),
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === "lg" ? "md" : "sm"
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === "lg" ? "md" : "sm"
  }) : null);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: css
  }, handlers, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: css
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 40,
  md: 48,
  lg: 56
};
function IconButton({
  icon,
  label,
  variant = "secondary",
  size = "md",
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = SIZES[size] || SIZES.md;
  const skin = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-red)",
      borderColor: "transparent",
      boxShadow: "var(--shadow-red)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--text-primary)",
      borderColor: "var(--border-default)"
    },
    soft: {
      background: "var(--accent-soft)",
      color: "var(--text-accent)",
      borderColor: "transparent"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      borderColor: "transparent"
    }
  }[variant];
  const hoverSkin = {
    primary: {
      background: "var(--accent-hover)"
    },
    secondary: {
      background: "var(--gray-50)",
      borderColor: "var(--border-strong)"
    },
    soft: {
      background: "var(--accent-soft-hover)"
    },
    ghost: {
      background: "var(--gray-100)",
      color: "var(--text-primary)"
    }
  }[variant];
  const css = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: px,
    height: px,
    borderRadius: "var(--radius-control)",
    border: "1px solid transparent",
    cursor: "pointer",
    transition: "var(--transition-control)",
    ...skin,
    ...(hover ? hoverSkin : null),
    ...style
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": label,
    title: label,
    type: href ? undefined : "button",
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? "sm" : "md"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ASSETS = {
  full: "assets/logo-full.png",
  icon: "assets/logo-icon.png"
};

/* Light backgrounds only (white or --red-50). There is no inverse logo. */
function Logo({
  variant = "full",
  height = 40,
  href = "/",
  basePath = "",
  style,
  ...rest
}) {
  const src = (basePath ? basePath.replace(/\/$/, "") + "/" : "") + ASSETS[variant];
  const img = /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "\u041B\u0438\u043F\u0435\u0446\u043A\u0438\u0435 \u043E\u043A\u043D\u0430",
    style: {
      height,
      width: "auto",
      display: "block"
    }
  });
  const pad = Math.round(height * 0.5);
  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    padding: variant === "full" ? `0 ${pad}px 0 0` : 0,
    ...style
  };
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-label": "\u041B\u0438\u043F\u0435\u0446\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u2014 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
    style: {
      ...wrap,
      lineHeight: 0
    }
  }, rest), img) : /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), img);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Real h2/h3 element — never a styled div (SEO requirement). */
function SectionHeading({
  eyebrow,
  title,
  lead,
  level = 2,
  align = "left",
  style,
  ...rest
}) {
  const H = "h" + level;
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      maxWidth: align === "center" ? "760px" : "none",
      margin: align === "center" ? "0 auto" : undefined,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, eyebrow)) : null, /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontSize: "var(--type-lead-size)",
      color: "var(--text-secondary)",
      maxWidth: "62ch"
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Filter / cross-link chip. Renders an <a> when href is given — used for internal linking. */
function Tag({
  children,
  href,
  active = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const css = {
    display: "inline-flex",
    alignItems: "center",
    minHeight: 40,
    padding: "8px 16px",
    fontFamily: "var(--font-body)",
    fontSize: "16px",
    fontWeight: active ? 600 : 400,
    lineHeight: 1.2,
    textDecoration: "none",
    borderRadius: "var(--radius-pill)",
    border: "1px solid " + (active ? "var(--red-500)" : "var(--border-subtle)"),
    background: active ? "var(--red-50)" : hover ? "var(--gray-50)" : "var(--white)",
    color: active ? "var(--red-700)" : "var(--text-primary)",
    transition: "var(--transition-control)",
    cursor: "pointer",
    ...style
  };
  const Tag2 = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag2, _extends({
    href: href,
    type: href ? undefined : "button",
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked === undefined ? inner : checked;
  const uid = id || React.useMemo(() => "cb-" + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      cursor: "pointer",
      minHeight: 44,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: isOn,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "none",
      width: 24,
      height: 24,
      marginTop: 2,
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: isOn ? "var(--accent)" : "var(--white)",
      border: "1px solid " + (isOn ? "var(--accent)" : "var(--border-default)"),
      color: "#fff",
      transition: "var(--transition-control)"
    }
  }, isOn ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 16px minimum font-size — anything smaller makes iOS Safari zoom on focus. */
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => "in-" + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      minHeight: 52,
      padding: "14px 16px",
      fontSize: "16px",
      lineHeight: 1.4,
      color: "var(--text-primary)",
      background: "var(--white)",
      border: "1px solid " + (error ? "var(--danger-600)" : focus ? "var(--red-500)" : "var(--border-default)"),
      borderRadius: "var(--radius-control)",
      outline: "none",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "var(--transition-control)",
      width: "100%",
      boxSizing: "border-box",
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--danger-600)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked === undefined ? inner : checked;
  const uid = id || React.useMemo(() => "rd-" + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      minHeight: 44,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: isOn,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "none",
      width: 24,
      height: 24,
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--white)",
      border: "1px solid " + (isOn ? "var(--accent)" : "var(--border-default)"),
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "var(--radius-pill)",
      background: isOn ? "var(--accent)" : "transparent"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "16px",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => "se-" + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      minHeight: 52,
      padding: "14px 44px 14px 16px",
      fontSize: "16px",
      color: "var(--text-primary)",
      background: "var(--white)",
      border: "1px solid " + (focus ? "var(--red-500)" : "var(--border-default)"),
      borderRadius: "var(--radius-control)",
      outline: "none",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "var(--transition-control)",
      width: "100%",
      boxSizing: "border-box",
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: "sm",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--gray-500)",
      pointerEvents: "none"
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/MeasureForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The site has no price calculator — this form replaces it. */
function MeasureForm({
  title = "Записаться на бесплатный замер",
  note = "Замер и консультация бесплатно. Перезвоним в течение 15 минут в рабочее время.",
  objectTypes = ["Квартира", "Частный дом или коттедж", "Дача", "Терраса или беседка", "Офис, коммерческий объект"],
  compact = false,
  onSubmit,
  style,
  ...rest
}) {
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--white)",
        border: "1px solid var(--red-200)",
        borderRadius: "var(--radius-card)",
        padding: "var(--space-8)",
        textAlign: "center",
        ...style
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check-circle-2",
      size: 40,
      color: "var(--red-500)"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        marginTop: "var(--space-4)"
      }
    }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--text-secondary)"
      }
    }, "\u041C\u0430\u0441\u0442\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u0435\u0442 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u043C\u0435\u0440\u0430."));
  }
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      onSubmit && onSubmit(e);
    },
    style: {
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      padding: compact ? "var(--space-6)" : "var(--space-8)",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: "var(--space-2)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      marginBottom: "var(--space-6)"
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "\u0418\u043C\u044F",
    name: "name",
    autoComplete: "name",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    name: "phone",
    type: "tel",
    inputMode: "tel",
    placeholder: "+7 (___) ___-__-__",
    autoComplete: "tel",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "\u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u043E\u0441\u0442\u0435\u043A\u043B\u0438\u0442\u044C",
    name: "object",
    options: objectTypes
  }), compact ? null : /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "\u0410\u0434\u0440\u0435\u0441 \u043E\u0431\u044A\u0435\u043A\u0442\u0430",
    name: "address",
    hint: "\u0413\u043E\u0440\u043E\u0434, \u0443\u043B\u0438\u0446\u0430 \u2014 \u0434\u043B\u044F \u0432\u044B\u0435\u0437\u0434\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u0430"
  }), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    required: true,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445")
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    size: "lg",
    block: true,
    iconLeft: "ruler"
  }, "\u0412\u044B\u0437\u0432\u0430\u0442\u044C \u0437\u0430\u043C\u0435\u0440\u0449\u0438\u043A\u0430")));
}
Object.assign(__ds_scope, { MeasureForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/MeasureForm.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => "ta-" + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: "14px 16px",
      fontSize: "16px",
      lineHeight: 1.6,
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      background: "var(--white)",
      resize: "vertical",
      border: "1px solid " + (focus ? "var(--red-500)" : "var(--border-default)"),
      borderRadius: "var(--radius-control)",
      outline: "none",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "var(--transition-control)",
      width: "100%",
      boxSizing: "border-box",
      ...style
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Required on every internal page; mirror it in BreadcrumbList JSON-LD. */
function Breadcrumbs({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "\u0425\u043B\u0435\u0431\u043D\u044B\u0435 \u043A\u0440\u043E\u0448\u043A\u0438",
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("ol", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 8,
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontSize: "var(--text-xs)"
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        color: "var(--text-muted)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: "var(--text-secondary)",
        textDecoration: "none"
      }
    }, it.label), last ? null : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14,
      color: "var(--gray-400)"
    }));
  })));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLUMNS = [{
  title: "Услуги",
  links: [["Окна ПВХ", "/plastikovye-okna/"], ["Алюминиевые окна", "/alyuminievye-okna/"], ["Остекление балконов", "/osteklenie-balkonov/"], ["Дома и коттеджи", "/okna-dlya-doma/"]]
}, {
  title: "Ещё",
  links: [["Террасы и беседки", "/terrasy-i-besedki/"], ["Двери и входные группы", "/dveri/"], ["Москитные сетки", "/moskitnye-setki/"], ["Ремонт и регулировка", "/remont-okon/"]]
}];

/* Light footer: grey-50 with a top border. Never dark. */
function SiteFooter({
  columns = COLUMNS,
  basePath = "",
  legal = "ООО «Липецкие окна». Цены на сайте не публикуются — стоимость рассчитывается индивидуально после бесплатного замера.",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-footer)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "var(--space-12) 0 var(--space-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-6)",
      display: "grid",
      gap: "var(--space-10)",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "full",
    height: 40,
    basePath: basePath
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      maxWidth: "34ch"
    }
  }, "\u041E\u043A\u043D\u0430 \u0438 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043E\u0442 \u0437\u0430\u0432\u043E\u0434\u0430-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F. \u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437 \u043F\u043E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C.")), columns.map(c => /*#__PURE__*/React.createElement("nav", {
    key: c.title,
    "aria-label": c.title
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-sm)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-caps)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-4)"
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, c.links.map(([label, href]) => /*#__PURE__*/React.createElement("li", {
    key: href
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, label)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.ContactBlock, {
    dense: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "var(--space-10) auto 0",
      padding: "var(--space-6) var(--space-6) 0",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)",
      maxWidth: "80ch"
    }
  }, legal)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NAV = [{
  label: "Окна ПВХ",
  href: "/plastikovye-okna/"
}, {
  label: "Балконы",
  href: "/osteklenie-balkonov/"
}, {
  label: "Дома и коттеджи",
  href: "/okna-dlya-doma/"
}, {
  label: "Двери",
  href: "/dveri/"
}, {
  label: "Ремонт окон",
  href: "/remont-okon/"
}, {
  label: "Контакты",
  href: "/kontakty/"
}];

/* Light header only — white or --red-50. There is no dark header and no inverse logo. */
function SiteHeader({
  nav = NAV,
  phone = "+7 (4742) 00-00-00",
  phoneHref = "tel:+74742000000",
  tint = false,
  mobile = false,
  basePath = "",
  style,
  ...rest
}) {
  const [openMenu, setOpenMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: tint ? "var(--red-50)" : "var(--surface-header)",
      boxShadow: "var(--shadow-header)",
      position: "relative",
      zIndex: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: mobile ? "10px var(--space-4)" : "var(--space-4) var(--space-6)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: mobile ? "icon" : "full",
    height: mobile ? 36 : 42,
    basePath: basePath
  }), mobile ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "phone",
    label: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
    variant: "primary",
    href: phoneHref
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: openMenu ? "x" : "menu",
    label: "\u041C\u0435\u043D\u044E",
    variant: "secondary",
    onClick: () => setOpenMenu(!openMenu)
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F",
    style: {
      marginLeft: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("li", {
    key: n.href
  }, /*#__PURE__*/React.createElement(HeaderLink, n))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: phoneHref,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-md)",
      fontWeight: 600,
      color: "var(--text-primary)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: "sm",
    color: "var(--red-500)"
  }), phone), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    iconLeft: "ruler"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u0430\u043C\u0435\u0440")))), mobile && openMenu ? /*#__PURE__*/React.createElement("nav", {
    "aria-label": "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F",
    style: {
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--white)",
      padding: "var(--space-2) var(--space-4) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("li", {
    key: n.href,
    style: {
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: n.href,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 52,
      fontSize: "var(--text-base)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, n.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: "sm",
    color: "var(--gray-400)"
  }))))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    block: true,
    iconLeft: "ruler",
    style: {
      marginTop: "var(--space-4)"
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u0430\u043C\u0435\u0440")) : null);
}
function HeaderLink({
  label,
  href,
  active
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-block",
      padding: "6px 0",
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: active || hover ? "var(--text-accent)" : "var(--text-primary)",
      textDecoration: "none",
      borderBottom: "2px solid " + (active || hover ? "var(--red-500)" : "transparent"),
      transition: "var(--transition-control)",
      whiteSpace: "nowrap"
    }
  }, label);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StickyCallBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Mobile-first sticky action bar — traffic is mostly phones and the decision is made by phone. */
function StickyCallBar({
  phoneHref = "tel:+74742000000",
  basePath = "",
  showLogo = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "sticky",
      bottom: 0,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      background: "rgba(255,255,255,.92)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "var(--space-3) var(--space-4)",
      paddingBottom: "calc(var(--space-3) + env(safe-area-inset-bottom))",
      ...style
    }
  }, rest), showLogo ? /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "icon",
    height: 32,
    basePath: basePath
  }) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "md",
    iconLeft: "phone",
    href: phoneHref,
    style: {
      flex: 1
    }
  }, "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    iconLeft: "ruler",
    style: {
      flex: 1.2
    }
  }, "\u0417\u0430\u043C\u0435\u0440"));
}
Object.assign(__ds_scope, { StickyCallBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StickyCallBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const [screen, setScreen] = React.useState("home");
  const [mobile, setMobile] = React.useState(false);
  const go = s => {
    setScreen(s);
    window.scrollTo({
      top: 0
    });
  };
  const nav = [{
    label: "Окна ПВХ",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("service");
    }
  }, {
    label: "Балконы",
    href: "#",
    active: screen === "service",
    onClick: e => {
      e.preventDefault();
      go("service");
    }
  }, {
    label: "Дома и коттеджи",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("service");
    }
  }, {
    label: "Двери",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("service");
    }
  }, {
    label: "Ремонт окон",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("service");
    }
  }, {
    label: "Контакты",
    href: "#",
    active: screen === "contacts",
    onClick: e => {
      e.preventDefault();
      go("contacts");
    }
  }];
  const page = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    nav: nav,
    mobile: mobile,
    basePath: BASE
  }), screen === "home" ? /*#__PURE__*/React.createElement(Home, {
    go: go,
    mobile: mobile
  }) : screen === "service" ? /*#__PURE__*/React.createElement(ServiceLanding, {
    go: go,
    mobile: mobile
  }) : screen === "contacts" ? /*#__PURE__*/React.createElement(Contacts, {
    mobile: mobile
  }) : /*#__PURE__*/React.createElement(MeasureScreen, {
    mobile: mobile
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    basePath: BASE
  }), mobile ? /*#__PURE__*/React.createElement(StickyCallBar, {
    basePath: BASE
  }) : null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 16,
      bottom: 16,
      zIndex: 50,
      display: "flex",
      gap: 8,
      background: "rgba(255,255,255,.94)",
      backdropFilter: "blur(8px)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-pill)",
      padding: 6,
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: mobile ? "ghost" : "soft",
    onClick: () => setMobile(false),
    iconLeft: "monitor"
  }, "\u0414\u0435\u0441\u043A\u0442\u043E\u043F"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: mobile ? "soft" : "ghost",
    onClick: () => setMobile(true),
    iconLeft: "smartphone"
  }, "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439")), mobile ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gray-200)",
      minHeight: "100vh",
      padding: "24px 0",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      background: "var(--white)",
      border: "1px solid var(--border-default)",
      borderRadius: 22,
      overflow: "hidden"
    }
  }, page)) : page);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contacts.jsx
try { (() => {
function Contacts({
  mobile
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Главная",
      href: "#"
    }, {
      label: "Контакты"
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h1", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
      gap: "var(--space-10)",
      marginTop: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ContactBlock, null), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-md)",
      marginBottom: 6
    }
  }, "\u041A\u0430\u043A \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, "\u0421\u0430\u043B\u043E\u043D \u0432 \u0422\u0412\u0426 \u043D\u0430 \u0412\u043E\u0434\u043E\u043F\u044C\u044F\u043D\u043E\u0432\u0430, 17 \u2014 \u0432\u0445\u043E\u0434 \u0441 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0444\u0430\u0441\u0430\u0434\u0430, \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u0442\u0430\u0436. \u041E\u0431\u0440\u0430\u0437\u0446\u044B \u043F\u0440\u043E\u0444\u0438\u043B\u044F, \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B \u0438 \u0441\u0442\u0435\u043A\u043B\u043E\u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0431\u0435\u0437 \u0437\u0430\u043F\u0438\u0441\u0438.")), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "\u041A\u0430\u0440\u0442\u0430 / \u0444\u043E\u0442\u043E \u0432\u0445\u043E\u0434\u0430 \u0432 \u0441\u0430\u043B\u043E\u043D",
    ratio: "16 / 9",
    style: {
      marginTop: "var(--space-6)"
    }
  })), /*#__PURE__*/React.createElement(MeasureForm, {
    title: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u0430\u043C\u0435\u0440"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(GeoCoverage, {
    style: {
      background: "var(--white)"
    }
  })));
}
Object.assign(window, {
  Contacts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contacts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Home({
  go,
  mobile
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(180deg,var(--red-50),var(--white) 78%)",
      padding: mobile ? "var(--space-8) 0 var(--space-10)" : "var(--space-16) 0 var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: mobile ? "1fr" : "1.05fr .95fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    icon: "factory"
  }, "\u041E\u043A\u043D\u0430 \u043E\u0442 \u0437\u0430\u0432\u043E\u0434\u0430-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "var(--space-4) 0 var(--space-4)"
    }
  }, "\u041E\u043A\u043D\u0430 \u0438 \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u0432 \u041B\u0438\u043F\u0435\u0446\u043A\u0435 \u043F\u043E \u0432\u0430\u0448\u0438\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--type-lead-size)",
      color: "var(--text-secondary)",
      maxWidth: "54ch"
    }
  }, "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437, \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043C\u043E\u043D\u0442\u0430\u0436, \u0441\u0430\u043B\u043E\u043D \u043D\u0430 \u0412\u043E\u0434\u043E\u043F\u044C\u044F\u043D\u043E\u0432\u0430, 17. \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B, \u0447\u0430\u0441\u0442\u043D\u044B\u0435 \u0434\u043E\u043C\u0430 \u0438 \u043A\u043E\u0442\u0442\u0435\u0434\u0436\u0438, \u0434\u0430\u0447\u0438, \u0442\u0435\u0440\u0440\u0430\u0441\u044B, \u043E\u0444\u0438\u0441\u044B \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      margin: "var(--space-6) 0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconLeft: "ruler",
    block: mobile,
    onClick: () => go("measure")
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u0430\u043C\u0435\u0440"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconLeft: "phone",
    href: "tel:+74742000000",
    block: mobile
  }, "+7 (4742) 00-00-00")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-5)",
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontSize: "var(--text-sm)",
      color: "var(--gray-700)"
    }
  }, [["ruler", "Замер бесплатно"], ["file-text", "Фиксированная цена в договоре"], ["truck", "Монтаж своими бригадами"]].map(([i, t]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: "sm",
    color: "var(--red-500)"
  }), t)))), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "\u0421\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u0432 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0435",
    ratio: mobile ? "16 / 10" : "4 / 3"
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\u0423\u0441\u043B\u0443\u0433\u0438",
    level: 2,
    title: "\u0427\u0442\u043E \u043C\u044B \u043E\u0441\u0442\u0435\u043A\u043B\u044F\u0435\u043C",
    lead: "\u0421 \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u0432\u0435\u0434\u0443\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0432\u0441\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u2014 \u043E\u0442 \u043E\u043A\u043E\u043D \u041F\u0412\u0425 \u0434\u043E \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u0438 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0438."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fit,minmax(260px,1fr))",
      marginTop: "var(--space-8)"
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.href
  }, s, {
    href: "/" + s.href + "/",
    onClick: e => {
      e.preventDefault();
      go("service");
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: mobile ? "1fr" : "1.15fr .85fr",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(PriceExplainer, {
    style: {
      background: "var(--white)"
    }
  }), /*#__PURE__*/React.createElement(MeasureForm, {
    compact: true
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 2,
    eyebrow: "\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C",
    title: "\u041E\u0442 \u0437\u0432\u043E\u043D\u043A\u0430 \u0434\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u043E\u043A\u043D\u0430"
  }), /*#__PURE__*/React.createElement(StepList, {
    style: {
      marginTop: "var(--space-8)"
    },
    columns: mobile ? 1 : 4,
    steps: [{
      title: "Заявка или звонок",
      text: "Уточняем объект и удобное время выезда."
    }, {
      title: "Бесплатный замер",
      text: "Мастер снимает размеры, показывает образцы, считает точную смету."
    }, {
      title: "Изготовление",
      text: "Конструкции делают на заводе по вашим размерам, 8–14 рабочих дней."
    }, {
      title: "Монтаж и сдача",
      text: "Установка за день, уборка, гарантия и регулировка."
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(GeoCoverage, {
    style: {
      background: "var(--white)"
    }
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 2,
    eyebrow: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B",
    title: "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
  }), /*#__PURE__*/React.createElement(Accordion, {
    style: {
      marginTop: "var(--space-6)"
    },
    items: FAQ
  })), /*#__PURE__*/React.createElement(SeoProse, {
    collapsible: true,
    title: "\u041E\u043A\u043D\u0430 \u0438 \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u0432 \u041B\u0438\u043F\u0435\u0446\u043A\u0435"
  }, /*#__PURE__*/React.createElement("p", null, "\xAB\u041B\u0438\u043F\u0435\u0446\u043A\u0438\u0435 \u043E\u043A\u043D\u0430\xBB \u2014 \u0442\u043E\u0440\u0433\u043E\u0432\u043E-\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432 \u041B\u0438\u043F\u0435\u0446\u043A\u0435. \u041C\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043E\u043A\u043D\u0430 \u0438 \u0441\u0432\u0435\u0442\u043E\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043E\u0442 \u0437\u0430\u0432\u043E\u0434\u0430-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0438 \u0441\u0430\u043C\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u043C\u043E\u043D\u0442\u0430\u0436, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0430 \u0440\u0430\u0437\u043C\u0435\u0440\u044B, \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u043E\u0434\u0438\u043D \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C. \u0421\u0430\u043B\u043E\u043D \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u0443\u043B\u0438\u0446\u0435 \u0412\u043E\u0434\u043E\u043F\u044C\u044F\u043D\u043E\u0432\u0430, 17 \u2014 \u0422\u0412\u0426, 1 \u044D\u0442\u0430\u0436, \u0442\u0430\u043C \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0431\u0440\u0430\u0437\u0446\u044B \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0438 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B."), /*#__PURE__*/React.createElement("h3", null, "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0432 \u043F\u0430\u043D\u0435\u043B\u044C\u043D\u044B\u0445 \u0438 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0445 \u0434\u043E\u043C\u0430\u0445 \u2014 \u0437\u0430\u043C\u0435\u043D\u0430 \u043E\u043A\u043E\u043D \u0431\u0435\u0437 \u043F\u043E\u0440\u0447\u0438 \u043E\u0442\u043A\u043E\u0441\u043E\u0432."), /*#__PURE__*/React.createElement("li", null, "\u0427\u0430\u0441\u0442\u043D\u044B\u0435 \u0434\u043E\u043C\u0430 \u0438 \u043A\u043E\u0442\u0442\u0435\u0434\u0436\u0438 \u2014 \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0438 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043F\u0440\u043E\u0451\u043C\u044B, \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u043E\u0435 \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435."), /*#__PURE__*/React.createElement("li", null, "\u0414\u0430\u0447\u0438, \u0442\u0435\u0440\u0440\u0430\u0441\u044B \u0438 \u0431\u0435\u0441\u0435\u0434\u043A\u0438 \u2014 \u0441\u0435\u0437\u043E\u043D\u043D\u044B\u0435 \u0438 \u0440\u0430\u0437\u0434\u0432\u0438\u0436\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438."), /*#__PURE__*/React.createElement("li", null, "\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u043E\u0444\u0438\u0441\u043D\u044B\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u2014 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0433\u0440\u0443\u043F\u043F\u044B, \u0432\u0438\u0442\u0440\u0438\u043D\u044B.")), /*#__PURE__*/React.createElement("h3", null, "\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0440\u0430\u0431\u043E\u0442\u0443"), /*#__PURE__*/React.createElement("p", null, "\u041E\u043A\u043D\u0430 \u041F\u0412\u0425 \u0438 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u0431\u0430\u043B\u043A\u043E\u043D\u043E\u0432 \u0438 \u043B\u043E\u0434\u0436\u0438\u0439, \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u043E\u0432 \u0438 \u0432\u0435\u0440\u0430\u043D\u0434, \u0440\u0430\u0437\u0434\u0432\u0438\u0436\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438, \u0434\u0432\u0435\u0440\u0438 \u0438 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0433\u0440\u0443\u043F\u043F\u044B, \u0440\u043E\u043B\u044C\u0441\u0442\u0430\u0432\u043D\u0438 \u0438 \u0441\u0442\u0430\u0432\u043D\u0438, \u043C\u043E\u0441\u043A\u0438\u0442\u043D\u044B\u0435 \u0441\u0435\u0442\u043A\u0438, \u043F\u043E\u0434\u043E\u043A\u043E\u043D\u043D\u0438\u043A\u0438 \u0438 \u043E\u0442\u043B\u0438\u0432\u044B, \u0440\u0435\u043C\u043E\u043D\u0442 \u0438 \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0430 \u043E\u043A\u043E\u043D. \u041A\u0430\u0436\u0434\u0430\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u0438\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437 \u043F\u043E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C \u2014 \u0442\u0438\u043F\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \xAB\u0441\u043E \u0441\u043A\u043B\u0430\u0434\u0430\xBB \u043C\u044B \u043D\u0435 \u043F\u0440\u043E\u0434\u0430\u0451\u043C."), /*#__PURE__*/React.createElement("h3", null, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0446\u0435\u043D\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043C\u0435\u0440\u0430"), /*#__PURE__*/React.createElement("p", null, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0438\u0437 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u043F\u0440\u043E\u0451\u043C\u0430, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0438 \u0441\u0442\u0435\u043A\u043B\u043E\u043F\u0430\u043A\u0435\u0442\u0430, \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B, \u0446\u0432\u0435\u0442\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u043C\u043E\u043D\u0442\u0430\u0436\u0430: \u044D\u0442\u0430\u0436, \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043F\u0440\u043E\u0451\u043C\u0430, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u0435\u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u0438 \u0432\u044B\u043D\u043E\u0441\u0430 \u043C\u0443\u0441\u043E\u0440\u0430. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u044B \u043D\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0435\u043C \u043F\u0440\u0430\u0439\u0441 \u0438 \u043D\u0435 \u0441\u0442\u0430\u0432\u0438\u043C \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440: \u0446\u0438\u0444\u0440\u0430, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0430\u044F \u0434\u043E \u0432\u044B\u0435\u0437\u0434\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u0430, \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C \u0431\u044B. \u0417\u0430\u043C\u0435\u0440 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439, \u043F\u043E\u0441\u043B\u0435 \u043D\u0435\u0433\u043E \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0441\u043C\u0435\u0442\u0443 \u0441 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0446\u0435\u043D\u043E\u0439."), /*#__PURE__*/React.createElement("h3", null, "\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F"), /*#__PURE__*/React.createElement("p", null, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u041B\u0438\u043F\u0435\u0446\u043A\u0435 \u0438 \u041B\u0438\u043F\u0435\u0446\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438: \u0421\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0439, \u041E\u043A\u0442\u044F\u0431\u0440\u044C\u0441\u043A\u0438\u0439, \u041F\u0440\u0430\u0432\u043E\u0431\u0435\u0440\u0435\u0436\u043D\u044B\u0439 \u0438 \u041B\u0435\u0432\u043E\u0431\u0435\u0440\u0435\u0436\u043D\u044B\u0439 \u0440\u0430\u0439\u043E\u043D\u044B, \u0421\u043E\u043A\u043E\u043B, \u0422\u0440\u0430\u043A\u0442\u043E\u0440\u043D\u044B\u0439, \u041E\u043F\u044B\u0442\u043D\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0413\u0440\u044F\u0437\u0438, \u0415\u043B\u0435\u0446, \u041B\u0435\u0431\u0435\u0434\u044F\u043D\u044C, \u0417\u0430\u0434\u043E\u043D\u0441\u043A, \u0423\u0441\u043C\u0430\u043D\u044C, \u0414\u0430\u043D\u043A\u043E\u0432 \u0438 \u0427\u0430\u043F\u043B\u044B\u0433\u0438\u043D. \u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u0430\u043C\u0435\u0440 \u043C\u043E\u0436\u043D\u043E \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0438\u043B\u0438 \u0447\u0435\u0440\u0435\u0437 \u0444\u043E\u0440\u043C\u0443 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435.")));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MeasureScreen.jsx
try { (() => {
function MeasureScreen({
  mobile
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Главная",
      href: "#"
    }, {
      label: "Запись на замер"
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: mobile ? "1fr" : "1fr 420px",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0437\u0430\u043C\u0435\u0440"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--type-lead-size)",
      color: "var(--text-secondary)",
      maxWidth: "56ch"
    }
  }, "\u041C\u0430\u0441\u0442\u0435\u0440 \u043F\u0440\u0438\u0435\u0434\u0435\u0442 \u0432 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u0441\u043D\u0438\u043C\u0435\u0442 \u0440\u0430\u0437\u043C\u0435\u0440\u044B, \u043F\u043E\u043A\u0430\u0436\u0435\u0442 \u043E\u0431\u0440\u0430\u0437\u0446\u044B \u0438 \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0442\u043E\u0447\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C. \u0417\u0430\u043C\u0435\u0440 \u043D\u0438 \u043A \u0447\u0435\u043C\u0443 \u043D\u0435 \u043E\u0431\u044F\u0437\u044B\u0432\u0430\u0435\u0442."), /*#__PURE__*/React.createElement(StepList, {
    style: {
      marginTop: "var(--space-8)"
    },
    columns: mobile ? 1 : 2,
    steps: [{
      title: "Согласуем время",
      text: "Перезвоним в течение 15 минут в рабочее время."
    }, {
      title: "Замер на объекте",
      text: "30–40 минут: размеры, состояние проёмов, выбор профиля."
    }, {
      title: "Смета",
      text: "Точная цена и срок изготовления сразу после замера."
    }, {
      title: "Договор",
      text: "Цена фиксируется и не меняется в процессе работ."
    }]
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "subtle",
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-md)",
      marginBottom: 6
    }
  }, "\u0427\u0442\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043A \u0432\u0438\u0437\u0438\u0442\u0443 \u043C\u0430\u0441\u0442\u0435\u0440\u0430"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      color: "var(--text-secondary)",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u0414\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u0432\u0441\u0435\u043C \u043F\u0440\u043E\u0451\u043C\u0430\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u0442\u044C."), /*#__PURE__*/React.createElement("li", null, "\u041F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u043A\u0430\u043A \u0431\u0443\u0434\u0435\u0442\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435\u043C: \u0436\u0438\u043B\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430, \u043A\u043B\u0430\u0434\u043E\u0432\u0430\u044F, \u0441\u0435\u0437\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0440\u0440\u0430\u0441\u0430."), /*#__PURE__*/React.createElement("li", null, "\u041F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u043F\u043E \u0446\u0432\u0435\u0442\u0443 \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0443 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u043D\u0438\u044F, \u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0435\u0441\u0442\u044C.")))), /*#__PURE__*/React.createElement(MeasureForm, null))));
}
Object.assign(window, {
  MeasureScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MeasureScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceLanding.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceLanding({
  go,
  mobile
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Главная",
      href: "#"
    }, {
      label: "Услуги",
      href: "#"
    }, {
      label: "Остекление балконов и лоджий"
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: mobile ? "var(--space-6) 0 var(--space-8)" : "var(--space-10) 0 var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: mobile ? "1fr" : "1fr 380px",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "\u041E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u0431\u0430\u043B\u043A\u043E\u043D\u043E\u0432 \u0438 \u043B\u043E\u0434\u0436\u0438\u0439 \u0432 \u041B\u0438\u043F\u0435\u0446\u043A\u0435"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--type-lead-size)",
      color: "var(--text-secondary)",
      maxWidth: "58ch"
    }
  }, "\u0425\u043E\u043B\u043E\u0434\u043D\u043E\u0435 \u0438 \u0442\u0451\u043F\u043B\u043E\u0435 \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435, \u0432\u044B\u043D\u043E\u0441 \u043F\u043E \u043F\u043E\u0434\u043E\u043A\u043E\u043D\u043D\u0438\u043A\u0443, \u043E\u0442\u0434\u0435\u043B\u043A\u0430 \u0438 \u0443\u0442\u0435\u043F\u043B\u0435\u043D\u0438\u0435. \u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043F\u043E \u0432\u0430\u0448\u0438\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C, \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0441\u0432\u043E\u0438\u043C\u0438 \u0431\u0440\u0438\u0433\u0430\u0434\u0430\u043C\u0438."), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      listStyle: "none",
      padding: 0,
      margin: "var(--space-5) 0 var(--space-6)"
    }
  }, ["Холодное остекление", "Тёплое остекление", "Вынос", "П-образные лоджии", "Отделка", "Крыша на последнем этаже"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement(Tag, {
    href: "#"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: mobile ? "1fr" : "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "\u0411\u0430\u043B\u043A\u043E\u043D \u0434\u043E \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u044F",
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "\u0411\u0430\u043B\u043A\u043E\u043D \u043F\u043E\u0441\u043B\u0435",
    ratio: "4 / 3"
  }))), /*#__PURE__*/React.createElement(MeasureForm, {
    compact: true,
    title: "\u0417\u0430\u043C\u0435\u0440 \u043D\u0430 \u0431\u0430\u043B\u043A\u043E\u043D\u0435",
    note: "\u041C\u0430\u0441\u0442\u0435\u0440 \u043F\u0440\u0438\u0435\u0434\u0435\u0442, \u0441\u043D\u0438\u043C\u0435\u0442 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u043D\u0430\u0437\u043E\u0432\u0451\u0442 \u0442\u043E\u0447\u043D\u0443\u044E \u0446\u0435\u043D\u0443. \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E."
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 2,
    title: "\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u044F",
    lead: "\u0412\u044B\u0431\u043E\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0432\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0431\u0430\u043B\u043A\u043E\u043D\u043E\u043C: \u0441\u0443\u0448\u0438\u0442\u044C \u0431\u0435\u043B\u044C\u0451, \u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432\u0435\u0449\u0438 \u0438\u043B\u0438 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043D\u0430\u0442\u044B."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      gridTemplateColumns: mobile ? "1fr" : "repeat(3,1fr)",
      marginTop: "var(--space-8)"
    }
  }, [{
    icon: "snowflake",
    title: "Холодное",
    text: "Алюминиевые раздвижные створки. Защищает от осадков, пыли и ветра, зимой температура близка к уличной."
  }, {
    icon: "thermometer-sun",
    title: "Тёплое",
    text: "ПВХ-профиль с двухкамерным стеклопакетом, утепление парапета, пола и потолка. Балкон становится жилым."
  }, {
    icon: "move-horizontal",
    title: "С выносом",
    text: "Расширение по подоконнику до 30 см: больше площади и полноценный подоконник внутри."
  }].map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    tone: "plain",
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: "lg",
    color: "var(--red-500)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-md)",
      margin: "var(--space-3) 0 6px"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, c.text))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(PriceExplainer, {
    title: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0446\u0435\u043D\u0443 \u0431\u0430\u043B\u043A\u043E\u043D\u0430 \u0441\u0447\u0438\u0442\u0430\u044E\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043C\u0435\u0441\u0442\u0435",
    lead: "\u0411\u0430\u043B\u043A\u043E\u043D\u044B \u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F \u0441\u0438\u043B\u044C\u043D\u0435\u0435, \u0447\u0435\u043C \u043E\u043A\u043D\u0430 \u0432 \u043A\u043E\u043C\u043D\u0430\u0442\u0430\u0445: \u043F\u0430\u0440\u0430\u043F\u0435\u0442, \u0432\u044B\u043D\u043E\u0441, \u043A\u0440\u044B\u0448\u0430 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C \u044D\u0442\u0430\u0436\u0435, \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043F\u043B\u0438\u0442\u044B. \u0412\u0441\u0451 \u044D\u0442\u043E \u0432\u0438\u0434\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043D\u0435\u0442."
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 2,
    title: "\u0421\u043C\u0435\u0436\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438",
    lead: "\u0411\u0430\u043B\u043A\u043E\u043D \u0447\u0430\u0441\u0442\u043E \u0434\u0435\u043B\u0430\u044E\u0442 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u044D\u0442\u0438\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u043C\u0438."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fit,minmax(250px,1fr))",
      marginTop: "var(--space-8)"
    }
  }, SERVICES.filter(s => ["plastikovye-okna", "moskitnye-setki", "remont-okon", "alyuminievye-okna"].includes(s.href)).map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.href
  }, s, {
    href: "/" + s.href + "/",
    onClick: e => e.preventDefault(),
    style: {
      background: "var(--white)"
    }
  }))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 2,
    title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u0440\u043E \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u0431\u0430\u043B\u043A\u043E\u043D\u043E\u0432"
  }), /*#__PURE__*/React.createElement(Accordion, {
    style: {
      marginTop: "var(--space-6)"
    },
    items: [{
      q: "Можно ли остеклить балкон зимой?",
      a: "Да. Монтаж выполняется круглый год; при отрицательных температурах используются зимние монтажные материалы."
    }, {
      q: "Нужно ли согласование?",
      a: "Для обычного остекления в пределах существующего парапета согласование, как правило, не требуется. Изменение фасада и остекление на памятниках архитектуры обсуждаем отдельно."
    }, {
      q: "Сколько занимает монтаж?",
      a: "Стандартный балкон — один день. С выносом, крышей и отделкой — два-три дня."
    }, {
      q: "Выдержит ли парапет конструкцию?",
      a: "Мастер оценивает парапет на замере. При необходимости он усиливается или заменяется."
    }, {
      q: "Что делать с крышей на последнем этаже?",
      a: "Ставим независимую крышу по кронштейнам с шумоизоляцией и герметизацией примыкания."
    }, {
      q: "Есть ли гарантия?",
      a: "Гарантия на конструкции и монтаж фиксируется в договоре, регулировку в гарантийный период делаем бесплатно."
    }]
  })), /*#__PURE__*/React.createElement(SeoProse, {
    collapsible: true,
    title: "\u041E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u0431\u0430\u043B\u043A\u043E\u043D\u043E\u0432 \u0438 \u043B\u043E\u0434\u0436\u0438\u0439 \u0432 \u041B\u0438\u043F\u0435\u0446\u043A\u0435"
  }, /*#__PURE__*/React.createElement("p", null, "\u041E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u0431\u0430\u043B\u043A\u043E\u043D\u0430 \u0440\u0435\u0448\u0430\u0435\u0442 \u0441\u0440\u0430\u0437\u0443 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0434\u0430\u0447: \u0443\u0431\u0438\u0440\u0430\u0435\u0442 \u0448\u0443\u043C \u0438 \u043F\u044B\u043B\u044C \u0441 \u0443\u043B\u0438\u0446\u044B, \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0432\u0435\u0449\u0438 \u043E\u0442 \u043E\u0441\u0430\u0434\u043A\u043E\u0432 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u043F\u043B\u043E\u0449\u0430\u0434\u044C. \u0412 \u0434\u043E\u043C\u0430\u0445 \u041B\u0438\u043F\u0435\u0446\u043A\u0430 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0438 \u0443\u0437\u043A\u0438\u0435 \u0431\u0430\u043B\u043A\u043E\u043D\u044B \u0432 \u043F\u0430\u043D\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0440\u0438\u044F\u0445, \u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u043D\u044B\u0435 \u041F-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0435 \u043B\u043E\u0434\u0436\u0438\u0438 \u2014 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0451\u043C \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043C\u0435\u0440\u0430."), /*#__PURE__*/React.createElement("h3", null, "\u0425\u043E\u043B\u043E\u0434\u043D\u043E\u0435 \u0438\u043B\u0438 \u0442\u0451\u043F\u043B\u043E\u0435"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "\u0425\u043E\u043B\u043E\u0434\u043D\u043E\u0435 \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u2014 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u044B\u0435 \u0440\u0430\u0437\u0434\u0432\u0438\u0436\u043D\u044B\u0435 \u0441\u0442\u0432\u043E\u0440\u043A\u0438, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043D\u0430 \u043F\u0430\u0440\u0430\u043F\u0435\u0442, \u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F."), /*#__PURE__*/React.createElement("li", null, "\u0422\u0451\u043F\u043B\u043E\u0435 \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u2014 \u041F\u0412\u0425-\u043F\u0440\u043E\u0444\u0438\u043B\u044C \u0441\u043E \u0441\u0442\u0435\u043A\u043B\u043E\u043F\u0430\u043A\u0435\u0442\u043E\u043C, \u0443\u0442\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043F\u0435\u0442\u0430, \u043F\u043E\u043B\u0430 \u0438 \u043F\u043E\u0442\u043E\u043B\u043A\u0430; \u0431\u0430\u043B\u043A\u043E\u043D \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C \u043A \u043A\u043E\u043C\u043D\u0430\u0442\u0435 \u043F\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C.")), /*#__PURE__*/React.createElement("h3", null, "\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement("p", null, "\u0414\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0441\u0442\u0430\u0440\u043E\u0433\u043E \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u044F, \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0443\u0441\u0438\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0437\u0430\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u0430\u043F\u0435\u0442\u0430, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439, \u043C\u043E\u043D\u0442\u0430\u0436 \u043A\u043E\u0437\u044B\u0440\u044C\u043A\u0430 \u0438\u043B\u0438 \u043A\u0440\u044B\u0448\u0438, \u043D\u0430\u0440\u0443\u0436\u043D\u0430\u044F \u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0442\u0434\u0435\u043B\u043A\u0430, \u043F\u043E\u0434\u043E\u043A\u043E\u043D\u043D\u0438\u043A\u0438 \u0438 \u043E\u0442\u043B\u0438\u0432\u044B, \u0432\u044B\u043D\u043E\u0441 \u043C\u0443\u0441\u043E\u0440\u0430. \u041E\u0431\u044A\u0451\u043C \u0440\u0430\u0431\u043E\u0442 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 \u0441\u043C\u0435\u0442\u0435 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043C\u0435\u0440\u0430."), /*#__PURE__*/React.createElement("h3", null, "\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u0437\u0430\u043C\u0435\u0440"), /*#__PURE__*/React.createElement("p", null, "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u043C\u0430\u0441\u0442\u0435\u0440 \u043F\u0440\u0438\u0435\u0434\u0435\u0442 \u0432 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u043F\u043E\u043A\u0430\u0436\u0435\u0442 \u043E\u0431\u0440\u0430\u0437\u0446\u044B \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0438 \u043D\u0430\u0437\u043E\u0432\u0451\u0442 \u0442\u043E\u0447\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C. \u0417\u0430\u043C\u0435\u0440 \u043F\u043E \u041B\u0438\u043F\u0435\u0446\u043A\u0443 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439, \u043F\u043E \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u0435\u043C \u043F\u0440\u0438 \u0437\u0430\u044F\u0432\u043A\u0435. \u0421\u0430\u043B\u043E\u043D: \u041B\u0438\u043F\u0435\u0446\u043A, \u0443\u043B\u0438\u0446\u0430 \u0412\u043E\u0434\u043E\u043F\u044C\u044F\u043D\u043E\u0432\u0430, 17, \u0422\u0412\u0426, 1 \u044D\u0442\u0430\u0436.")));
}
Object.assign(window, {
  ServiceLanding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceLanding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.DesignSystem_52c6a7;
const {
  SiteHeader,
  SiteFooter,
  Breadcrumbs,
  StickyCallBar,
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Icon,
  SectionHeading,
  ServiceCard,
  Accordion,
  PriceExplainer,
  SeoProse,
  GeoCoverage,
  StepList,
  ContactBlock,
  MeasureForm,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Logo
} = DS;
const BASE = "../..";
const SERVICES = [{
  icon: "square",
  title: "Окна ПВХ",
  href: "plastikovye-okna",
  description: "Профильные системы от завода, стеклопакеты под климат Липецка.",
  tags: ["Квартиры", "Дома"]
}, {
  icon: "blinds",
  title: "Остекление балконов и лоджий",
  href: "osteklenie-balkonov",
  description: "Холодное и тёплое остекление, вынос, отделка под ключ.",
  tags: ["Балконы", "Лоджии"]
}, {
  icon: "home",
  title: "Остекление домов и коттеджей",
  href: "okna-dlya-doma",
  description: "Большие проёмы, нестандартные формы, панорамное остекление.",
  tags: ["Дома", "Коттеджи"]
}, {
  icon: "trees",
  title: "Террасы и беседки",
  href: "terrasy-i-besedki",
  description: "Раздвижные системы и мягкие окна для сезонных построек.",
  tags: ["Дачи", "Террасы"]
}, {
  icon: "building-2",
  title: "Алюминиевые системы",
  href: "alyuminievye-okna",
  description: "Холодный и тёплый алюминий для офисов и витрин.",
  tags: ["B2B", "Офисы"]
}, {
  icon: "door-open",
  title: "Двери и входные группы",
  href: "dveri",
  description: "ПВХ и алюминиевые двери, тамбуры, входные группы.",
  tags: ["Дома", "Коммерция"]
}, {
  icon: "bug",
  title: "Москитные сетки",
  href: "moskitnye-setki",
  description: "Рамочные, раздвижные и антикошка — по вашим размерам.",
  tags: ["Сетки"]
}, {
  icon: "wrench",
  title: "Ремонт и регулировка окон",
  href: "remont-okon",
  description: "Замена фурнитуры и уплотнителей, устранение продувания.",
  tags: ["Сервис"]
}];
const FAQ = [{
  q: "Почему на сайте нет цен и калькулятора?",
  a: "Стоимость конструкции зависит от размеров проёма, профиля, стеклопакета, фурнитуры и условий монтажа. Любая цифра до замера была бы приблизительной, поэтому мы называем цену только после выезда мастера — зато точную и фиксированную в договоре."
}, {
  q: "Замер действительно бесплатный?",
  a: "Да. Замер и консультация мастера бесплатны и не обязывают вас заключать договор."
}, {
  q: "Сколько ждать изготовление?",
  a: "Обычно 8–14 рабочих дней после подписания договора. Сроки по нестандартным конструкциям мастер называет на замере."
}, {
  q: "Работаете с частными домами и дачами?",
  a: "Да. Квартиры, частные дома и коттеджи, дачи, террасы и беседки, а также коммерческие и офисные объекты."
}, {
  q: "Выезжаете за пределы Липецка?",
  a: "Работаем по Липецку и Липецкой области. По городу выезд замерщика бесплатный, по области условия согласуем при заявке."
}, {
  q: "Можно приехать и посмотреть образцы?",
  a: "Да, салон находится в Липецке на улице Водопьянова, 17 — ТВЦ, 1 этаж. Там же можно обсудить проект с менеджером."
}, {
  q: "Кто устанавливает конструкции?",
  a: "Наши монтажные бригады. Компания торгово-монтажная: мы и продаём, и ставим, поэтому за результат отвечает один исполнитель."
}];
const Container = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--space-6)",
    ...style
  }
}, children);
const Section = ({
  children,
  tone,
  style,
  ...rest
}) => /*#__PURE__*/React.createElement("section", _extends({
  style: {
    padding: "var(--space-20) 0",
    background: tone === "subtle" ? "var(--surface-subtle)" : "transparent",
    ...style
  }
}, rest), /*#__PURE__*/React.createElement(Container, null, children));

/* Placeholder for real photography — the brand has supplied none. */
const PhotoSlot = ({
  label = "Фото объекта",
  ratio = "4 / 3",
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: ratio,
    background: "var(--gray-100)",
    border: "1px dashed var(--border-default)",
    borderRadius: "var(--radius-image)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    color: "var(--gray-500)",
    textAlign: "center",
    padding: 16,
    ...style
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "image",
  size: "lg"
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: "var(--text-xs)"
  }
}, label, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--gray-400)"
  }
}, "\u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0444\u043E\u0442\u043E")));
Object.assign(window, {
  DS,
  SiteHeader,
  SiteFooter,
  Breadcrumbs,
  StickyCallBar,
  Button,
  IconButton,
  Badge,
  Tag,
  Card,
  Icon,
  SectionHeading,
  ServiceCard,
  Accordion,
  PriceExplainer,
  SeoProse,
  GeoCoverage,
  StepList,
  ContactBlock,
  MeasureForm,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Logo,
  SERVICES,
  FAQ,
  Container,
  Section,
  PhotoSlot,
  BASE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ContactBlock = __ds_scope.ContactBlock;

__ds_ns.GeoCoverage = __ds_scope.GeoCoverage;

__ds_ns.PriceExplainer = __ds_scope.PriceExplainer;

__ds_ns.SeoProse = __ds_scope.SeoProse;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.MeasureForm = __ds_scope.MeasureForm;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.StickyCallBar = __ds_scope.StickyCallBar;

})();
