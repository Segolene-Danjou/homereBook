
const base = {

  setBestFriend: function(name) {
    document.querySelector('#best-book').textContent = name;
  },

  displayWork: function(number) {
    const works = document.querySelectorAll('.panel--work');
    works[number].classList.remove('hidden');
  },

  printFriends: function(friends) {
    const listElem = document.getElementById('friends');
    listElem.classList.remove('hidden');
    if (!friends || !Array.isArray(friends)) {
      
    }
    else {
      friends.forEach((friend) => {
        const newElem = document.createElement('li');
        newElem.className = 'tags__item';
        newElem.innerHTML = friend;
        listElem.appendChild(newElem);
      });
    }
  },

  fillProfil: function(profil) {
    const listElem = document.getElementById('profil');
    listElem.classList.remove('hidden');
    if (!profil || typeof profil !== 'object') {
    }
    else {
      if (
        profil.name === undefined
        || profil.inRelationship === undefined
        || profil.job === undefined
      ) {
      }
      else if (
        typeof profil.name !== 'string'
        || typeof profil.inRelationship !== 'boolean'
        || typeof profil.name !== 'string'
        || typeof profil.age !== 'number'
        || (typeof profil.department !== 'number' && typeof profil.department !== 'string')
        || typeof profil.arm !== 'number') {
      }
      for (key in profil) {
        const newElem = document.createElement('li');
        newElem.className = 'tags__item';
        let text;
        switch (key) {
          case 'inRelationship':
            text = profil[key] ? 'En couple' : 'Célibataire';
            break;
          case 'age':
            text = profil[key] + ' ans';
            break;
          default:
            text = profil[key];
        }
        newElem.innerHTML = text;
        listElem.appendChild(newElem);
      }
    }
  },
};