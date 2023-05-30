import React from 'react';
import {Image, Grid} from '@nextui-org/react';
import {Flex} from '../styles/flex';

export const Content = () => (
   <Flex
      css={{
         'mt': '$5',
         'px': '$6',
         '@sm': {
            mt: '$10',
            px: '$16',
         },
      }}
      justify={'center'}
      direction={'column'}
   >
      <h1>About</h1>
      <Grid.Container gap={2} justify="center">
         <Grid xs={6}>
            <div>
               <h2>Lorem ipsum dolor sit amet</h2>
               <p>consectetur adipisicing elit. Tempora veniam iste impedit quas nulla qui autem amet ratione, dolorem saepe asperiores nesciunt quod magnam explicabo unde magni. Saepe, atque dolor?</p>
               <p>consectetur adipisicing elit. Tempora veniam iste impedit quas nulla qui autem amet ratione, dolorem saepe asperiores nesciunt quod magnam explicabo unde magni. Saepe, atque dolor?</p>
            </div>
         </Grid>
         <Grid xs={6}>
         <Image   
            src="https://i.pravatar.cc/500?u=a042581f4e29026024d"
            alt="Default Image"
         />
         </Grid>
      </Grid.Container>
   </Flex>
);
