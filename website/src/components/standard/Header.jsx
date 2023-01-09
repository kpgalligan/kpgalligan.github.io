import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import Dropdown from '../../utils/Dropdown';
import Logo from '@site/static/img/Touchlab_Gradient.png';

function Header() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const trigger = useRef(null);
    const mobileNav = useRef(null);

    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({target}) => {
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close the mobile menu if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}) => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    let linkId = 0
    const link = (name, path, subItems, indent) => {
        return {name: name, path: path, subItems: subItems, indent: indent, linkId: linkId++}
    }

    const menuItems = [
        link("Home", "/"),
        link("Services", null, [
            link("Hands On Help", "/kmmpro", null, true),
            link("Developer Support", "/kmmpro", null, true),
            link("Organizational Support", "/kmmpro", null, true),
            link("App/Product Development", "/kmmpro", null, true),
        ]),
        link("Products", null, [
            link("Plasma UI (LUI)", "/plasmaui", null, true),
            link("SKIE", "/skie", null, true),
            link("Markdown Page Example", "/markdown-page", null, true),
            link("Open Source Libraries", "https://github.com/touchlab", null, true),
        ]),
        link("Blog", "/blog"),
        link("About Us", "/about")
    ]

    const linkDesktop = ({name, path, subItems, linkId}) => {
        return (subItems ?
            <Dropdown key={`desk-dd-${linkId}`} title={name}>
                {subItems.map(linkDesktop)}
            </Dropdown>
            :
            <li key={`ld-${linkId}`}>
                {path.indexOf("http") !== 0 &&
                    <Link to={path}
                          className="text-gray-300 hover:text-cyan-300 font-bold px-4 py-2 flex items-center transition duration-150 ease-in-out ">
                        {name}
                    </Link>
                }
                {path.indexOf("http") === 0 &&
                    <a href={path}
                       className="text-gray-300 hover:text-cyan-300 font-bold px-4 py-2 flex items-center transition duration-150 ease-in-out ">
                        {name}
                    </a>
                }
            </li>)
    }

    const linkMobile = ({name, path, subItems, indent, linkId}) => {

        return (subItems ?
            <li
                key={`lm-${linkId}`}
                className="relative"
            >
            {dropdownMobile(subItems, name, linkId)}
            </li>
            :
            <li key={`lm-${linkId}`}>
                <Link to={path} className="flex text-cyan-200 hover:text-cyan-200 py-2 px-4 text-2xl">{name}</Link>
            </li>)
    }

    const dropdownMobile = (subItems, title, linkId) => {
        const [menuOpen, setMenuOpen] = useState(false);
        return (

                <div>
                <a
                    className="text-2xl text-gray-300 hover:text-gray-200 font-bold px-4 py-2 flex items-center transition duration-150 ease-in-out"
                    href="#0"
                    onClick={(e) => {
                        e.preventDefault()
                        setMenuOpen(!menuOpen)
                    }}
                >
                    {title}
                    <svg className="w-3 h-3 fill-current text-gray-500 cursor-pointer ml-1 shrink-0" viewBox="0 0 12 12"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"/>
                    </svg>
                </a>
                    <div className={`ml-4 ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="pl-4">
                    {subItems.map((subLink) => {
                        return (
                            <li key={`lm-${subLink.linkId}`}>
                                <Link to={subLink.path}
                                      className="text-cyan-200 hover:text-cyan-200 py-2 px-4 text-2xl">{subLink.name}</Link>
                            </li>
                        )
                    })}
                    </ul>
                    </div>
                </div>

        )
    }

    const bgBar = false
    return (
        <header className="absolute w-full z-10">
            <div className="fixed md:relative w-full">
                <div
                    className="from-black z-20 to-transparent bg-gradient-to-b w-full absolute top-0 left-0 opacity-70 md:opacity-30 pointer-events-none h-24 md:h-20"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-50">

                    <div className="flex items-center justify-between h-20">
                        <div className="flex-initial w-56 justify-start">
                            <Link to="/" className="block">
                                <img src={Logo} className="h-8"/>
                            </Link>
                        </div>

                        <nav className="hidden md:flex md:grow">
                            <ul className={`flex grow justify-center flex-wrap items-center${bgBar && ' bg-gray-900 rounded-full bg-opacity-25 '}`}>
                                {menuItems.map(linkDesktop)}
                            </ul>
                            <ul className="flex flex-initial w-56 justify-end flex-wrap items-center">
                                {/*<li>*/}
                                {/*  <Link to="/signin" className="font-medium text-cyan-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">KMM Pro Login</Link>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*  <Link to="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Sign up</Link>*/}
                                {/*</li>*/}
                                {/*{menuItems.map(linkDesktop)}*/}
                            </ul>
                        </nav>

                        <div className="md:hidden">
                            <button ref={trigger}
                                    className={`bg-opacity-0 bg-gray-900 hamburger ${mobileNavOpen && 'active'}`}
                                    aria-controls="mobile-nav" aria-expanded={mobileNavOpen}
                                    onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                                <span className="sr-only">Menu</span>
                                <svg
                                    className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="4" width="24" height="2" rx="1"/>
                                    <rect y="11" width="24" height="2" rx="1"/>
                                    <rect y="18" width="24" height="2" rx="1"/>
                                </svg>
                            </button>

                            <nav id="mobile-nav" ref={mobileNav}
                                 className={`absolute top-full z-20 left-0 w-full px-4 sm:px-6${mobileNavOpen ? ' block' : ' hidden'}`}>
                                <ul className="bg-gray-800 bg-opacity-90 px-4 py-2">
                                    {menuItems.map(linkMobile)}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>


            </div>
        </header>
    );
}

export default Header;
