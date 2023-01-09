import React from 'react';

function Clients() {

    const imgDiv = (img, name) => {
        return (<div className="flex items-center justify-center h-24 p-2">
            <img className="max-w-full fill-current  object-contain" height="90" src={img} alt={name}/>
        </div>)
    }

    return (
        <section className="w-full bg-gray-700 border-t-white border-t">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">


                <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                    {imgDiv("/standard/Square.png", "Square")}
                    {imgDiv("/standard/NBC.png", "NBC")}
                    {imgDiv("/standard/peloton.png", "Peloton")}
                    {imgDiv("/standard/Google.png", "Google")}
                </div>
            </div>
        </section>
    );
}

export default Clients;