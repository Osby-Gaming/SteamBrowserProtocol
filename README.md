Filthy clanker-generated README, I don't have time to write a full API reference of my own for this package.
---

# SteamBrowserProtocol

A tiny, dependency-free utility that generates valid `steam://` protocol URLs based on Valve’s Steam Browser Protocol.
**It does not execute or open the URLs — you choose how to trigger them** (browser redirect, shell command, Electron deep link, game launcher, etc.).

Every function returns a plain string.

---

## ✨ Features

* Full, typed coverage of nearly all Steam protocol actions
* Simple static class interface
* Zero dependencies
* Safe: does **not** open or execute anything — *only returns URLs*

---

## 📦 Installation

```bash
npm install steambrowserprotocol
# or
yarn add steambrowserprotocol
# or
pnpm add steambrowserprotocol
# or
bun add steambrowserprotocol
```

Import:

```ts
import SteamBrowserProtocol from "steambrowserprotocol";
```

---

## ⚠️ Important: This package does *not* open Steam for you

All methods **only return strings** like:

```
steam://run/440
steam://store/620
```

You decide how to open them:

* `window.location.href = url` (web)
* `exec("start steam://...")` (Windows)
* `open "steam://..."` (macOS)
* `gio open "steam://..."` (Linux)
* `electron.shell.openExternal(url)`
* Custom game launcher logic
* Bun/Node shell commands

This design keeps the library safe, predictable, and environment-agnostic.

---

## 🚀 Basic Usage

```ts
// Open a store page
const url = SteamBrowserProtocol.store("570");
window.location.href = url;

// Connect to a server
const link = SteamBrowserProtocol.connect("127.0.0.1", "27015");
console.log(link); // "steam://connect/127.0.0.1:27015"
```

---

## 🧁 Bun Example

```ts
import SteamBrowserProtocol from "steambrowserprotocol";
import { $ } from "bun";

const url = SteamBrowserProtocol.launch("440");

// On Windows:
if (process.platform === "win32") {
  await $`start "" ${url}`;
}

// macOS:
if (process.platform === "darwin") {
  await $`open ${url}`;
}

// Linux:
if (process.platform === "linux") {
  await $`gio open ${url}`;
}
```

---

## 📚 Full API Reference

Below is the entire API, grouped by category.
Every function returns a `string`.

---

### **General Steam Actions**

| Method                 | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `openSteam(commands?)` | Opens Steam with optional CLI arguments.             |
| `exit()`               | Exits Steam.                                         |
| `flushConfig()`        | Flushes & reloads Steam configs.                     |
| `nav(component)`       | Opens a Steam component without focusing the window. |
| `open(component)`      | Opens a Steam component.                             |
| `openUrl(url)`         | Opens a URL inside Steam.                            |
| `openUrlExternal(url)` | Opens a URL in the system browser.                   |

---

### **Store & App Pages**

| Method                     | Description                            |
| -------------------------- | -------------------------------------- |
| `store(id)`                | Opens store page for an app.           |
| `advertise(id)`            | Marketing/advertising page for an app. |
| `appNews(id)`              | Opens app news page.                   |
| `backup(id)`               | Opens backup wizard for an app.        |
| `install(id)`              | Installs an app.                       |
| `installAddon(addon)`      | Installs an add-on.                    |
| `preload(id)`              | Preloads an app.                       |
| `purchase(id)`             | Opens purchase dialog.                 |
| `purchaseSubscription(id)` | Opens subscription purchase dialog.    |
| `validate(id)`             | Validates local game files.            |
| `updatenews(id)`           | Opens update news.                     |
| `publisher(name)`          | Opens publisher’s catalogue.           |
| `openStore()`              | Opens Steam store front.               |
| `openStoreAppPage(appId)`  | Opens store page for an app.           |
| `openStoreDLCPage(appId)`  | Shows DLC list for an app.             |
| `openStoreCart()`          | Opens the user's cart.                 |
| `openStorefront()`         | Opens main storefront page.            |

---

### **Game Launching & Management**

