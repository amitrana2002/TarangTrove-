import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import React from 'react';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  <div>
    {isPlaying && activeSong?.title === song.title ? (
      <FaPauseCircle
        size={35}
        className='text-gray-300 cursor-pointer'
        onClick={handlePause}
      />
    ) : (
      <FaPlayCircle
        size={35}
        className='text-gray-300 cursor-pointer'
        onClick={handlePlay}
      />
    )}
  </div>
);

export default PlayPause;
