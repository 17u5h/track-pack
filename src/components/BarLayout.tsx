import React from 'react'
import {Outlet} from "react-router-dom";
import {Bar} from "./player/Bar";

export function BarLayout(){
  return(
    <div>
      <Outlet/>
			<Bar/>
    </div>
  )
}