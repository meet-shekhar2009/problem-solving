Function.prototype.myBind = function (context, ...args) {
  let that = this;
  return function (...innerArgs) {
    context["myBind"] = that;
    return context["myBind"](...args, ...innerArgs);
  };
};

function fncUser(firstname, lastName) {
  return this.prefix + " " + firstname + " " + lastName;
}

const getUserName = fncUser.bind({ prefix: "Mr." }, "Chandra");
console.log(getUserName("Shekhar"));
