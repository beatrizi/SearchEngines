let data = [
    { tag: "videos", url: "https://www.youtube.com/" },
    { tag: "facts", url: "https://en.wikipedia.org/wiki/Main_Page" },
    { tag: "news", url: "https://www.bbc.co.uk/news" },
    { tag: "weather", url: "https://www.bbc.co.uk/weather" },
    { tag: "library", url: "https://leicestershire.borrowbox.com/" },
  ];

  //funtionality:
  //when search button is clicked:
  /**
   * check if the word in the search box is the same as the first tag.
   * check if it is the same as the second time
   * ...
   * if it is the same as one of them then show the URL of the website
   *         */
  function doSearch(text) {
    for (i = 0; i < data.length; i++) {
      //start a loop to look through each item in the data array.
      if (text == data[i].tag) {
        //check to see if x matches one of the tags
        document.write(
          '<a href="' + data[i].url + '">' + data[i].url + "</a>"
        );
        // document.write("<a href='`${data[i].url}`'>`${data[i].url}`</a>")// if text matches, then add a link to the web page. the link will take us to the matching website.
      }
    }
  }