

import { Helmet, HelmetProvider } from 'react-helmet-async'
import './App.css'
import  Services from './Components/Services'

import Profil from './profil/Profil'

const helmetContext={}
function App() {

  return (
   <HelmetProvider context={helmetContext}>
<Helmet>
   <title>Anasayfa..</title>
   <meta name="description" content="halil çetin kişisel websitesi "  />
   <meta  name='keywords' content='Halil çetin ,halilcetinonline ,halil Çetin ,web geliştiricisi ,şanlıurfa web '/>
</Helmet>
   <div>
<h1 className='text-center text-3xl mt-4 font-bold tracking-widest'>Hoşgeldiniz... </h1>
   
    <Profil/>
<div className='my-4'>
<Services/>
</div>
<div className='w-full text-center'>©
Halil ÇETİN</div>
   </div>
   </HelmetProvider>

  )
}

export default App
/**
   <header className=' group relative flex items-center justify-center'>
<button onClick={(e)=>{
e.target.style.display="none"
}} className=' max-sm:group-focus-within:none max-sm:block'>Aç</button>
<div ref={ref}  className='max-sm:h-96ax-sm:gap-3  max-sm:bg-black max-sm:w-2/4 max-sm:absolute max-sm:top-1 max-sm:right-1  max-sm:z-10  '>
<button className='hidden max-sm:block bg-red-600 max-sm:text-xl ' onClick={()=>{
  
}}>X</button>
<a href="">Anasayfa</a>
<a href="">Eğitim</a>
<a href="">İletişim</a>
<a href="">Referanlar</a>
<a href="">Hizmetler</a>

</div>



    </header>
 
 */