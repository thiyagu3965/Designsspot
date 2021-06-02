import React ,{useEffect, useState} from 'react'
import firebase from '../util/firebase'



export default function Gallery() {
  const [arr , setArr] = useState([])
  const getImageUrlFromDB = () =>{
    const ImageRef = firebase.database().ref('image').child('uploads')
    ImageRef.on('value', (snapshot)=>{
        let ImageUrls = snapshot.val()
        
        const urls = []
        for (let id in ImageUrls){
            urls.push({id , url : ImageUrls[id]})
        }
       const newArr = [ ...urls]
       setArr(newArr)
    }) 
  }
 useEffect(() => {
  getImageUrlFromDB()
 }, [])
 console.log(arr)


    return (
<div id="section2" className="container-fluid common" >
  <h2 className="">Gallery</h2>            
  <button type="button" class="btn btn-secondary magikbtn" data-toggle="collapse" data-target="#gallery">Click to Show Gallery</button>
  <div id="gallery" class="collapse gallery">
    <div class="row">
      haai
      {/* card */}
        {/* <div class="col-lg-3 col-sm-4 col-xs-6 col-lg-2 "> 
          <div class="card" >
            <img class="card-img-top" src="https://picsum.photos/id/180/2400/1600" alt="Card image" />
              <div class="card-body">
                <p class="card-title ">Flex1</p>
                <p class="card-text">Some example text.</p>
              </div>
          </div>
        </div> */}
          {arr ? arr.map(({id , url})=>{
                return <div key={id}  class="row">
                     <div class="col-lg-3 col-sm-4 col-xs-6 col-lg-2 "> 
          <div class="card" >
            <img class="card-img-top" src={url} alt="Card image" />
             
          </div>
        </div>
                </div>
            }):''}
        {/* sample */}



        {/* sample */}
        
       
        
        
       
       
        
      {/* card end */}
    </div>
  </div>
</div>
        
)
}
