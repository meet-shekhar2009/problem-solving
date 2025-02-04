const company = {
  name: "TechCorp",
  location: {
    city: "New York",
    address: {
      street: "123 Main St",
      zip: "10001",
    },
  },
  departments: [
    {
      name: "Engineering",
      employees: [
        { name: "Alice", role: "Software Engineer" },
        { name: "Bob", role: "DevOps Engineer" },
      ],
    },
    {
      name: "Marketing",
      employees: [
        { name: "Carol", role: "Content Specialist" },
        { name: "Dave", role: "SEO Analyst" },
      ],
    },
  ],
};

function parseObject(object) {
  for (const key in object) {
    const element = object[key];
    if (typeof element === "object") {
      parseObject(element);
    } else {
      console.log(key, " = ", element);
    }
  }
}
parseObject(company);


