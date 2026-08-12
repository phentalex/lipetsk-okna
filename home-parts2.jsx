const PROFILES = [
  { name: "Базовый 58 мм", frame: "58 мм", cams: "3 камеры", glass: "до 32 мм", use: "Дачи, нежилые помещения, холодные балконы" },
  { name: "Тёплый 70 мм", frame: "70 мм", cams: "5 камер", glass: "до 40 мм", use: "Квартиры и жилые комнаты — основной выбор" },
  { name: "Премиум 76 мм", frame: "76 мм", cams: "6 камер", glass: "до 48 мм", use: "Частные дома, панорамные конструкции" },
  { name: "Алюминий", frame: "50–60 мм", cams: "холодный", glass: "одинарное или 24 мм", use: "Террасы, витрины, раздвижные системы" },
];

function Profiles() {
  return (
    <Section id="profiles">
      <Head eyebrow="Профильные системы" title="Из чего собираем окно" lead="Профиль выбирается под помещение и бюджет. На замере мастер показывает образцы и объясняет разницу." />
      <div className="grid-4">
        {PROFILES.map((p) => (
          <Card key={p.name}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "var(--space-4)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--red-50)", color: "var(--red-600)" }}><Icon name="layers" size="sm" /></span>
              <h3 style={{ margin: 0, fontSize: "var(--text-md)" }}>{p.name}</h3>
            </div>
            <dl style={{ margin: 0, display: "grid", gap: 0 }}>
              {[["Монтажная глубина", p.frame], ["Камеры", p.cams], ["Стеклопакет", p.glass]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)", padding: "10px 0", borderTop: "1px solid var(--border-subtle)", fontSize: "var(--text-sm)" }}>
                  <dt style={{ color: "var(--text-secondary)" }}>{k}</dt>
                  <dd style={{ margin: 0, fontWeight: 500, textAlign: "right" }}>{v}</dd>
                </div>
              ))}
            </dl>
            <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{p.use}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const STEPS = [
  { title: "Заявка и звонок", text: "Перезваниваем в рабочее время, уточняем объект и согласуем удобный день." },
  { title: "Бесплатный замер", text: "Мастер снимает размеры, показывает образцы профиля и называет точную цену." },
  { title: "Договор и изготовление", text: "Цена фиксируется в договоре. Изготовление — 8–14 рабочих дней." },
  { title: "Монтаж и гарантия", text: "Ставим своими бригадами, убираем за собой, выдаём гарантию на конструкцию и работы." },
];

function Steps() {
  return (
    <Section id="steps" tone="subtle">
      <Head eyebrow="Как мы работаем" title="Четыре шага от заявки до монтажа" />
      <StepList steps={STEPS} />
    </Section>
  );
}

function PriceBlock() {
  return (
    <Section id="price">
      <PriceExplainer title="Почему мы не публикуем цены" />
    </Section>
  );
}

const WORKS = [
  { id: "work-1", title: "Балкон с выносом, Советский район", text: "Тёплое остекление, вынос по подоконнику 25 см. Один день на монтаж." },
  { id: "work-2", title: "Окна ПВХ в панельном доме, Сокол", text: "Три окна и балконный блок, профиль 70 мм. Замер и монтаж — 11 дней." },
  { id: "work-3", title: "Веранда частного дома, Липецкий район", text: "Холодное раздвижное остекление на террасе 18 м²." },
];

function Portfolio() {
  return (
    <Section id="portfolio">
      <Head eyebrow="Наши работы" title="До и после" lead="Реальные объекты в Липецке и области. Фотографии снимаем сами после сдачи работ."
        action={<Button variant="secondary" iconRight="chevron-right" href="#portfolio">Все работы</Button>} />
      <div className="grid-3">
        {WORKS.map((w) => (
          <Card key={w.id} padding="0" style={{ overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 1, background: "var(--border-subtle)" }}>
              {["До", "После"].map((label) => (
                <div key={label} style={{ position: "relative", aspectRatio: "3 / 4", minWidth: 0, minHeight: 0, background: "var(--gray-50)" }}>
                  <image-slot id={w.id + "-" + (label === "До" ? "before" : "after")} shape="rect" placeholder={"Фото «" + label + "»"}></image-slot>
                  <span style={{ position: "absolute", left: 10, top: 10, padding: "4px 10px", borderRadius: "var(--radius-pill)", background: "var(--white)", border: "1px solid var(--border-subtle)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--gray-700)", pointerEvents: "none" }}>{label}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "var(--space-6)" }}>
              <h3 style={{ margin: 0, fontSize: "var(--text-md)" }}>{w.title}</h3>
              <p style={{ margin: "var(--space-2) 0 0", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{w.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const REVIEWS = [
  { name: "Ирина", place: "Октябрьский район", date: "март 2026", text: "Замерщик приехал на следующий день, всё объяснил про профиль и стеклопакет. Цена в договоре совпала с той, что назвали на замере." },
  { name: "Сергей", place: "Сокол", date: "февраль 2026", text: "Ставили окна в панельной девятиэтажке. Монтаж заняли один день, мусор увезли. Продувания нет, зимой проверили." },
  { name: "Алексей", place: "Липецкий район", date: "январь 2026", text: "Остеклили веранду холодным алюминием. Сроки сдвинулись на два дня из-за доставки, предупредили заранее." },
];

function Reviews() {
  return (
    <Section id="reviews" tone="subtle">
      <Head eyebrow="Отзывы" title="Что говорят клиенты" lead="Отзывы собираем после сдачи объекта и публикуем без правок." />
      <div className="grid-3">
        {REVIEWS.map((r) => (
          <Card key={r.name}>
            <div style={{ display: "flex", gap: 4, marginBottom: "var(--space-4)", color: "var(--red-500)" }}>
              {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={16} />)}
            </div>
            <p style={{ margin: 0, color: "var(--text-primary)" }}>{r.text}</p>
            <div style={{ marginTop: "var(--space-5)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--border-subtle)", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
              <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{r.name}</span> · {r.place} · {r.date}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const FAQ = [
  { q: "Сколько стоит окно?", a: "Стоимость зависит от размеров проёма, профиля, стеклопакета и условий монтажа. Точную цифру мастер называет после бесплатного замера, и она фиксируется в договоре." },
  { q: "Замер действительно бесплатный?", a: "Да. По Липецку выезд замерщика бесплатный и ни к чему не обязывает. По области условия согласуем при заявке." },
  { q: "Сколько ждать изготовление?", a: "8–14 рабочих дней после подписания договора. Монтаж стандартного балкона занимает один день." },
  { q: "Чем отличается тёплое остекление от холодного?", a: "Холодное — алюминиевый профиль без утепления: защищает от ветра, осадков и пыли. Тёплое — ПВХ со стеклопакетом: держит температуру, балконом можно пользоваться зимой." },
  { q: "Вы работаете по области?", a: "Да, выезжаем в Грязи, Елец, Задонск, Усмань, Лебедянь и другие районы. Выезд за город согласуем при заявке." },
  { q: "Что с гарантией?", a: "Гарантия на конструкцию и монтажные работы указывается в договоре. Сервисный выезд по гарантии бесплатный." },
];

function Faq() {
  return (
    <Section id="faq">
      <Head eyebrow="Вопросы" title="Частые вопросы" />
      <div style={{ maxWidth: 860, margin: "0 auto" }}><Accordion items={FAQ} /></div>
    </Section>
  );
}

function SeoBlock() {
  return (
    <>
      <Section id="geo" tight><GeoCoverage /></Section>
      <SeoProse title="Пластиковые окна в Липецке: как выбрать и что влияет на цену" collapsible>
        <div className="seo-body">
          <p>Мы изготавливаем окна ПВХ и алюминиевые конструкции под заказ и ставим их своими бригадами в Липецке и Липецкой области. Работаем с квартирами, частными домами, дачами, террасами и коммерческими объектами: от одного окна в панельном доме до остекления коттеджа целиком.</p>
          <h3>Что влияет на стоимость окна</h3>
          <ul>
            <li>размеры проёма и число створок — конструкция считается по факту замера;</li>
            <li>профильная система: 58, 70 или 76 мм, число камер и монтажная глубина;</li>
            <li>стеклопакет: однокамерный или двухкамерный, энергосберегающее стекло;</li>
            <li>фурнитура и режимы открывания, включая микропроветривание;</li>
            <li>условия монтажа: этаж, состояние проёма, демонтаж старой рамы и вынос мусора.</li>
          </ul>
          <p>Поэтому на сайте нет калькулятора: любая цифра до замера была бы приблизительной. Мастер приезжает бесплатно, снимает размеры, показывает образцы и называет точную сумму, которая фиксируется в договоре и не меняется после монтажа.</p>
          <h3>Тёплое и холодное остекление балкона</h3>
          <p>Холодный контур на алюминии защищает балкон от ветра, дождя и пыли и почти не нагружает плиту. Тёплый контур из ПВХ со стеклопакетом держит температуру: балкон становится частью комнаты, на нём можно поставить стол или сушилку. Выбор зависит от того, планируете ли вы пользоваться балконом зимой и позволяет ли это состояние плиты — на замере мастер это проверяет.</p>
          <h3>Сроки работ</h3>
          <p>Изготовление занимает 8–14 рабочих дней после подписания договора. Монтаж стандартного балкона — один день, окно в квартире меняем за 2–4 часа. На загородные объекты выезжаем по согласованному графику.</p>
          <h3>Где мы работаем</h3>
          <p>Салон находится в Липецке на улице Водопьянова, 17 — ТВЦ, первый этаж. Выезжаем во все районы города: Советский, Октябрьский, Правобережный, Левобережный, а также в Сокол, Тракторный, Опытную станцию и Университетский. По области принимаем заявки из Грязей, Ельца, Задонска, Усмани, Лебедяни, Данкова и Чаплыгина. По городу выезд замерщика бесплатный.</p>
        </div>
      </SeoProse>
    </>
  );
}

const SALONS = [
  { id: "salon-1", title: "Салон на Водопьянова", rows: [
    { icon: "map-pin", label: "Адрес", value: "Липецк, ул. Водопьянова, 17 — ТВЦ, 1 этаж" },
    { icon: "phone", label: "Телефон", value: "+7 (4742) 00-00-00", href: "tel:+74742000000" },
    { icon: "clock", label: "Часы работы", value: "Пн–Пт 9:00–19:00, Сб 10:00–16:00" },
  ] },
];

function YandexMap({ src, height }) {
  const [ok, setOk] = React.useState(true);
  React.useEffect(() => {
    const t = setTimeout(() => { if (!window.__ymLoaded) setOk(false); }, 2500);
    return () => clearTimeout(t);
  }, []);
  if (!ok) return (
    <div className="ph" style={{ width: "100%", height, borderRadius: 0, border: "none", borderBottom: "1px dashed var(--gray-300)" }}>
      Виджет Яндекс.Карт — салон на Водопьянова, 17
    </div>
  );
  return (
    <iframe
      title="Салон на карте" src={src} width="100%" height={height} loading="lazy"
      onLoad={() => { window.__ymLoaded = true; }}
      style={{ border: 0, display: "block", background: "var(--gray-50)" }}
    ></iframe>
  );
}

function Salons() {
  return (
    <Section id="salons">
      <Head eyebrow="Контакты" title="Салон в Липецке" lead="Приезжайте посмотреть образцы профиля и стеклопакетов — консультация без записи." />
      <div style={{ display: "grid", gap: "var(--space-6)" }}>
        {SALONS.map((s) => (
          <Card key={s.id} padding="0" style={{ overflow: "hidden" }}>
            <div className="salon-grid">
            <YandexMap height={380} src="https://yandex.ru/map-widget/v1/?text=Липецк,%20улица%20Водопьянова,%2017&z=17" />
            <div style={{ padding: "var(--space-8) var(--space-8) var(--space-8) var(--space-10)" }}>
              <h3 style={{ margin: "0 0 var(--space-5)", fontSize: "var(--text-lg)" }}>{s.title}</h3>
              <ContactBlock rows={s.rows} />
              <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-6)", flexWrap: "wrap" }}>
                <Button variant="secondary" iconLeft="map-pin">Построить маршрут</Button>
                <Button variant="ghost" iconLeft="phone" href="tel:+74742000000">Позвонить</Button>
              </div>
            </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function MeasureBlock() {
  return (
    <Section id="measure" tone="subtle">
      <div className="grid-2" style={{ alignItems: "center", gap: "var(--space-16)" }}>
        <div>
          <h2 style={{ margin: 0 }}>Записаться на бесплатный замер</h2>
          <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--type-lead-size)", color: "var(--text-secondary)", maxWidth: "48ch" }}>
            Мастер приедет в удобное время, снимет размеры и назовёт точную цену. Замер ни к чему не обязывает.
          </p>
          <ul style={{ margin: "var(--space-6) 0 0", padding: 0, listStyle: "none", display: "grid", gap: "var(--space-3)" }}>
            {["Выезд по Липецку бесплатный", "Цена фиксируется в договоре", "Изготовление 8–14 рабочих дней"].map((t) => (
              <li key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--text-base)" }}>
                <Icon name="check-circle-2" size="sm" color="var(--red-500)" />{t}
              </li>
            ))}
          </ul>
        </div>
        <MeasureForm />
      </div>
    </Section>
  );
}

Object.assign(window, { Profiles, Steps, PriceBlock, Portfolio, Reviews, Faq, SeoBlock, Salons, MeasureBlock });
