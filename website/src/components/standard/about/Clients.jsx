import React from 'react';

function Clients() {

    const imgDiv = (img, name) => {
        return (<div className="flex items-center justify-center h-24 p-2">
            <img className="max-w-full fill-current opacity-60 object-contain" height="90" src={img} alt={name}/>
        </div>)
    }

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
                <div className="max-w-3xl mx-auto text-center mb-4 md:mb-12">
                    <h1 className="h2 mb-4">Trusted by industry leaders</h1>
                </div>

                <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                    {imgDiv("/standard/NBC.png", "NBC")}
                    {imgDiv("/standard/Google.png", "Google")}
                    {imgDiv("/standard/Cash.png", "Cash App")}
                    {imgDiv("/standard/Square.png", "Square")}
                    {imgDiv("/standard/Mirror.png", "Mirror")}
                    {imgDiv("/standard/LINKNYC.png", "LINK NYC")}
                    {imgDiv("/standard/Janegoodall.png", "Jane Goodall")}
                    {imgDiv("/standard/Espn.png", "ESPN")}
                    {imgDiv("/standard/classpass.png", "Classpass")}
                    {imgDiv("/standard/Betterment-Wordmark-2.png", "Betterment")}
                    {imgDiv("/standard/onedroplogo.png", "One Drop")}
                    {imgDiv("/standard/peloton.png", "Peloton")}
                    {imgDiv("/standard/Quartz.png", "Quartz")}
                    {imgDiv("/standard/quovo.png", "Quovo")}
                    {imgDiv("/standard/samsung.png", "Samsung")}
                    {imgDiv("/standard/thrive.png", "Thrive")}
                </div>
            </div>
        </section>
    );
}

export default Clients;