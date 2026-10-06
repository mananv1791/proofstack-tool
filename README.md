# ProofStack Tool

Private product workspace for ProofStack. This app is intentionally separate
from the public marketing website and is hidden behind an access-code login wall.

## Local Development

```bash
pnpm install
pnpm dev -p 3001
```

Create `.env.local` from `.env.example` and set `TOOL_ACCESS_CODE` plus
`TOOL_SESSION_SECRET` for a real private build.

If `TOOL_ACCESS_CODE` is missing locally, the development fallback is
`proofstack-private-beta`.

## Deployment

Deploy as a separate Vercel project from this directory. Set these production
environment variables in Vercel:

- `TOOL_ACCESS_CODE`
- `TOOL_SESSION_SECRET`
- `NEXT_PUBLIC_APP_URL`
