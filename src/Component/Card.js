import React, { useState, useEffect } from "react";
function extractBase64FromUrl(dataUrl) {
    const match = dataUrl.match(/^url\(["']?(data:image\/[^;]+;base64,[^"')]+)["']?\)$/);
    return match ? match[1] : null;
}


function Card({ data }) {

    const [imageData, setImageData] = useState(null);

    const id = 1;



    useEffect(() => {
        const fetchIMG = async () => {

            const response = await fetch(`/img_${id}.json`);
            const data = await response.json();
            console.log('data', data.image)
            const base64Data = extractBase64FromUrl(data.image);

            setImageData(base64Data);
        }

        fetchIMG();
    }, [id]);



    return (
        <>
            <div className="border rounded-lg shadow-sm min-h-64 p-2">
                <div className="flex items-center justify-center">
                    <img className="rounded-lg" src={imageData} alt="Uploaded preview" />;

                </div>
                <div className="p-2">
                    <div className="font-bold text-xl text-left">{data.name}</div>
                    <div className="text-left  space-y-2">
                        <div className="flex justify-between">
                            <div className="font-medium">Aliases</div>
                            <div> {data.aliases}</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="font-medium">Birthdate</div>
                            <div> {data.birthdate}</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="font-medium">Agency </div>
                            <div> {data.agency}</div>
                        </div>
                        <div className="border rounded-lg p-2 flex flex-wrap gap-2">
                            {data.notable_works && data.notable_works.map((item, index) => (
                                <div key={index} className="border rounded-lg px-2 py-1">{item}</div>

                            ))}

                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Card;