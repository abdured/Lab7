1)function askpassword(ok,fail){
  let password=prompt("inpute messegae"," ");
  if(password ==="rockstar"){
    ok();
  }
  else {
    fail();
  }
}
let user={
  name:'jhon',
  loginok: function(){
    console.log(`${this.name} login`);
  },
  loginfail: function(){
    console.log(`${this.name} fail`);
  },
};
askpassword(function(){user.loginok()},function(){user.loginfail()});
askpassword(user.loginok.bind(user),user.loginfail.bind(user));
askpassword(function(){user.loginok.call(user)},function(){user.loginfail.call(user)});
askpassword(function(){user.loginok.apply(user)},function(){user.loginfail.apply(user)});


2)let group = {
title: "Our Group",
students: ["John", "Pete", "Alice"],
showList: function() {
  
this.students.forEach(function(student) {
console.log(this.title + ": " + student
);
}.bind(this));



}

};
group.showList()