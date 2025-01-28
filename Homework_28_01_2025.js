function counterChar(el) {
    el = el.toLowerCase();
    const countChar = {};
  
    for (let char of el) {
      countChar[char] = (countChar[char] || 0) + 1;
    }
  
    Object.keys(countChar).sort().forEach(char => {
      console.log(`${char} - ${countChar[char]}`);
    });
  }
  
  const wort = "mamamilaramu";
  counterChar(wort);