import React, { useState } from 'react';
import { product } from '../Data/Data';
import MoreSpecial from './MoreSpecial';

const Special = () => {
    const [special] =useState(product)
    return (
        <div className="container">
        <div className="row">
           {
               special.map((special)=><MoreSpecial key={special.id} special={special}></MoreSpecial> )
           }

        </div>
    </div>
    );
};

export default Special;