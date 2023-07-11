import * as React from 'react';

import Tooltip from '@mui/material/Tooltip';

import { FaSearchPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

function TooltipBtn() {
    

  return (
    <div className=' text-center '>
     
         
          <Tooltip title="Quick View" placement="top" >
            <button   className="bg-black text-white mt-64 w-11 h-11 relative " >
            <p className='ml-4 top-[13px] absolute hover:bg-amber-400 ' ><FaSearchPlus /></p>
            </button>
          </Tooltip>

          <Tooltip title="Wishlist" placement="top" className=''>
            <button   className=" text-white mt-64 hover:bg-amber-800 w-11 h-11 relative " >
            <p className='ml-4 top-[13px] absolute  ' ><FiHeart /></p>
            </button>
          </Tooltip>

    </div>
  )
}

export default TooltipBtn
