let isSortedByName = false;

class Model {
  constructor() {
    this.currentUserIndex = localStorage.getItem("currentUserIndex");
    this.allUsers = JSON.parse(localStorage.getItem("allUsers"));
  }

  contactsDelete = (e) => {
    if (!e.target.classList.contains("delete-contacts-btn")) {
      return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
    const indexRemoved = this.allUsers[this.currentUserIndex].contacts.findIndex((elem) => elem.contactsId === +btn.id);
    if (indexRemoved !== -1) {
      this.allUsers[this.currentUserIndex].contacts.splice(indexRemoved, 1);
    }
    localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
  };

  contactsAdd = (e) => {
    e.preventDefault();
    const contactsInputName = document.querySelector(".contacts-input-name");
    const contactsInputPhone = document.querySelector(".contacts-input-phone");

    this.allUsers[this.currentUserIndex].contacts.push({
      contactsId:
        this.allUsers[this.currentUserIndex]?.contacts.length - 1 === -1? 1: this.allUsers[this.currentUserIndex].contacts[this.allUsers[this.currentUserIndex].contacts.length - 1
            ]["contactsId"] + 1,
      contactsName: contactsInputName.value,
      contactsPhone: contactsInputPhone.value,
    });
    const contactsTableBody = document.querySelector(".contacts-main");
    contactsTableBody.innerHTML += `
      <tr>
          <th scope="row">${
            this.allUsers[this.currentUserIndex].contacts[
              this.allUsers[this.currentUserIndex].contacts.length - 1
            ].contactsId
          }</th>
          <td>${
            this.allUsers[this.currentUserIndex].contacts[
              this.allUsers[this.currentUserIndex].contacts.length - 1
            ].contactsName
          }</td>
          <td>+${
            this.allUsers[this.currentUserIndex].contacts[
              this.allUsers[this.currentUserIndex].contacts.length - 1
            ].contactsPhone
          }</td>
          <td>
              <button id = ${
                this.allUsers[this.currentUserIndex].contacts[
                  this.allUsers[this.currentUserIndex].contacts.length - 1
                ].contactsId
              } class="btn btn-danger col-md-3 delete-contacts-btn">
                  &#128465;
              </button>
          </td>
      </tr>
        `;
    localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
    contactsInputName.value = "";
    contactsInputPhone.value = "";
  };

  contactsChange = () => {
    const contactsIdToChange = document.querySelector(".contacts-id-change");
    const contactsNameToChange = document.querySelector(".contacts-name-change");
    const contactsPhoneToChange = document.querySelector(".contacts-phone-change");

    let rIndexToChange = -1;
    for (let i = 0; i < this.allUsers[this.currentUserIndex].contacts.length; i++
    ) {
      if (
        +contactsIdToChange.value === this.allUsers[this.currentUserIndex].contacts[i].contactsId) {
        rIndexToChange = i;
      }
    }
    if (rIndexToChange === -1) {
      return;
    }
    this.allUsers[this.currentUserIndex].contacts[rIndexToChange].contactsName = contactsNameToChange.value;
    this.allUsers[this.currentUserIndex].contacts[rIndexToChange].contactsPhone = contactsPhoneToChange.value;
    contactsNameToChange.value = "";
    contactsPhoneToChange.value = "";
    localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
    return this.allUsers[this.currentUserIndex].contacts;
  };

  contactsSort = () => {
    const contactsTableBody = document.querySelector(".contacts-main");
    if (isSortedByName) {
      isSortedByName = false;
      contactsTableBody.innerHTML = "";
      return this.allUsers[this.currentUserIndex].contacts;
    }
    isSortedByName = true;
    const arrayToSort = this.allUsers[this.currentUserIndex].contacts.slice().sort((a, b) => {
        return a.contactsName.toLowerCase() > b.contactsName.toLowerCase()? 1: -1;});
    contactsTableBody.innerHTML = "";
    return arrayToSort;
  };

  contactsReverse = () => {
    const contactsTableBody = document.querySelector(".contacts-main");
    if (isSortedByName) {
      isSortedByName = false;
      contactsTableBody.innerHTML = "";
      return this.allUsers[this.currentUserIndex].contacts;
    }
    isSortedByName = true;
    const arrayToSort = this.allUsers[this.currentUserIndex].contacts
      .slice()
      .sort((a, b) => {
        return a.contactsName.toLowerCase() < b.contactsName.toLowerCase()? 1: -1;});
    contactsTableBody.innerHTML = "";
    return arrayToSort;
  };

  profileloginProfile = () => {
   let currentAcc = -1;
    let currentAccIndex = -1;
    const contactsLoginEmail = document.getElementById("login-email");
    const contactsLoginPassword = document.getElementById("login-password");
    currentAcc = this.allUsers.find((acc) => acc.email === contactsLoginEmail.value);
    if (typeof currentAcc === "undefined") {
      alert("Acc with this email dosen't exist ");
      return;
    } else {
      currentAccIndex = this.allUsers.findIndex(
        (acc) => acc.email === contactsLoginEmail.value
      );
      if (currentAcc.password === contactsLoginPassword.value) {
        localStorage.setItem("currentUserIndex", currentAccIndex);
        document.location.href = "./phonebook.html";
      } else {
        alert("Wrong password");
        contactsLoginPassword.value = "";
        return;
      }
    }
  };

  registrProfile = () => {
    const contactsRegisterEmail = document.getElementById("email");
    const contactsRegisterName = document.getElementById("name");
    const contactsRegisterPassword = document.getElementById("password");
    const contactsRegisterBirthday = document.getElementById("datebirth");
    const contactsRegisterSex = document.querySelector(".form-check-input");
    const newProfile = {};
    newProfile.email = contactsRegisterEmail.value;
    newProfile.name = contactsRegisterName.value;
    newProfile.password = contactsRegisterPassword.value;
    newProfile.gender = contactsRegisterSex.value;
    newProfile.birthday = contactsRegisterBirthday.value;
    newProfile.contacts = [];
    this.allUsers.push(newProfile);
    localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
    document.location.href = "./login.html";
  };
}
