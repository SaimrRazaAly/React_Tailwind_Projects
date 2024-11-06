import CardImg from '../asserts/card.png'
const Card_2 = () => {
  return (
    <div className='flex   max-w-[700px] 
    rounded-xl bg-gray-800 shadow-2xl shadow-slate-700 ml-9 min-h-[200px]  res-70:flex-col res-70:items-center res-70:justify-center'>
        <div className='res-70:w-auto'><img src={CardImg} alt="" className='w-[100%] h-[100%] rounded-bl-xl rounded-tl-xl  res-70:rounded-t-xl res-70:rounded-none ' /></div>
        <div className='flex flex-col px-10 gap-5 py-5  justify-center  res-70:px-2  '>
            <div className=' m-auto res-70:max-w-[200px] '>
            <sup className='bg-purple-700 text-white p-1 px-3 rounded-full res-70:text-left'>Beta</sup>
            <h2 className='text-2xl text-purple-300 font-extrabold res-70:text-center'>Somosa Salad</h2>
            </div>
        <p className='res-70:text-center max-w-[250px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic vitae labore consectetur culpa rem molestiae inventore, ut in doloremque, sapiente quidem, asperiores pariatur ipsa esse repellendus perspiciatis veniam vero est!</p>
        </div>
    </div>
  )
}

export default Card_2