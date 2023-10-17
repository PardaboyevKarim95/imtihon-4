$(document).ready(function () {
  $(".get__wrappermin").slick({
    dots: false,
    infinite: false,
    speed: 300,
  });
});

const nbr = /[0-9]/;
const strr = /[a-z]/;

let elForm = document.querySelector(".top-form");
let elFirsinp = document.querySelector(".top-form__first-name");
let elLastinp = document.querySelector(".top-form__last-name");
let elEmailinp = document.querySelector(".top-form__inp-email");
let elPasswortinp = document.querySelector(".top-form__inp-password");
let elPasswortRepeat = document.querySelector(".top-form__inp-repeat-password");
let elChek = document.querySelector(".top-form__chek");
let elspan1 = document.querySelector(".span1");
let elspan2 = document.querySelector(".span2");
let elspan3 = document.querySelector(".span3");
let elspan4 = document.querySelector(".span4");
let elspan5 = document.querySelector(".span5");
let elspan7 = document.querySelector(".span7");
let elspan8 = document.querySelector(".span8");
let elspan9 = document.querySelector(".span9");
let elspan10 = document.querySelector(".span10");
let elfil1 = document.querySelector(".top-form__filt1");
let elfil2 = document.querySelector(".top-form__filt2");
let elfil3 = document.querySelector(".top-form__filt3");
let elfil4 = document.querySelector(".top-form__filt4");
let elfil6 = document.querySelector(".top-form__filt6");
let elcontact = document.querySelector(".contact");
let elslesh = document.querySelector(".slesh1");
let elbtn1 = document.querySelector(".btn1");
let elbtn2 = document.querySelector(".btn2");
let elInputName = document.querySelector(".get__input-name");
let elEmailName = document.querySelector(".get__input-email");
let elTelName = document.querySelector(".get__input-tel");
let elCompanyName = document.querySelector(".get__input-company");
let eltouform = document.querySelector(".get__wrappermin");
let eltouinpname1 = document.querySelector(".get__label-wrapper1");
let eltouinpname2 = document.querySelector(".get__label-wrapper2");
let eltouinpname3 = document.querySelector(".get__label-wrapper3");
let eltouinpname4 = document.querySelector(".get__label-wrapper4");
let elproject1 = document.querySelector(".project__spn1");
let elproject2 = document.querySelector(".project__spn2");
let elproject3 = document.querySelector(".project__spn3");
let elproject4 = document.querySelector(".project__spn4");
let elproject5 = document.querySelector(".project__spn5");
let elproject6 = document.querySelector(".project__spn6");
let aaa = document.querySelector("form__input1");
let elbor = document.querySelector(".form__label");
let elget = document.querySelector(".get");
let eldisp = document.querySelector(".btn-submit");
let elblcock = document.querySelector(".project");

