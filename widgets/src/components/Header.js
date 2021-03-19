import React from 'react';
import Link from './Link.js'
const Header = () =>{
    return (
        <div className = "ui secondary pointing menu">
            <Link href="/" className = "item">
                Accordion
            </Link>
            <Link href="/list" className = "item">
                Wiki Search widget
            </Link>
            <Link href="/dropdown" className = "item">
                DropDown widget
            </Link>
            <Link href="/translate" className = "item">
                Translate widget
            </Link>
        </div>
    ) ;
};
export default Header;