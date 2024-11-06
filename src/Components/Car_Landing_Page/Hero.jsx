import arrow_Btn from "../../asserts/Assets/arrow_btn.png";
import play_icon from "../../asserts/Assets/play_icon.png";
import pause_icon from "../../asserts/Assets/pause_icon.png";
const Hero = ({
  heroCount,
  setHeroCount,
  playStatus,
  setPlayStatus,
  heroData,
}) => {
  return (
    <div className="mt-[100px] res-600:my-0 res-600:mt-[70px] res-600:mx-[120px]">
      <div className="text-white   text-[50px] res-69:text-[70px] res-69:leading-none res-70:text-[80px] res-69:text-left  text-center  ">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="bg-white rounded-full  py-1 px-4 mt-[50px] flex justify-between items-center res-1280:w-[30%] res-1000:w-[45%] res-70:w-[50%]relative res-69:m-0 res-69:mt-[50px] m-auto w-[80%]">
        <p>Explore the features</p>
        <img src={arrow_Btn} alt=""  className="-mr-3 res-70:w-auto w-[50px]" />
      </div>
      <div className=" flex justify-between items-center px-5 res-70:px-10 mt-20 gap-[150px] w-full  ">
        <ul className="flex ">
          <li
            onClick={() => setHeroCount(0)}
            className={`mini-btns ${heroCount === 0 ? "bg-orange-600 " : " bg-white"}`}
          >
            
          </li>
          <li
            onClick={() => setHeroCount(1)}
            className={`mini-btns ${heroCount === 1 ? "bg-orange-600 " : " bg-white"}`}
          >
            
          </li>
          <li
            onClick={() => setHeroCount(2)}
            className={`mini-btns ${heroCount === 2 ? "bg-orange-600 " : "bg-white"}`}
          >
            
          </li>
        </ul>

        <div>
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt="" className="res-70:w-auto w-[60px]"
          />
          <p className="text-white res-69:text-2xl">See the video</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
