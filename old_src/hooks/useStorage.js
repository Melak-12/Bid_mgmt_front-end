import {useState} from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL,uploadBytes } from "firebase/storage";
import {getFirestore,collection, Timestamp, addDoc} from 'firebase/firestore'

const useStorage = (data) => {
  console.log(data,'this is the data');
  const [progress,setProgress]=useState(0)
  const [isCompleted,setIsCompleted]=useState(null)
  
  useState(()=>{

      console.log(data,'bla bla ');
      const storageRef=ref(getStorage(),data.itemImage.name);
      const uploadTask=uploadBytesResumable(storageRef,data.itemImage);

        if(storageRef||uploadTask){
          console.log('move on');
        }
        else {
          console.log('no');
        }
      const firestoreApp=getFirestore();
      uploadBytes(storageRef,data.itemImage).then(snap=>{
        console.log('uploaded ');
      })
        uploadTask.on('state_changed',(snapshot)=>{
          console.log('on state changed');
          const progress=(snapshot.bytesTransferred/snapshot.totalBytes)* 100;
          setProgress(progress);
          console.log('upload is '+ progress +'done!');
          switch(snapshot.state){
            case 'paused':
              console.log('upload is paused!');
              break
            case 'running':
              console.log('upload is running!');
              break

          }

        },(error)=>{
        switch (error.code) {
          case 'storage/unauthorized':
          console.log('storage unauthorized');
            break;
          case 'storage/canceled':
            console.log('storage canceled');
            break;

            case 'storage/unknown':
            console.log('storage unknown'); 
          break;
        }


      },async() => {
  const imgUrl=  getDownloadURL(storageRef,data.itemImage);
  //const createdAt= timestamp();

  // delete data.itemImage;
  //  collectionRef.add({...data,imgUrl})
  // setIsCompleted(true);
  // console.log('completed ');

  // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            console.log('File available at', downloadURL);
            setIsCompleted(true);
            // doc(collectionRef,...data,imgUrl)
            delete data.itemImage
            await addDoc(collection(firestoreApp,'bids'),{

            ...data,
            imgUrl:downloadURL,
            date:Timestamp.fromDate(new Date())
            }
          );
        }
      )
 return { progress, isCompleted };
  }
  
  
  
  )},[data]);
    return {progress,isCompleted}
}


export default useStorage