// import {app} from "./config"
import {db} from "./config.js"
import { collection, addDoc,getDocs, setDoc, doc, where , query } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";



let clstime = document.querySelector("#clstime");
let clsschedule = document.querySelector("#clsschedule");
let tchName = document.querySelector("#tchName");
let secName = document.querySelector("#secName");
let courseName = document.querySelector("#courseName");
let batchNum = document.querySelector("#batchNum");
let clsBtn = document.querySelector("#clsBtn");
let Name = document.querySelector("#name");
let fname = document.querySelector("#fname");
let rollnum = document.querySelector("#rollnum");
let cntnum = document.querySelector("#cntnum");
let cnicnum = document.querySelector("#cnicnum");
let pic = document.querySelector("#pic");


clsBtn.addEventListener("click",classButton);

async function classButton(){
 
    const classRef = collection(db, "Class");
    
    await addDoc(classRef, {
        ClassTime: clstime.value,
              ClassSchedule: clsschedule.value,
               TeacherName:tchName.value,
             SectionName: secName.value,
               CourseName: courseName.value,
          BatchNumber: batchNum.value, 
          Name: Name.value,
            FatherName: fname.value,
            RollNum: rollnum.value,
            ContactNum: cntnum.value,
            CNIC: cnicnum.value,
            StudentCourse: courseName.value,
            Picture: pic.value
        });
    }
       
    // let classRef = collection(db, "Class");
    // let condition = where("RollNum", "==", "1");
    // const q = query(classRef, condition);
    // let usersSnapshot = await getDocs(q);
    // usersSnapshot.forEach((doc) => {
    //   console.log(doc.data());
    //   console.log(doc.data());
    //   secB.addEventListener("click", () => doc.data());
    //   secC.addEventListener("click", () => doc.data());
    // });
    //  console.log("other User");
  
let searchUser = document.querySelector("#searchUser");
searchUser.addEventListener("click",finduser)

async function finduser(){
    let collectionRef = collection(db, "Class");
    let userInput = document.querySelector("#userInput");
    let condition = where("RollNum", "==", userInput.value);

    
    const q = query(collectionRef, condition);
    let usersSnapshot = await getDocs(q);
    usersSnapshot.forEach((doc) => {
      // console.log(doc.data());
      let showData = document.querySelector("#showData");
      showData.innerHTML = doc.data();
      console.log(doc.data());
      // secB.addEventListener("click", () => doc.data());
      // secC.addEventListener("click", () => doc.data());
    });
}
 
      
        