import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../index.css';


const App = () => {

    const [listOpen, setListOpen] = React.useState(false);
    const [tableOpen, setTableOpen] = React.useState(false);


    function handleListOpen() {
        setListOpen(true)
    }

    function handleTableOpen() {
        setListOpen(false)
        setTableOpen(true)
    }

    return (
        
                <div className="page">
                    <Header handleListOpen={handleListOpen} handleTableOpen={handleTableOpen} listOpen={listOpen} />
                    <Main tableOpen={tableOpen} />
                    <Footer />
                </div>
    );
}

export default App;
