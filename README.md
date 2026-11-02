![Steam RSS Grabber](https://shieldcn.dev/header/glow.svg?title=Steam+RSS+Grabber&subtitle=Steam+game+RSS+news+%E2%80%94+in+one+click&logo=rss&logoColor=e74e9a&mode=dark&theme=slate&font=space-grotesk&image=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1607706189992-eae578626c86%3Fq%3D80%26w%3D1740%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.1.0%26ixid%3DNHwxMjA3fDA%253D)

**Steam game RSS news — in one click.** A lightweight Google Chrome extension that adds a **Copy RSS** button to a game's page and copies the link to its RSS feed to the clipboard.

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
