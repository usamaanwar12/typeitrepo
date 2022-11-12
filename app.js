// import {app} from "./config"
import {db} from "./config.js";
import { collection, addDoc,getDocs, setDoc, doc, where , query } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { storage , auth , } from  "./config.js";

import {  signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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

    let cardname = document.querySelector("#cardname");
    let cardfname = document.querySelector("#cardfname");
    let cardroll = document.querySelector("#cardroll");
    let cardcnt = document.querySelector("#cardcnt")

    const q = query(collectionRef, condition);
    let usersSnapshot = await getDocs(q);
    usersSnapshot.forEach((doc) => {
      // console.log(doc.data());
      let showData = document.querySelector("#showData");
    //   showData.innerHTML = doc.data();
      cardname.innerHTML = doc.data().Name;
      cardfname.innerHTML = doc.data().FatherName;
      cardroll.innerHTML = doc.data().RollNum;
      cardcnt.innerHTML = doc.data().ContactNum;


    //   let userInput = document.querySelector("#userInput");
    //   userInput.addEventListener("click",)
    //   userInput.innerHTML = "";
    //   console.log(doc.data());
      // secB.addEventListener("click", () => doc.data());
      // secC.addEventListener("click", () => doc.data());
    });
}
 
let signOutBtn = document.querySelector("#LogOut");
signOutBtn.addEventListener("click", logOut);
async function logOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location = "signin.html"
  }).catch((error) => {
    // An error happened.
  });
}