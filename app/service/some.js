module.exports = app => {
  return class SomeService extends app.Service {
    async list() {
      const rule = this.config.robot.ua;
      console.log('🚀 ~ SomeService ~ list ~ rule', rule)
    }
  }
}
