import { ComponentStory, Meta } from '@storybook/react';
import ColorTools from './ColorTools';

export default {
  component: ColorTools,
  title: 'Tools/Colors',
} as Meta;

const Template: ComponentStory<typeof ColorTools> = (args) => (
  <ColorTools {...args} />
);

export const Pallete = Template.bind({});
Pallete.args = {
  colors: ['#a855f7'],
  strategy: 'shades',
};

export const PalleteRange = Template.bind({});
PalleteRange.args = {
  colors: ['#f3e8ff', '#a855f7', '#581c87'],
  strategy: 'extrema',
};
