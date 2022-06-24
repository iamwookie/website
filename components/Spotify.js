export default function Spotify({ music }) {
  const name = music.name;
  const image = music.album?.images[0]?.url;
  const url = music.external_urls?.spotify;

  let artists = [];

  for (const artist of music.artists) {
    artists.push(artist.name);
  }

  return (
    <div className='mt-4 pt-4 border-t-2'>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className='flex overflow-hidden bg-darkslate rounded-md animate__animated animate__fadeIn'>
          <img src={image} className='w-20' />
          <div className='flex flex-col flex-auto justify-center text-left mx-2'>
            <h1 className='my-auto text-sm'>Listening on Spotify...</h1>
            <h1 className='my-auto text-lg'>{name}</h1>
            <h1 className='my-auto text-sm text-spotify'>{artists.join(', ')}</h1>
          </div>
        </div>
      </a>
    </div>
  );
}
