module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancement = item.enhancement
  const success = enhancement+=1
  if(enhancement < 20){
    return {...item, enhancement: success}
  }
  return { ...item };
}

function fail(item) {
  let enhancement = item.enhancement
  let durability = item.durability
  // const failLess = durability-=5
  // const failGreat = durability-=10
  const leveldown = enhancement-=1
  if(enhancement < 15){
    const failLess= durability-=5
    return{...item, durability:failLess}

  }
  
  if(enhancement >= 16) {
    const failGreat = durability-=10
    return{ ...item, durability:failGreat, enhancement:leveldown}
  } 
 
   
   


  return { ...item };
}

function repair(item) {
  const durability = item.durability
  if(durability < 100){
    return{ ...item, durability:100}
  }
  return { ...item };
}

function get(item) {
  return { ...item };
}
