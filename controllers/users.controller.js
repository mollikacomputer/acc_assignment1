let users = [
  { id: 1, gender: "female", name:"suchitra", contact: "01914955559", photoUrl:"pic" },
  { id: 2, gender: "female", name:"sipra", contact: "01914333335", photoUrl:"pic2" },
  { id: 3, gender: "female", name:"rinku", contact: "01914333334", photoUrl:"pic3" },
  { id: 4, gender: "Male", name:"Ranjit", contact: "01911111111", photoUrl:"picPic1" },
  { id: 5, gender: "Male", name:"Sanjit", contact: "01914999999", photoUrl:"picPic2" },
  { id: 6, gender: "Male", name:"Rabindra", contact: "01914444444", photoUrl:"picPic3" },
  { id: 7, gender: "Male", name:"Tipu", contact: "0191111111", photoUrl:"picPic4" },
  { id: 8, gender: "Male", name:"Sujit", contact: "019111111", photoUrl:"picPic5" },
  { id: 9, gender: "Male", name:"Biswajit", contact: "01911111", photoUrl:"picPic6" },
  {id: 10, gender: "Male", name:"Sankar", contact: "0191111", photoUrl:"picPic7" },

];

module.exports.getAllUsers = (req, res, next) => {
  // res.send(users); or 
  // res.json(users) // same working
    const { limit, page } = req.query;
  console.log(limit, page);
  res.json(users.slice(0, limit));
};

// let users = [
//   { id: 1, gender: "female", name:"suchitra", contact: "01914955559", photoUrl:"pic" },
//   { id: 2, gender: "female", name:"sipra", contact: "01914333335", photoUrl:"pic2" },
//   { id: 3, gender: "female", name:"rinku", contact: "01914333334", photoUrl:"pic3" },
//   { id: 4, gender: "Male", name:"Ranjit", contact: "01911111111", photoUrl:"picPic1" },
//   { id: 5, gender: "Male", name:"Sanjit", contact: "01914999999", photoUrl:"picPic2" },
//   { id: 6, gender: "Male", name:"Rabindra", contact: "01914444444", photoUrl:"picPic3" },
//   { id: 7, gender: "Male", name:"Tipu", contact: "0191111111", photoUrl:"picPic4" },
//   { id: 8, gender: "Male", name:"Sujit", contact: "019111111", photoUrl:"picPic5" },
//   { id: 9, gender: "Male", name:"Biswajit", contact: "01911111", photoUrl:"picPic6" },
//   {id: 10, gender: "Male", name:"Sankar", contact: "0191111", photoUrl:"picPic7" },

// ];

// module.exports.getAllUsers = (req, res, next) => {
//   const { limit, page } = req.query;
//   console.log(limit, page);
//   undefined.test();
//   res.json(users.slice(0, limit));
// };

// module.exports.saveAUser = (req, res) => {
//   console.log(req.query);
//   users.push(req.body);
//   res.send(users);
// };

// module.exports.getUserDetail = (req, res) => {
//   const {id} = req.params;
//   console.log(id);
//   // const filter = {_id: id};
//   const foundUser = users.find(user => user.id === Number(id));
//   res.status(200).send({
//     success: true,
//     messages: "Success",
//     data: foundUser
//   });

// };

// module.exports.updateUser = (req, res) => {
//   // const newData = req.body;
//   const { id } = req.params;
//   const filter = { _id: id };

//   const newData = users.find(user => user.id === Number(id));

//   newData.id = id;
//   newData.name = req.body.name;

//   res.send(newData);

// };

// module.exports.deleteUser = (req, res) => {
//   const { id } = req.params;
//   const filter = { _id: id };

//   users = users.filter(user => user.id !== Number(id));

//   res.send(users);
// };