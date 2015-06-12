module.exports = {
  sass : {
    files : 'scss/*.scss',
    tasks : ['sass'],
    options : {
        spawn : false,
    },
    
  },
  css : {
    files : 'css/*.css',
    tasks : ['injector'],
      options : {},
},
  bower : {
    files : 'bower_components/*',
    tasks : ['injector','wiredep'],
    options : {},
  }


}