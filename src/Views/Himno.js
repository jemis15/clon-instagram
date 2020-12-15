import React from 'react';
import img_him from '../assets/images/web/desk.png';

export default function Himno() {
    return <div className="container p-3"  >
        <div className="text-lg-center float-left" style={{width:"500px"}}>
            <h1>HIMNO MAZAMARINO</h1>
            <h4>(Coro)</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!</p>
            </div>
            <div className="float-right">
            <img loading="lazy" src={img_him} alt="himno" style={{  width:"500px"}} className="mt-0"/>
            </div>
        </div>
}