const word_frequency = [0.082,0.015,0.028,0.042,0.127,
                        0.022,0.02, 0.061,0.07, 0.001,
                        0.008,0.04, 0.024,0.067,0.075,
                        0.019,0.001,0.06, 0.063,0.09,
                        0.028,0.01, 0.024,0.02, 0.001,0.001];

const TARGET = 0.065379;

const count = [];

function decrypt(str){
    let key = 0;
    // TARGET minimum difference
    let eps = 1;
    counter(str.toLowerCase());

    let LEN = 26;

    for (let j = 0; j < LEN; j++) { /*变量j穷举密钥*/
        let sum = 0, tem;
        for (let i = 0; i < LEN; i++) {
            /* 求sum{p[i]*q[i+j]}之和 */
            let t = (i+j) % 26;
            sum += word_frequency[i] * count[t];
        }
        tem = Math.abs(sum-TARGET);
        if (tem < eps) {
            eps = tem; key = j;
        }
    }
    console.log(key);
    return key;

}


// letter counter
function counter(str){
    // create letter counter array
    if (count.length = 26){
        count.fill(0);
    }
    else {
        for (let i = 0; i < 26; i++){
            count.push(0);
        }
    }
    // letter appear counter
    let len = 0; 
    for (let i = 97; i < 123; i++){
        let c = String.fromCharCode(i);
        // char_count(str,c);
        count[i-97] = char_count(str,c);
        len += char_count(str,c);
    }
    // calculate letter happen frequency
    for (let i = 0; i < 26; i++){
        count[i] /= len;
    }
    console.log(count);
    
}

// count letter in string 
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}



