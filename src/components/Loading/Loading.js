import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            <span class="relative flex h-5 w-5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
            </span>
        </div>
    );
};

export default Loading;