import React, { useState } from 'react';
import { Layout, Button, Card, Divider,message  } from 'antd';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const MyPcBuild = () => {
   const pc = useSelector(state=>state.pc)

   const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('Pc Build Successfully');
  };

  const isCompleteBuildEnabled = () => {
    const pCounts = Object.values(pc).reduce(
      (total, categoryproduct) => total + categoryproduct.length,
      0
    );
    return pCounts >= 5;
  };

  return (
    <Layout>
      <div style={{ padding: '1rem' }}>
       <div className='text-center'>
       <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>PC Builder</h1>
        <p>Build Your Own Computer</p>
       </div>
        {Object.entries(pc).map(([category, product]) => (
          <Card key={category} style={{ marginBottom: '1rem' }}>
            <div>
             
            <div >
<div className="flex w-full items-center space-x-2 sm:space-x-4">
    <div className="flex flex-col justify-between w-full pb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
                <h3 className=" text-base uppercase sm:text-lg font-semibold leadi sm:pr-8">{category}</h3>
                <p className="text-sm bg-gray-400 h-4 w-36 md:w-56"></p>
            </div>
            <div className="mt-5 sm:text-right">
                <Link href={`/categories/${category}`}>
                    <button className='py-3 cursor-pointer px-10 rounded-md bg-blue-500 border-none text-white'>Add</button>
                </Link>
            </div>
        </div>
    </div>
</div>


</div>
{product.length > 0 && <Divider />}
              {product.map((p) => (
              
               <div key={p._id} className="flex  w-full items-center space-x-2 sm:space-x-4">
                   <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={p?.image} alt="Polaroid camera" />
                   <div className="flex flex-col justify-between w-full pb-4">
                       <div className="flex justify-between w-full pb-2 space-x-2">
                           <div className="space-y-1">
                           <p className="text-sm uppercase text-gray-400">{p?.category}</p>
                               <h3 className="text-base sm:text-lg sm:font-semibold sm:pr-8">{p?.name}</h3>
                               
                           </div>
                           <div className="text-right">
                               <p className="text-lg font-semibold">${p?.price}</p>
                               
                           </div>
                       </div>
                   </div>
               </div>
         
              ))}
            </div>
          </Card>
        ))}
      
          <Button
            type="primary"
            style={{ width: '100%' }}
            disabled={!isCompleteBuildEnabled()}
            onClick={info}
          >
            Complete Build
          </Button>
      
      </div>
    </Layout>
  );
}
export default MyPcBuild