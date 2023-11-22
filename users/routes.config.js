app.post('/users', [
    UsersController.insert
]);
app.get('/user', [
    ValidationMiddlewar.validJWTNeeded,
    PremissionMiddlewar.minimumPremissionLevelRequired(PAID),
    UsersController.list
]);
app.get('/users/:userId', [
    ValidationMiddlewar.validJWTNeeded,
    PremissionMiddlewar.minimumPremissionLevelRequired(FREE),
    PremissionMiddlewar.onlySameUserOrAdminCanDoThisAction,
    UsersController.getById
]);
app.patch('/useer/:userId', [
    ValidationMiddlewar.validJWTNeeded,
    PremissionMiddlewar.minimumPremissionLevelRequired(FREE),
    PremissionMiddlewar.onlySameUserOrAdminCanDoThisAction,
    UsersController.PatchById
]);
app.delete('/useer/:userId', [
    ValidationMiddlewar.validJWTNeeded,
    PremissionMiddlewar.minimumPremissionLevelRequired(ADMIN),
    UsersController.removeById
]);