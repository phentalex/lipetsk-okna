function App() {
  return (
    <>
      <PageHeader />
      <main>
        <Hero />
        <Stats />
        <Directions />
        <Services />
        <Profiles />
        <Steps />
        <PriceBlock />
        <Portfolio />
        <Reviews />
        <Faq />
        <MeasureBlock />
        <SeoBlock />
        <Salons />
      </main>
      <SiteFooter />
      <div className="only-mobile"><StickyCallBar /></div>
    </>
  );
}

(function boot(tries) {
  tries = tries || 0;
  const need = ["PageHeader", "Hero", "Stats", "Directions", "Services", "Profiles", "Steps", "PriceBlock", "Portfolio", "Reviews", "Faq", "MeasureBlock", "SeoBlock", "Salons"];
  const ready = window.React && window.ReactDOM && window.DesignSystem_52c6a7 && need.every((n) => typeof window[n] === "function");
  if (!ready) { if (tries < 400) setTimeout(() => boot(tries + 1), 30); return; }
  window.__homeRoot = window.__homeRoot || ReactDOM.createRoot(document.getElementById("app"));
  window.__homeRoot.render(<App />);
})();
