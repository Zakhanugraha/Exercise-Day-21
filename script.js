const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

//Exercise 9

// let persons = {
//     name: 'Ilham',
//     height : 1.7,
//     weight: 65
// };

// function calculateBMI(height, weight) {
//     const total = weight / (height**2);
//     return total;
// }

// let bmi = calculateBMI(1.7, 65);
// console.log(bmi);

// function bmiResult(calculateBMI) {
//     if (calculateBMI < 18.5) {
//         console.log('Berat badan kurang');
//     } else if ( 18.5 < calculateBMI < 22.9 ) {
//         console.log('Berat badan normal');
//     } else if ( 23 < calculateBMI < 29.9) {
//         console.log('Berat badan berlebih');
//     } else if ( calculateBMI > 30) {
//         console.log('Obesitas');
//     }
// }

// let bmiCategory = bmiResult(22.49);
// console.log(bmiCategory);

// persons.bmi = bmi;
// persons.bmiCategory = 'Berat badan normal';
// console.log(JSON.stringify(persons));

//Exercise 10
// app.get('/profile', (req, res) => {
//     const person = {
//         name : 'Ilham',
//         height : 1.7,
//         weight: 65
//     };

//     res.json(person);
// });

//Exercise 11
// app.get('/bmi', (req,res) => {
//     function calculateBMI(height, weight) {
//         const total = weight / (height**2);
//             return total;
//     };
        
//     function bmiResult(calculateBMI) {
//         if (calculateBMI < 18.5) {
//             return 'Berat badan kurang';
//         } else if ( 18.5 < calculateBMI < 22.9 ) {
//             return 'Berat badan normal';
//         } else if ( 23 < calculateBMI < 29.9) {
//             return'Berat badan berlebih';
//         } else if ( calculateBMI > 30) {
//             return 'Obesitas';
//         }
//     };

//     const person = {
//         name : 'Ilham',
//         height : 1.7,
//         weight: 65,
//         bmi: calculateBMI(1.7, 65),
//         bmiCategory : bmiResult(calculateBMI(1.7, 65))
//     };

//     res.json(person);
// })


//Exercise 12

// http://localhost:5000/bmi?name=ilham&height=1.7&weight=6.5

// app.get('/bmi', (req,res) => {
//     let name = req.query.name;
//     let height = req.query.height;
//     let weight = req.query.weight;

    // function calculateBMI(height, weight) {
    //     const total = weight / (height**2);
    //         return total;
    // };
    
    // function bmiResult(calculateBMI) {
    //     if (calculateBMI < 18.5) {
    //         return 'Berat badan kurang';
    //     } else if ( 18.5 < calculateBMI < 22.9 ) {
    //         return 'Berat badan normal';
    //     } else if ( 23 < calculateBMI < 29.9) {
    //         return'Berat badan berlebih';
    //     } else if ( calculateBMI > 30) {
    //         return 'Obesitas';
    //     }
    // };

//     const person = {
//         name : name,
//         height : height,
//         weight: weight,
//         bmi: calculateBMI(height, weight),
//         bmiCategory : bmiResult(calculateBMI(height, weight))
//     };

//     res.json(person);
// })


//Exercise 13

// app.post('/bmi', (req, res) => {
//     function calculateBMI(height, weight) {
//         const total = weight / (height**2);
//         return total;
//     };
    
//     function bmiResult(calculateBMI) {
//         if (calculateBMI < 18.5) {
//             return 'Berat badan kurang';
//         } else if ( 18.5 < calculateBMI < 22.9 ) {
//             return 'Berat badan normal';
//         } else if ( 23 < calculateBMI < 29.9) {
//             return 'Berat badan berlebih';
//         } else if ( calculateBMI > 30) {
//             return 'Obesitas';
//         }
//     };

//     const name = req.body.name;
//     const height = req.body.height;
//     const weight = req.body.weight;

//     let persons = {
//         name : req.body.name,
//         height : req.body.height,
//         weight : req.body.weight
//     }

//     let hasilBmi = calculateBMI(persons.height, persons.weight);
//     let statusBmi = bmiResult(calculateBMI(persons.height, persons.weight));
//     persons.bmi = hasilBmi;
//     persons.statusBmi = statusBmi

