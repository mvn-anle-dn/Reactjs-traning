import '../assets/css/body.css'
import React, { useState } from 'react'
import PhotoAlbum from "react-photo-album";
import axios from 'axios'
import { useEffect } from 'react';
import ShowCat from './ShowCat';

export default function Body() {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=20'
  const [list , setList] = useState([]) 
  const [list2 , setList2] = useState([]) 
  const [list3 , setList3] = useState([]) 
  const [list4 , setList4] = useState([]) 
  const [list5 , setList5] = useState([]) 
  const [list6 , setList6] = useState([]) 
  const setShowPt = null ;

  useEffect(()=> {
    async function listCat(set) {
      let getAPIlist = await axios.get(url)
      let getlist = getAPIlist.data
      set(getlist);
    }
    listCat(setList);
    listCat(setList2);
    listCat(setList3);
    listCat(setList4);
    listCat(setList5);
    listCat(setList6);
    
  },[])

  const listAll = list.concat(list2,list3,list4,list5,list6);

  console.log(listAll);

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
    console.log(listAll[index]);
    return setShowPt = listAll[index] ;
  }



  // const photos2 = list2.map((photo) => ({
  //   src: photo.url,
  //   width: photo.width,
  //   height: photo.height,
  // }))

  // const photos3 = list3.map((photo) => ({
  //   src: photo.url,
  //   width: photo.width,
  //   height: photo.height,
  // }))

  const Gallery = () => {
    return <PhotoAlbum layout="columns" photos={photos} onClick={({ index }) => showMew(index)} />;
  }
  
  // const Gallery2 = () => {
  //   return <PhotoAlbum layout="columns" photos={photos2} />;
  // }

  // const Gallery3 = () => {
  //   return <PhotoAlbum layout="columns" photos={photos3} />;
  // }

  return (
    <>
      <div className="body">
        <div className="main-body">
          <div className="album">
            <Gallery />
          </div>
        </div>
      </div>
      <ShowCat/>

      
    </>
  )
}
