// import React  from 'react'

// export default function ShowImage(props) {
//     const {imageUrl} = props

   
//     const urls = []
//     console.log(urls)
//     for (let id in imageUrl){
//         urls.push({id ,url: imageUrl[id]})
//     }
//     console.log(urls)
    
        
    
//     return (
//         <div>
//             <h1>hai</h1>
//             {imageUrl ? imageUrl.map(({id , url})=>{
//                 return <div key={id}>
//                     <div className="col-lg-3 col-sm-4 col-xs-6 col-lg-2 "> 
//                         <div className="card" >
//                             <img className="card-img-top" src={url} alt="Card image" />
                            
//                         </div>
//                     </div>
//                 </div>
//             }):''}

//         </div>
//     )
// }
