
window.onload = function() {

	$("#link342").html("User Login");
	$("#member_login > h2").html("User Login");
	$("#first_container > div > div.row.content_w_sidebar.member_profile > div.col-md-9 > div.row.member-profile-header > div.col-xs-12.col-sm-3.norpad.text-center.xs-nopad.xs-bmargin > a > img").html("User Login");

	// $(".homepage_title h1").css("font-size", "40px");

	var periodic = 0;
	var fps = 30;

	setInterval( function() {
		periodic += 3.14 / fps;

		let magnitude = 32;

		let r = 255;
		let g = 255;
		let b = 255;
		r = (255 - magnitude) + (magnitude/2) + Math.sin(periodic * 1.1) * (magnitude/2);
		g = (255 - magnitude) + (magnitude/2) + Math.sin(periodic * 1.3) * (magnitude/2);
		b = (255 - magnitude) + (magnitude/2) + Math.sin(periodic * 1.7) * (magnitude/2);

		$(".search_box > h2").css("color", "rgb("+r+","+g+","+b+")");

	}, 1000/fps );

/*
	let strHtmlForm = "\
					   <div class=\"col-xs-12 col-sm-12 col-md-6 search_box fpad img-rounded center-block\"> \
					   <div class=\"clearfix\"></div> \
					   <form action=\"/search_results\" name=\"frm1\" class=\"form-horizontal website-search\" _lpchecked=\"1\"> \
					   <div class=\"form-group nomargin hidden-sm hidden-xs \"> \
					   <label> Search by Keyword </label> \
					   </div> \
					   \
					   <div class=\"input-group input-group-sm bmargin sm-autosuggest\"> \
					   <span class=\"input-group-addon hidden-md\"><i class=\"fa fa-search\"></i></span> \
					   <span class=\"input-group-sm input_wrapper\"><input type=\"text\" placeholder=\"Name or Keyword\" value=\"\" name=\"q\" class=\" member_search form-control input-sm\" autocomplete=\"off\"></span> \
					   </div> \
					   <input type=\"submit\" value=\"Search\" class=\"btn btn-sm btn_search bmargin xs-btn-block bold\"> \
					   \
					   <div class=\"clearfix\"></div> \
					   </form> \
					   <div class=\"clearfix\"></div> \
					   </div> \
					   ";

	let strHtml = `
		<div class="row-fluid homepage_settings">
		<div class="col-lg-7 center-block nopad homepage_title">
		<h1 class="sm-text-center">Search for Service Providers</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-xs-12 col-sm-12 col-md-6 search_box fpad img-rounded center-block">
		<h2 class="fpad bold nomargin sm-text-center" style="color: rgb(255, 236, 252);"> Search by Category </h2>
		<div class="clearfix"></div>
		<form class="fpad form-horizontal website-search" name="frm1" action="/search_results">
		<div class="form-group nomargin hidden-sm hidden-xs col-lg-5">
		<label>What do you need:</label>
		</div>
		<div class="input-group input-group-lg bmargin col-lg-7 large-autosuggest">
		<span class="input-group-addon">
		<i class="fa fa-fw fa-search"></i>
		</span>
		<span class="input-group-lg input_wrapper"><input type="text" class="member_search form-control input-lg large-autosuggest-input" name="q" id="keywordSuggest" value="" placeholder="Name or Keyword"></span>
		</div>
		<div class="col-lg-offset-5 col-lg-7 nopad">
		<button type="submit" class="btn btn-lg btn-block btn_home_search">Search Now</button>
		</div>
		<div class="clearfix"></div>
		</form>
		<div class="clearfix"></div>
		</div>

		<div class="col-xs-12 col-sm-12 col-md-6 search_box fpad img-rounded center-block">    
		<h2 class="fpad bold nomargin sm-text-center" style="color: rgb(255, 236, 252);">Search by Keyword</h2>
		<div class="clearfix"></div>
		<form action="/search_results" name="frm1" class="form-horizontal website-search" _lpchecked="1"> 
		<div class="form-group nomargin hidden-sm hidden-xs col-lg-5">
		<label> Text: </label>
		</div>
		<div class="input-group input-group-sm bmargin sm-autosuggest">
		<span class="input-group-addon hidden-md"><i class="fa fa-search"></i></span>
		<span class="input-group-sm input_wrapper"><input type="text" placeholder="Name or Keyword" value="" name="q" class=" member_search form-control input-sm" autocomplete="off"></span>
		</div>
		<div class="col-lg-offset-5 col-lg-7 nopad">
		<input type="submit" value="Search" class="btn btn-sm btn_search bmargin xs-btn-block bold">
		</div>
		<div class="clearfix"></div>
		</form>
		<div class="clearfix"></div>
		</div>
		<div class="clearfix"></div>
		</div>
		`;

	$(".homepage_settings").html(strHtml);

	$(".search_box").after("<div class=\"col-xs-12 col-sm-12 col-md-6 search_box fpad img-rounded center-block\"> " + strHtmlForm + " </div>");
*/
}

