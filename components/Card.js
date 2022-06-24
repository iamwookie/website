import Links from "./Links";
import Spotify from "./Spotify";

export default function Card({ musicData }) {
  return (
    <div className='backdrop-blur-xl p-5 rounded-lg text-center text-white font-nunito animate__animated animate__fadeIn'>
      <img src='/assets/logo.gif' alt='Logo' className='mx-auto w-36 rounded-full border-2' />

      <h1 className='mt-1 text-2xl sm:text'>{"👋 Hi, I'm Bilal (A.K.A Wookie)"}</h1>
      <h2 className='mt-1 text-sm'>Semi Full Stack Developer</h2>

      <p className='mt-4 pt-4 border-t-2 text-base'>
        🔭 Working On: <a href='https://nebularoleplay.com' target='_blank' rel='noreferrer' className='underline'>Nebula Roleplay</a><br />
        📚 Studying: Computer Science
      </p>

      <Links />

      {musicData && <Spotify music={musicData.item} />}
    </div>
  );
}
