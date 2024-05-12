const { createContext } = require("react");

// User context to store user data globally

const UserContext = createContext({
  user: "Dhruv",
});

export default UserContext;
