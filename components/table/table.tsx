import {Table} from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import {Box} from '../styles/box';
import {columns} from './data';
import {RenderCell} from './render-cell';

interface User {
   id: number;
   firstName: string;
   lastName: string;
   email: string;
   image: string;
}

export const TableWrapper = () => {
   const [data, setData] = useState(null);
   const [isLoading, setLoading] = useState(false);
   
   useEffect(() => {
      setLoading(true);
      fetch('http://54.255.156.48:3000/users')
         .then((res) => res.json())
         .then((data) => {
            setData(data.data.users);
            setLoading(false);
         });
   }, []);
   
   if (isLoading) return <p>Loading...</p>;
   if (!data) return <p>No user data</p>;
   
   return (
      <Box
         css={{
            '& .nextui-table-container': {
               boxShadow: 'none',
            },
         }}
      >
         <Table
            aria-label="Example table with custom cells"
            css={{
               height: 'auto',
               minWidth: '100%',
               boxShadow: 'none',
               width: '100%',
               px: 0,
            }}
            selectionMode="multiple"
         >
            <Table.Header columns={columns}>
               {(column) => (
                  <Table.Column
                     key={column.uid}
                     hideHeader={column.uid === 'actions'}
                     align={column.uid === 'actions' ? 'center' : 'start'}
                  >
                     {column.name}
                  </Table.Column>
               )}
            </Table.Header>
            <Table.Body items={data}>
               {(item: User) => (
                  <Table.Row>
                     {(columnKey) => (
                        <Table.Cell>
                           {RenderCell({user: item, columnKey: columnKey})}
                        </Table.Cell>
                     )}
                  </Table.Row>
               )}
            </Table.Body>
            <Table.Pagination
               shadow
               noMargin
               align="center"
               rowsPerPage={8}
               onPageChange={(page) => console.log({page})}
            />
         </Table>
      </Box>
   );
};
