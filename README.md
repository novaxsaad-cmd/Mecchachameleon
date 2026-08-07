# mecchacheats.com

Static site for Meccha Chameleon cheats content. Ready for Cloudflare Pages / Workers static assets.

## Cloudflare deploy

Site files are in `public/`.

### Option A — Wrangler deploy command (recommended for current project settings)

Deploy command:

```bash
npx wrangler deploy
```

`wrangler.toml` points assets at `./public`.

### Option B — Cloudflare Pages UI (no wrangler deploy command)

- Build command: empty
- Build output directory: `public`
- Clear any custom deploy command

Then attach custom domain `mecchacheats.com`.

## Regenerate pages

```bash
python3 generate_site.py
```

## Local preview

```bash
npm run preview
```
