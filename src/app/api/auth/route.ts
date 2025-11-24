import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider');

  if (provider !== 'github') {
    return NextResponse.json({ error: 'Invalid provider' }, { status: 400 });
  }

  const clientId = process.env.GITHUB_OAUTH_ID;
  if (!clientId) {
    return NextResponse.json({ error: 'OAuth not configured' }, { status: 500 });
  }

  // Generate random state for security
  const state = Math.random().toString(36).substring(7);

  // Redirect to GitHub OAuth
  const authUrl = new URL('https://github.com/login/oauth/authorize');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('redirect_uri', `${url.origin}/api/auth/callback?provider=github`);
  authUrl.searchParams.set('scope', 'repo,user');
  authUrl.searchParams.set('state', state);

  return NextResponse.redirect(authUrl.toString());
}
