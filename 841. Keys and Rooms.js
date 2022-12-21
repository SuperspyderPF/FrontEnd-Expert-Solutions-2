canVisitAllRooms = r => {
     n = r.length;
     q = [0]
     c = [...r[0]]
    n--
    while(c.length){
       j = c.shift()
      if(q.includes(j)) { continue }
      q.push(j)
      c.push(...r[j])
      n--
    }
  
    return n === 0 ? true : false
  }


  //one line:
  canVisitAllRooms=r=>{n=r.length;q=[0];c=[...r[0]];n--;while(c.length){j=c.shift();if(q.includes(j)){continue};q.push(j);c.push(...r[j]);n--;}return n===0?true:false}