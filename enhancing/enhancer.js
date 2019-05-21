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
    item = {
      ...item,
        enhancement: item.enhancement,
        durability: item.durability
    }
    if(item.enhancement < 15){
      item.durability -= 5;
      }
    
      else{
      item.durability -=10;
    }
    
    if(item.enhancement > 16){
      item.enhancement --;
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
