# The Movie Database Wordpress Theme - Jumbo
**Movie Database Starter Theme**

Gulp used to process CSS, JS and run dev environment with live browser refresh.

• Open terminal and navigate to local Wordpress install theme folder

• Clone theme `git clone https://github.com/damoGit/themoviedatabase.git`

• CD into theme `cd themoviedatabase`

• Run `npm install` to install dev dependencies 

• Update gulpfile.js browsersyncServe proxy to point to your localhost

• Run `gulp` to open dev environment in default browser

```
function browsersyncServe(cb){
  browsersync.init({
	  proxy: 'https://themoviedatabase/'  
  });
  cb();
}
```

• Edit SASS and Javascript files in the source directory. The files are compiled to their respective directories in the assets folder ready for production