//     res.json(persons);
// });

//Exercise 14

app.post('/exchange', (req,res) => {
    function exchange(sourceCurrency, sourceAmount, targetCurrency) {
        let targetAmount = 0;
        if (sourceCurrency == 'IDR' && targetCurrency == 'USD') {
            targetAmount = sourceAmount * 0.000069;
            return targetAmount;
        } else if (sourceCurrency == 'IDR' && targetCurrency == 'SGD') {
            targetAmount = sourceAmount * 0.000094;
            return targetAmount;
        } else if (sourceCurrency == 'IDR' && targetCurrency == 'MYR') {
            targetAmount = sourceAmount * 0.00029;
            return targetAmount;
        } else if (sourceCurrency == 'IDR' && targetCurrency == 'JPY') {
            targetAmount = sourceAmount * 0.0076;
            return targetAmount;
        } else if (sourceCurrency == 'USD' && targetCurrency == 'IDR') {
            targetAmount = sourceAmount * 14494.3;
            return targetAmount;
        } else if (sourceCurrency == 'USD' && targetCurrency == 'SGD') {
            targetAmount = sourceAmount * 1.36;
            return targetAmount;
        } else if (sourceCurrency == 'USD' && targetCurrency == 'MYR') {
            targetAmount = sourceAmount * 4.33;
            return targetAmount;
        } else if (sourceCurrency == 'USD' && targetCurrency == 'JPY') {
            targetAmount = sourceAmount * 109.86;
            return targetAmount;
        } else if (sourceCurrency == 'SGD' && targetCurrency == 'IDR') {
            targetAmount = sourceAmount * 10654.77;
            return targetAmount;
        } else if (sourceCurrency == 'SGD' && targetCurrency == 'USD') {
            targetAmount = sourceAmount * 0.74;
            return targetAmount;
        } else if (sourceCurrency == 'SGD' && targetCurrency == 'MYR') {
            targetAmount = sourceAmount * 3.11;
            return targetAmount;
        } else if (sourceCurrency == 'SGD' && targetCurrency == 'JPY') {
            targetAmount = sourceAmount * 80.77;
            return targetAmount;
        } else if (sourceCurrency == 'JPY' && targetCurrency == 'IDR') {
            targetAmount = sourceAmount * 131.88;
            return targetAmount;
        } else if (sourceCurrency == 'JPY' && targetCurrency == 'USD') {
            targetAmount = sourceAmount * 0.0091;
            return targetAmount;
        } else if (sourceCurrency == 'JPY' && targetCurrency == 'SGD') {
            targetAmount = sourceAmount * 0.012;
            return targetAmount;
        } else if (sourceCurrency == 'JPY' && targetCurrency == 'MYR') {
            targetAmount = sourceAmount * 0.039;
            return targetAmount;
        } else if (sourceCurrency == 'MYR' && targetCurrency == 'IDR') {
            targetAmount = sourceAmount * 3419.95;
            return targetAmount;
        } else if (sourceCurrency == 'MYR' && targetCurrency == 'USD') {
            targetAmount = sourceAmount * 0.24;
            return targetAmount;
        } else if (sourceCurrency == 'MYR' && targetCurrency == 'SGD') {
            targetAmount = sourceAmount * 0.32;
            return targetAmount;
        } else if (sourceCurrency == 'MYR' && targetCurrency == 'JPY') {
            targetAmount = sourceAmount * 25.94;
            return targetAmount;
        } else {
            return `Currency not identified`
        }
    }

    let sourceCurrency = req.body.sourceCurrency;
    let sourceAmount = req.body.sourceAmount;
    let targetCurrency = req.body.targetCurrency;

    let targetAmount = exchange(sourceCurrency, sourceAmount, targetCurrency);

    let result = {
        sourceCurrency : sourceCurrency,
        sourceAmount : sourceAmount,
        targetCurrency : targetCurrency,
    }

    result.targetAmount = targetAmount;
    res.json(result);
})

app.listen(port, () => {
    console.log(`port berjalan pada http://localhost:${port}`);
});