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
routes = [
  {
    path: '/about/',
    url: '../pages/about/about.html',
    // Pass "tabs" property to route
    tabs: [
      // First (default) tab has the same url as the page itself
      {
        path: '/',
        id: 'about',
        // Fill this tab content from content string
        content: `
          <div class="block">
            <h3>About Me</h3>
            <p>...</p>
          </div>
        `
      },
      // Second tab
      {
        path: '/contacts/',
        id: 'contacts',
        // Fill this tab content via Ajax request
        url: '../pages/about-me/contacts.html',
      },
      // Third tab
      {
        path: '/cv/',
        id: 'cv',
        // Load this tab content as a component via Ajax request
        componentUrl: '../pages/about-me/cv.html',
      },
    ],
  }
]
  // ... other parameters
});

var mainView = app.views.create('.view-main');
