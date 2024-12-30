// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
console.log(num7);
num7 -= 20;
console.log(num7);

// 4. 증감 연산자 -> 덧셈 뺄셈 모두 가능
let num8 = 10;
num8++;
console.log(num8++); // 후위 연산
console.log(num8);
console.log(++num8); // 전위 연산

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
let nothing = !!true;
console.log(or, and, not, nothing);

// 6. 비교 연산자
// == -> 값만 비교
// === -> 자료형까지 비교
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
console.log(comp1, comp2);





