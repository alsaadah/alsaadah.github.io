var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'AL-Saadah',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
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

