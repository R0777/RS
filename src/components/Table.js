import React from 'react';

const Table = (props) => {

    return (
<section>
<table className={`main__table ${props.tableOpen && "active"}`}>
    <tr>
        <th>Платформа</th>
        <th>Производительность</th>
        <th>Устройства</th>
        <th>Активных</th>
        <th>Неактивных</th>
        <th>Не опрошенных</th>
    </tr>
    <tr>
        <td>234</td>
        <td>1234</td>
        <td>234</td>
        <td>1234</td>
        <td>123</td>
        <td>1324</td>
    </tr>
    <tr>
        <td>1324</td>
        <td>1234</td>
        <td>1234</td>
        <td>1324</td>
        <td>1234</td>
        <td>1324</td>
        
    </tr>

    </table>
    </section>
    );
}

export default Table;