const gulp = require('gulp')
const gutil = require('gulp-util')
const ftp = require('vinyl-ftp')
const sftp = require('gulp-sftp')

gulp.task('deploy', function() {
    const config = require('./.vscode/sftp.json')

    let cfg = config.find(item => item.name === process.argv.slice(2)[2])
    console.log(cfg)

    const globs = [cfg.context + '/**']

    if (cfg.protocol === 'ftp') {
        const conn = ftp.create({
            host: cfg.host,
            port: cfg.port,
            user: cfg.username,
            password: cfg.password,
            parallel: 10,
            maxConnections: 20,
            reload: true,
            // debug: function (d) { console.log(d) },
            log: gutil.log
        })
        return gulp.src(globs, { buffer: false }).pipe(conn.dest(cfg.remotePath))
    } else {
        const conn = sftp({
            host: cfg.host,
            port: cfg.port,
            user: cfg.username,
            pass: cfg.password,
            remotePath: cfg.remotePath
        })
        return gulp.src(globs, { buffer: false }).pipe(conn)
    }
})
