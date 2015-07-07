var HTMLengineeringBlog = '<div class="blog row"></row>';
var HTMLengineeringBlogTitle = '<div class="col-xs-4">%data%</div>';
var HTMLengineeringBlogUrl = '<a href="" target="_blank">%data%</a>';
        



var blogs ={
	"blog":[
		{
			"company":"Twitter",
			"url":"https://blog.twitter.com/engineering"
		},
		{
			"company":"Airbnb",
			"url":"http://airbnb.io/"
		},
		{
			"company":"Yelp",
			"url":"http://engineeringblog.yelp.com/"
		},
		{
			"company":"Source Clear",
			"url":"https://blog.srcclr.com/"
		},
		{
			"company":"Toptal",
			"url":"http://www.toptal.com/blog"
		},
		{
			"company":"Quora",
			"url":"http://engineering.quora.com/"
		},
		{
			"company":"Facebook",
			"url":"https://code.facebook.com/posts/"
		},
		{
			"company":"Zendesk",
			"url":"https://developer.zendesk.com/blog"
		},
		{
			"company":"Etsy",
			"url":"http://codeascraft.etsy.com/"
		},
		{
			"company":"FourSquare",
			"url":"http://engineering.foursquare.com/"
		},
		{
			"company":"Dropbox",
			"url":"https://blogs.dropbox.com/tech/"
		},
		{
			"company":"Netflix",
			"url":"http://techblog.netflix.com/"
		},
		{
			"company":"Simple",
			"url":"https://www.simple.com/engineering"
		},
		{
			"company":"Soundcloud",
			"url":"https://developers.soundcloud.com/blog/"
		}


	]
}





blogs.display = function(){
	for(index in blogs.blog){
		$('#blogs').append(HTMLengineeringBlog);
		var formattedHTMLengineeringBlogTitle = HTMLengineeringBlogTitle.replace('%data%',blogs.blog[index].company);
		$('.blog:last').append(formattedHTMLengineeringBlogTitle);

		var formattedHTMLengineeringBlogUrl = HTMLengineeringBlogUrl.replace('%data%',blogs.blog[index].url);
		$('.blog:last').append(formattedHTMLengineeringBlogUrl);

		$('.blog a:last').attr('href',blogs.blog[index].url);
	}
}



$( document ).ready(function() {
	blogs.display();
});



