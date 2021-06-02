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
    
    <div  className="row">
       
      
          {arr ? arr.map(({id , url})=>{
                return<div key={id} class="col-xs-6	col-sm-4	col-md-4	col-lg-3 ">
                        <div class="card border" >
                          <img class="card-img-top" src={url} alt="Card image" />
                        </div>       
                      </div>
             
            }):''}                        
    </div>
  </div>
</div>
        
)
}
