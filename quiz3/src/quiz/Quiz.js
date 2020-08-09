import React, { Component } from 'react'
import './Quiz.css'


class Quiz extends Component {
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
                <h1 style={{textAlign: "center"}}>Daftar Film</h1>
                </div>
                <div className="body">
                    <h3>The Boss Baby</h3>
                    <p>
                        <b>Rating: 9.0</b><br/><b>Durasi: 1 jam 37 menit</b><br/><b>Genre: Animasi, Komedi</b><br/><b>Deskripsi:</b> The Boss Baby mengisahkan seorang anak berusia 7 tahun bernama Tim (Miles Christopher Bakshi) yang memiliki kehidupan yang bahagia karena kasih sayang dari orang tuanya. Namun, semuanya berubah setelah kedatangan seorang bayi cerdas (Alec Baldwin). Kedatangan bayi cerdas tersebut telah mengambil perhatian dan juga kasih sayang orang tua Tim. Tim pun merasa cemburu dan berusaha mencari tau siapa sebenarnya bayi tersebut. Kecurigaannya terbukti ketika mendengar bayi tersebut berbicara layaknya orang dewasa dan dia mengenalkan dirinya sebagai Boss Bayi. Tim ingin membuktikan kepada kedua orangtuanya akan hal itu dan berusaha memenangkan kembali kasih sayang orang tuanya (Jimmy Kimmel dan Lisa Buscemi).
                    </p>
                </div>
            </>
        )
    }
}

export default Quiz