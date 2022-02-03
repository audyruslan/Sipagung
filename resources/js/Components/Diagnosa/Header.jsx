import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";

export default function Header(props) {
    return (
        <div className="w-full bg-white h-16 flex items-center p-3 justify-between relative">
            <h1 className="text-gray-700 text-xl font-bold">{props.title}</h1>
            <div className="flex items-center justify-between w-44">
                <div className="flex space-x-2">
                    <div className="p-2 rounded-full bg-amber-100/80">
                        <BsIcons.BsBellFill
                            size={18}
                            className="text-amber-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
