import React from 'react';
import Table from './Table';


const Main = (props) => {

    return (
        <main className="main">

        <Table tableOpen={props.tableOpen} />
            
        </main>
    );
}

export default Main;