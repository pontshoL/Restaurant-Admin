import '../CSS/addMeal.css';
import React,{useState, useEffect} from 'react';
import { db, storage } from '../Config/firebase';
import { addDoc, collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL, storageRef } from 'firebase/storage'



function AddMeal({setIsAddItem}){
    const [mealName, setMealName] = useState("");
    const [mealPrice, setMealPrice] = useState("");
    const [mealCategory, setMealCategory] = useState("");
    const [mealDescription, setMealDesc] = useState("");
    
    const [form, setForm] = useState({                                                                     
        image: "",
    });

    const handleImage = (e) => {
        setForm( {...form,image:e.target.files[0]})
     };

  
const addMeal = () => {
    const storageRef = ref(
        storage,
        `/images/${Date.now()}${form.image.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, form.image);
    uploadImage.on(
        "state_changed",
        (snapshot) => {
            const progressPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        },
        (err) => {
            console.log(err);
        },
        () => {
            setForm({         
                image: "",
            });
            getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                console.log(url)
                const collectionRef = collection(db, "restaurant");
                const hotel={                    
                    name: mealName,
                    description: mealDescription,
                    category: mealCategory,
                    amount: mealPrice,
                    image: url,

                     
                };
                addDoc(collectionRef, hotel)
                    .then(() => {
                        alert("Meal added successfully", { type: "success" });

                    })
                    .catch((err) => {
                        alert("Error adding Meal", { type: "error" });
                    });
            });
        }
    );
};


    return(
        <div className='addMain'>
            <div className='add'>
                <div className='form'>
                    <input placeholder='Enter Meal Name' onChange={(e) => setMealName(e.target.value)} /><br></br>
                    <input placeholder='Enter Meal Price' onChange={(e) => setMealPrice(e.target.value)}/><br></br>
                    <select onChange={(e) => setMealCategory(e.target.value)}>
                        <option value="Meal">Meal</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Sides">Sides</option>
                        <option value="Sweet Treats">Sweat Treats</option>
                    </select>
                    <input placeholder='Enter Meal Description' onChange={(e) => setMealDesc(e.target.value)}/><br></br>
                    <input type="file"  accept="image/*" onChange={(e)=> {handleImage(e)}} /><br></br>
                    <button onClick={(e) => { setIsAddItem('meals') }}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddMeal;