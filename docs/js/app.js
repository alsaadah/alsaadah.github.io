var app = new Framework7({
  el:'#app',
  name: 'AL-Saadah',
  theme,store:store,
  routes:routes,
  popup:{closeOnEscape:true,},
  sheet:{closeOnEscape:true,},
  popover:{closeOnEscape:true,},
  actions:{closeOnEscape:true,},
  panel: {
    swipe: true,
  },
  
  // Add default routes
    routes: [
  {
    path: '/food/',
    url: '/food.html',
    options: {
        transition: 'f7-push',
        },
  },
    ],
  // ... other parameters
});

var mainView = app.views.main;
var homeView = app.views.home;
var mainView = app.views.create('.view-main');
 $$('p').on('click', function(){
  self.app.router.navigate('/preview/', {reloadCurrent: true});
 });

