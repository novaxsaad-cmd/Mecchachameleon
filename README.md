# mecchacheats.com

Static Meccha Chameleon cheats site. Files are in `public/`.

## Cloudflare

Deploy command (set this in the Cloudflare dashboard if needed):

```bash
npx wrangler deploy --assets=./public
```

Or simply:

```bash
npx wrangler deploy
```

`wrangler.toml` already sets `assets.directory = "./public"`.

Production branch should be `main`.
