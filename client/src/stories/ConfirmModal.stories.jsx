import React from 'react';
import { ConfirmModal } from '../components';

export default {
  title: 'ConfirmModal/ConfirmModal',
  component: ConfirmModal,
};

const Template = (args) => <ConfirmModal {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: true,
  title: 'My favourite movies',
  url: 'http://localhost:3000/recommend?title="My favourite movies"?ids=100,200,300',
  onClose: () => {}
}


