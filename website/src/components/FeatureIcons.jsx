import React from 'react';

function CircleBlock(svgBody) {
    return (
        <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-current text-amber-600" width="64" height="64" rx="32"/>
            {svgBody()}
        </svg>
    )
}

export function FavList() {
    return (
        <>{CircleBlock(() => {
            return (
                <>
                    <path className="stroke-current text-amber-100"
                          d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                          strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd"/>
                    <path className="stroke-current text-amber-300" d="M43 42h-9M43 37h-9" strokeLinecap="square"
                          strokeWidth="2"/>
                </>
            )
        })}</>
    )
}

export function Note() {
    return (
        <>{CircleBlock(() => {
            return (
                <>
                    <path className="stroke-current text-amber-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                    <path className="stroke-current text-amber-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                </>
            )
        })}</>
    )
}

export function World2() {
    return (
        <>{CircleBlock(() => {
            return (
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                    <ellipse className="stroke-current text-amber-300" cx="11" cy="11" rx="5.5" ry="11" />
                    <path className="stroke-current text-amber-100" d="M11 0v22M0 11h22" />
                    <circle className="stroke-current text-amber-100" cx="11" cy="11" r="11" />
                </g>
            )
        })}</>
    )
}

export function Cyborg() {
    return (
        <>{CircleBlock(() => {
            return (
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                    <path className="stroke-current text-amber-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                    <circle className="stroke-current text-amber-300" cx="13" cy="9" r="3" />
                </g>
            )
        })}</>
    )
}

export function ThumbUp() {
    return (
        <>{CircleBlock(() => {
            return (
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                    <path className="stroke-current text-amber-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                    <path className="stroke-current text-amber-300" d="M22 30h4v12h-4z" />
                </g>
            )
        })}</>
    )
}

export function Messaging() {
    return (
        <>{CircleBlock(() => {
            return (
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                    <path className="stroke-current text-amber-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                    <circle className="stroke-current text-amber-300" cx="17" cy="5" r="3" />
                    <path className="stroke-current text-amber-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
            )
        })}</>
    )
}

export function NetworkConnection() {
    return (
        <>{CircleBlock(() => {
            return (
                <g transform="translate(21 22)" stroke-linecap="square" stroke-width="2" fill="none" stroke-linejoin="miter"
                   className="nc-icon-wrapper" stroke-miterlimit="10">
                    <line data-cap="butt" x1="8.6" y1="10.2" x2="15.4" y2="6.8" stroke-linecap="butt"
                          className="stroke-current text-amber-100"></line>
                    <line data-cap="butt" x1="8.6" y1="13.7" x2="15.4" y2="17.1" stroke-linecap="butt"
                          className="stroke-current text-amber-100"></line>
                    <circle cx="5" cy="12" r="4" className="stroke-current text-amber-300"></circle>
                    <circle cx="19" cy="5" r="4" className="stroke-current text-amber-300"></circle>
                    <circle cx="19" cy="19" r="4" className="stroke-current text-amber-300"></circle>
                </g>
            )
        })}</>
    )
}

export function FilterOrganization() {
    return (
        <>{CircleBlock(() => {
            return (

                <g stroke-linecap="square" stroke-width="2" fill="none" stroke-linejoin="miter"
                   className="nc-icon-wrapper" stroke-miterlimit="10">
                    <g transform="translate(20 20)">
                        <line x1="3" y1="13" x2="10" y2="13" className="stroke-current text-amber-100"></line>
                        <line x1="3" y1="5" x2="10" y2="5" className="stroke-current text-amber-100"></line>
                        <polyline points=" 3,1 3,21 10,21 " className="stroke-current text-amber-100"></polyline>
                        <rect x="10" y="3" width="11" height="4" className="stroke-current text-amber-300"></rect>
                        <rect x="10" y="19" width="11" height="4" className="stroke-current text-amber-300"></rect>
                        <rect x="10" y="11" width="11" height="4" className="stroke-current text-amber-300"></rect>
                    </g>
                </g>

            )
        })}</>
    )
}

const big = false

