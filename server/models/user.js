// "database" as object literal
const users = [
    {

        uname:"sasi",
        pword:"fghjk"

    },
    {

        uname:"ss",
        pword:"fgk"

    },
    {

        uname:"sr",
        pword:"fggg"

    },
  ];
  
  function getAllUsers() {
    return users;
  }
  
  function login(user) { // {userName: "sda", password: "gsdhjsga"}
    let cUser = users.filter( u => u.uname === user.uname);
    
    if(!cUser[0]) throw Error("Username not found");
    if(cUser[0].pword !== user.pword) throw Error("Password incorrect");
  
    return cUser[0];
  }
  
  module.exports = { getAllUsers, login };