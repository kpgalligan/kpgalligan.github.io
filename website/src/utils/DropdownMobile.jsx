import React, {useState} from 'react';
import PropTypes from 'prop-types';

function DropdownMobile({
                            children,
                            title
                        }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <li
            className="relative"
        >
            <a
                className="text-2xl text-gray-300 hover:text-gray-200 font-bold px-4 py-2 flex items-center transition duration-150 ease-in-out"
                href="#0"
                onClick={(e) => {
                    e.preventDefault()
                    setDropdownOpen(!dropdownOpen)
                }}
            >
                {title}
                <svg className="w-3 h-3 fill-current text-gray-500 cursor-pointer ml-1 shrink-0" viewBox="0 0 12 12"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"/>
                </svg>
            </a>
            <div className={`${dropdownOpen ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </li>
    );
}

export default DropdownMobile;

DropdownMobile.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
};
