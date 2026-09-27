# CalcYouNow 3.0 — installable app

These files make CalcYouNow a proper app you can install on your phone:

- `index.html` — the app
- `manifest.json` — its name, icon and colours
- `service-worker.js` — lets it open without a connection
- `logo-mark.png` and the `icon-*.png` files — your logo

A Claude link can't be installed as its own app (Chrome offers to install
Claude instead), so these files need to live on their own web address.
Everything below can be done on your Android phone.

## First-time setup

**1. Unzip**
Open the zip in your Files app (or "Files by Google") and tap **Extract**.

**2. Put it online with GitHub Pages (free)**
1. Go to **github.com** in Chrome and sign in (or create a free account)
2. Tap **+** (top right) → **New repository**
3. Name it (e.g. `calcyounow`), set it to **Public**, tap **Create repository**
4. Tap **uploading an existing file** (or **Add file → Upload files**)
5. Tap **choose your files** and select every file from the extracted
   folder at once
6. Tap **Commit changes**
7. Open the repo's **Settings** → **Pages**
8. Under "Branch" pick **main** and **/ (root)**, then **Save**
9. After a minute or so, refresh: GitHub shows your link, like
   `https://yourname.github.io/calcyounow/`

**3. Install**
Open that link in Chrome, tap **⋮** → **Install app**. CalcYouNow gets its
own icon and name and opens full-screen.

## Already set up? Updating to this version

Upload the new files to the same repository (**Add file → Upload files**,
select them all, **Commit changes**). They replace the old ones. Give
GitHub a minute, then open the app while online and it picks up the new
version. If the home-screen icon still shows the old logo, remove the app
and install it again from the link. Your saved calculators stay on your
phone either way.
