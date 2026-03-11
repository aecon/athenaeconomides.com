# Personal portfolio website

## Astrofy
Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS.

The present website is based on [this template](https://astrofy-template.netlify.app/).

#### License
Astrofy is licensed under the MIT license — see the [LICENSE](https://github.com/manuelernestog/astrofy/blob/main/LICENSE) file for details.

#### Contributors
<a href="https://github.com/manuelernestog/astrofy/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=manuelernestog/astrofy" />
</a>

Made with [contrib.rocks](https://contrib.rocks).



## Installation

Prompt-engineered with Claude Code.

### Step 0 - Install Node.js
* Go to https://nodejs.org
* Click the big LTS download button (it should auto-detect your OS)
* Run the installer, click through the defaults
* Close and reopen your terminal

Then verify:
```
node --version
npm --version
```

### Step 1 — Clone the Astrofy template
```
git clone https://github.com/manuelernestog/astrofy.git <my-website>.com
cd <my-website>.com
```

### Step 2 — Install dependencies
```
npm install
```

Test it
```
npm run dev
```
You should see something like local: http://localhost:4321/ — open that in your browser to see the default Astrofy template. Once you confirm it loads, you can move on to Step 3 (replacing the files with yours).

### Step 3 — Replace the files with yours
Extract the astrofy-migration.tar.gz I gave you. Then copy each file into the corresponding location in your new project:
```
# Config
cp astrofy-migration/src/config/config.ts src/config.ts

# Pages (replace existing + add new ones)
cp astrofy-migration/src/pages/index.astro src/pages/
cp astrofy-migration/src/pages/projects.astro src/pages/
cp cp astrofy-migration/src/pages/cv.astro src/pages/
cp astrofy-migration/src/pages/software.astro src/pages/
cp astrofy-migration/src/pages/services.astro src/pages/

# Components (replace existing)
cp astrofy-migration/src/components/SideBar.astro src/components/
cp astrofy-migration/src/components/SideBarMenu.astro src/components/
cp astrofy-migration/src/components/SideBarFooter.astro src/components/
```

### Step 4 — Add your images
```
# From your current website repo's graphics/ folder:
cp graphics/avg_all_groups_hr.jpg public/
cp graphics/Microglia_hr.jpg public/
cp graphics/rbc-sfs_hr.jpg public/
cp graphics/korali_hr.jpg public/

# From your img3D repo:
cp img3D/graphics/brains3D.jpg public/img3d_brains.jpg

# From your AggreQuant repo:
cp AggreQuant/graphics/pipeline.jpg public/aggrequant_pipeline.jpg
```

Preview locally
```
npm run dev
```

### Step 5 - Change my name
Edit my name inside `src/components/Header.astro`


### Step 6 - Change theme
To change the theme, edit line 21 in `src/layouts/BaseLayout.astro`. For example, to try the `corporate` theme:
```
<html lang="en" data-theme="corporate">
```
You can preview all themes visually at https://daisyui.com/docs/themes/ if you want to see them side by side before committing.



### Step 9 — Update the deploy config
Open astro.config.mjs and set your domain
```
export default defineConfig({
  site: 'https://athenaeconomides.com',
  integrations: [mdx(), sitemap(), tailwind()]
});
```

### Step 10 — Push to GitHub and deploy
Create a new repo (or repurpose your existing one):
```
git init
git add .
git commit -m "Migrate to Astrofy"
git remote add origin https://github.com/aecon/athenaeconomides.com.git
git push -u origin main --force
```

For deployment, you have two options:
* Netlify (recommended, like the Astrofy demo uses): connect your GitHub repo at netlify.com, it auto-detects Astro and deploys.
* GitHub Pages: add a GitHub Actions workflow — Astro has a ready-made one in their docs, or you can add a .github/workflows/deploy.yml - USED THIS ONE.


