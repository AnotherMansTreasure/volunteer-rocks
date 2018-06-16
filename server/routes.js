const router = require('express').Router();
const userCtrl = require('./controllers/userController.js');
const oppCtrl = require('./controllers/oppController.js');
const orgCtrl = require('./controllers/orgController.js');

router.route('/api/logout')
  .get(userCtrl.logout)

router.route('/api/login')
  .post(userCtrl.login)

router.route('/api/main')
  .get(oppCtrl.main)

router.route('/api/users')
  .post(userCtrl.signUp)
  .put(userCtrl.enroll)
  .get(userCtrl.fetchOpps)

router.route('/api/opportunities')
  .post(oppCtrl.addNew)
  .put(oppCtrl.fetchByZip)
  .get(oppCtrl.fetchAll)

router.route('/api/organizations')
  .post(orgCtrl.createOrganization)
  .get(orgCtrl.fetchOrganizations)
  .patch(orgCtrl.joinOrganization)

module.exports = router;