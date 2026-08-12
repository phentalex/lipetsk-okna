const H = (n) => function DSWrap(props) { return React.createElement(window.DesignSystem_52c6a7[n], props); };
const Button = H("Button"), Badge = H("Badge"), Tag = H("Tag"), Card = H("Card"), Icon = H("Icon"), Logo = H("Logo"), IconButton = H("IconButton"), ServiceCard = H("ServiceCard"), Accordion = H("Accordion"), SiteHeader = H("SiteHeader"), SiteFooter = H("SiteFooter"), StickyCallBar = H("StickyCallBar"), StepList = H("StepList"), PriceExplainer = H("PriceExplainer"), SeoProse = H("SeoProse"), GeoCoverage = H("GeoCoverage"), ContactBlock = H("ContactBlock"), MeasureForm = H("MeasureForm");

const NAV = [
  { label: "Окна ПВХ", href: "#services" },
  { label: "Балконы", href: "#directions" },
  { label: "Дома и коттеджи", href: "#steps" },
  { label: "Профили", href: "#profiles" },
  { label: "Работы", href: "#portfolio" },
  { label: "Контакты", href: "#salons" },
];

function Section({ id, children, tone, tight, style }) {
  return (
    <section id={id} className={"section" + (tight ? " section--tight" : "")} style={{ background: tone === "subtle" ? "var(--surface-subtle)" : undefined, ...style }}>
      <div className="container">{children}</div>
    </section>
  );
}

function Head({ eyebrow, title, lead, action }) {
  return (
    <header style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--space-8)", marginBottom: "var(--space-10)", flexWrap: "wrap" }}>
      <div>
        {eyebrow ? <div className="eyebrow" style={{ marginBottom: "var(--space-3)" }}>{eyebrow}</div> : null}
        <h2 style={{ margin: 0 }}>{title}</h2>
        {lead ? <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--type-lead-size)", color: "var(--text-secondary)", maxWidth: "62ch" }}>{lead}</p> : null}
      </div>
      {action ? <div className="only-desktop">{action}</div> : null}
    </header>
  );
}

function PageHeader() {
  return (
    <>
      <div className="only-desktop"><SiteHeader nav={NAV} /></div>
      <div className="only-mobile"><SiteHeader nav={NAV} mobile /></div>
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-5)" }}>
              <Badge>Замер бесплатный</Badge>
              <Badge tone="neutral">Свой монтаж</Badge>
              <Badge tone="neutral">Липецк и область</Badge>
            </div>
            <h1 style={{ margin: 0, maxWidth: "15ch" }}>Пластиковые окна в Липецке от завода-производителя</h1>
            <p style={{ margin: "var(--space-5) 0 0", fontSize: "var(--type-lead-size)", color: "var(--text-secondary)", maxWidth: "54ch" }}>
              Изготавливаем окна и светопрозрачные конструкции под заказ по индивидуальным размерам и ставим их своими бригадами.
            </p>
            <div style={{ marginTop: "var(--space-8)", maxWidth: 420 }}>
              <div className="only-desktop"><Button size="lg" iconLeft="ruler" href="#measure">Записаться на бесплатный замер</Button></div>
              <div className="only-mobile"><Button size="lg" block iconLeft="ruler" href="#measure">Записаться на бесплатный замер</Button></div>
            </div>
            <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--text-sm)", color: "var(--text-secondary)", maxWidth: "48ch" }}>
              Замер ни к чему не обязывает. По городу выезд замерщика бесплатный, цена фиксируется в договоре.
            </p>
          </div>
          <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", borderRadius: "var(--radius-image)", overflow: "hidden", background: "var(--white)" }}>
            <image-slot id="home-hero" shape="rounded" radius="14" placeholder="Фото объекта в Липецке — холодный дневной свет"></image-slot>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  ["17 лет", "работаем в Липецке и области"],
  ["8–14 дней", "изготовление после договора"],
  ["1 день", "монтаж стандартного балкона"],
  ["5 лет", "гарантия по договору"],
];

