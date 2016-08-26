module.exports = function (grunt) {
    grunt.initConfig({
       /* concat: {
            options: {
                separator: ';', // permet d'ajouter un point-virgule entre chaque fichier concaténé.
            },
            dist: {
                src: ['app/src/file1.js', 'app/src/file1.js'], // la source
                dest: 'app/dist/built.js' // la destination finale
            }
        },*/
        exec: {
            run: 'http-server -o'
        }
    })
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('default', ['concat:dist', 'exec:run'])
}