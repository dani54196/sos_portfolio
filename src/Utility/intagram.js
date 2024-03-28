const fetchInstagramPosts = async () => {
  const accessToken = import.meta.env.VITE_TOKEN_INSTAGRAM;
  const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`);
  const data = await response.json();
  return data.data;
};

export default fetchInstagramPosts;