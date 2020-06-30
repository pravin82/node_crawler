const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://www.iban.com/exchange-rates";
const softwareUrl = "https://www.softwaresuggest.com/trading-software"

fetchData(softwareUrl).then( (res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const productList = $('.cat_list_append').find('section');
    
    productList.each(function() {
       let title = $(this).find($('.ga_soft_name')).val();
      console.log("title++++", title);
    });
})

async function fetchData(url){
    console.log("Crawling data...")

    // make http call to url
    let response = await axios(url).catch((err) => console.log(err));
    
    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;

}
