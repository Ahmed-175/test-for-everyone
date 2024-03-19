import React from "react";
import axios from "axios";
import swal from "sweetalert";
import "./Loginadm.css";
import "../Test3Sec/Test3_sec.css";
const Senduseradmdata = async () => {
  const LoginPage = document.getElementById("all-loginpage");
  const username = document.getElementById("inputuseradmnameofme").value;
  const password = document.getElementById("inputpasswordadmnameofme").value;
  try {
    await axios
      .post("/api/auth/loginadm", { username, password })
      .then(() => {
        const ContainerAdmine = () => {
          const matris = [
           {matr : 'الفيزياء' , path :"dklasdakl" },
           {matr : 'الرياضيات التطبيقية' , path :"dklasdmaht2akl" },
           {matr : 'اللغة العربية' , path :"dklaarbecsdakl" },
           {matr : 'الاحياء' , path :"dklas45dakl" } ,
           {matr : 'الكيمياء' , path :"dkl6f5f5as24akl" } ,
           {matr : 'اللغة الانجليزية' , path :"dklaenglishsdakl" } ,
           {matr : 'اللغة الفرنسية' , path :"dklfrnasasdakl" } ,
           {matr : 'الرياضيات البحته' , path :"dklamath1sdakl" } ];
          const divcontainer = document.createElement('div');
          divcontainer.className = 'Container-of-matr-admine';
          const addexamh1 = document.createElement('h1');
          addexamh1.className = 'h1-add-exam';
          addexamh1.innerHTML = 'اضافة اختبارات للموقع';  
          divcontainer.appendChild(addexamh1)
          for (let i = 0; i < matris.length; i++) {
            const cardall = document.createElement('div');
            cardall.className = ' thatme';
            const divcard = document.createElement('div');
            divcard.className = 'btnIncard';
            const h1fordivcad = document.createElement('h2');
            h1fordivcad.innerHTML = matris[i].matr;
            divcard.appendChild(h1fordivcad)
            const btnIncard = document.createElement('div');
            btnIncard.className = 'btnIncard';
            const btton = document.createElement('a');
            btton.className = 'btton abtton';
            btton.innerHTML = 'أضافة اختبار';
            btton.href = matris[i].path;
            btnIncard.appendChild(btton);
            cardall.appendChild(divcard);
            cardall.appendChild(btnIncard);
            divcontainer.appendChild(cardall);
          }
          LoginPage.innerHTML = '';
          LoginPage.appendChild(divcontainer); 
        };
        ContainerAdmine();  
      });
  } catch {
    swal("ليس صحيح!", "تأكد من أسم المشرف و كلمة المرور", "error");
  }
};
function Loginadm() {
  return (
    <div id="all-loginpage">
      <section className="sign-in">
        <div className="box">
          <div className="form">
            <h2>تسجيل الدخول كمشرف</h2>
            <div className="isnotme">
              <div className="inputBox">
                <input type="text" id="inputuseradmnameofme" required />
                <span> اسم المشرف</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input type="password" id="inputpasswordadmnameofme" required />
                <span>كلمة المرور</span>
                <i></i>
              </div>
            </div>
            <button className="btton abtton" onClick={() => Senduseradmdata()}>
              ارسال المعلومات
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Loginadm;
