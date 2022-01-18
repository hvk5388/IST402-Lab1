Open package.json and look at the scripts devDependencies and dependencies sections. What do you think each section does here? What commands can you run?

- The dependecies section tells what you need to install before the code will work correctly. THe devDependencies tells you what you need to install to develop the code.
  The "demo" for your hello-world element is found in index.html. Reading this code, what does it do and how does it work? What HTML is making your script load to show a demo? How is this file rendering HTML via JavaScript?
- The demo calls a webcomponent. The <hello-world> tag is helping it load. The file is rendering through the JS tree.
  The Definition of your element is in your-element-name.js, while the class JS object is found in src/YourElementName.js. Why do you think they put these in two separate files? What do you think each code block is doing in the class'ed object?
- These files do two seperate things. The first just defines it while the second adds the functionality.
  Try to explain what Lit is providing to the repo. What's so special about what Lit is providing that I'd be so bold to say it changes how the web is developed, forever?
- Lit sets up all of the dependecies that you need. By runing a few commands you can have a shell of a prject running very quickly.
