// var name = document.getElementById('name');
// var phone = document.getElementById('phone');
// var rent = document.getElementById('rent');
// var zipcode = document.getElementById('zipcode');
// var city = document.getElementById('city');

// getMlsData = () => {
//     let apiUrl = "https://api.bridgedataoutput.com/api/v2/OData//property?access_token=process.env.SERVER_TOKEN";

//     fetch(apiUrl)
//     .then(function (response) {
//         if (response.ok) {
//             console.log(response);
//             return response.json()
//         } else {
//             throw new Error ('hrrmmm something went wrong with your request, please try again');
//         }
//     })
//     .then(function (data) {
//         console.log(data.main);
//         //when I fetch data I want to receive:
//         // image
//         let thumbnail = data.thumbnail[0];
//         // price
//         let purchasePrice = data.listprice[0];
//         // location/address
//         let address = data.location[0]
//         // bedrooms
//         let bedrooms = data.bedrooms[0];
//         // bathrooms
//         let bathrooms = data.bathrooms[0];
//         // square footage
//         let size = data.squarefeet[0];
//         // price per square foot
//         let pricePerSquareFoot = data.sqftprice[0];
//         // price high to low
//         // show 10-30 results per page?
//         // refresh every 30 minutes
//         // ASYNC request - link to the house (actually, the link needs to stay on our site, and another fetch request must be made)
//     })
//     .catch (function (err) {
//         console.log(err);
//     });

//     // store data in cache and make available offline
// };

