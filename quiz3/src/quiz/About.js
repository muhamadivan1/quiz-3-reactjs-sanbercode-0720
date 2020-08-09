import React, { Component } from 'react'


class About extends Component {
    render() {
        return(
            <>
                <div>
                <header>
                    <img id="logo" src="public/img/logo.png" width="200px" />
                    <nav>
                        <ul style={{float: "right", justifyContent: "space-between", display: "flex", textAlign: "right", listStyle: "none"}}>
                            <li style={{listStyle: "none", marginLeft: "10px", display: "inline-block"}}><a href="index.html">Home </a> </li>
                            <li style={{listStyle: "none", marginLeft: "10px", display: "inline-block"}}><a href="about.html">About </a> </li>
                            <li style={{listStyle: "none", marginLeft: "10px", display: "inline-block"}}><a href="contact.html">Movie List Editor </a> </li>
                        </ul>
                    </nav>
                </header>
                </div>
                <div>
                    <h1>Data Peserta Sanbercode Bootcap React JS</h1>
                    <p>
                        <b>Nama: <b/></b>Muhamad Ivan Fadilah <br/><b>Email: </b>muhammadivan174@gmail.com <br/><b>Sistem Operasi: </b> Windows 10 <br/><b>Akun Github: </b>https://github.com/muhamadivan1 <br/>
                    </p>
                </div>
            </>
        )
    }
}

export default About