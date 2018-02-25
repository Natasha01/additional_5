module.exports = function check(str, bracketsConfig) {

  j = 0;
  while (j < bracketsConfig.length) {
    if (str[0] === bracketsConfig[j][1]) {
      if (str [0] != bracketsConfig[j][0]){
        return false; 
      }     
    }
    j++;
  }
  var i = 1;
  while (i < str.length) {
    var j = 0;
    while (j < bracketsConfig.length) {
      if (str[i] === bracketsConfig[j][1]) {
        if (str[i - 1] === bracketsConfig[j][0]) {
          str = str.substr(0, i - 1) + str.substr(i + 1);
          i -= 2;
          break;
        } else if (bracketsConfig[j][0] != bracketsConfig[j][1]) {
          return false;
        }
      }
      j++;
    }
    i++;
  }
  j = 0;
  while (j < bracketsConfig.length) {
    if (str[str.length - 1] === bracketsConfig[j][0]) {
      return false;
    }
    j++;
  }

  return true;

}
