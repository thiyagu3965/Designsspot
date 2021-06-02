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
    const deleteImage = (id) =>{
        var delId = id.target.value
        const StorageRef = firebase.storage().ref('image').child(delId);
        const ImageRef = firebase.database().ref('image').child('uploads').child(delId)
        StorageRef.delete().then(()=>{
            ImageRef.remove();
        })
    }
    useEffect(() => {
        getImageUrlFromDB()
    }, [])
    return (
    <>
        <div>
            <label className="form-label" for="customFile">Upload Image Files Here</label>
            <input type="file" className="form-control" accept="images/*" onChange={readImage} />
        </div>

      
<button type="button" class="btn btn-secondary magikbtn" data-toggle="collapse" data-target="#gallery1">Click to Show Gallery</button>
 <div id="gallery1" class="collapse gallery">
   
 
    <div className="row">
                   
      {imageUrl ? imageUrl.map(({id , url})=>{
                return  <div key={id} class="col-xs-6	col-sm-4	col-md-4	col-lg-3 ">
                            <div class="card" >
                                <img class="card-img-top" src={url} alt="Card image" />
                                <button className="btn btn-danger" onClick={deleteImage} value={id}>Delete Image</button>
                            </div>       
                        </div>
                   
            }):''} 
    </div>
 </div>
 
</>
    )
}