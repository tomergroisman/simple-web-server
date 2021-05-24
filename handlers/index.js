const handlers = {
  home: (req, res) => {
    res.send('Welcome to wine api simple web server')
  },
  listen: (port) => {
    console.log(`Server is up on port ${port}`);
}
}

module.exports = handlers;