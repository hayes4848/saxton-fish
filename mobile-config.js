// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.example.matt.uber',
  name: 'Fish',
  description: 'Something smells fishy.. ',
  author: 'Andrew Hayes',
  email: 'contact@example.com',
  website: 'http://example.com'
});
// Set up resources such as icons and launch screens.
// App.icons({
//   'iphone': 'icons/icon-60.png',
//   'iphone_2x': 'icons/icon-60@2x.png',
//   // ... more screen sizes and platforms ...
// });
App.launchScreens({
  'iphone6': 'public/fish/fish_background.png',
  'iphone_2x': 'public/fish/fish_background.png',
  // ... more screen sizes and platforms ...
});