var Database = require('better-sqlite3');
var db = new Database('public/dat/db/pal.db');

// === tmp ===
exports.selTmp=function(arg2){
var stm=db.prepare('select * from tmp where usr=?');
try{var row=stm.all(arg2);
}catch(err){console.log(err);}
return row;
};
exports.allTmp=function(){
var stm=db.prepare('select * from tmp ');
var row=stm.all();
return row;
};
exports.skuTmp=function(sku){
var stm=db.prepare('select * from tmp where sku=?');
try{var row=stm.get(sku);
}catch(err){console.log(err);}
return row;
};
// === tmp run ===
exports.updTmp=function(uni,usr,sku){
var stm=db.prepare('update tmp set uni=? where usr=? and sku=? ');
try{stm.run(uni,usr,sku);
}catch(err){console.log(err);}
};

exports.insTmp=function(usr,sku,uni){
var stm=db.prepare('insert into tmp values(?,?,?) ');
try{stm.run(usr,sku,uni);
}catch(err){console.log(err);}
};

// === mer ===
exports.allMer=function(){
var stm=db.prepare('select * from mer');
try{var row=stm.all();
}catch(err){console.log(err);}
return row;
};

exports.skuMer=function(sku){
var stm=db.prepare('select * from mer where sku=?');
try{var row=stm.get(sku);
}catch(err){console.log(err);}
return row;
};

// === aid ===
exports.allAid=function(){
var stm=db.prepare('select * from aid');
try{var row=stm.all();}catch(err){console.log(err);}
return row;
};
exports.insAid=function(usr,pss,email,phn){
var stm=db.prepare('insert into aid values(?,?,?,?)');
stm.run(usr,pss,email,phn);
};
exports.updAid=function(pid,usr){
var stm=db.prepare('update aid set pid=? where usr=?');
stm.run(pid,usr);
};
exports.ordAid=function(usr,pid,name,mnt,dat,stat){
var stm=db.prepare('insert into aid_ord values(?,?,?,?,?,?)');
stm.run(usr,pid,name,mnt,dat,stat);
};

