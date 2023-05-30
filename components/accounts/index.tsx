import {Button, Input, Text} from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import {Breadcrumbs, Crumb, CrumbLink} from '../breadcrumb/breadcrumb.styled';
import {TrashIcon} from '../icons/accounts/trash-icon';
import {HouseIcon} from '../icons/breadcrumb/house-icon';
import {UsersIcon} from '../icons/breadcrumb/users-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {Flex} from '../styles/flex';
import {TableWrapper} from '../table/table';

export const Accounts = () => {
   return (
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
         <Breadcrumbs>
            <Crumb>
               <HouseIcon />
               <Link href={'/'}>
                  <CrumbLink href="#">Home</CrumbLink>
               </Link>
               <Text>/</Text>
            </Crumb>

            <Crumb>
               <UsersIcon />
               <CrumbLink href="#">Users</CrumbLink>
               <Text>/</Text>
            </Crumb>
            <Crumb>
               <CrumbLink href="#">List</CrumbLink>
            </Crumb>
         </Breadcrumbs>

         <Text h3>All Accounts</Text>
         <Flex
            css={{gap: '$8'}}
            align={'center'}
            justify={'between'}
            wrap={'wrap'}
         >
            <Flex
               css={{
                  'gap': '$6',
                  'flexWrap': 'wrap',
                  '@sm': {flexWrap: 'nowrap'},
               }}
               align={'center'}
            >
               <Input
                  css={{width: '100%', maxW: '410px'}}
                  placeholder="Search users"
               />
            </Flex>
         </Flex>

         <TableWrapper />
      </Flex>
   );
};
