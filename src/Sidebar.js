import React from 'react';
import SidebarRow from './SidebarRow';
import {
  LocalHospital,
  EmojiFlags,
  People,
  Chat,
  Store,
  VideoLibrary,
  ExpandMore
} from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

const Sidebar = () => {
  return (
    <div>
      <SidebarRow src={Avatar} title='Tony Onserio' />
      <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
      <SidebarRow Icon={EmojiFlags} title='Pages' />

      <SidebarRow Icon={People} title='Friends' />
      <SidebarRow Icon={Chat} title='Messenger' />
      <SidebarRow Icon={Store} title='Marketplace' />
      <SidebarRow Icon={VideoLibrary} title='Videos' />
      <SidebarRow Icon={ExpandMore} title='Marketplace' />
    </div>
  );
};

export default Sidebar;
