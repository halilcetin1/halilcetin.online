
import { BsInstagram } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
import { GrGithub } from 'react-icons/gr'
import { MdMail } from 'react-icons/md'
import profil from '../images/profil.png'
import { Helmet } from 'react-helmet-async'

function Profil (){
    return(

<div className="card mb-32">
<Helmet>
    <title> Profil</title>
    <meta  name='keywords' content='Halil çetin ,halilcetinonline ,halil Çetin ,web geliştiricisi ,şanlıurfa web '/>
</Helmet>

<img className='foto' width={300} height={300} src={profil} alt="" />
<h1 id='title'>Halil ÇETİN</h1>
<h2 className='font-mono'>Web Developer</h2>
<div className='social-container'> <a href="https://www.instagram.com/halilcetin.8/"><BsInstagram className='social text-purple-600'/></a>
<a href="https://www.linkedin.com/in/halil-%C3%A7etin-aa238422a/"><LiaLinkedin className='linkedin text-blue-700 '/></a>
<a href="https://github.com/halilcetin1"><GrGithub className='social text-white'/></a>
<a href='mailto:halilc3618@gmail.com'><MdMail className='social text-green-400'/></a>

</div>
</div>

    )

}


export default Profil;



