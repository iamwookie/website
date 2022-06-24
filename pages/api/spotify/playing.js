import Spotify from '../../../services/spotify';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const data = await Spotify.currentlyPlaying();

  res.status(200).json(data);
}