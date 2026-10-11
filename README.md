# mlardalan.com static staging (Phase 1)
Static copy of mlardalan.com (WordPress.com/Elementor). STAGING ONLY: every page has `noindex`, no CNAME file, robots.txt disallows all.
Not changed: live WordPress site, DNS, domain, billing.
- Fonts Montserrat + Cinzel self-hosted (woff2) in assets/fonts. No Google Fonts calls. No jQuery/Elementor JS: assets/js/site.js (about 30 lines) handles the Books dropdown tap and FAQ toggles.
- The Line = "Coming Soon" page. "What We Hide" (WordPress draft) is not migrated and not in any menu.
- Cutover checklist (later phase, needs Mel's OK): remove `<meta name="robots" content="noindex, nofollow">` from all pages, replace robots.txt with the commented lines, add CNAME file `mlardalan.com`, change DNS (see plan), switch 404.html asset paths if hosted at a sub-path.
- Undo: delete the repo / unpublish Pages. Nothing else depends on it.
