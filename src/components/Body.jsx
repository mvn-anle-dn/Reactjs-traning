import '../assets/css/body.css'
import React, { useState } from 'react'
import PhotoAlbum from "react-photo-album";
import axios from 'axios'
import { useEffect } from 'react';
import ShowCat from './ShowCat';


export default function Body() {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=20'
  const [list , setList] = useState([]) 

  const [image , setImage] = useState();
  const [slide , setSlide] = useState(false)

  useEffect(()=> {
    
    async function listCat() {
      let full = [] ;
      for(let i = 0 ; i < 6 ; i++ ) {
        let getAPIlist = await axios.get(url)
        let getlist = getAPIlist.data
        full = full.concat(getlist)
        console.log(full);
      }
      setList(full);
    }
    listCat()
    
  },[])

  const listAll = list

  

  const photos = listAll.map((photo) => ({
    src: photo.url,
    width: photo.width,
    height: photo.height,
  }))

  const show = listAll.map((photo) => ({
    src: photo.url,
    width: photo.width,
    height: photo.height,
  }))

  function showMew(index) {
    setImage(listAll[index].url) ;
    console.log('check');

  }

  const Gallery = () => {
    return <PhotoAlbum layout="columns" photos={photos} onClick={({ index }) => {showMew(index); setSlide(true);}} />;
  }
  

  return (
    <>
      <div className="body">
        <div className="main-body">
          <div className="album">
            <Gallery />
          </div>
        </div>
      </div>
      <ShowCat key={image} img = {image} show = {slide} set = {setSlide} />

      
    </>
  )
}
