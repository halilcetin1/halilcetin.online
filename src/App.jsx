
import './App.css'

import { BsInstagram, BsMailbox } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
import { GrGithub } from 'react-icons/gr'
import { MdMail } from 'react-icons/md'
import profil from './images/profil.png'
function App() {

  return (
   <div>
    <header className='header'>
<a href="">Anasayfa</a>
<a href="">Eğitim</a>
<a href="">İletişim</a>

    </header>
<div className="card">
<img className='foto' width={300} height={300} src={profil} alt="" />
<h1 >Halil ÇETİN</h1>
<h2>Web Developer</h2>
<div className='social-container'> <a href="https://www.instagram.com/halilcetin_7/"><BsInstagram className='social'/></a>
<a href="https://www.linkedin.com/in/halil-%C3%A7etin-aa238422a/"><LiaLinkedin className='linkedin'/></a>
<a href="https://github.com/halilcetin1"><GrGithub className='social'/></a>
<a href='mailto:halilc3618@gmail.com'><MdMail className='social'/></a>

</div>
</div>

   
   </div>
  )
}

export default App
