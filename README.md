<p align="center">
  <img src="https://shieldcn.dev/header/glow.svg?title=Steam+RSS+Grabber&amp;subtitle=Steam+game+RSS+news+%E2%80%94+in+one+click&amp;logo=rss&amp;logoColor=e74e9a&amp;mode=dark&amp;theme=slate&amp;font=space-grotesk&amp;image=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1607706189992-eae578626c86%3Fq%3D80%26w%3D1740%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.1.0%26ixid%3DNHwxMjA3fDA%253D" alt="Steam RSS Grabber" width="100%">
</p>

<p align="center">
  <b>English</b> · <a href="README.uk.md">Українська</a> · <a href="README.es.md">Español</a>
</p>

<p align="center">
  <strong>Follow any Steam game's news in your RSS reader.</strong><br>
  A Chrome extension that adds a <b>Copy RSS</b> button next to <b>Share</b> on Steam game pages.
</p>

<p align="center">
  <img alt="Steam game news" src="https://img.shields.io/badge/Steam-Game%20News-1B2838?style=flat-square&amp;logo=steam&amp;logoColor=white">
  <img alt="One-click RSS copy" src="https://img.shields.io/badge/RSS-One--click%20copy-555555?style=flat-square&amp;labelColor=EE802F&amp;logo=rss&amp;logoColor=white">
  <img alt="Google Chrome" src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=flat-square&amp;logo=googlechrome&amp;logoColor=white">
  <a href="https://github.com/Agn0st/steam-rss-grabber/releases/latest"><img alt="Latest release" src="https://img.shields.io/github/v/release/Agn0st/steam-rss-grabber?style=flat-square&amp;label=Release&amp;color=7C3AED"></a>
  <img alt="Manifest V3" src="https://img.shields.io/badge/Manifest-V3-2563EB?style=flat-square">
</p>

<p align="center">
  <img alt="No tracking" src="https://img.shields.io/badge/Privacy-No%20tracking-6B7280?style=flat-square">
  <img alt="No Steam account required" src="https://img.shields.io/badge/Account-Not%20required-6B7280?style=flat-square">
  <a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/badge/License-MIT-6B7280?style=flat-square"></a>
</p>

<p align="center">
  <a href="https://github.com/Agn0st/steam-rss-grabber/releases/latest"><img alt="Download from GitHub Releases" src="https://shieldcn.dev/badge/Download-Release-E74E9A.svg?size=sm"></a>
</p>

<p align="center">
  <a href="#installation">Installation</a> · <a href="#usage">Usage</a> · <a href="#how-it-works">How it works</a> · <a href="#permissions-and-privacy">Privacy</a>
</p>

<p align="center">
  <img src="docs/images/screen.png" width="600" alt="The Copy RSS button next to Share on a Steam game page">
  <br>
  <sub>Example on a Steam game page while signed out.</sub>
</p>

## Installation

1. Download the extension ZIP from [GitHub Releases](https://github.com/Agn0st/steam-rss-grabber/releases/latest) and extract it.
2. Open `chrome://extensions` in Google Chrome and turn on **Developer mode**.
3. Click **Load unpacked** and select the extracted `extension` folder containing `manifest.json`.
4. Open or reload a Steam game page.

You can also load the [`extension/`](extension/) folder from a clone or source archive. Chrome loads the files directly. Keep the folder in place and use the reload button on `chrome://extensions` after replacing its files.

## Usage

1. Open a game's Steam store page.
2. Click **Copy RSS** next to **Share**.
3. When the button says **Copied**, paste the URL into your RSS reader.

A copied URL includes the Steam app ID and the feed language. For example:

```text
https://store.steampowered.com/feeds/news/app/620/?l=english
```

> [!NOTE]
> Your RSS reader handles subscriptions, updates, and notifications. Steam and the game's publisher determine which news items and translations are available.

<br>

## How it works

<table>
  <tr>
    <td width="50%" valign="top"><h3>📡 One feed per game</h3><p>The extension uses the app ID in the store URL to build the RSS link for that game.</p></td>
    <td width="50%" valign="top"><h3>📋 One-click copy</h3><p>The button uses Steam's styling and briefly shows <b>Copied</b> or <b>Copy failed</b> after a click.</p></td>
  </tr>
  <tr>
    <td width="50%" valign="top"><h3>🌐 Follows the page language</h3><p>The RSS link requests the Steam page's language. Unknown locales fall back to English.</p></td>
    <td width="50%" valign="top"><h3>👤 Works signed out</h3><p>The button appears beside Share on supported game pages, including when you're signed out.</p></td>
  </tr>
</table>

## Permissions and privacy

The extension runs only on `https://store.steampowered.com/app/*`. It uses
`clipboardWrite` to copy the feed URL when you click **Copy RSS**. It does not
read the clipboard, collect analytics, or make network requests.

## Compatibility

Steam RSS Grabber targets Google Chrome. The button depends on Steam's store
page markup and appears when the **Share** control is available.

## Project layout

- [`extension/manifest.json`](extension/manifest.json) declares Manifest V3, the page scope, and clipboard permission.
- [`extension/content.js`](extension/content.js) adds the button and builds the RSS URL.

## License

[MIT](LICENSE). Steam RSS Grabber is an unofficial project independent of Valve and Steam.
