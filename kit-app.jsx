const W = (n) => function DSWrap(props) { return React.createElement(window.DesignSystem_52c6a7[n], props); };
const Button = W("Button"), Badge = W("Badge"), Tag = W("Tag"), Card = W("Card"), Icon = W("Icon"), Input = W("Input"), Textarea = W("Textarea"), Select = W("Select"), Checkbox = W("Checkbox"), ServiceCard = W("ServiceCard"), Accordion = W("Accordion"), Breadcrumbs = W("Breadcrumbs");

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

(function boot(tries) {
  tries = tries || 0;
  const need = ["Sec", "Row", "Swatch", "StateButton", "TypographySection", "ColorSection", "ButtonSection", "GridSection"];
  const ready = window.React && window.ReactDOM && window.DesignSystem_52c6a7 && need.every((n) => typeof window[n] === "function");
  if (!ready) { if (tries < 400) setTimeout(() => boot(tries + 1), 30); return; }
  try {
    const el = document.getElementById("root");
    window.__kitRoot = window.__kitRoot || ReactDOM.createRoot(el);
    window.__kitRoot.render(<App />);
  } catch (e) {
    if (tries < 400) setTimeout(() => boot(tries + 1), 50);
  }
})();
