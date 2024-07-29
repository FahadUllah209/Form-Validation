let nameerror = document.getElementById("name-valid");
let phone = document.getElementById("phone-valid");
let mail = document.getElementById("mail-valid");
let message = document.getElementById("message-valid");

function namevalid() {
  let inputval = document.getElementById("name-box").value;

  if (inputval.length == 0) {
    nameerror.innerHTML = "Name is rquired";
    return false;
  }

  nameerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function phonevalid() {
  let noval = document.getElementById("phone-box").value;

  if (noval.length == 0) {
    phone.innerHTML = "Phone No is required";
    return false;
  }

  if (noval.length != 11) {
    phone.innerHTML = "Phone number must be 11 digits";
    return false;
  }

  if (noval.length == 11) {
    phone.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function mailvalid() {
  let mailval = document.getElementById("email-box").value;

  if (mailval.length == 0) {
    mail.innerHTML = "Email is required";
    return false;
  }

  if (!mailval.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)) {
    mail.innerHTML = "Invalid Email";
    return false;
  }

  mail.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function textvalid() {
  let textval = document.getElementById("message-box").value;
  let required = 30;

  let char = required - textval.length;

  if (textval.length == 0) {
    message.innerHTML = "Message is required";
    return false;
  }
  if (textval.length < 30) {
    message.innerHTML = char + "more character need";
    return false;
  }

  message.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function checksummit() {
    let sumitbtn = document.getElementById('submit-valid');
    if(!namevalid() || !phonevalid() || !mailvalid() || !textvalid()){
     sumitbtn.style.display="block";
      sumitbtn.innerHTML = "Please insert all the required information";
      setTimeout(() => {
        sumitbtn.style.display="none";
      }, 3000);
      return false;
    }
}
