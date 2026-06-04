import axios from "axios";


function getData () {
    axios
    .get("https://books.toscrape.com/")
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

getData();