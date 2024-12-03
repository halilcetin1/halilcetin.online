import { Helmet } from "react-helmet-async"

function Services() {
  return (
    <div className="flex justify-center items-center w-full gap-2 flex-wrap max-sm:gap-6">
      <Helmet>
        <title>card</title>
        <meta  name='keywords' content='Halil çetin ,halilcetinonline ,halil Çetin ,web geliştiricisi ,şanlıurfa web '/>
      </Helmet>
<div className="flex flex-col  gap-1 w-80 border border-orange-600 rounded-md p-8">
 <h1 className="text-left font-serif text-white bg-orange-600">HTML</h1>
 <p  className="font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam voluptatem nesciunt non nam quisquam unde, optio adipisci laudantium ea neque quaerat aliquid incidunt quia eius dolor, reprehenderit ab sapiente?</p>
</div>

<div className="flex flex-col  gap-1 w-80 border border-blue-300 rounded-md p-8">
 <h1 className="text-left font-serif bg-blue-300 text-white">CSS</h1>
 <p  className="font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam voluptatem nesciunt non nam quisquam unde, optio adipisci laudantium ea neque quaerat aliquid incidunt quia eius dolor, reprehenderit ab sapiente?</p>
</div>
<div className="flex flex-col  gap-1 w-80 border border-yellow-300 rounded-md p-8">
 <h1 className="text-left font-serif bg-yellow-300 text-bl text-black">JavaScript</h1>
 <p  className="font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam voluptatem nesciunt non nam quisquam unde, optio adipisci laudantium ea neque quaerat aliquid incidunt quia eius dolor, reprehenderit ab sapiente?</p>
</div>
<div className="flex flex-col  gap-1 w-80 border border-blue-500 rounded-md p-8">
 <h1 className="text-left font-serif bg-blue-500 text-white">React</h1>
 <p  className="font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam voluptatem nesciunt non nam quisquam unde, optio adipisci laudantium ea neque quaerat aliquid incidunt quia eius dolor, reprehenderit ab sapiente?</p>
</div>
<div className="flex flex-col  gap-1 w-80 border border-purple-700 rounded-md p-8">
 <h1 className="text-left font-serif text-white bg-purple-700">C#</h1>
 <p  className="font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam voluptatem nesciunt non nam quisquam unde, optio adipisci laudantium ea neque quaerat aliquid incidunt quia eius dolor, reprehenderit ab sapiente?</p>
</div>
<div className="flex flex-col  gap-1 w-80 border border-blue-900 rounded-md p-8">
 <h1 className="text-left font-serif text-white bg-blue-900">MySql</h1>
 <p className="font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam voluptatem nesciunt non nam quisquam unde, optio adipisci laudantium ea neque quaerat aliquid incidunt quia eius dolor, reprehenderit ab sapiente?</p>
</div>
    </div>
  )
}

export default Services