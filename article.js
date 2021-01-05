var shareBtns = document.getElementsByClassName("share-buttons");
var article_title = document.getElementsByClassName("title")[0].text.trim();
if (navigator.share) {
	for (var i =0; i < shareBtns.length; i++) {
	  	shareBtns[i].innerHTML +="<a onclick='onClickShareBtn()' class='button'>Share <i class='fa fa-share-alt'></i></a>";
	  	shareBtns[i].style.textAlign = 'right';
	}
}
else {

	
	for(var i=0; i<shareBtns.length; i++) {
		
		var mail_href = 'mailto:?Subject=' + article_title + ';Body=I%20saw%20this%20and%20thought%20of%20you!%20 ' + 
						window.location.href + '?sr=true';
	    shareBtns[i].innerHTML += "<a href='" + mail_href +"' style='text-decoration: none'> \
	    						<img alt='Email' class='share-button-image' src='https://simplesharebuttons.com/images/somacro/email.png'>\
	    						</a>";
		
	    var facebook_href = 'http://www.facebook.com/sharer.php?u=' + window.location.href + '?sr=true';
		shareBtns[i].innerHTML += "<a href='" + facebook_href + "' style='text-decoration: none' target='_blank'>\
								<img alt='Facebook' class='share-button-image' src='https://simplesharebuttons.com/images/somacro/facebook.png'>\
								</a>";

		var google_href = 'https://plus.google.com/share?url=' + window.location.href + '?sr=true';
		shareBtns[i].innerHTML += "<a href='" + google_href + "' style='text-decoration: none' target='_blank'>\
								<img alt='Google' class='share-button-image' src='https://simplesharebuttons.com/images/somacro/google.png'>\
								</a>";

		var linkedin_href = 'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + window.location.href + '?sr=true';
		shareBtns[i].innerHTML += "<a href='" + linkedin_href + "' style='text-decoration: none' target='_blank'>\
								<img alt='LinkedIn' class='share-button-image' src='https://simplesharebuttons.com/images/somacro/linkedin.png'>\
								</a>";

		var reddit_href = 'http://reddit.com/submit?url=' + window.location.href + '?sr=true&amp;title=' + article_title ;
		shareBtns[i].innerHTML += "<a href='" + reddit_href + "' style='text-decoration: none' target='_blank'>\
								<img alt='Reddit' class='share-button-image' src='https://simplesharebuttons.com/images/somacro/reddit.png'>\
								</a>";

		var twitter_href='https://twitter.com/share?url=' + window.location.href + '?sr=true&amp;text=' + article_title;
		shareBtns[i].innerHTML += "<a href='" + twitter_href + "' style='text-decoration: none' target='_blank'>\
								<img alt='Twitter' class='share-button-image' src='https://simplesharebuttons.com/images/somacro/twitter.png'>\
								</a>";
	}
}


var cur_Url = window.location.href;
// cur_Url = 'https://storage.googleapis.com/newfeed-article-examples/pages/0a58410fe113e7be5110d993/article.html';
var cur_object_id = cur_Url.split('/')[5];
// // for test
cur_object_id = '02f0f09d9f5abb8a8305c336';
var fetchUrl = 'https://australia-southeast1-newsfeed-stage.cloudfunctions.net/newsfeed_articles/recom?object_id=' + cur_object_id;
fetch(fetchUrl)
  .then(response => response.json())
  .then(data => {
  	console.log(data);
  	var articleList = document.getElementById('article_list');

	for (var i = data.articles.length - 1; i >= 0; i--) {
		var article_href = 'https://www.pagetwo.dev?object_id=' 
						+ data.articles[i].object_id + '&location=' + strToParam(data.location);
		var innerHTML = "<a href='" + article_href + "' style='text-decoration: none; color: black;'>";
		innerHTML += "<div class='card'>";
		innerHTML += "<div style='display: flex; justify-content: space-between; align-items: center;'>";
		innerHTML += "<h3>" + data.articles[i].title +"</h3>";
		
		if(data.articles[i].thumbnail) {
			innerHTML += "<img alt=''  onerror=\"this.style.display='none'\" class='article-image' src='https://article.pagetwo.dev/pages/" + data.articles[i].object_id + "/thumbnail.jpg'>";
		}

		innerHTML += "</div>";
		innerHTML += data.articles[i].text;
		innerHTML += "<div style='display: flex; justify-content: space-between;'>"
		innerHTML += "<h5>" + data.articles[i].publisher_name + "</h5>";
		innerHTML += "<h5>" + data.articles[i].timestamp + "</h5>";
		innerHTML += "</div>";
		innerHTML += "</div>";
		innerHTML += "</a>";
		articleList.innerHTML += innerHTML;
	}
  	
});


