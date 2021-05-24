class View {
    constructor() {
      this.contactsTableBody = document.querySelector('.contacts-main');
      this.profileName = document.querySelectorAll('.name');
      this.profileEmail = document.querySelector('.email');
      this.profilePassword = document.querySelector('.password');
      this.profileSex = document.querySelector('.gender');
      this.profileBirthdate = document.querySelector('.birth');
    }
  
    showContacts = (profileContacts) => {
      if (this.contactsTableBody !== null && typeof profileContacts !== 'undefined') {
        this.contactsTableBody.innerHTML = '';
        profileContacts.forEach((item) => {
          this.contactsTableBody.innerHTML += `
          <tr>
              <th scope="row">${item.contactsId}</th>
              <td>${item.contactsName}</td>
              <td>+${item.contactsPhone}</td>
              <td>
                  <button id = ${item.contactsId} class="btn btn-danger col-md-3 delete-contacts-btn">
                      &#128465;
                  </button>
              </td>
          </tr>
            `;
        });
      }
    };
  
    showProfile = (currentUserIndexView, allUsersView) => {
      if (+currentUserIndexView !== -1) {
        this.profileName.forEach(
          (elem) => (elem.innerHTML = allUsersView[currentUserIndexView].name)
        );
        this.profileEmail.innerHTML = allUsersView[currentUserIndexView].email;
        this.profilePassword.innerHTML = allUsersView[currentUserIndexView].password;
        this.profileSex.innerHTML = allUsersView[currentUserIndexView].gender;
        this.profileBirthdate.innerHTML = allUsersView[currentUserIndexView].birthday;
      }
    };
  }