function func(kok) {
  if (kok.length < 2 || kok.length == 0) {
    elfil1.classList = "ccol";
    eltouinpname1.classList = "lol";
    elspan7.textContent = " Hato: 2 tadan katta va 30 dan kam harf kriting ❌";
    return (elspan1.textContent =
      " Hato: 2 tadan katta va 30 dan kam harf kriting111 ❌");
  } else if (kok.length > 30) {
    elfil1.classList = "ccol";
    eltouinpname1.classList = "lol";
    elspan7.textContent = " Hato: 2 tadan katta va 30 dan kam harf kriting ❌";

    return (elspan1.textContent =
      " Hato: 2 tadan katta va 30 dan kam harf kriting222 ❌");
  } else if (!isNaN(kok)) {
    elfil1.classList = "ccol";
    eltouinpname1.classList = "lol";
    elspan7.textContent = " Hato: 2 tadan katta va 30 dan kam harf kriting ❌";

    return (elspan1.textContent =
      " Hato: 2 tadan katta va 30 dan kam harf kriting333 ❌");
  } else {
    elfil1.classList.remove("ccol");
    eltouinpname1.classList = "get__label-wrapper1";
    elspan7.textContent = " ";
    return (elspan1.textContent = " ");
  }
}
function funclast(kok) {
  if (kok.length < 2 || kok.length == 0) {
    elfil6.classList = "ccol";
    return (elspan1.textContent =
      " Hato: 2 tadan katta va 30 dan kam harf kriting111 ❌");
  } else if (kok.length > 30) {
    elfil6.classList = "ccol";

    return (elspan1.textContent =
      " Hato: 2 tadan katta va 30 dan kam harf kriting222 ❌");
  } else if (!isNaN(kok)) {
    elfil6.classList = "ccol";

    return (elspan1.textContent =
      " Hato: 2 tadan katta va 30 dan kam harf kriting333 ❌");
  } else {
    elfil6.classList.remove("ccol");

    return (elspan1.textContent = " ");
  }
}
function getpass(pass) {
  let a = 0;
  if (pass.length != 8) {
    elfil3.classList = "ccol";
    return (elspan3.textContent =
      "Hato:boshqa son kriting Masalan:  ✅1234qwe8 ❌");
  }
  if (!isNaN(pass)) {
    elfil3.classList = "ccol";
    return (elspan3.textContent =
      "Hato:boshqa son kriting Masalan:  ✅1234qwe8 ❌");
  }
  for (let i = 0; i < pass.length; i++) {
    if (pass.includes(i)) {
      a += 1;
    }
  }
  if (a == 0) {
    console.log("dfgdfbdfhdf");
    elfil3.classList = "ccol";
    return (elspan3.textContent =
      "Hato:boshqa son kriting Masalan:  ✅1234qwe8 ❌");
  } else {
    elfil3.classList.remove("ccol");
    return (elspan3.textContent = " ");
  }
}
function passrepeat(repeat) {
  let s = elPasswortinp.value;
  if (s != repeat) {
    elfil4.classList = "ccol";
    return (elspan4.textContent = "Hato: passwort bilan birhil emas:❌");
  } else {
    elfil4.classList.remove("ccol");
    elspan4.textContent = " ";
  }
}

function getemail(mail) {
  if (!mail.endsWith("@email.com")) {
    if (!mail.endsWith("@email.ru")) {
      elfil2.classList = "ccol";
      eltouinpname2.classList = "lol";
      elspan8.textContent = " Hato: email ni to'g'ri kiriting ❌";
      return (elspan2.textContent = "Hato: email ni to'g'ri kiriting ❌");
    } else {
      elfil2.classList.remove("ccol");
      eltouinpname2.classList = "get__label-wrapper2";
      elspan8.textContent = " ";

      return (elspan2.textContent = " ");
    }
  } else {
    elfil2.classList.remove("ccol");
    eltouinpname2.classList = "get__label-wrapper2";

    elspan8.textContent = " ";

    return (elspan2.textContent = " ");
  }
}
function chec(chekk) {
  if (!chekk) {
    return (elspan5.textContent = "Hato: chek bosing ❌");
  } else {
    return (elspan5.textContent = " ");
  }
}

function tell(tel) {
  if (!tel.startsWith("+998")) {
    eltouinpname3.classList = "lol";
    console.log(tel, "1");

    return (elspan9.textContent =
      " Hato: raqamni to'g'ri kiriting ❌: boshlanishi (+998)✅");
  } else if (tel.length != 13) {
    eltouinpname3.classList = "lol";
    console.log(tel, "2");

    return (elspan9.textContent =
      " Hato: raqamni to'g'ri kiriting ❌: Raqam (13) bo'lishi kerak ✅");
  } else if (isNaN(tel.substr(1, 12))) {
    eltouinpname3.classList = "lol";

    return (elspan9.textContent =
      " Hato: raqamni to'g'ri kiriting ❌: Raqam kiriting (123) ✅");
  } else {
    eltouinpname3.classList = "get__label-wrapper3";

    return (elspan9.textContent = " ");
  }
}

