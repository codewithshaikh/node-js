
// Basic in node js.
// node js using V8 is the name of the JavaScript engine that powers 
// Google Chrome. It's the thing that takes our JavaScript and executes it 
// while browsing with Chrome.
// node ./filename.js

// console.log("welcome to I-Tech")
// a=10
// b=20
// console.log("Add= "+(a+b))



// npm install prompt-sync (to cmd run) take user input


// First Method
// const ps = require("prompt-sync");
// const prompt = ps();

// let name=prompt("enter your name");
// console.log(`Welcome to i-tech ${name}`)


// Second Method
// const prompt=require("prompt-sync")({sigint:true});
// let name=prompt("enter your name");
// console.log(`Welcome to i-tech ${name}`)


const prompt=require("prompt-sync")({sigint:true});
// let a=parseInt(prompt("Enter the first value"))
// let b=parseInt(prompt("Enter the Second value"))
// let c=a+b
// console.log("The sum is=",c);




// fundamentals of node js
// 1. JavaScript Fundamentals for Node Js .
// 2. Condition , loop and Array
// 3. The import function and variable from another file.
// 4. Function inside a function.

// let a=parseInt(prompt("Enter the first value"))
// let b=parseInt(prompt("Enter the Second value"))

// if (a<b){
//     console.warn("A is MiniMum no.")
// }else{
//     console.log("B is Minimum no.")
// }



// let a=parseInt(prompt("Enter the No. of table"))

// i=1
// while(i<=10) {
//     console.log(a+" * "+i+" = "+a*i )
//     i++
// }

        // l=parseInt(prompt("Enter the limit"))
		// var neww= [10]
		// for(var i=0 ; i<l ; i++)
		// {
			
		// 	neww[i]=parseInt(prompt("Enter The Elements "+ i));
		// }

		// for (var i =0 ; i< l; i++) 
		// {
		// 	console.log(neww[i]);
		// }


        // loop elements prints
        // const arr=[1,2,3,4,5,1,2,3,8,2,9,2];
        // arr.filter((Elements)=>{
        //     console.log(Elements)
        // })


        // const arr=[1,2,3,4,5,1,2,3,8,2,9,2];
        //  let result=arr.filter((Elements)=>{
        //     // return Elements===2
        //     return Elements>=5 
        //  })
        //  console.warn(result)


    // data fatching second page

    const second = require('./second')
    // console.log(second)
    // console.log(second.a)
    console.log(second.myfun())
    

