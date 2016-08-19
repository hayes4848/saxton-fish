// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.saxton.fish',
  name: 'Fish Index',
  description: 'Something smells fishy.. ',
  author: 'Andrew Hayes',
  email: 'andythemanhayes@hotmail.com',
  website: 'http://example.com'
});
// Set up resources such as icons and launch screens.
App.icons({
  // 'iphone': 'public/PNGs/icon60.png',
  'iphone_2x': 'public/PNGs/icon60.png',
  'iphone_3x': 'public/PNGs/icon180.png',
  // ... more screen sizes and platforms ...
});
App.launchScreens({
  'iphone6': 'public/fish/fish_background.png',
  'iphone_2x': 'public/fish/fish_background640x960.png',
  'iphone6p_portrait': 'public/fish/fish_background1242x2208.png',
  // ... more screen sizes and platforms ...
});