function company(com) {
  if (com.length < 4 || com.length > 20) {
    eltouinpname4.classList = "lol";
    return (elspan10.textContent =
      " Hato: 4 tadan ko'p 30 tadan kam harf kiriting ❌");
  } else if (!isNaN(com)) {
    eltouinpname4.classList = "lol";

    return (elspan10.textContent = " Hato: faqat xarf kritdingiz ❌");
  } else {
    eltouinpname4.classList = "get__label-wrapper4";
    return (elspan10.textContent = " ");
  }
}
function namee(kok) {
  if (kok.length < 2 || kok.length == 0) {
    elfil1.classList = "ccol";
    eltouinpname1.classList = "lol";
    elspan7.textContent = " Hato: 2 tadan katta va 30 dan kam harf kriting ❌";
    return (elspan1.textContent =
      " Hato: 2 tadan katta va 30 dan kam harf kriting111 ❌");
  } else if (kok.length > 30) {
    elfil1.classList = "ccol";
    eltouinpname1.classList = "lol";
    elspan7.textContent = " Hato: 2 tadan katta va 30 dan kam harf kriting ❌";

    return (elspan1.textContent =
      " Hato: 2 tadan katta va 30 dan kam harf kriting222 ❌");
  } else if (!isNaN(kok)) {
    elfil1.classList = "ccol";
    eltouinpname1.classList = "lol";
    elspan7.textContent = " Hato: 2 tadan katta va 30 dan kam harf kriting ❌";

    return (elspan1.textContent =
      " Hato: 2 tadan katta va 30 dan kam harf kriting333 ❌");
  } else {
    elfil1.classList.remove("ccol");
    eltouinpname1.classList = "get__label-wrapper1";
    elspan7.textContent = " ";
    return (elspan1.textContent = " ");
  }
}
function email(mail) {
  if (!mail.endsWith("@email.com")) {
    if (!mail.endsWith("@email.ru")) {
      elfil2.classList = "ccol";
      eltouinpname2.classList = "lol";
      elspan8.textContent = " Hato: email ni to'g'ri kiriting ❌";
      return (elspan2.textContent = "Hato: email ni to'g'ri kiriting ❌");
    } else {
      elfil2.classList.remove("ccol");
      eltouinpname2.classList = "get__label-wrapper2";
      elspan8.textContent = " ";

      return (elspan2.textContent = " ");
    }
  } else {
    elfil2.classList.remove("ccol");
    eltouinpname2.classList = "get__label-wrapper2";

    elspan8.textContent = " ";

    return (elspan2.textContent = " ");
  }
}

eltouform.addEventListener("submit", function (kk) {
  kk.preventDefault();
  let name = elInputName.value;
  let email2 = elEmailName.value;
  let telll = elTelName.value;
  let companyy = elCompanyName.value;

  namee(name);
  email(email2);
  tell(telll);
  company(companyy);

  elproject1.textContent = elInputName.value;
  elproject2.textContent = elEmailName.value;
  elproject3.textContent = elTelName.value;
  elproject4.textContent = elCompanyName.value;
  let sabr = 0;
  let elradios1 = document.getElementsByName("your");
  for (let i = 0; i < elradios1.length; i++) {
    if (elradios1[i].checked) {
      // console.log(elradios1[i].checked);
      elproject5.textContent = elradios1[i].value;
    }
  }
  let elradios2 = document.getElementsByName("yourr");
  for (let i = 0; i < elradios2.length; i++) {
    if (elradios2[i].checked) {
      elproject6.textContent = elradios2[i].value;
    }
  }
  eldisp.addEventListener("click", function () {
    if (
      elspan7.textContent == " " &&
      elspan8.textContent == " " &&
      elspan9.textContent == " " &&
      elspan10.textContent == " "
    ) {
      elget.style.display = "none";
    }
  });
});

elForm.addEventListener("submit", function (fr) {
  fr.preventDefault();
  let firs = elFirsinp.value;
  let last = elLastinp.value;
  let email = elEmailinp.value;
  let passwort = elPasswortinp.value;
  let passwortrep = elPasswortRepeat.value;
  let checkedd = elChek.checked;

  func(firs);
  funclast(last);
  getemail(email);
  getpass(passwort);
  passrepeat(passwortrep);
  chec(checkedd);

  // console.log(elspan1.textContent == " ");
  if (
    elspan1.textContent == " " &&
    elspan2.textContent == " " &&
    elspan3.textContent == " " &&
    elspan4.textContent == " " &&
    elspan5.textContent == " "
  ) {
    elcontact.style.display = "none";
  }
});
