// // // // //console.log("Hello, World!");

// // // // //function sum(a, b) {
// // // //     return a + b;
// // // // }

// // // // console.log(sum(5, 10));
// // // // function sum(a, b) {
// // // //     return Math.sqrt(a) + Math.sqrt(b);
// // // // }

// // // // console.log(sum(25, 100));

// // // var a = 34;
// // // if (a > 20) {
// // //     var a=45;
// // //     console.log("a inside a=45");
// // // }
// // // console.log("a outside a=45", a);

// // // function sum(a, b) {
// // //     return a + b;
// // // }

// // // console.log(sum(5, 10));


// // // const sum = (c, d) => {
// // //     return c + d;
// // // };
// // // sum(15, 5);

// // // const sum = (a, b) => { return Math.sqrt(a + b) }
// // // sum(25, 100);

// // // //IIFE
// // // ((() => {
// // //     console.log("hiiii");
// // // })());

// // // function sum(a, b) {
// // //     return a + b;
// // // }

// // // function sumWithMsg(clbk, msg) {
// // //     const result = clbk(12, 40);
// // //     console.log("Hii" + msg + "" + result);
// // //     console.log();
// // // }
// // // sumWithMsg(sum, "Hello");

// // function login(msg, error) {
// //     if (error) {
// //         console.log(error)
// //     }
// //     else {
// //         console.log(msg);
// //     }
// // }

// // function loginHandler(username, password, callback) {
// //     if (username === "admin" && password === "admin") {
// //         callback("Login Successful", null);
// //     }
// //     else {
// //         callback(null, "Login Failed");
// //     }
// // }

// // // loginHandler("admin", "admin", login); 
// // loginHandler("admin", "123", login);

// //Callback hell
// setTimeout(()=>{console.log("One");setTimeout(()=>{console.log("Two");setTimeout(()=>{console.log("Three");setTimeout(()=>{console.log("Four");setTimeout(()=>{console.log("Five");},1000)},1000)},1000)},1000)},1000)

// const myPromise = new Promise((resolve, reject) => {
//     let username = "admin";
//     let password = "admin";
//     if (username === "admin" && password === "admin") {
//         resolve("Login Successful");
//     }
//     else {
//         reject("Login Failed");
//     }
// })
// console.log(myPromise);

// myPromise.then((msg) => { console.log(msg) })
    
//     .catch((msg) => { console.log(msg); })
// .finally(() => { console.log("Login Process Completed") });

// async function handleLogin() {
//     const status = await myPromise;
//     console.log(status);
// }   
// handleLogin();


const myPromise = new Promise((resolve, reject) => {

    let username = "admin";
    let password = "admin";

    if (username === "admin" && password === "admin") {
        resolve("Login Successful");
    } else {
        reject("Login Failed");
    }
});



 async function orderReceived() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Order Received");
        }, 1000);

    });
}



 async function orderPrepared() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Order Prepared");
        }, 1000);

    });
}



 async function orderCompleted() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Order Completed");
        }, 1000);

    });
}



 async function generateOTP() {

    return Math.floor(1000 + Math.random() * 9000);

}



 async function verifyOTP(generatedOTP) {

    return new Promise((resolve, reject) => {

        let enteredOTP = generatedOTP; 

        if (enteredOTP === generatedOTP) {
            resolve("OTP Verified");
        } else {
            reject("Invalid OTP");
        }

    });

}



async function handleOrder() {

    try {

        const loginStatus = await myPromise;
        console.log(loginStatus);

        const received = await orderReceived();
        console.log(received);

        const prepared = await orderPrepared();
        console.log(prepared);

        const completed = await orderCompleted();
        console.log(completed);

        const otp = await generateOTP();

        console.log("Your OTP is:", otp);

        const verification = await verifyOTP(otp);
        console.log(verification);

    }

    catch (error) {
        console.log(error);
    }

}

handleOrder();
