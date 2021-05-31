import React from 'react';
import Head from 'next/head';
import SideBar from '../Sidebar/main';
interface Props {
   title: string;
   description?: string;
}
const Layout: React.FC<Props> = ({ title, description }) => {
   return (
      <>
         <Head>
            <title>{title}</title>
            {description && <meta name='description' content={description} />}
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <SideBar></SideBar>
      </>
   );
};

export default Layout;
