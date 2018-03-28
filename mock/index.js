let appData = require('./vip/vip.json');
let platInfo = require('./platInfo/platInfo.json');
function mock(app) {
  app.get('/vip/vipInfo', function (req, res) {
    res.json(appData)
  });
  app.get('/platInfo', function (req, res) {
    res.json({
      errno: 0,
      data: platInfo
    })
  });
};
module.exports = mock;
