import React , {useEffect , useState} from 'react'
import firebase from '../util/firebase'
import {v4 as uuid} from 'uuid'
import ShowImage from './ShowImage'

export default function Uploadimage() {
    const [imageUrl , setImageUrl]= useState([])
    const readImage =async (e) => {
        const file = e.target.files[0]
        const id= uuid()
        //  console.log(file)
         const StorageRef = firebase.storage().ref('image').child(id);
         const ImageRef = firebase.database().ref('image').child('uploads').child(id)
         await StorageRef.put(file)

         StorageRef.getDownloadURL().then((url)=>{
             ImageRef.set(url)
         })
    }
    const getImageUrlFromDB = () =>{
         const ImageRef = firebase.database().ref('image').child('uploads')
         ImageRef.on('value', (snapshot)=>{
             let ImageUrls = snapshot.val()
             const urls = []
             for (let id in ImageUrls){
                 urls.push({id , url : ImageUrls[id]})
             }
             const newState = [...imageUrl , ...urls]
             console.log(newState)
             setImageUrl(newState)
         })  
    }
    useEffect(() => {
        getImageUrlFromDB()
    }, [])
    return (
    <div>
        <div>
            <label className="form-label" for="customFile">Upload Image Files Here</label>
            <input type="file" className="form-control" accept="images/*" onChange={readImage} />
        </div>

      
       <button type="button" class="btn btn-secondary magikbtn" data-toggle="collapse" data-target="#gallery">Click to Show Gallery</button>
        <div id="gallery" class="collapse gallery">
   
    <>
      
      {imageUrl ? imageUrl.map(({id , url})=>{
                return <div key={id} className="row">
                    <div className="col-lg-3 col-sm-4 col-xs-6  "> 
                        <div className="card" >
                            <img className="card-img-top" src={url} alt="Card image" />
                            
                        </div>
                    </div>
                </div>
            }):''}
   </>
  </div>
</div>
    )
}