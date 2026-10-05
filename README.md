# Before You Border

Global border and transit readiness checker.

## Stack
- Next.js
- Vercel
- Supabase
- Supabase Edge Function: run-trip-check

## Environment
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

The checker is deliberately conservative. It does not promise entry or visa approval; live immigration/transit data should be connected to authoritative sources before production launch.