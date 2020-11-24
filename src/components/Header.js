import React from 'react';
import List from './List';
import logo from '../images/jpg/logo-rs.jpg';

const Header = (props) => {
    return (
        <header className="header"><img src={logo} alt="Банк Русский Стандарт" className="header__logo"/>
        <nav className="header__menu-navigation">

            <ul className="header__menu">
                <li className="header__menu-item" onClick={props.handleListOpen}>Офисы</li>
                <li className="header__menu-item">Оборудование</li>
                <li className="header__menu-item">Phones</li>
                <li className="header__menu-item">IP Planning</li>
                <li className="header__menu-item">Reports</li>
                <li className="header__menu-item">Phones reports</li>
                <li className="header__menu-item">Tools</li>
                <li className="header__menu-item">Справочник</li>
            </ul>
            <List listOpen={props.listOpen} handleTableOpen={props.handleTableOpen} />
        </nav>
        </header>
    );
}

export default Header;