// const data = {"articles":[{"location_name":"Waverley","object_id":"2eaa97b4855754bbb2a3ce13","position":0,"publisher_name":"Waverley Council","state":"NSW","summary":null,"text":"<p>Waverley Council wishes to advise it has not yet received a Development Application (DA) for the (below) proposal. If the applicant submits a valid DA, there will be a period of community consultation as part of that process.</p>","thumbnail":true,"timestamp":"2020-12-21","title":"Beach club proposal for Bondi Beach","zone":"WAVERLEY"},{"location_name":"Waverley","object_id":"3c1ea5bf268fcbec7defb645","position":1,"publisher_name":"Waverley Council","state":"NSW","summary":null,"text":"<p>2020 has been a year like no other. Our community continues to face the ongoing challenges presented by the COVID-19 pandemic, but compassion, resilience and determination have characterised the way Council and community have dealt with the unprecedented events of the past few months.</p>","thumbnail":true,"timestamp":"2020-12-21","title":"A message from the Mayor this festive season","zone":"WAVERLEY"},{"location_name":"Waverley","object_id":"a7976f8a705a6e7d53908add","position":2,"publisher_name":"Waverley Council","state":"NSW","summary":null,"text":"<p>Waverley Council is delighted to announce the winners of this year's Mark and Evette Moran Nib Literary Award. For the first time in Nib Award history, these winners were announced in an online celebration at 8am, Thursday 12 November.</p>","thumbnail":true,"timestamp":"2020-12-21","title":"2020 Mark and Evette Moran Nib Literary Award Winners announced","zone":"WAVERLEY"},{"location_name":"Waverley","object_id":"c8dbdebd782f654620d12b22","position":3,"publisher_name":"Waverley Council","state":"NSW","summary":null,"text":"<p>As 2020 draws to a close, Waverley Council is reminding residents and visitors to observe all current Public Health Orders and health advice when celebrating with family and friends.</p>","thumbnail":true,"timestamp":"2020-12-18","title":"Celebrate safely in Waverley","zone":"WAVERLEY"},{"location_name":"Waverley","object_id":"cc27ba141d674983d5d3b7f8","position":4,"publisher_name":"Waverley Council","state":"NSW","summary":null,"text":"<p>18 December 2020</p>","thumbnail":true,"timestamp":"2020-12-18","title":"Flickerfest returns to Bondi this summer","zone":"WAVERLEY"},{"location_name":"Bronte","object_id":"d3076a773e4d26c5ac92d4c9","position":5,"publisher_name":"NSW Police","state":"NSW","summary":null,"text":"<p>A man will face court today after a kitten died at an apartment in Bronte last weekend.</p>","thumbnail":false,"timestamp":"2020-12-22","title":"Man charged after kitten dies - Bronte","zone":"WAVERLEY"},{"location_name":"Bondi Junction Railway","object_id":"fa136365164f318b51704011","position":6,"publisher_name":"Woollahra Council","state":"NSW","summary":null,"text":"<p>Want to escape the heat these holidays? Head to Cooper Park and complete our Nature Wellness Trail. This rejuvenating experience is designed to refresh your mood, energy and focus and help you reconnect with nature.</p>","thumbnail":true,"timestamp":"2020-12-21","title":"Go slow for a mo' in Cooper Park this summer with our Nature Wellness Trail","zone":"WAVERLEY"},{"location_name":"Waverley","object_id":"72cc68499a6f1b3d5c76b591","position":7,"publisher_name":"Waverley Council","state":"NSW","summary":null,"text":"<p>Waverley Council will investigate the opportunity to provide a new off-leash dog area with water play at a suitable location to address the shortage of off-leash areas in the Bondi basin.</p>","thumbnail":true,"timestamp":"2020-12-09","title":"Dogs off-leash in Waverley","zone":"WAVERLEY"},{"location_name":"Gordons Bay","object_id":"6ac1d154ba6f174b35511fdd","position":8,"publisher_name":"Randwick Council","state":"NSW","summary":null,"text":"<p>Summer is here and we'll be working with the police to ensure that everyone who visits our coastal reserves and beaches will enjoy their day.</p>","thumbnail":true,"timestamp":"2020-12-16","title":"Summer alcohol restrictions apply","zone":"WAVERLEY"},{"location_name":"Woollahra","object_id":"b3e10bcdf48ac0a1a7210a03","position":9,"publisher_name":"Woollahra Council","state":"NSW","summary":null,"text":"<p class=\"fs16\"><strong>On this page</strong></p>","thumbnail":true,"timestamp":"2020-12-16","title":"New Year's Eve 2020","zone":"WAVERLEY"}],"location":"WAVERLEY, NSW","user_id":"9bc1b351-07b8-4838-8d78-27ccce466c12"}

// var articleList = document.getElementById('article_list');

// 	for (var i = data.articles.length - 1; i >= 0; i--) {
// 		// var article_href = 'https://www.pagetwo.dev?object_id=' 
// 		// 				+ data.articles[i].object_id + '&location=' + strToParam(data.location);
// 		var article_href = 'http://localhost:3000?object_id=' 
// 						+ data.articles[i].object_id + '&location=' + strToParam(data.location);
// 		var innerHTML = "<a href='" + article_href + "' style='text-decoration: none; color: black;'>";
// 		innerHTML += "<div class='card'>";
// 		innerHTML += "<div style='display: flex; justify-content: space-between; align-items: center;'>";
// 		innerHTML += "<h3>" + data.articles[i].title +"</h3>";
		
// 		if(data.articles[i].thumbnail) {
// 			innerHTML += "<img alt=''  onerror=\"this.style.display='none'\" class='article-image' src='https://article.pagetwo.dev/pages/" + data.articles[i].object_id + "/thumbnail.jpg'>";
// 		}

// 		innerHTML += "</div>";
// 		innerHTML += data.articles[i].text;
// 		innerHTML += "<div style='display: flex; justify-content: space-between;'>"
// 		innerHTML += "<h5>" + data.articles[i].publisher_name + "</h5>";
// 		innerHTML += "<h5>" + data.articles[i].timestamp + "</h5>";
// 		innerHTML += "</div>";
// 		innerHTML += "</div>";
// 		innerHTML += "</a>";
// 		articleList.innerHTML += innerHTML;
// }

function onClickShareBtn() 
{
	if (navigator.share) {
	    navigator.share({
	      title: article_title,
	      url: window.location.href
	    }).then(() => {
	      console.log('Thanks for sharing!');
	    })
	    .catch(console.error);
	}
}

function strToParam(str) {
	return str.replaceAll(" ", "%20");
}