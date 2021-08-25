function domainName(url){
  const removehttp = url.replace('http://', '')
  console.log(removehttp)
  const removewww = removehttp.replace('www', '')
  console.log(removewww)
}

// domainName("http://google.co.jp")
// domainName("http://google.com")
// domainName("www.xakep.ru")
domainName("https://youtube.com")
