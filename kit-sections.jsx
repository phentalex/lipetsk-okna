const DSC = (n) => function DSWrap(props) { return React.createElement(window.DesignSystem_52c6a7[n], props); };
const Button = DSC("Button"), Badge = DSC("Badge"), Tag = DSC("Tag"), Card = DSC("Card"), Icon = DSC("Icon"), SectionHeading = DSC("SectionHeading"), Input = DSC("Input"), Textarea = DSC("Textarea"), Select = DSC("Select"), Checkbox = DSC("Checkbox"), ServiceCard = DSC("ServiceCard"), Accordion = DSC("Accordion"), Breadcrumbs = DSC("Breadcrumbs");

function Sec({ id, num, title, note, children }) {
  return (
    <section id={id} className="sec">
      <div className="wrap">
        <div className="sec-head">
          <div className="caps">{num}</div>
          <div>
            <h2 style={{ margin: 0 }}>{title}</h2>
            {note ? <p style={{ margin: "var(--space-3) 0 0", color: "var(--text-secondary)", maxWidth: "62ch" }}>{note}</p> : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function Row({ label, spec, children }) {
  return (
    <div className="row">
      <div>
        <div className="caps" style={{ marginBottom: 6 }}>{label}</div>
        {spec ? <div className="spec">{spec}</div> : null}
      </div>
      <div>{children}</div>
    </div>
  );
}

function Swatch({ token, hex, note }) {
  return (
    <div className="swatch">
      <div className="chip" style={{ background: hex }}></div>
      <div className="meta">
        <span className="mono">{token}</span>
        <span className="mono" style={{ color: "var(--gray-500)" }}>{hex}</span>
        {note ? <span className="spec" style={{ marginTop: 2 }}>{note}</span> : null}
      </div>
    </div>
  );
}

const FORCED = {
  primary: {
    hover: { background: "var(--accent-hover)" },
    active: { background: "var(--accent-active)", transform: "translateY(1px)" },
    focus: { outline: "2px solid var(--border-focus)", outlineOffset: "2px" },
  },
  secondary: {
    hover: { background: "var(--gray-50)", borderColor: "var(--border-strong)" },
    active: { background: "var(--gray-100)", borderColor: "var(--border-strong)", transform: "translateY(1px)" },
    focus: { outline: "2px solid var(--border-focus)", outlineOffset: "2px" },
  },
  ghost: {
    hover: { background: "var(--accent-soft)" },
    active: { background: "var(--red-100)", color: "var(--accent-active)", transform: "translateY(1px)" },
    focus: { outline: "2px solid var(--border-focus)", outlineOffset: "2px" },
  },
};

function StateButton({ variant, state, children }) {
  const style = state === "normal" ? null : FORCED[variant][state];
  return (
    <Button variant={variant} disabled={state === "disabled"} style={style || undefined} onMouseEnter={undefined}>
      {children}
    </Button>
  );
}

function TypographySection() {
  return (
    <Sec id="type" num="01 / Типографика" title="Типографическая шкала" note="Заголовки — Geologica 600, трекинг −0.02em, интерлиньяж 1.15. Текст — Onest, база 17px, интерлиньяж 1.6. Больше двух гарнитур не используется.">
      <Row label="H1" spec="Geologica 600 · clamp(30–52px) · 1.15 · −0.02em">
        <h1 style={{ margin: 0 }}>Окна ПВХ в Липецке от завода-производителя</h1>
      </Row>
      <Row label="H2" spec="Geologica 600 · clamp(25–34px) · 1.15">
        <h2 style={{ margin: 0 }}>Что мы остекляем</h2>
      </Row>
      <Row label="H3" spec="Geologica 600 · clamp(20–24px) · 1.15">
        <h3 style={{ margin: 0 }}>Остекление балконов и лоджий</h3>
      </Row>
      <Row label="H4" spec="Geologica 600 · 19px · 1.35">
        <h4 style={{ margin: 0, fontSize: "var(--text-md)", lineHeight: "var(--leading-snug)" }}>Сколько времени занимает изготовление</h4>
      </Row>
      <Row label="Лид" spec="Onest 400 · 19px · 1.6 · до 62ch">
        <p style={{ margin: 0, fontSize: "var(--type-lead-size)", color: "var(--text-secondary)", maxWidth: "62ch" }}>Изготавливаем окна под заказ по индивидуальным размерам и ставим их своими бригадами. Замер бесплатный и ни к чему не обязывает.</p>
      </Row>
      <Row label="Body" spec="Onest 400 · 17px · 1.6 · мера 68ch">
        <p style={{ margin: 0, maxWidth: "var(--measure)" }}>Стоимость зависит от размеров проёма, профиля, стеклопакета и условий монтажа — точную цифру мастер называет после бесплатного замера, и она фиксируется в договоре. Монтаж стандартного балкона занимает один день, изготовление — 8–14 рабочих дней после подписания договора.</p>
      </Row>
      <Row label="Body / medium" spec="Onest 500 · 17px">
        <p style={{ margin: 0, fontWeight: 500 }}>Работаем в Липецке и Липецкой области. По городу выезд замерщика бесплатный.</p>
      </Row>
      <Row label="Caption" spec="Onest 400 · 14px · вторичный цвет">
        <p style={{ margin: 0, fontSize: "var(--type-caption-size)", color: "var(--text-secondary)" }}>Цена фиксируется в договоре и не меняется после монтажа.</p>
      </Row>
      <Row label="Микролейбл" spec="Onest 600 · 13px · трекинг 0.06em · единственный случай капса">
        <div style={{ display: "flex", gap: "var(--space-8)" }}>
          <span className="caps">Салон</span><span className="caps">Телефон</span><span className="caps">Часы работы</span>
        </div>
      </Row>
      <Row label="Ссылка" spec="--text-link #AA171B · подчёркивание --red-300">
        <p style={{ margin: 0 }}>Подробнее об <a href="#">остеклении домов и веранд</a> — с ценообразованием и сроками.</p>
      </Row>
    </Sec>
  );
}

const REDS = [["--red-50", "#FEF6F6"], ["--red-100", "#FCE9E9"], ["--red-200", "#F9CECF"], ["--red-300", "#F4A5A7"], ["--red-400", "#ED6064"], ["--red-500", "#E31E24", "Бренд. CTA, акценты"], ["--red-600", "#C81A20", "Hover"], ["--red-700", "#AA171B", "Press, мелкий текст"], ["--red-800", "#881216"], ["--red-900", "#660E10"]];
const GRAYS = [["--white", "#FFFFFF"], ["--gray-25", "#FBFCFD"], ["--gray-50", "#F6F8FA", "Фон секции, футер"], ["--gray-100", "#EFF2F5"], ["--gray-200", "#E3E8ED", "Границы"], ["--gray-300", "#CDD5DC"], ["--gray-400", "#9AA5AF"], ["--gray-500", "#6E7883"], ["--gray-600", "#5F6A75", "Вторичный текст"], ["--gray-700", "#3C444C"], ["--gray-800", "#262C32"], ["--ink", "#1A1A1A", "Основной текст"]];

function ColorSection() {
  return (
    <Sec id="color" num="02 / Цвет" title="Палитра" note="Белый, холодный и точный — как ПВХ-профиль. Красный показывает, куда нажать. Крупных красных заливок нет, тёмной темы нет.">
      <Row label="Красный" spec="Шкала 50→900">
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(5,1fr)" }}>
          {REDS.map(([t, h, n]) => <Swatch key={t} token={t} hex={h} note={n} />)}
        </div>
      </Row>
      <Row label="Нейтрали" spec="Холодные, без бежевого">
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(6,1fr)" }}>
          {GRAYS.map(([t, h, n]) => <Swatch key={t} token={t} hex={h} note={n} />)}
        </div>
      </Row>
      <Row label="Семантика" spec="Успех, предупреждение, ошибка">
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(6,1fr)" }}>
          <Swatch token="--success-600" hex="#177245" />
          <Swatch token="--success-50" hex="#EAF6EF" />
          <Swatch token="--warning-600" hex="#9A6300" />
          <Swatch token="--warning-50" hex="#FDF4E3" />
          <Swatch token="--danger-600" hex="#AA171B" />
          <Swatch token="--danger-50" hex="#FCE9E9" />
        </div>
      </Row>
      <Row label="Контраст" spec="Правила использования">
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          <div className="panel" style={{ background: "var(--red-500)", borderColor: "var(--red-500)" }}>
            <p style={{ margin: 0, color: "#fff", fontSize: "17px", fontWeight: 600 }}>Белым по #E31E24 — от 16px и веса 600</p>
            <p style={{ margin: "8px 0 0", color: "#fff", fontSize: "var(--text-xs)", opacity: .9 }}>Чёрный на красном не используется никогда.</p>
          </div>
          <div className="panel" style={{ background: "var(--white)" }}>
            <p style={{ margin: 0, color: "var(--red-700)", fontSize: "var(--text-sm)", fontWeight: 600 }}>Мелкий красный текст — только --red-700</p>
            <p style={{ margin: "8px 0 0", color: "var(--red-500)", fontSize: "var(--text-sm)", textDecoration: "line-through" }}>--red-500 в мелком тексте — нет</p>
          </div>
          <div className="panel">
            <p style={{ margin: 0, color: "var(--ink)" }}>Основной текст #1A1A1A</p>
            <p style={{ margin: "8px 0 0", color: "var(--text-secondary)" }}>Вторичный #5F6A75</p>
            <p style={{ margin: "8px 0 0", color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>Приглушённый #6E7883</p>
          </div>
        </div>
      </Row>
      <Row label="Поверхности" spec="Не более двух фоновых цветов на страницу">
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          {[["--surface-page", "#FFFFFF"], ["--surface-subtle", "#F6F8FA"], ["--surface-tint", "#FEF6F6"], ["--surface-inset", "#EFF2F5"]].map(([t, h]) => (
            <div key={t} className="swatch"><div className="chip" style={{ background: h }}></div><div className="meta"><span className="mono">{t}</span><span className="mono" style={{ color: "var(--gray-500)" }}>{h}</span></div></div>
          ))}
        </div>
      </Row>
    </Sec>
  );
}

function ButtonSection() {
  const rows = [
    ["Primary", "primary", "Записаться на замер"],
    ["Secondary", "secondary", "Позвонить"],
    ["Tertiary", "ghost", "Все услуги"],
  ];
  return (
    <Sec id="buttons" num="03 / Кнопки" title="Состояния кнопок" note="Hover — на шаг темнее, press — ещё на шаг плюс сдвиг на 1px вниз, без сжатия. Прозрачность как способ показать hover не используется. Красная тень — только под primary.">
      <div className="panel">
        <div className="states" style={{ marginBottom: "var(--space-5)" }}>
          <div></div>
          {["Normal", "Hover", "Active", "Focus", "Disabled"].map((s) => <div key={s} className="hdr">{s}</div>)}
        </div>
        {rows.map(([label, variant, text]) => (
          <div key={variant} className="states" style={{ padding: "var(--space-4) 0", borderTop: "1px solid var(--gray-200)" }}>
            <div><div style={{ fontWeight: 600 }}>{label}</div><div className="spec">{variant === "ghost" ? "variant=\"ghost\"" : `variant="${variant}"`}</div></div>
            {["normal", "hover", "active", "focus", "disabled"].map((st) => (
              <div key={st}><StateButton variant={variant} state={st}>{text}</StateButton></div>
            ))}
          </div>
        ))}
      </div>
      <div className="row" style={{ borderTop: "1px solid var(--gray-100)", marginTop: "var(--space-8)" }}>
        <div><div className="caps" style={{ marginBottom: 6 }}>Размеры</div><div className="spec">sm 40px · md 48px · lg 56px</div></div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", flexWrap: "wrap" }}>
          <Button size="sm">Записаться</Button>
          <Button size="md" iconLeft="ruler">Записаться на замер</Button>
          <Button size="lg" iconRight="chevron-right">Записаться на замер</Button>
        </div>
      </div>
      <div className="row">
        <div><div className="caps" style={{ marginBottom: 6 }}>На телефоне</div><div className="spec">Главный CTA — во всю ширину, тач-зона ≥ 48px</div></div>
        <div style={{ maxWidth: 360 }}><Button block size="lg" iconLeft="phone">Позвонить</Button></div>
      </div>
    </Sec>
  );
}

function GridSection() {
  const steps = [["--space-1", 4], ["--space-2", 8], ["--space-3", 12], ["--space-4", 16], ["--space-5", 20], ["--space-6", 24], ["--space-8", 32], ["--space-10", 40], ["--space-12", 48], ["--space-16", 64], ["--space-20", 80], ["--space-24", 96], ["--space-32", 128]];
  return (
    <Sec id="grid" num="08 / Сетка" title="Сетка и отступы" note="Контейнер 1200px, 12 колонок. Гуттер 16px на мобильном и 32px на десктопе. Вертикальный ритм секции: 48px на мобильном, 96px на десктопе.">
      <Row label="12 колонок" spec="Контейнер 1200px · гуттер 32px">
        <div className="colgrid">{Array.from({ length: 12 }, (_, i) => <span key={i}></span>)}</div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }} className="spec"><span>1200px</span><span>12 × 76px + 11 × 32px</span></div>
      </Row>
      <Row label="Мобильная сетка" spec="4 колонки · гуттер 16px · поля 16px">
        <div style={{ width: 375, border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "16px", background: "var(--white)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {Array.from({ length: 4 }, (_, i) => <span key={i} style={{ height: 56, background: "var(--red-50)", border: "1px solid var(--red-100)", borderRadius: "var(--radius-xs)" }}></span>)}
          </div>
        </div>
      </Row>
      <Row label="Шкала отступов" spec="4 → 128px">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {steps.map(([t, v]) => (
            <div key={t} style={{ display: "grid", gridTemplateColumns: "120px 56px 1fr", alignItems: "center", gap: 12 }}>
              <span className="mono">{t}</span><span className="spec">{v}px</span>
              <span style={{ height: 12, width: v, background: "var(--red-200)", borderRadius: 2 }}></span>
            </div>
          ))}
        </div>
      </Row>
      <Row label="Ритм секции" spec="eyebrow → 12 → заголовок → 16 → лид → 24 → сетка">
        <div style={{ border: "1px dashed var(--red-200)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
          <Badge>Услуги</Badge>
          <div style={{ height: 12, background: "var(--red-50)", margin: "0 0 0", borderLeft: "2px solid var(--red-300)" }}></div>
          <h3 style={{ margin: 0 }}>Что мы остекляем</h3>
          <div style={{ height: 16, background: "var(--red-50)", borderLeft: "2px solid var(--red-300)" }}></div>
          <p style={{ margin: 0, color: "var(--text-secondary)" }}>Квартиры, частные дома, дачи, террасы и офисы.</p>
          <div style={{ height: 24, background: "var(--red-50)", borderLeft: "2px solid var(--red-300)" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)" }}>
            {[0, 1, 2].map((i) => <div key={i} style={{ height: 72, border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-card)" }}></div>)}
          </div>
        </div>
      </Row>
      <Row label="Радиусы" spec="4 / 6 / 10 / 14 / 20 / pill">
        <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
          {[["xs", 4], ["sm", 6], ["md", 10, "контролы"], ["lg", 14, "карточки, фото"], ["xl", 20], ["pill", 999, "чипы, бейджи"]].map(([n, v, note]) => (
            <div key={n} style={{ textAlign: "center" }}>
              <div style={{ width: 88, height: 64, background: "var(--gray-50)", border: "1px solid var(--border-subtle)", borderRadius: v }}></div>
              <div className="mono" style={{ marginTop: 6 }}>{n}</div>
              {note ? <div className="spec">{note}</div> : null}
            </div>
          ))}
        </div>
      </Row>
      <Row label="Тени" spec="Холодные и низкие. Тень — признак интерактивности">
        <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
          {["xs", "sm", "md", "lg", "red"].map((n) => (
            <div key={n} style={{ textAlign: "center" }}>
              <div style={{ width: 120, height: 64, background: "var(--white)", border: n === "red" ? "none" : "1px solid var(--border-subtle)", borderRadius: "var(--radius-card)", boxShadow: `var(--shadow-${n})` }}></div>
              <div className="mono" style={{ marginTop: 10 }}>--shadow-{n}</div>
            </div>
          ))}
        </div>
      </Row>
      <Row label="Тач-зоны" spec="Минимум 48px, поля 52px">
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)" }}>
          <div style={{ width: 48, height: 48, border: "1px dashed var(--red-300)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="phone" size="md" color="var(--red-500)" /></div>
          <span className="spec">48 × 48 — минимум для любой кликабельной цели</span>
        </div>
      </Row>
    </Sec>
  );
}

Object.assign(window, { Sec, Row, Swatch, StateButton, TypographySection, ColorSection, ButtonSection, GridSection, DSC });
