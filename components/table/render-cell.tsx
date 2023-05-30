import {Col, Row, User, Text, Tooltip} from '@nextui-org/react';
import React from 'react';
import {DeleteIcon} from '../icons/table/delete-icon';
import {EditIcon} from '../icons/table/edit-icon';
import {EyeIcon} from '../icons/table/eye-icon';
import {IconButton} from './table.styled';
import {useRouter} from 'next/router';

interface User {
   id: number;
   firstName: string;
   lastName: string;
   email: string;
   image: string;
}

interface Props {
   user: User;
   columnKey: string | React.Key;
}

export const RenderCell = ({user, columnKey}: Props) => {
   const router = useRouter();
   // @ts-ignore
   const cellValue = user[columnKey];
   switch (columnKey) {
      case 'name':
         return (
            <User squared src={user.image} name={cellValue} css={{p: 0}}>
               {user.firstName} {user.lastName}
            </User>
         );
      case 'email':
         return (
            <Col>
               <Row>
                  <Text b size={14} css={{tt: 'capitalize'}}>
                     {cellValue}
                  </Text>
               </Row>
               <Row>
                  <Text
                     b
                     size={13}
                     css={{tt: 'capitalize', color: '$accents7'}}
                  >
                     {user.email}
                  </Text>
               </Row>
            </Col>
         );
      case 'actions':
         return (
            <Row
               justify="center"
               align="center"
               css={{'gap': '$8', '@md': {gap: 0}}}
            >
               <Col css={{d: 'flex'}}>
                  <Tooltip content="Details">
                     <IconButton
                        onClick={() => router.push(`/accounts/${user.id}`)}
                     >
                        <EyeIcon size={20} fill="#979797" />
                     </IconButton>
                  </Tooltip>
               </Col>
            </Row>
         );
      default:
         return cellValue;
   }
};
