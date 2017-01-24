# Drupal 8 Theming Guide

This theming guide is a reference of various techniques and snippets which are typically needed for front-end developement scenarios on a project. Some documentation referencing high-level techniques that match best practices, while others are specific code from certain tasks.  

<!-- -------------------------- -->
<!-- -------------------------- -->


### Sass in Drupal
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/sass.md#sassorg">Sass Style Organization</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/sass.md#componenmqs">Component Rules with Media Queries</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/sass.md#csspreprocess">CSS Preprocessing</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/sass.md#effectivestyles">Writing Effective Style Rules</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/sass.md#mqtechniques">Media Queries Coding Techniques</a>

<!-- -------------------------- -->
<!-- -------------------------- -->

### Using Web Fonts in Drupal
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/fonts.md#cdnfonts">Adding external Web Fonts to your theme</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/fonts.md#localfonts">Adding local Web Fonts to your theme</a>

<!-- -------------------------- -->
<!-- -------------------------- -->

### Images in Drupal
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/images.md#origrenderarray">Create Render Array for Original Image</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/images.md#stylerenderarray">Create Render Array with Image Style</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/images.md#imguri">Create Image Object from URI</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/images.md#imgfiduri">Return Image Information from File ID</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/images.md#gulpcompr">Compressing Images with Gulp</a>

<!-- -------------------------- -->
<!-- -------------------------- -->

### JavaScript in Drupal 
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/javascript.md#jsfile">Adding a Javascript file to you theme</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/javascript.md#wrappingfile">Wrapping your JavaScript code in closure</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/javascript.md#behaviors">Adding JS code within Drupal.behaviors</a>

<!-- -------------------------- -->
<!-- -------------------------- -->

### Drupal 8 Libraries
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/libraries.md#locallibs">Defining Local Libraries in Drupal 8</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/libraries.md#remotelibs">Defining External Libraries in Drupal 8</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/libraries.md#dependencylibs">Adding Library Dependencies</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/libraries.md#attachtwig">Attaching Libraries within Twig files</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/libraries.md#preprocesslibraries">Attaching Libraries within Preprocess Functions</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/libraries.md#replaceremovelibs">Replacing or Removing Libraries</a>

<!-- -------------------------- -->
<!-- -------------------------- -->

### Preprocessing in Drupal
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/preprocessing.md#customvars">Creating and passing custom variables to twig</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/preprocessing.md#userrole">Creating body classes based on user role</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/preprocessing.md#regionvar">Counting and creating classes elements per region</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/preprocessing.md#homepage">Creating a body class for the homepage</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/preprocessing.md#themespec">Creating a theme-specific variable to pass to twig</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/preprocessing.md#pathalias">Creating body classes based on path alias</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/preprocessing.md#nodetype">Creating body classes based on node type</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/preprocessing.md#commonvars">Common variables available in primary twig files</a>

<!-- -------------------------- -->
<!-- -------------------------- -->

### Twig for Drupal 8
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/twig.md#twigbasics">Twig Basics</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/twig.md#twigcompare">Twig Comparison and Control Operators</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/twig.md#twigfunc">Twig Functions and Filters</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/twig.md#twigenabledebug">Enable Twig Debugging</a>
- <a href="https://github.com/acquia-pso/cog/blob/8.x-1.x/STARTERKIT/_theming-guide/twig.md#twigdebug">Debugging Options in Twig</a>







