//! STORY REEL
import React from 'react';
import './StoryReel.css';
import Story from './Story';

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <h3>Story Reel</h3>
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default StoryReel;
