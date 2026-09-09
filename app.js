(() => {
  const cssParts = ['chunks/css-00.txt', 'chunks/css-01.txt', 'chunks/css-02.txt'];
  const appParts = ['chunks/app-00.txt', 'chunks/app-01.txt', 'chunks/app-02.txt', 'chunks/app-03.txt', 'chunks/app-04.txt', 'chunks/app-05.txt', 'chunks/app-06.txt'];
  const getText = async (url) => { const r = await fetch(url, {cache:'no-cache'}); if (!r.ok) throw new Error(`Failed to load ${url}: ${r.status}`); return r.text(); };
  (async () => {
    const css=(await Promise.all(cssParts.map(getText))).join(''); const style=document.createElement('style'); style.textContent=css; document.head.appendChild(style); document.body.classList.add('assets-ready');
    const code=(await Promise.all(appParts.map(getText))).join(''); (0,eval)(code);
  })().catch(err=>{ console.error(err); document.body.classList.add('assets-ready'); const msg=document.createElement('div'); msg.style.cssText='padding:24px;font:14px system-ui;color:#b42318;background:#fff1f0'; msg.textContent='Application resources could not be loaded: '+err.message; document.body.prepend(msg); });
})();
