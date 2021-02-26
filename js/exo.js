const app = {
    friends: [
      "L’Iliade ",
      "L’Odyssée",
      "Batrachomyomachia",
      "Les Hymnes homériques",
    ],
    profil: {
      name: 'Homère',
      inRelationship: true,
      job: 'Poète',
      age: 2900,
    },

    init: function() {
      base.fillProfil(app.profil);
      base.printFriends(app.friends);
      base.setBestFriend(app.friends[0]);
      app.createTitle();
      app.displayAllWorks();
      app.initHandlers();
    },

    createTitle: function() {
      const titleElem = document.createElement('h1');
      titleElem.textContent = "Vous consultez le profil d'Homère";
      titleElem.className = 'banner__title';
      const headerElem = document.getElementById('header-banner');
      headerElem.appendChild(titleElem);
    },

    displayAllWorks: function() {
      for (let index = 0; index < 12; index++) {
        base.displayWork(index);
      }
    },

    initHandlers: function() {
      const togglerElem = document.getElementById('menu-toggler');
      togglerElem.addEventListener('click', app.handleClick);
  
      const formElem = document.getElementById('contact');
      formElem.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Homère ne souhaite pas être dérangé');
      });
    },

    handleClick: function() {
      var bannerElem = document.getElementById('header-banner');
      bannerElem.classList.toggle('banner--open');
    },
  };
  
  // Launch init when DOM is ready
  document.addEventListener('DOMContentLoaded', app.init);