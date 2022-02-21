import "./home.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import { Link } from 'react-router-dom'

import resume from '../../assets/pdf/AustinCarr.pdf'

export default function Home() {

    const textRef = useRef();
    
    useEffect(()=>{
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          startDelay: 1500,
          backSpeed: 60,
          cursorChar: "_",
          strings: ["Hello", "Hola", "Bonjour", "Ciao", "Guten tag", "Olá", "Kia Ora", "G’day", "Geia", "Zdravo", "Privet", "Nǐ hǎo", "Namaste", "Kon’nichiwa", "Merhaba", "Merhaba", "Anyeong Haseyo", "Ahoj", "Hallo", "Cześć", "S̄wạs̄dī", "Szia", "Ahoj", "Hyālō", "Assalam u Alaikum", "Salām", "Dobryj Den", "Hallå", "Hallo", "Bunâ", "Shalom", "Barev", "Marhabaan", "Sata Srī Akāla", "halo", "elamat Pagi", "Xin Chào", "Kaixo", "Servus", "Kamusta", "Jambo", "Salom", "Salam", "Slav", "Bonjou", "Dobry Dzień", "Moni", "Bula", "Aloha", "Tālofa", "Mālō e lelei", "A Gutn Tog", "S’mae", "Hei", "Sveiki", "Sveika/Sveiks", "Halló", "Halò", "Dia Duit", "Tere", "Tashi Delek", "Sabaidee", "Gamarjoba", "Dumela", "Saluton", "Bongu", "Nde-ewo", "Moïen", "Ya’at’eeh", "Grüezi", "Ia Orana", "Përshëndetje", "Sain uu", "Salaam Aleekum", "Nóng gō", "Vanakkam", "Salam", "Namaskāra", "Sannu", "Mingalaba", "Selam", "Demat", "Akkam", "Khurumjari", "Kumusta", "Salama", "Henda ho", "Choum Reap Sor", "Ayubowan", "Salam Alaykum", "Li-hó", "Dumela", "Allianchu", "Molweni" ],
        });
    },[])

  return (
      <div className="home" id="home">
        <div className="imgContainer">
          <div className="hello">
            <h1><span ref={textRef}></span></h1>
          </div>
          <div className="menu">
            <Link to="/about">
            <h4>
              About
            </h4>
            </Link>
            <a href={resume} target="_blank" rel="noreferrer">Resumé</a>
          </div>
        </div>
      </div>
  )
}
