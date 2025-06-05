import React from 'react';
import Card from './Card';

import data from './data.json'


function AVStar() {


    return (
        <>

            <div className='flex justify-between p-4 border-b'>
                <h1 className='text-2xl bg-[#578FCA] text-white px-3 py-1 rounded-lg'>AVStar</h1>
                <div>
                    <input type="text" placeholder='Search' className='border px-2 py-1 rounded-lg' />
                </div>
                <div className='flex gap-3'>
                    <button className='border px-2 py-1 rounded-lg'>AV</button>
                    <button className='border px-2 py-1 rounded-lg'>MV</button>


                </div>

            </div>
            <div className='md:p-10 p-4 mb-10'>
                <div className='grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10'>
                    {data.map((item, index) => (
                        <Card key={index} data={item} />
                    ))}
                </div>
            </div>

        </>
    )
}
export default AVStar;