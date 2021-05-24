class Controller {
    constructor() {
      this.view = new View();
      this.model = new Model();
    }
    contactsAddHandler = () => {
      if (+this.model.currentUserIndex !== -1) {
        const contactsAddBtn = document.getElementById('add-contact');
        contactsAddBtn.addEventListener('click', this.model.contactsAdd);
      }
    };
  
    contactsDeleteHandler = () => {
      if (+this.model.currentUserIndex !== -1) {
        const contactsTableBody = document.querySelector('.contacts-main');
        contactsTableBody.addEventListener('click', this.model.contactsDelete);
      }
    };
  
    contactsSortHandler = () => {
      if (+this.model.currentUserIndex !== -1) {
        const contactsSortBtn = document.querySelector('.sort-btn');
        contactsSortBtn.addEventListener('click', () => {
          return this.view.showContacts.call(null, this.model.contactsSort());
        });
      }
    };

    contactsReverseHandler = () => {
      if (+this.model.currentUserIndex !== -1) {
        const contactsSortBtn = document.querySelector('.reverse-btn');
        contactsSortBtn.addEventListener('click', () => {
          return this.view.showContacts.call(null, this.model.contactsReverse());
        });
      }
    };
  
    firstShowContacts = () => {
      if (+this.model.currentUserIndex !== -1) {
        this.view.showContacts(this.model.allUsers[this.model.currentUserIndex].contacts);
      }
    };
  
    profileRegisterHandler = () => {
      const contactsRegisterBtn = document.getElementById('sign-btn');
      contactsRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.model.registrProfile();
      });
    };

    contactsChangeHandler = () => {
      if (+this.model.currentUserIndex !== -1) {
        const contactsChangeBtn = document.getElementById('change-btn');
        contactsChangeBtn.addEventListener('click', () => {
          return this.view.showContacts.call(null, this.model.contactsChange());
        });
      }
    };
  
   profileLoginHandler = () => {
      const contactsLoginBtn = document.getElementById('login-btn');
      contactsLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.model.profileloginProfile();
      });
    };
  }
  
  const myApp = new Controller();
  