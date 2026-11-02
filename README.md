# Steam RSS Grabber

🇬🇧 EN: **Steam game RSS news — in one click.** A lightweight Google Chrome extension that adds a **Copy RSS** button to a game's page and copies the link to its RSS feed to the clipboard.

No need to find RSS feeds manually: open a game, click the button, and add the link to your RSS reader.


## Features

- **RSS for a specific game**, rather than Steam's general feed.
- **Copy RSS** to the left of the “Share” button — whether you are signed in to Steam or not.
- The button uses Steam's existing styles.
- After copying, **Copied** appears for one second. If copying fails, **Copy failed** appears.
- The RSS language follows the Steam page language; English is used for unknown languages. The availability of translated news depends on the publisher and Steam.
- Works only on `https://store.steampowered.com/app/*` pages.

## Usage

1. Open the desired game's page in the Steam store.
2. Click **Copy RSS** to the left of the “Share” button.
3. When **Copied** appears, paste the link into your RSS reader.

Example link format:

```text
https://store.steampowered.com/feeds/news/app/[game_id]
```

The extension only copies the URL. Your RSS reader handles subscriptions, feed updates, and notifications.

## Installation

### Recommended: ZIP / unpacked extension

1. Download `steam-rss-grabber-0.1.0.zip` from the [releases page](https://github.com/Agn0st/steam-rss-grabber/releases) and extract the archive to a permanent folder.
2. Open `chrome://extensions` in Google Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the **`extension`** folder from the extracted archive — the one containing `manifest.json`.
6. Open or reload a Steam game page.

Important: Do not delete or move the `extension` folder after installation: Chrome loads the files from it. After replacing the files with a new version, click the extension's reload button in `chrome://extensions` and reload the game page.

If you download the repository's source code instead of the release ZIP, select its `extension` folder in the same way. No build step or `npm install` is required for installation.

### Optional: CRX

1. Download `steam-rss-grabber-0.1.0.crx` from the [releases page](https://github.com/Agn0st/steam-rss-grabber/releases).
2. Open `chrome://extensions` in Google Chrome.
3. Enable **Developer mode**.
4. Drag the .crx file into the browser window.
5. In the pop-up window, click "Add extension".

**Chrome may block CRX installation outside the Chrome Web Store**, so ZIP and **Load unpacked** are the recommended method.

If you see the error **Package is invalid: 'CRX_REQUIRED_PROOF_MISSING'.**, reload the page after enabling developer mode.

## Permissions and privacy

- **`clipboardWrite`** is required to write the RSS link to the clipboard after you click the button.
- The script runs only on the specified Steam app pages.
- The extension's code does not read the clipboard, collect analytics, or send data to third-party servers.
- No Steam account is required to copy the link.

## Limitations

- The target browser is **Google Chrome**
- The button depends on Steam's page structure. If Steam changes its markup, the integration may need to be updated.
- The extension does not add news translations or affect RSS availability on Steam's side.

## Development and testing

Manifest V3, JavaScript

```text
extension/
  manifest.json       # Chrome metadata and permissions
  content.js          # Button and RSS copying
```

## License

[MIT](LICENSE). An unofficial project, not affiliated with Valve or Steam.

---


🇺🇦 UA: **RSS-новини гри Steam — одним натисканням.** Невелике розширення для Google Chrome, яке додає кнопку **Copy RSS** на сторінку гри та копіює посилання на її RSS-стрічку в буфер обміну.

Без пошуку RSS вручну: відкрий гру, натисни кнопку й додай посилання у свій RSS-рідер.


## Можливості

- **RSS конкретної гри**, а не загальна стрічка Steam.
- **Copy RSS** зліва від кнопки «Поділитися» — з авторизацією у Steam та без неї.
- Оформлення кнопки використовує наявні стилі Steam.
- Після копіювання з’являється **Copied** на одну секунду. Якщо копіювання не вдалося — **Copy failed**.
- Мова RSS визначається за мовою сторінки Steam; для невідомої мови використовується англійська. Наявність перекладених новин залежить від видавця та Steam.
- Працює лише на сторінках `https://store.steampowered.com/app/*`.

## Використання

1. Відкрий сторінку потрібної гри в магазині Steam.
2. Натисни **Copy RSS** зліва від кнопки «Поділитися».
3. Коли з’явиться **Copied**, встав посилання у свій RSS-рідер.

Приклад формату посилання:

```text
https://store.steampowered.com/feeds/news/app/[game_id]
```

Розширення лише копіює адресу. Підпискою, оновленням стрічки та сповіщеннями керує твій RSS-рідер.

## Встановлення

### Рекомендовано: ZIP / розпаковане розширення

1. Завантаж `steam-rss-grabber-0.1.0.zip` зі [сторінки релізів](https://github.com/Agn0st/steam-rss-grabber/releases) і розпакуй архів у постійну папку.
2. Відкрий `chrome://extensions` у Google Chrome.
3. Увімкни **Режим розробника / Developer mode**.
4. Натисни **Завантажити розпаковане розширення / Load unpacked**.
5. Вибери папку **`extension`** з розпакованого архіву — саме ту, в якій лежить `manifest.json`.
6. Відкрий або перезавантаж сторінку гри Steam.

Важливо: Не видаляй і не переміщуй папку `extension` після встановлення: Chrome завантажує файли з неї. Після заміни файлів новою версією натисни кнопку оновлення розширення в `chrome://extensions` та перезавантаж сторінку гри.

Якщо завантажуєш вихідний код репозиторію замість релізного ZIP, так само вибери його папку `extension`. Збірка та `npm install` для встановлення не потрібні.

### Додатково: CRX

1. Завантаж `steam-rss-grabber-0.1.0.crx` зі [сторінки релізів](https://github.com/Agn0st/steam-rss-grabber/releases).
2. Відкрий `chrome://extensions` у Google Chrome.
3. Увімкни **Режим розробника / Developer mode**.
4. Перетягни файл .crx у вікно браузеру.
5. У вспливаючому вікні натисни "Додати розширення".

**Chrome може блокувати встановлення CRX поза Chrome Web Store**, тому ZIP і **Load unpacked** — рекомендований спосіб.

Якщо ви бачите помилку **Package is invalid: 'CRX_REQUIRED_PROOF_MISSING'.**, то після включення режиму розробника потрібно оновити сторінку.

## Дозволи та приватність

- **`clipboardWrite`** потрібен, щоб записати RSS-посилання в буфер після натискання кнопки.
- Скрипт запускається лише на вказаних сторінках застосунків Steam.
- Код розширення не читає буфер обміну, не збирає аналітику та не надсилає дані на сторонні сервери.
- Обліковий запис Steam для копіювання не потрібен.

## Обмеження

- Цільовий браузер — **Google Chrome**
- Кнопка залежить від структури сторінки Steam. Якщо Steam змінить її розмітку, інтеграцію може знадобитися оновити.
- Розширення не додає перекладів новин і не впливає на доступність RSS з боку Steam.

## Розробка та перевірка

Manifest V3, JavaScript

```text
extension/
  manifest.json       # Метадані та дозволи Chrome
  content.js          # Кнопка і копіювання RSS
```

## Ліцензія

[MIT](LICENSE). Неофіційний проєкт, не пов’язаний із Valve або Steam.
