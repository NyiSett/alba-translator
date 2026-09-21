# ALBA Translator

Alibaba Dispute Translator application.

## Architecture

Frontend → FastAPI Backend → Gemini API

Gemini credentials must remain server-side and must never be committed to GitHub.

## Source Migration

The original single-file Alibaba Dispute Translator source has been reviewed. It contains:
- Mobile-first translator UI
- Myanmar ↔ English language switching
- Quick dispute phrases
- Local translation history
- Copy/use actions
- Existing browser-side Google Translate request

The frontend will be migrated into maintainable files and the translation request will be routed through the backend for Gemini integration.