function Stats() {
  return (
    <section style={{ background: "var(--surface-subtle)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="container" style={{ padding: "var(--space-10) var(--space-8)" }}>
        <div className="grid-4">
          {STATS.map(([n, t]) => (
            <div key={n}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>{n}</div>
              <div style={{ marginTop: 6, fontSize: "var(--text-sm)", color: "var(--text-secondary)", maxWidth: "26ch" }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const DIRECTIONS = [
  { id: "dir-flats", title: "Квартиры и балконы", text: "Окна ПВХ в панельных и кирпичных домах, тёплое и холодное остекление лоджий с выносом.", tag: "Замер по городу бесплатно" },
  { id: "dir-houses", title: "Частные дома и коттеджи", text: "Нестандартные проёмы, панорамные и раздвижные конструкции, входные группы.", tag: "Выезд по области" },
  { id: "dir-terrace", title: "Террасы и беседки", text: "Холодное раздвижное остекление, мягкие окна, сезонные работы на даче.", tag: "От 3 дней" },
  { id: "dir-commerce", title: "Коммерческие объекты", text: "Офисы, магазины и салоны: витражи, входные группы, рольставни.", tag: "Работаем по договору" },
];

function Directions() {
  return (
    <Section id="directions">
      <Head eyebrow="Направления" title="Что мы остекляем" lead="Четыре типа объектов, под которые считаем конструкции и подбираем профиль." />
      <div className="grid-4">
        {DIRECTIONS.map((d) => (
          <Card key={d.id} hoverable padding="0" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", background: "var(--gray-50)" }}>
              <image-slot id={d.id} shape="rect" placeholder="Фото объекта"></image-slot>
            </div>
            <div style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)", flex: 1 }}>
              <Badge tone="neutral">{d.tag}</Badge>
              <h3 style={{ margin: 0, fontSize: "var(--text-lg)" }}>{d.title}</h3>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{d.text}</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: "auto", paddingTop: "var(--space-4)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-accent)" }}>
                Подробнее <Icon name="chevron-right" size={16} />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const SERVICES = [
  { icon: "home", title: "Окна ПВХ", description: "Изготовление по индивидуальным размерам, монтаж своими бригадами.", tags: ["Квартиры", "Дома"] },
  { icon: "layers", title: "Алюминиевые системы", description: "Холодное остекление, витражи и раздвижные створки.", tags: ["Холодное"] },
  { icon: "blinds", title: "Остекление балконов и лоджий", description: "Тёплый и холодный контур, вынос по подоконнику или по полу.", tags: ["С выносом"] },
  { icon: "trees", title: "Остекление домов и веранд", description: "Нестандартные проёмы, панорамные конструкции, двери на террасу.", tags: ["Коттеджи"] },
  { icon: "maximize-2", title: "Раздвижные конструкции", description: "Слайдинг для террас и балконов: экономят место, легко открываются.", tags: ["Террасы"] },
  { icon: "door-open", title: "Двери и входные группы", description: "ПВХ и алюминий для дома, офиса и магазина.", tags: ["Офисы"] },
  { icon: "shield-check", title: "Рольставни и ставни", description: "Защита от солнца и взлома на окна, двери и витрины.", tags: ["Коммерция"] },
  { icon: "bug", title: "Москитные сетки", description: "Рамочные, раздвижные и на петлях — с установкой в день замера.", tags: ["Сезон"] },
  { icon: "wrench", title: "Ремонт и регулировка", description: "Замена фурнитуры, уплотнителей и стеклопакетов, устранение продувания.", tags: ["Выезд мастера"] },
];

function Services() {
  return (
    <Section id="services" tone="subtle">
      <Head eyebrow="Услуги" title="Что мы делаем" lead="Полный цикл: замер, изготовление на заводе, доставка и монтаж своими бригадами."
        action={<Button variant="secondary" iconRight="chevron-right" href="#measure">Записаться на замер</Button>} />
      <div className="grid-3">
        {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </Section>
  );
}

Object.assign(window, { H, NAV, Section, Head, PageHeader, Hero, Stats, Directions, Services, Button, Badge, Tag, Card, Icon, Logo, IconButton, ServiceCard, Accordion, SiteHeader, SiteFooter, StickyCallBar, StepList, PriceExplainer, SeoProse, GeoCoverage, ContactBlock, MeasureForm });
