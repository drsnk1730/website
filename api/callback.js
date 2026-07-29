export default async function handler(req, res) {
  const { code } = req.query;
  const client_id = process.env.OAUTH_CLIENT_ID;
  const client_secret = process.env.OAUTH_CLIENT_SECRET;

  if (!code) {
    return res.status(400).send("No code provided by GitHub.");
  }

  if (!client_id || !client_secret) {
    return res.status(500).send("OAUTH_CLIENT_ID or OAUTH_CLIENT_SECRET environment variable is missing.");
  }

  try {
    // Exchange the code for an access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code
      })
    });
    
    const data = await tokenResponse.json();
    
    if (data.error) {
      return res.status(500).send(`GitHub OAuth Error: ${data.error_description}`);
    }

    const token = data.access_token;
    
    // Decap CMS expects this specific window.postMessage format to complete the login
    const script = `
      <script>
        (function() {
          function receiveMessage(e) {
            window.opener.postMessage(
              'authorization:github:success:{"token":"${token}","provider":"github"}',
              e.origin
            );
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })();
      </script>
    `;
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(script);
  } catch (error) {
    console.error("OAuth Callback Error:", error);
    res.status(500).send("An error occurred during the OAuth handshake.");
  }
}
