Example score system front end extension
========================================

Contents here go into a folder named `app-extend` inside the [front end](https://github.com/motionbank/score-system-frontend) folder, next to `app-base`.

The files here will be compiled along the base system into the single page application and allow for customizing not only the style but also the system itself.

**Styling**

Any style sheets inside `css/` will be concatenated and included into the base application after the default style for them to be able to override these.

Any templates inside `views/templates/` will be compiled and added to the system. If the paths (mind the folder structure) already exist there they will override the default templates.

**Assets**

Anything inside `assets/` gets copied along into the public folder. Add static content like images here but remember to keep it slim.

**Cells and other system items**

You can create your own views / models / ... here or override the default ones. Examples will follow soon.

**Modules**

Inside `modules/` there is an example iframe module that shows how to connect with the system dispatcher. To test include two of these modules into an iframe cell inside a set. Click the ping/pong buttons in one iframe and see the messages arrive at the other one.