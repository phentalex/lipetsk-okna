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




function FormSection() {
  return (
    <Sec id="forms" num="04 / Формы" title="Поля ввода" note="Поля высотой 52px, размер текста ровно 16px — иначе iOS зумит при фокусе. Фокус — красная граница и кольцо --red-200.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-8)" }}>
        <div><div className="caps" style={{ marginBottom: 10 }}>Normal</div><Input label="Ваше имя" placeholder="Как к вам обращаться" /></div>
        <div><div className="caps" style={{ marginBottom: 10 }}>Focus</div><Input label="Телефон" defaultValue="+7 (900) 000-00-00" style={{ borderColor: "var(--red-500)", boxShadow: "var(--ring-focus)" }} /></div>
        <div><div className="caps" style={{ marginBottom: 10 }}>Заполнено</div><Input label="Адрес объекта" defaultValue="Липецк, ул. Водопьянова, 17" /></div>
        <div><div className="caps" style={{ marginBottom: 10 }}>С подсказкой</div><Input label="Телефон" required hint="Позвоним в рабочее время, чтобы согласовать день замера" placeholder="+7 (___) ___-__-__" /></div>
        <div><div className="caps" style={{ marginBottom: 10 }}>Ошибка</div><Input label="Телефон" required defaultValue="+7 (900) 00" error="Введите номер полностью — 10 цифр после +7" /></div>
        <div><div className="caps" style={{ marginBottom: 10 }}>Disabled</div><Input label="Город" defaultValue="Липецк" disabled style={{ background: "var(--gray-100)", color: "var(--gray-400)", borderColor: "var(--border-subtle)" }} /></div>
        <div><div className="caps" style={{ marginBottom: 10 }}>Select</div><Select label="Что остекляем" options={["Квартира", "Частный дом", "Дача", "Балкон или лоджия", "Терраса или беседка", "Коммерческий объект"]} /></div>
        <div style={{ gridColumn: "span 2" }}><div className="caps" style={{ marginBottom: 10 }}>Textarea</div><Textarea label="Комментарий" rows={3} placeholder="Количество проёмов, этаж, удобное время для звонка" hint="Необязательно" /></div>
      </div>
      <div className="row" style={{ marginTop: "var(--space-8)" }}>
        <div><div className="caps" style={{ marginBottom: 6 }}>Согласие на ПДн</div><div className="spec">Тач-зона 44px, чекбокс 24px, текст 15px</div></div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", maxWidth: 560 }}>
          <Checkbox defaultChecked label={<span>Я согласен на обработку персональных данных и принимаю <a href="#">политику конфиденциальности</a>. Данные нужны только для звонка по заявке.</span>} />
          <Checkbox label={<span>Я согласен на обработку персональных данных и принимаю <a href="#">политику конфиденциальности</a>.</span>} />
          <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
            <Button iconLeft="ruler">Записаться на замер</Button>
            <span className="spec">Замер бесплатный и ни к чему не обязывает.</span>
          </div>
        </div>
      </div>
    </Sec>
  );
}

