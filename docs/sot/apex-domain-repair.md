# Apex Domain HTTPS Repair — ardavanmir.com

Date diagnosed: 2026-08-13
Status: DNS change required in GoDaddy; no live DNS change made by Codex

## Symptom

`https://ardavanmir.com/` intermittently returns `ERR_CERT_COMMON_NAME_INVALID`, while `https://www.ardavanmir.com/` serves the portfolio successfully.

## Confirmed configuration

- Authoritative DNS: GoDaddy (`ns59.domaincontrol.com`, `ns60.domaincontrol.com`).
- GitHub Pages custom domain: `www.ardavanmir.com`.
- GitHub Pages HTTPS: enforced.
- Current GitHub certificate: approved for `www.ardavanmir.com` only.
- `www` record: `CNAME www → ardmir.github.io` (correct).

## Root cause

The apex `@` currently publishes six A records. Four are the correct GitHub Pages addresses; two are GoDaddy forwarding addresses left over from a forwarding configuration.

Keep:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

Remove:

```text
@  A  3.33.130.190
@  A  15.197.148.33
```

Because DNS can send an apex request to either service, the browser may reach a server that does not have a valid certificate for `ardavanmir.com`. The extra records also prevent GitHub Pages from provisioning the apex certificate cleanly.

## GoDaddy repair steps

1. Sign in to GoDaddy and open **Domain Portfolio → ardavanmir.com → DNS**.
2. Open **Forwarding** and delete forwarding for the root domain. GoDaddy forwarding locks and manages its root A records; removing forwarding should unlock them.
3. In **DNS Records**, delete only the two `@` A records with values `3.33.130.190` and `15.197.148.33`.
4. Keep the four GitHub Pages `@` A records listed above.
5. Keep `www` as a CNAME to `ardmir.github.io`.
6. Do not add a new registrar-level forward from the apex to `www`; GitHub Pages will handle the redirect after both names resolve to Pages.

## GitHub Pages follow-up

1. In `Ardmir/Ardavan-Mir`, open **Settings → Pages**.
2. Keep the custom domain as `www.ardavanmir.com`.
3. Wait for the DNS check to pass and for GitHub to provision the certificate for both names.
4. Keep **Enforce HTTPS** enabled.
5. If the apex is still absent from the certificate after DNS propagation, re-save `www.ardavanmir.com` in the Custom domain field to trigger a fresh certificate check.

## Verification

DNS may update within an hour but can take up to 48 hours globally.

```bash
dig ardavanmir.com A +noall +answer
dig www.ardavanmir.com CNAME +noall +answer
curl -I https://ardavanmir.com/
curl -I https://www.ardavanmir.com/
```

Success means:

- Apex DNS returns only the four `185.199.*.153` GitHub Pages addresses.
- `www` remains a CNAME to `ardmir.github.io`.
- Both HTTPS URLs load without certificate warnings.
- One hostname redirects to the other consistently.

## Repository deployment notes

- Keep `CNAME` and `public/CNAME` set to `www.ardavanmir.com`.
- Do not remove either CNAME file during portfolio updates.
- Merging to `main` uses the existing GitHub Pages workflow; verify the Pages deployment and both domain variants after each domain-related change.
