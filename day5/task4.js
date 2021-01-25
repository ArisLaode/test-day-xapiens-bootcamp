const ineed = require("ineed");

async function scrapping() {
  ineed.collect.images.hyperlinks.from(
    "https://www.kompas.com/tag/headline",
    function (err, response, result) {
      try {
        let restHeadLine = result.hyperlinks;

        restDataHref = JSON.parse(
          JSON.stringify(restHeadLine).split('"href":').join('"URL":')
        );

        restDataText = JSON.parse(
          JSON.stringify(restDataHref).split('"text":').join('"Title":')
        );

        let resultScrapping = restDataText;

        console.log({ data: resultScrapping });
      } catch (err) {
        console.log(error.message);
      }
    }
  );
}

scrapping();
