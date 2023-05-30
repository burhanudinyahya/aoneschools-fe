import {Button, Text, Card, Image} from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import {Flex} from '../styles/flex';
import {useRouter} from 'next/router';

export const UserDetail = (props: any) => {
   console.log(props)

   const router = useRouter();
   const {id} = router.query;
   const [data, setData] = useState(null);
   const [isLoading, setLoading] = useState(false);
   
   useEffect(() => {
      if(!router.isReady) return;
      setLoading(true);
      fetch(`http://54.255.156.48:3000/users/${id}`)
         .then((res) => res.json())
         .then((data) => {
            setData(data.data?.user);
            setLoading(false);
         });
   },[id, router.isReady]);
   
   if (isLoading) return <p>Loading...</p>;
   if (!data) return <p>No user data</p>;

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
         <h2>{data['firstName']} {data['lastName']}</h2>
         <Image   
            
            src={data['image']}
            alt="Default Image"
         />
         <Text>First Name: {data['firstName']}</Text>
         <Text>Last Name: {data['lastName']}</Text>
         <Text>Email: {data['email']}</Text>
      </Flex>
   );
};
