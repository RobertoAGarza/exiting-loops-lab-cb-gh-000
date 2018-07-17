function breakOut(array, changeValue, stopValue){
  for(var i =0;i<stopValue;i++){
    if(array[i] == stopValue)
      break
      
    array[i] = changeValue
  }
  return array
}
