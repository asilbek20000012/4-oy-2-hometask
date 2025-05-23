// Assalomu aleykum hometask AND OR lar bilan qilinyapti.

// 1 misol
let a = 9
if (a % 2 === 0) {
  console.log("Boolean1: true")
} else {
  console.log("Boolean1: false")
}

// 2 misol
let b = 9, c = -3
if (b >= 0 || c < -2) {
  console.log("Boolean2: true")
} else {
  console.log("Boolean2: false")
}


// 3 misol
let d = 3, e = 5, f = 7
if ((d < e && e < f) || (f < e && e < d)) {
  console.log("Boolean3: true")
} else {
  console.log("Boolean3: false") 
}


// 4 misol
let g = 7, h = 9
if (g % 2 !== 0 && h % 2 !== 0) {
  console.log("Boolean4: true")
} else {
  console.log("Boolean4: false")
}

// 6 misol
let i = 4, j = 9
if (i % 2 !== 0 || j % 2 !== 0) {
  console.log("Boolean5: true")
} else {
  console.log("Boolean5: false")
}

// 7 misol
let k = 4, l = 7
if ((k % 2 !== 0 && l % 2 === 0) || (k % 2 === 0 && l % 2 !== 0)) {
  console.log("Boolean6: true")
} else {
  console.log("Boolean6: false")
}



let m = 1, n = 2, o = 3
if (m > 0 && n > 0 && o > 0) {
  console.log("Boolean7: true")
} else {
  console.log("Boolean7: false")
}


// 8 misol
let p = -2, q = 5, r = -3
let count = 0
if (p > 0) count++
if (q > 0) count++
if (r > 0) count++
if (count === 1) {
  console.log("Boolean8: true")
} else {
  console.log("Boolean8: false")
}

// 9 misol
let s = -2, t = 5, u = 3
count = 0
if (s > 0) count++
if (t > 0) count++
if (u > 0) count++
if (count === 2) {
  console.log("Boolean9: true")
} else {
  console.log("Boolean9: false")
}

// 10 misol
let v = 42
if (v >= 10 && v <= 99 && v % 2 === 0) {
  console.log("Boolean10: true")
} else {
  console.log("Boolean10: false")
}

// 11 misol
let w = 135
if (w >= 100 && w <= 999 && w % 2 !== 0) {
  console.log("Boolean11: true")
} else {
  console.log("Boolean11: false")
}

// 12 misol
let x = 4, y = -4, z = 7
if (x === -y || x === -z || y === -z) {
  console.log("Boolean12: true")
} else {
  console.log("Boolean12: false")
}

// 13 misol
let aa = 345
let aaa = (aa - (aa % 100)) / 100
let aab = ((aa % 100) - (aa % 10)) / 10
let aac = aa % 10
if (aaa < aab && aab < aac) {
  console.log("Boolean13: true")
} else {
  console.log("Boolean13: false")
}

// 14 misol
let ab = 321
let aba = (ab - (ab % 100)) / 100
let abb = ((ab % 100) - (ab % 10)) / 10
let abc = ab % 10
if ((aba < abb && abb < abc) || (aba > abb && abb > abc)) {
  console.log("Boolean14: true")
} else {
  console.log("Boolean14: false")
}

// 15 misol
let ac = 121
let aca = (ac - (ac % 100)) / 100
let acc = ac % 10
if (aca === acc) {
  console.log("Boolean15: true")
} else {
  console.log("Boolean15: false")
}



// Shakarboyev Asilbek