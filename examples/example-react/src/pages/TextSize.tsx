import { Box } from '@styli/react';
import { configure } from '@styli/core';
import { presetWebRem } from '@styli/preset-web-rem';

// configure(presetWebRem);
// configure(presetWebRem, 'replace');

export default () => {
  return <Box text={30}>40 Lorem ipsum dolor sit amet</Box>;
  return (
    <Box>
      <Box text-30>40 Lorem ipsum dolor sit amet</Box>
      <Box text={40}>40 Lorem ipsum dolor sit amet</Box>
      <Box text={'20px'}>40 Lorem ipsum dolor sit amet</Box>
      <Box text-20px>40 Lorem ipsum dolor sit amet</Box>
      <Box text-17>Lorem ipsum dolor sit amet</Box>
      <Box text={17}>Lorem ipsum dolor sit amet</Box>
      <Box textXS>Lorem ipsum dolor sit amet</Box>
      <Box textSM>Lorem ipsum dolor sit amet</Box>
      <Box textBase>Lorem ipsum dolor sit amet</Box>
      <Box textLG>Lorem ipsum dolor sit amet</Box>
      <Box textXL>Lorem ipsum dolor sit amet</Box>
      <Box text2XL>Lorem ipsum dolor sit amet</Box>
      <Box text3XL>Lorem ipsum dolor sit amet</Box>
      <Box text4XL>Lorem ipsum dolor sit amet</Box>
      <Box text5XL>Lorem ipsum dolor sit amet</Box>
      <Box text6XL>Lorem ipsum dolor sit amet</Box>
      <Box text7XL>Lorem ipsum dolor sit amet</Box>
      <Box text8XL>Lorem ipsum dolor sit amet</Box>
      <Box text9XL>Lorem ipsum dolor sit amet</Box>
    </Box>
  );
};
