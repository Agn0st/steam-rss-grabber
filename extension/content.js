(() => {
  'use strict';

  if (location.hostname !== 'store.steampowered.com' || !/^\/app\/(\d+)(?:\/|$)/.test(location.pathname)) return;

  const share = document.getElementById('shareBtn');
  const follow = document.getElementById('queueBtnFollow');
  const template = follow?.querySelector('button') || share?.querySelector('a');
  if (!share || !template || document.getElementById('steam-rss-grabber')) return;

  const wrapper = document.createElement('div');
  wrapper.id = 'steam-rss-grabber';
  wrapper.className = follow?.className || '';
  wrapper.style.cssText = share.style.cssText;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = template.className;
  const label = document.createElement('span');
  label.textContent = 'Copy RSS';
  button.append(label);
  wrapper.append(button);
  let resetTimer;
  button.addEventListener('click', async () => {
    const appId = location.pathname.match(/^\/app\/(\d+)(?:\/|$)/)[1];
    const languages = {
      ar: 'arabic', bg: 'bulgarian', cs: 'czech', da: 'danish', de: 'german',
      el: 'greek', en: 'english', es: 'spanish', 'es-419': 'latam',
      fi: 'finnish', fr: 'french', hu: 'hungarian', id: 'indonesian',
      it: 'italian', ja: 'japanese', ko: 'koreana', nl: 'dutch', no: 'norwegian',
      pl: 'polish', pt: 'portuguese', 'pt-br': 'brazilian', ro: 'romanian',
      ru: 'russian', sk: 'slovak', sv: 'swedish', th: 'thai', tr: 'turkish',
      uk: 'ukrainian', vi: 'vietnamese', 'zh-cn': 'schinese', 'zh-hans': 'schinese',
      'zh-tw': 'tchinese', 'zh-hant': 'tchinese',
    };
    const locale = document.documentElement.lang.toLowerCase();
    const language = languages[locale] || languages[locale.split('-')[0]] || 'english';
    try {
      await navigator.clipboard.writeText(`https://store.steampowered.com/feeds/news/app/${appId}/?l=${language}`);
      label.textContent = 'Copied';
    } catch {
      label.textContent = 'Copy failed';
    }
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => { label.textContent = 'Copy RSS'; }, 1000);
  });
  // Signed-out pages lack Steam's growing spacer. Let the login notice fill
  // that space so the two buttons keep the container's native gap.
  if (!follow) {
    share.parentElement.querySelector(':scope > p')?.classList.add('expand_to_fill');
  }
  share.before(wrapper);
  // Reserve room for every status using Steam's current font, padding and borders.
  const width = Math.max(...['Copy RSS', 'Copied', 'Copy failed'].map(text => {
    label.textContent = text;
    return button.getBoundingClientRect().width;
  }));
  label.textContent = 'Copy RSS';
  button.style.boxSizing = 'border-box';
  button.style.minWidth = `${Math.ceil(width)}px`;
})();
