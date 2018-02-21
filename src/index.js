/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  number = 0;
  for(i=0;i<preferences.length; i++){
  /*if((preferences[param] != param) && (preferences[param+1] != (param+1)) && (preferences[param+2] != (param+2))){
    returns = returns + 1;
    return returns;
  }*/
  /*if((preferences[i] == (i+2)) && (preferences[i+1] == (i+3)) && (preferences[i+2] == (i+1))){
    number = number + 1;
  }*/
  /*if((preferences[i] == (i+2)) && (preferences[i+1] == (i+3)) && (preferences[i+2] == (i+1))){
    number = number + 1;
  }*/

  if (preferences[i] - 1 <= preferences.length && preferences[i] - 1 != preferences[preferences[i] - 1] - 1){
    if (preferences[preferences[i] - 1] - 1<= preferences.length && preferences[preferences[i] - 1] - 1 != preferences[preferences[preferences[i] - 1] - 1] - 1){
      if (preferences[preferences[preferences[i] - 1] - 1] - 1 <= preferences.length && preferences[preferences[preferences[i] - 1] - 1] - 1 != preferences[preferences[preferences[preferences[i] - 1] - 1] - 1] - 1){
        if (preferences[preferences[preferences[preferences[i] - 1] - 1] - 1] - 1<= preferences.length && preferences[i] - 1 != preferences[preferences[i] - 1] - 1){
    //      if (preferences[preferences[preferences[preferences[i]]]] <= preferences.length){
            if(i  == preferences[preferences[preferences[i] -1] - 1] -1)
            {
              number = number + 1;
            }
          //}
        }
      }
    }
  }

  /*if(preferences[i]  == preferences[preferences[preferences[preferences[i]]]])
  {
    number = number + 1;
  }*/
}
return number / 3;
};
