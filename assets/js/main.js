const form = document.getElementById("form")
const email = document.getElementById("email")
const name = document.getElementById("name")
const family = document.getElementById("family")
const phone = document.getElementById("phone")
const tbody = document.getElementById("tbody")
let count = 0;
form.addEventListener("submit", e => {
    e.preventDefault()
    checkInputs()
})

const checkInputs = () => {
    let counter = 0;
    const emailValue = email.value.trim()
    const nameValue = name.value.trim()
    const familyValue = family.value.trim()
    const phoneValue = phone.value.trim()

    const nameFamilyPattern = /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^(\+98|0)?9\d{9}$/;


    if (nameValue === "") {
        setError(name, "نام خود را وارد کنید")
    } else if (!nameFamilyPattern.test(nameValue)) {
        setError(name, "نام خود را فارسی وارد کنید")
    }
    else {
        setSuccess(name)
        counter++;
    }

    if (familyValue === "") {
        setError(family, "نام خانوادگی خود را وارد کنید")
    } else if (!familyValue.match(nameFamilyPattern)) {
        setError(family, "نام خانوادگی خود را فارسی وارد کنید")
    }
    else {
        setSuccess(family)
        counter++;
    }


    if (emailValue === "") {
        setError(email, "ایمیل را وارد کنید")
    } else if (!emailValue.match(emailPattern)) {
        setError(email, "ایمیل خود را به صورت صحیح وارد کنید")
    }
    else {
        setSuccess(email)
        counter++;
    }

    if (phoneValue === "") {
        setError(phone, "شماره تلفن خود را وارد کنید")
    }
    else if (!phoneValue.match(phonePattern)) {
        setError(phone, "شماره تلفن خود را صحیح وارد کنید")
    }
    else {
        setSuccess(phone)
        counter++;
    }


    if (counter === 4) {

        count++;

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");

        let i1 = document.createElement("i");
        td1.setAttribute("class", "delete");
        td1.addEventListener("click", (e) => {
            let parent = e.currentTarget.parentElement;

            parent.remove();
        })
        i1.className = "fa fa-close";
        i1.style.cursor = "pointer";

        td1.append(i1);

        tr.append(td1);

        let td2 = document.createElement("td");

        let i2 = document.createElement("i");
        td2.setAttribute("class", "edit");
        td2.addEventListener("click", (e) => {
            let parent = e.currentTarget.parentElement;

            let namee = parent.querySelector(".name");
            let familyy = parent.querySelector(".family");
            let emaill = parent.querySelector(".email");
            let phonee = parent.querySelector(".phone");

            let name_edit = prompt("Enter your edit name : ", namee.innerText);
            let family_edit = prompt("Enter your edit family : ", familyy.innerText);
            let email_edit = prompt("Enter your edit email : ", emaill.innerText);
            let phone_edit = prompt("Enter your edit phone : ", phonee.innerText);

            namee.innerText = name_edit;
            familyy.innerText = family_edit;
            emaill.innerText = email_edit;
            phonee.innerText = phone_edit;

        })
        i2.className = "fa fa-edit";
        i2.style.cursor = "pointer";

        td2.append(i2);

        tr.append(td2);

        let td3 = document.createElement("td");
        td3.append(count);

        tr.append(td3);

        let td4 = document.createElement("td");
        td4.setAttribute("class", "name");
        let td4_name = document.createTextNode(name.value);
        td4.append(td4_name);

        tr.append(td4);

        let td5 = document.createElement("td");
        td5.setAttribute("class", "family");
        let td5_family = document.createTextNode(family.value);
        td5.append(td5_family);

        tr.append(td5);

        let td6 = document.createElement("td");
        td6.setAttribute("class", "email");
        let td6_email = document.createTextNode(email.value);
        td6.append(td6_email);

        tr.append(td6);

        let td7 = document.createElement("td");
        td7.setAttribute("class", "phone");
        let td7_phone = document.createTextNode(phone.value);
        td7.append(td7_phone);

        tr.append(td7);

        tbody.append(tr);


    } else {
        counter = 0;

    }

}


const setSuccess = (input) => {
    const formControl = input.parentElement

    formControl.className = "form-controls success"
}

const setError = (input, msg) => {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    formControl.className = "form-controls error"
    small.innerText = msg
}