export function Apple() {
    return (
        <>{CircleBlock(() => {
    if(big){
        return (
            <g stroke-linecap="square" stroke-width="2" fill="none" stroke-linejoin="miter"
               className="nc-icon-wrapper" stroke-miterlimit="10">
                <g transform="translate(16 13)">
                    <path className="stroke-current text-amber-100"
                        d="M28,23.697 c-0.656,1.427-0.969,2.064-1.815,3.325c-1.177,1.761-2.839,3.954-4.897,3.973c-1.829,0.017-2.299-1.168-4.781-1.155 s-3,1.176-4.829,1.159c-2.058-0.018-3.631-1.999-4.81-3.761c-3.295-4.925-3.639-10.704-1.607-13.776 c1.444-2.184,3.723-3.461,5.865-3.461c2.181,0,3.552,1.174,5.356,1.174c1.75,0,2.815-1.176,5.338-1.176 c1.906,0,3.926,1.019,5.365,2.78C22.47,15.318,23.236,21.929,28,23.697L28,23.697z"></path>
                    <path className="stroke-current text-amber-300"
                        d="M20.56,5.722 C21.515,4.497,22.239,2.768,21.976,1c-1.56,0.107-3.383,1.099-4.448,2.392c-0.966,1.173-1.765,2.914-1.455,4.606 C17.775,8.051,19.537,7.035,20.56,5.722L20.56,5.722z"
                        ></path>
                </g>
            </g>

        )
    }else{
        return (
            <g stroke-linecap="square" stroke-width="2" fill="none" stroke-linejoin="miter"
               className="nc-icon-wrapper" stroke-miterlimit="10">
                <g transform="translate(20 18)">
                    <path className="stroke-current text-gray-700"
                          d="M21,17.423 c-0.492,1.09-0.727,1.576-1.361,2.54c-0.883,1.345-2.129,3.02-3.673,3.034c-1.372,0.013-1.724-0.892-3.586-0.882 c-1.861,0.01-2.25,0.898-3.622,0.885c-1.544-0.014-2.723-1.526-3.608-2.872C2.68,16.366,2.422,11.952,3.946,9.606 c1.083-1.668,2.792-2.643,4.399-2.643c1.636,0,2.664,0.897,4.017,0.897c1.312,0,2.112-0.898,4.003-0.898 c1.43,0,2.944,0.778,4.024,2.123C16.853,11.023,17.427,16.072,21,17.423L21,17.423z"></path>
                    <path
                        d="M15.1,3.45c0.65-0.834,1.143-2.011,0.964-3.214 c-1.062,0.073-2.302,0.748-3.027,1.628c-0.658,0.799-1.201,1.983-0.99,3.135C13.205,5.035,14.404,4.343,15.1,3.45L15.1,3.45z"
                        stroke-linejoin="miter" stroke="none" className="stroke-current text-cyan-600"></path>
                </g>
            </g>
        )
    }
        })}</>
    )
}

export function Android() {
    return (
        <>{CircleBlock(() => {
            if(big){
                return (
                    <g stroke-linecap="square" stroke-width="2" fill="none"  stroke-linejoin="miter"
                       className="nc-icon-wrapper" stroke-miterlimit="10">
                        <g transform="translate(16 15)">
                            <path d="M31,23A15.154,15.154,0,0,0,1,23Z" className="stroke-current text-gray-700"></path>
                            <line x1="6" y1="6" x2="8.88" y2="11.76" className="stroke-current text-cyan-600"></line>
                            <circle cx="8.5" cy="18.5" r="1.5" stroke="none" className="stroke-current text-cyan-600"></circle>
                            <line x1="26" y1="6" x2="23.12" y2="11.76" className="stroke-current text-cyan-600"></line>
                            <circle cx="23.5" cy="18.5" r="1.5" stroke="none" className="stroke-current text-amber-300"></circle>
                        </g>
                    </g>
                )
            }else{
                return (
                    <g stroke-linecap="square" stroke-width="2" fill="none" stroke-linejoin="miter"
                       className="nc-icon-wrapper" stroke-miterlimit="10">
                        <g transform="translate(20 19)">
                            <path d="M22.95,17a11,11,0,0,0-21.9,0Z" className="stroke-current text-gray-700"></path>
                            <line x1="5" y1="4" x2="7.404" y2="8.006" className="stroke-current text-cyan-600"></line>
                            <circle cx="7" cy="13" r="1" stroke="none" className="stroke-current text-cyan-600"></circle>
                            <line x1="19" y1="4" x2="16.596" y2="8.006" className="stroke-current text-cyan-600"></line>
                            <circle cx="17" cy="13" r="1" stroke="none" className="stroke-current text-cyan-600"></circle>
                        </g>
                    </g>
                )
            }

        })}</>
    )
}

export function DecisionProcess() {
    return (
        <>{CircleBlock(() => {
            return (
                <g stroke-linecap="square" stroke-width="2" fill="none" stroke-linejoin="miter"
                   className="nc-icon-wrapper" stroke-miterlimit="10">
                    <g transform="translate(22 20)">
                        <rect x="2" y="2" width="8" height="4" className="stroke-current text-cyan-600"></rect>
                        <rect x="2" y="18" width="8" height="4" className="stroke-current text-cyan-600"></rect>
                        <line x1="6" y1="9" x2="6" y2="15" className="stroke-current text-gray-700"></line>
                        <polyline points="13 4 17 4 17 6" className="stroke-current text-gray-700"></polyline>
                        <polyline points="13 20 17 20 17 18" className="stroke-current text-gray-700"></polyline>
                        <polygon points="12 12 17 9 22 12 17 15 12 12"
                                 className="stroke-current text-cyan-600"></polygon>
                    </g>
                </g>
            )
        })}</>
    )
}

