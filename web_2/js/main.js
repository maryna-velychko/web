const profiles = [
    {
      email: 'mary@gmail.com',
      name: 'Maryna',
      password: '111111',
      gender: 'Woman',
      birthday: '30-06-2001',
      contacts: [
        {
          contactsId: 1,
          contactsName: 'Helen',
          contactsPhone: '380999999999',
        },
        {
          contactsId: 2,
          contactsName: 'Alex',
          contactsPhone: '380997755711',
        },
        {
          contactsId: 3,
          contactsName: 'Nata',
          contactsPhone: '380997668711',
        },
        {
          contactsId: 4,
          contactsName: 'Kiril',
          contactsPhone: '380666666666',
        },
      ],
    }
  ];

  if (!localStorage.getItem('allUsers')) {
    localStorage.setItem('allUsers', JSON.stringify(profiles));
  }
  
  if (!localStorage.getItem('currentUserIndex')) {
    localStorage.setItem('currentUserIndex', -1);
  }
  