Function.prototype.myCall = function (context, ...args) {
  context["myCall"] = this || window || globalThis;
  return context["myCall"](...args);
};

function fncUser(firstname, lastName) {
  return this.prefix + " " + firstname + " " + lastName;
}

const userName = fncUser.myCall({ prefix: "Mr." }, "Chandra", "Shekhar");
console.log(userName);
