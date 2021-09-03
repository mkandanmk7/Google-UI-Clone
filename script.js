const search = document.querySelector(".search");
const form = document.querySelector("#searchform");

// const button = document.querySelector("#btnsearch");

// onclick event method:

// function getData() {
//   //   Event.preventDefault();
//   let data = search.value;
//   console.log(data);
//   if (data.length === 0) {
//     console.log(data);
//     return false;
//   } else {
//     console.log(data);
//     window.location = `http://www.google.com/search?q=${data}`;
//   }
// }

// getData();

// addEventListener() method

form.addEventListener("submit", (data) => {
  console.log(data);
  data.preventDefault();
  let searchquery = search.value;
  if (searchquery.length == 0) {
    return false;
    console.log("data==0");
  } else {
    console.log("data received");
    window.location = `http://www.google.com/search?q=${searchquery}`;
  }
});