function CardSection() {
  return (
    <Sec id="cards" num="05 / Карточки" title="Карточки" note="Белый фон, граница 1px --gray-200, радиус 14px, отступ 24px. В покое тени нет: тень появляется при наведении как признак интерактивности.">
      <Row label="Карточка услуги" spec="ServiceCard · иконка 48px на --red-50 · hover: граница --red-200, подъём 2px">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)" }}>
          <ServiceCard icon="blinds" title="Остекление балконов и лоджий" description="Тёплое и холодное остекление с выносом. Монтаж стандартного балкона — один день." tags={["Тёплое", "Холодное", "С выносом"]} />
          <ServiceCard icon="home" title="Окна ПВХ для квартир" description="Изготовление по индивидуальным размерам, 8–14 рабочих дней после договора." tags={["ПВХ", "Стеклопакеты"]} />
          <ServiceCard icon="wrench" title="Ремонт и регулировка окон" description="Замена фурнитуры, уплотнителей и стеклопакетов, регулировка створок." tags={["Выезд мастера"]} />
        </div>
      </Row>
      <Row label="Карточка направления" spec="Фото 4:3, радиус 14px · заголовок h3 · бейдж поверх сетки">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)" }}>
          {[
            { id: "dir-flat", t: "Квартиры", d: "Окна и балконы в панельных и кирпичных домах Липецка.", b: "Замер бесплатно" },
            { id: "dir-house", t: "Частные дома и коттеджи", d: "Нестандартные проёмы, панорамное и раздвижное остекление.", b: "Выезд по области" },
            { id: "dir-terrace", t: "Террасы и беседки", d: "Холодное раздвижное остекление и мягкие окна для дачи.", b: "Сезонные сроки" },
          ].map((c) => (
            <Card key={c.id} hoverable padding="0" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", background: "var(--gray-50)" }}>
                <image-slot id={c.id} shape="rect" placeholder="Фото объекта в Липецке"></image-slot>
              </div>
              <div style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <Badge tone="neutral">{c.b}</Badge>
                <h3 style={{ margin: 0, fontSize: "var(--text-lg)" }}>{c.t}</h3>
                <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{c.d}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: "var(--space-2)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-accent)" }}>Смотреть работы <Icon name="chevron-right" size={16} /></span>
              </div>
            </Card>
          ))}
        </div>
        <p className="spec" style={{ marginTop: "var(--space-4)" }}>Фотографий объектов в материалах нет — слоты пустые. Холодный дневной свет, реальные объекты в Липецке, не сток.</p>
      </Row>
      <Row label="Тона карточки" spec="plain · tint · subtle · accent">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--space-6)" }}>
          {[["plain", "Обычная"], ["tint", "Блок доверия"], ["subtle", "Служебная"], ["accent", "Выделенная"]].map(([tone, label]) => (
            <Card key={tone} tone={tone}>
              <div className="mono" style={{ marginBottom: 6 }}>tone="{tone}"</div>
              <div style={{ fontWeight: 600 }}>{label}</div>
            </Card>
          ))}
        </div>
      </Row>
    </Sec>
  );
}

const FAQ = [
  { q: "Сколько времени занимает изготовление?", a: "8–14 рабочих дней после подписания договора. Монтаж стандартного балкона — один день." },
  { q: "Почему на сайте нет цен?", a: "Стоимость зависит от размеров проёма, профиля, стеклопакета и условий монтажа. Точную цифру мастер называет после бесплатного замера, и она фиксируется в договоре." },
  { q: "Замер платный?", a: "Нет. По Липецку выезд замерщика бесплатный, он ни к чему не обязывает. По области условия уточняем по телефону." },
  { q: "Что такое холодное и тёплое остекление?", a: "Холодное — алюминиевый профиль без утепления, защищает от ветра и осадков. Тёплое — ПВХ со стеклопакетом, держит температуру и позволяет пользоваться балконом зимой." },
];

function PatternSection() {
  return (
    <Sec id="patterns" num="06 / Навигация и контент" title="Аккордеон, крошки, теги" note="Аккордеон — реальные заголовки h3 и текст, чтобы разметка FAQPage совпадала с видимым содержимым.">
      <Row label="Аккордеон" spec="Строка 64px · открытый вопрос — --red-700 · plus / minus">
        <div style={{ maxWidth: 760 }}><Accordion items={FAQ} /></div>
      </Row>
      <Row label="Хлебные крошки" spec="14px · последний пункт — --gray-500, без ссылки">
        <Breadcrumbs items={[{ label: "Главная", href: "#" }, { label: "Услуги", href: "#" }, { label: "Остекление балконов", href: "#" }, { label: "Балкон с выносом" }]} />
      </Row>
      <Row label="Теги" spec="Pill · высота 40px · active: граница --red-500, фон --red-50">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
          <Tag active href="#">Все услуги</Tag>
          <Tag href="#">Окна ПВХ</Tag>
          <Tag href="#">Балконы и лоджии</Tag>
          <Tag href="#" style={{ background: "var(--gray-50)" }}>Раздвижные системы</Tag>
          <Tag href="#">Двери и входные группы</Tag>
          <Tag href="#">Рольставни</Tag>
          <Tag href="#">Москитные сетки</Tag>
          <Tag href="#">Ремонт окон</Tag>
        </div>
        <div className="spec" style={{ marginTop: 10 }}>Слева направо: active · normal · hover · normal. Теги ведут на посадочные — это основная перелинковка.</div>
      </Row>
      <Row label="Бейджи" spec="accent · solid · neutral · success">
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
          <Badge>Замер бесплатно</Badge>
          <Badge tone="solid">Свой монтаж</Badge>
          <Badge tone="neutral">8–14 дней</Badge>
          <Badge tone="success" icon="shield-check">Гарантия по договору</Badge>
        </div>
      </Row>
      <Row label="Иконки" spec="Lucide · обводка 2px · 18 / 22 / 28px · --red-500 в акценте, --gray-500 в служебной роли">
        <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
          {["ruler", "blinds", "home", "trees", "building-2", "door-open", "bug", "wrench", "phone", "map-pin", "clock", "shield-check", "truck", "file-text"].map((n) => (
            <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 72 }}>
              <span style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--red-50)", color: "var(--red-600)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name={n} size="md" /></span>
              <span className="mono" style={{ fontSize: 11 }}>{n}</span>
            </div>
          ))}
        </div>
      </Row>
    </Sec>
  );
}

