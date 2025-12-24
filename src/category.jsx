import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { TbSoup } from "react-icons/tb";
export const Categories = [
    {
        id: 1,
        name: "All",
        img: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />
    },

    {
        id: 2,
        name: "breakfast",
        img: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    },

    {
        id: 3,
        name: "soups",
        img: <TbSoup className="w-[60px] h-[60px] text-green-600" />
    },

    {
        id: 4,
        name: "pasta",
        img: <CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />
    },

    {
        id: 5,
        name: "main_course",
        img: <MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600" />
    },

    {
        id: 6,
        name: "pizza",
        img: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />
    },

    {
        id: 7,
        name: "burger",
        img: <GiHamburger className="w-[60px] h-[60px] text-green-600" />
    },
]