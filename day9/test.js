class Test {
  static async get() {
    return true;
  }

  async put() {
    return true;
  }
}

Test.get();

const objectTest = new Test();
objectTest.put()