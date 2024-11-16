export function add(numbers) {
    if (!numbers) return 0;
  
    const delimiterPattern = /^(\/\/(.+)\n)/;
    const match = numbers.match(delimiterPattern);
  
    let delimiters = [",", "\n"];
    let nums = numbers;
  
    if (match) {
      delimiters.push(match[2]);
      nums = numbers.slice(match[1].length);
    }
  
    const regex = new RegExp(`[${delimiters.join("")}]`);
    const numArray = nums.split(regex).map(Number);
  
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }
  
    return numArray.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
  }
  