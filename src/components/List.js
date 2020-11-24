import React from 'react';

const List = (props) => {

    return (
    <ul className={`header__menu-list ${props.listOpen && "active"}`}>
        <li className="header__menu-list-item" onClick={props.handleTableOpen}>По моделям</li>
        <li className="header__menu-list-item">По кластерам</li>
        <li className="header__menu-list-item">По используемым</li>
        <li className="header__menu-list-item">По AL</li>

    </ul>
    );
}

export default List;