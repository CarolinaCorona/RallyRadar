# 🏐 Rally Radar
<img width="1760" height="1120" alt="Logo@2x" src="https://github.com/user-attachments/assets/90d3383c-fe0f-427e-89d4-32f2bc111ed8" />

**Spot the stats that win sets.**

Rally Radar is a free volleyball stats tracker for coaches and teams. Record every serve, attack, reception and block live from your phone, then review the numbers per player, per match, per set or across a whole season. It runs in the browser, installs like a normal app on phones and computers, and works fully offline.
Available as webpage here: https://carolinacorona.github.io/RallyRadar/
## Features

- **Multiple teams:** manage as many teams, players and matches as you like. The app sets no limits; only your device storage does.
- **Player profiles:** name, number, position and photo.
- **Live match tracking:** one tap per action, with a minus button to correct mistakes. Set scores and a per-set lineup (who is on court) are supported.
- **12 tracked stats per player:** points, good serves, missed serves, aces, kills, attempted kills, missed kills, good reception, bad reception, blocks, digs (Defence) and set assists.
- **Animated intro:** a short radar logo animation plays when the app opens (tap to skip).
- **Automatic percentages:** serve %, reception % and kill % (kills ÷ kills + attempted + missed kills).
- **Statistics views:** total across matches, per match (all sets or a single set) and per player. Compare a player across matches or across sets, with bar charts and trend lines for any metric.
- **Match notes and photos:** write insights for later review and attach match photos.
- **Win/loss record:** results come from the set scores you enter.
- **Export:** PDF (team summary and/or one page per player with graphs) or Excel (one sheet per player plus team sheets and match notes).
- **Backup and sharing:** export a team or a full backup as a file, optionally **encrypted with a password** (AES-256-GCM). Anyone with the file and the password can import it.
- **Installable and offline:** a Progressive Web App (PWA) for phones, tablets and computers.

## Install
- **Open the link in the description**. In the corner of your desktop or phone's browser tab, click install app.
- Android (Chrome): menu (⋮) → Install app.
- iPhone / iPad (Safari): Share button → Add to Home Screen.
- Windows / Mac (Chrome or Edge): click the install icon at the right end of the address bar.

## How to use

1. **Create or choose a team** with the selector at the top (⚙ Teams to add, rename or delete teams).
2. **Add players** in the *Players* tab, with a number, position and optional photo.
3. **Create a match** in the *Matches* tab (opponent and date).
4. **Record the game:** pick a set, optionally set the *Lineup*, select a player and tap the stat tiles. Tap **−** on a tile to correct. Enter the set score when it ends. Add sets with **+ Set**.
5. **Review** in the *Stats* tab: *Total*, *Per match* or *Per player*. Use the chart selector to switch metric and between bars and trend line.
6. **Write notes** at the bottom of each match and add photos.
7. **Export or share** in the *Data* tab: choose PDF or Excel and which players to include, or export a team file for your staff.

### Sharing results with your team

Rally Radar stores data **on each device** and has no server. To share results:

1. In *Data → Backup & share*, type a password and tap **Export this team**.
2. Send the file through any channel you like (messaging, email, cloud drive).
3. Others open the app, go to *Data*, type the same password and import the file.

🚨 Importing a team that already exists on the device replaces it with the imported version, so agree on one person who records the matches. 🚨

## Online sync

Every device can have the same live data: you record as a coach, players open the app and see the updates. It uses Google Firebase on the free **Spark plan** (no credit card). It never bills you; if a daily limit is reached it just pauses until the next day. Photos are not synced (they stay on the device that added them); everything else is.

**How it works**

- Coaches sign in with an email and password you create. Only those accounts can change data.
- Players need no account. They join with a team code or a link and get a view-only copy that updates live.
- It works offline: each device keeps its own copy and catches up when the connection returns.
- If two coaches edit the same match at the same moment, the last save wins, so agree on who records each match.
- Anyone who has a team code can read that team, so share codes only with your team.

## Your data and privacy

- Everything is stored locally in your browser (IndexedDB). Nothing is uploaded anywhere.
- 🚨 Clearing your browser data or uninstalling the app can erase it, so **back up regularly** with *Data → Back up all teams*. 🚨
- The app asks the browser for persistent storage to reduce the chance of automatic cleanup.
- Photos are resized before saving to keep storage small.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app (HTML, CSS and JavaScript) |
| `manifest.json` | Install information: name, colours, icons |
| `sw.js` | Service worker that enables offline use |
| `icon-192.png`, `icon-512.png` | App icons |
| `firebase-config.js` | Your Firebase settings for online sync |
| `firestore.rules` | Security rules to paste into Firebase |

## Built with

Vanilla JavaScript, IndexedDB, the Web Crypto API, Firebase (Firestore and Authentication), [jsPDF](https://github.com/parallax/jsPDF) with jsPDF-AutoTable, [SheetJS](https://sheetjs.com/), and the Fraunces and Lato fonts from Google Fonts.

## Notes

- Colors: navy `#1F2D4A` and terracotta `#C97B5F`.
- Volley is life 😎
