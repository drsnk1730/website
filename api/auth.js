export default function handler(req, res) {
  // Use Vercel Environment Variables
  const client_id = process.env.OAUTH_CLIENT_ID;
  
  if (!client_id) {
    return res.status(500).send("OAUTH_CLIENT_ID environment variable is missing.");
  }
  
  const host = req.headers.host;
  const protocol = host.includes('localhost') ? 'http' : 'https';
  
  // The URL to redirect back to after GitHub authorization
  const redirect_uri = `${protocol}://${host}/api/callback`;
  
  // Construct the GitHub OAuth URL
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  
  // Redirect the user to GitHub
  res.redirect(githubAuthUrl);
}