const NAV = [["type", "Типографика"], ["color", "Цвет"], ["buttons", "Кнопки"], ["forms", "Формы"], ["cards", "Карточки"], ["patterns", "Навигация"], ["grid", "Сетка"]];

function App() {
  return (
    <>
      <header className="kit-bar">
        <div className="wrap">
          <img src={(window.__resources && window.__resources.logo) || "assets/logo-full.png"} alt="Липецкие окна" style={{ height: 34 }} />
          <div style={{ borderLeft: "1px solid var(--border-subtle)", paddingLeft: "var(--space-6)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-md)", letterSpacing: "-0.02em" }}>UI Kit</div>
          </div>
          <nav style={{ display: "flex", gap: "var(--space-5)", marginLeft: "auto", flexWrap: "wrap" }}>
            {NAV.map(([id, label]) => <a key={id} className="navlink" href={"#" + id}>{label}</a>)}
          </nav>
          <span className="caps">Светлая тема</span>
        </div>
      </header>
      <div className="wrap" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-4)" }}>
        <h1 style={{ margin: 0, maxWidth: "16ch" }}>Компоненты и токены сайта</h1>
        <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--type-lead-size)", color: "var(--text-secondary)", maxWidth: "62ch" }}>Всё, из чего собираются главная и посадочные страницы: шкала, палитра, состояния контролов, карточки и сетка. Тёмной темы в системе нет и не планируется.</p>
      </div>
      <TypographySection />
      <ColorSection />
      <ButtonSection />
      <FormSection />
      <CardSection />
      <PatternSection />
      <GridSection />
      <footer style={{ background: "var(--surface-footer)", borderTop: "1px solid var(--border-subtle)", padding: "var(--space-12) 0", marginTop: "var(--space-8)" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-8)", flexWrap: "wrap" }}>
          <div>
            <div className="caps" style={{ marginBottom: 8 }}>Салон</div>
            <div>Липецк, ул. Водопьянова, 17 — ТВЦ, 1 этаж</div>
          </div>
          <div>
            <div className="caps" style={{ marginBottom: 8 }}>Часы работы</div>
            <div>Ежедневно, 9:00–19:00</div>
          </div>
          <div className="spec" style={{ maxWidth: "40ch" }}>Цены на сайте не публикуются: точная сумма называется после бесплатного замера и фиксируется в договоре.</div>
        </div>
      </footer>
    </>
  );
}

class KitBoundary extends React.Component {
  constructor(p) { super(p); this.state = { err: false, n: 0 }; }
  static getDerivedStateFromError() { return { err: true }; }
  componentDidCatch() { setTimeout(() => this.setState((s) => ({ err: false, n: s.n + 1 })), 200); }
  render() { return this.state.err ? null : React.createElement(App, { key: this.state.n }); }
}

(function boot(tries) {
  tries = tries || 0;
  const ready = window.React && window.ReactDOM && window.DesignSystem_52c6a7 && document.getElementById("root");
  if (!ready) { if (tries < 400) setTimeout(() => boot(tries + 1), 30); return; }
  try {
    const el = document.getElementById("root");
    window.__kitRoot = window.__kitRoot || ReactDOM.createRoot(el);
    window.__kitRoot.render(<KitBoundary />);
  } catch (e) {
    if (tries < 400) setTimeout(() => boot(tries + 1), 50);
  }
})();
