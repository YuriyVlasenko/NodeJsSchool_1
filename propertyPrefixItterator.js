

const applyItterator = (target, itterablePropertyPrefix)=> {

    target[Symbol.iterator] = function () {
      let keysWithPrefix = Object.keys(this).filter((keyName)=>keyName.startsWith(itterablePropertyPrefix));
      let index = 0;
      
      return {
        next: function () {
          return {
            value: keysWithPrefix[index], 
            done: index++ >= keysWithPrefix.length
          };
        }
      }
  }
}

export default {applyItterator};