var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mmongodb+srv://jmwangi:jmwangi123@gallery.piugugk.mongodb.net/?retryWrites=true&w=majority&appName=gallery',
    development: 'mmongodb+srv://jmwangi:jmwangi123@gallery.piugugk.mongodb.net/?retryWrites=true&w=majority&appName=gallery',
    test: 'mmongodb+srv://jmwangi:jmwangi123@gallery.piugugk.mongodb.net/?retryWrites=true&w=majority&appName=gallery',
}
module.exports = config;
