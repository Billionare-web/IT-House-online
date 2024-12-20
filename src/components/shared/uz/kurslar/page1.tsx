import { Link } from "react-router-dom";
import GrafikDizayn from "../../../imgs/GrafikDiayn.png";
import KiberXavfsizlik from "../../../imgs/Kiber xavfsizlik.png";
import WebDasturlash from "../../../imgs/web dasturlash.png";
import MsOffice from "../../../imgs/ms office.png";
import English from "../../../imgs/Engish.png";
import KompyuterSavodxonligi from "../../../imgs/kompyuter savodxonligi.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown } from "react-icons/fa6";

function Card() {
  return (
    <div>
        <ul className="flex py-3 px-32 gap-8 bg-gradient-to-r from-secondary h-15 mt-20 bg-[#E11D48]">
            <Link to={"/uz"}>Bosh sahifa</Link>
            <li className="list-disc">Barcha Kurslar</li>
        </ul>
        <h1 className="text-4xl font-semibold px-32 mt-10">Barcha Kurslar</h1>
        <p className="font-semibold mx-32">Siz o'rganish va rivojlanish uchun murakkab kurslar taklif <br />etamiz.</p>
        <div className="flex items-center justify-between mt-10 px-32">
        <h1>Ko'rsatilmoqda <span className="font-semibold">8</span> jami natijalar</h1>
        <div className="flex gap-2 items-center">
        <h1>Tartiblash Bo'yicha:</h1>
          <DropdownMenu>
            <DropdownMenuTrigger className="border border-input bg-background py-2 px-3 rounded-xl flex items-center gap-10">Filtr <FaAngleDown /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Hammasi</DropdownMenuItem>
              <DropdownMenuItem>Eng yangi</DropdownMenuItem>
              <DropdownMenuItem>Eng past narx</DropdownMenuItem>
              <DropdownMenuItem>Eng yuqori narx</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="border border-input bg-background py-2 px-3 rounded-xl flex items-center gap-10">Daraja<FaAngleDown /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Hammasi</DropdownMenuItem>
              <DropdownMenuItem>Boshlang'ich</DropdownMenuItem>
              <DropdownMenuItem>O'rta</DropdownMenuItem>
              <DropdownMenuItem>Daraja</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="border border-input bg-background py-2 px-3 rounded-xl flex items-center gap-10">Til<FaAngleDown /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Uzbek</DropdownMenuItem>
              <DropdownMenuItem>Russian</DropdownMenuItem>
              <DropdownMenuItem>Turkish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        </div>
        <hr className="mx-32 mt-7" />
        <div className="flex gap-10 px-32 mt-3">
        <div className="border-2 rounded-2xl">
            <img className="w-full h-72 rounded-xl" src={GrafikDizayn} alt="" />
            <h1 className="font-bold text-3xl mx-2">Grafik Dizayn</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-12">
              <h1 className="font-semibold mx-3 pt-1 pb-5">Photoshop, Illustrator va SMD</h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>3,000,000 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3 my-2">2,500,000 so'm</h1>
              </div>
            </div>
        </div>
        <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={KiberXavfsizlik} alt="" />
            <h1 className="font-bold text-3xl mx-2">Kiberxavfsizlik</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-14">
              <h1 className="font-semibold mx-3 pt-1 pb-5">
                C# dasturlash tiliga kirish
              </h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>3,000,000 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3">2,500,000 so'm</h1>
              </div>
            </div>
        </div>
        </div>
        <div className="flex gap-10 px-32 mt-10">
        <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={MsOffice} alt="" />
            <h1 className="font-bold text-3xl mx-2">Office dasturlari</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-1">
              <h1 className="font-semibold mx-3 pt-1 pb-5">
                Ms Word, Ms Exsel & Ms PowerPoint
              </h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>1,200,000 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3">1,000,000 so'm</h1>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={WebDasturlash} alt="" />
            <h1 className="font-bold text-3xl mx-2">Web Dasturlash</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-24">
              <h1 className="font-semibold mx-3 pt-1 pb-5">Frontend (React JS)</h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>3,000,000 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3 my-2">2,500,000 so'm</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 px-32 mt-10">
        <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={English} alt="" />
            <h1 className="font-bold text-3xl mx-2">English & IT</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-52">
              <h1 className="font-semibold mx-3 pt-1 pb-5">Grammar & Speaking</h1>
              <div className="flex gap-4">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>0 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3 my-2">0 so'm</h1>
              </div>
            </div>
        </div>
        <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={KompyuterSavodxonligi} alt="" />
            <h1 className="font-bold text-3xl mx-2">Kompyuter savodxonligi</h1>
            <hr className="my-3 mx-3" />
            <div className="flex gap-28">
              <h1 className="font-semibold mx-3 pt-1 pb-5">Kompyuterni anglaymiz</h1>
              <div className="flex gap-4">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>0 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3">500,000 so'm</h1>
              </div>
            </div>
        </div>
        </div>
        <div className="bg-[#E11D48] text-center mt-5 px-5 py-2 w-40 rounded-xl ml-[585px]"><Link to={'/uz/courses/'}>Next</Link></div>
    </div>
  )
}

export default Card