| Method                       | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| `run(id, args?)`             | Runs an app, installs if needed.                  |
| `runsafe(id)`                | Runs a Source game with reset CVARs.              |
| `runGame(id, args?)`         | Runs game with mod/non-Steam shortcut support.    |
| `launch(id, dialog?)`        | Launches app with optional launch options dialog. |
| `controllerConfig(id)`       | Opens controller configurator.                    |
| `defrag(id)`                 | Defragments an app’s files.                       |
| `gameProperties(id)`         | Opens app's properties window.                    |
| `subscriptionInstall(ids[])` | Installs multiple apps via checklist.             |
| `uninstall(ids[])`           | Removes local cache for apps.                     |
| `forceInputAppId(id)`        | Forces Steam Input layout for specified app.      |

---

### **Friends, Chat & Social**

| Method                  | Description                         |
| ----------------------- | ----------------------------------- |
| `friends()`             | Opens friends list.                 |
| `friendsAdd(id)`        | Opens add-friend window.            |
| `players()`             | Shows recent players.               |
| `joinChat(id)`          | Joins a friend chat room.           |
| `message(id)`           | Opens DM to user.                   |
| `statusOnline()`        | Sets online status.                 |
| `statusAway()`          | Sets away status.                   |
| `statusInvisible()`     | Goes invisible.                     |
| `statusOffline()`       | Sets offline status.                |
| `settingsHideOffline()` | Toggles offline friends visibility. |
| `settingsShowAvatars()` | Toggles avatar visibility.          |
| `settingsSortByName()`  | Toggles name-sort.                  |

*(Deprecated methods included: `statusBusy`, `statusTrade`, `statusPlay`)*

---

### **Servers & Multiplayer**

| Method                          | Description                         |
| ------------------------------- | ----------------------------------- |
| `connect(ip, port?, password?)` | Connects directly to a game server. |
| `viewFriendsGame(id64)`         | Views a friend’s active game.       |
| `stopStreaming()`               | Stops remote play session.          |

---

### **Music Player**

| Method                         | Description         |
| ------------------------------ | ------------------- |
| `playMusic()`                  | Plays music.        |
| `pauseMusic()`                 | Pauses music.       |
| `togglePlayPause()`            | Toggles play/pause. |
| `playPrevious()`               | Previous track.     |
| `playNext()`                   | Next track.         |
| `toggleMute()`                 | Toggles mute.       |
| `increaseVolume()`             | Volume up.          |
| `decreaseVolume()`             | Volume down.        |
| `togglePlayingRepeatStatus()`  | Toggles repeat.     |
| `togglePlayingShuffleStatus()` | Toggles shuffle.    |

---

### **Community & Web UI**

Huge number of URL helpers, including:

* Community profiles
* Groups and group admin pages
* Workshop and Greenlight
* Inventory
* Events, announcements
* Legal pages
* Support pages
* Search helpers

Examples:

| Method                      | Description                |
| --------------------------- | -------------------------- |
| `openCommunityFilePage(id)` | Opens a workshop/UGC page. |
| `openCommunityHome()`       | Community homepage.        |
| `openCommunitySearch(term)` | Community search.          |
| `openSteamIDMyProfile()`    | Your profile.              |
| `openSteamIDPage(id)`       | Someone else’s profile.    |
| `openSteamWorkshop()`       | Workshop home.             |
| `openSteamWorkshopPage(id)` | Workshop item page.        |
| `openGroupSteamIDPage(id)`  | Group page.                |
| `openFamilySharing()`       | Family sharing settings.   |
| `openMyHelpRequests()`      | Support requests.          |
| `openLegalInformation()`    | Legal info.                |
| and many more…              |                            |

---

### **Miscellaneous**

| Method                       | Description                        |
| ---------------------------- | ---------------------------------- |
| `addNoneSteamGame()`         | Add non-Steam game dialog.         |
| `ackMessage(pass)`           | Accepts gift/guest pass.           |
| `cdKeys(appid)`              | Opens CD key viewer.               |
| `paypalCancel()`             | Cancels PayPal transaction.        |
| `updateFirmware()`           | Updates Steam Controller firmware. |
| `takesurvey(id)`             | Opens a survey.                    |
| `guestPasses()`              | View guest passes.                 |
| `openCommentNotifications()` | Comment notifications.             |
| `openChatBanListAdmin()`     | Chat ban admin list.               |

---

## 🧱 Example: Executing the URL Yourself

```ts
import SteamBrowserProtocol from "steambrowserprotocol";

const url = SteamBrowserProtocol.run("730");

// It’s just a string:
console.log(url); // steam://run/730

// YOU choose how to open it:
window.location.href = url;
// or exec("start steam://run/730")
// or Electron shell.openExternal(url)
```