import React from 'react';
import Card from './Card';

import data from './data.json'
import QRCode from 'react-qr-code';

function AVStar() {

    const QRLink = 'https://av-star.vercel.app/'


    return (
        <>

            <div className='flex justify-between p-4 border-b'>
                <div className='flex gap-2'>
<h1 className='text-2xl bg-[#578FCA] text-white px-3 py-1 rounded-lg'>AVStar</h1>
                <div>
                    <QRCode
                        size={32}
                        className="w-full h-full"
                        value={QRLink}
                        viewBox={`0 0 256 256`}
                    />
                </div>
                </div>
                


                <div>
                    <input type="text" placeholder='Search' className='border px-2 py-1 rounded-lg' />
                </div>

                <div className='flex gap-3'>
                    <button className='border px-2 py-1 rounded-lg'>AV</button>
                    <button className='border px-2 py-1 rounded-lg'>MV</button>


                </div>

            </div>
            <div className='md:p-10 p-4 mb-10'>
                <div className='grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                    {data.map((item, index) => (
                        <Card key={index} data={item} />
                    ))}
                </div>
            </div>

        </>
    )
}
export default AVStar;