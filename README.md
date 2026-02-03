# Grădinița Steaua - Website

Website pentru Grădinița Steaua - Universul Copilăriei

## Structura Proiectului

```
.
├── index.html          # Pagina principală
├── logo.png           # Logo-ul grădiniței
├── skyro.png          # Logo SKYRO
├── *.webp             # Imagini pentru galerie
├── netlify.toml       # Configurare Netlify
├── .gitignore         # Fișiere ignorate de Git
└── README.md          # Acest fișier
```

## Deployment pe Netlify

### Opțiunea 1: Drag & Drop
1. Accesează [Netlify](https://netlify.com)
2. Loghează-te în contul tău
3. Apasă "Add new site" → "Deploy manually"
4. Trage folderul proiectului în zona de upload
5. Site-ul va fi publicat automat

### Opțiunea 2: GitHub Integration
1. Creează un repository GitHub nou
2. Încarcă fișierele proiectului:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```
3. Accesează [Netlify](https://netlify.com)
4. Apasă "Add new site" → "Import an existing project"
5. Selectează GitHub și autorizează Netlify
6. Alege repository-ul creat
7. Click pe "Deploy site"

### Opțiunea 3: Netlify CLI
```bash
# Instalează Netlify CLI
npm install -g netlify-cli

# Autentificare
ntl login

# Deployment
ntl deploy --prod
```

## Deployment pe GitHub Pages

1. Mergi la Settings → Pages
2. Selectează branch-ul principal (main/master)
3. Click pe Save
4. Site-ul va fi disponibil la: `https://username.github.io/repo-name/`

## Tehnologii Utilizate

- HTML5
- Tailwind CSS (via CDN)
- Font Awesome (via CDN)
- Google Fonts (Baloo 2, Quicksand)
- Animații CSS personalizate

## Contact

- Email: dan.trifan@sky.ro
- Telefon: +4 0720 088 880
- Website: https://sky.ro

## Licență

Copyright © 2024 Grădinița Steaua. Toate drepturile rezervate.
