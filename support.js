Event.observe(window,'load',function(){
	$$('#header_container')[0].insert('
		<div id="ex-nav">
			<ul class="menu">
				<li class="last">
				<a href="#">About</a>
					<ul class="menu">
						<!--<li class="leaf"><a href="http://blog.lark.com">Blog</a></li>-->
						<li class="leaf"><a href="http://www.lark.com/about/press">Press</a></li>
					</ul>
				</li>
				<li class="expanded">
				<a href="#"title=""class="active-trail">Team</a>
					<ul class="menu">
						<li class="first leaf"><a href="http://www.lark.com/team/health-committee">Lark Health Comittee</a></li>
						<!--<li class="leaf"><a href="http://www.lark.com/team/management-team">Management Team</a></li>-->
						<!--<li class="last leaf"><a href="http://www.lark.com/team/careers">Careers</a></li>-->
					</ul>
				</li>
				<li class="expanded">
				<a href="#"title=""class="active-trail">Products</a>
					<ul class="menu">
						<li class="first leaf"><a href="http://www.lark.com/products/health-committee">Lark for iPhone</a></li>
						<!--<li class="last leaf"><a href="http://www.lark.com/products/lark-activity-tracker">lark activity tracker</a></li>-->
					</ul>
				</li>
				<li class="first leaf"><a href="http://support.lark.com/home"title="">Support</a></li>
				<li><a class="login_button"href="https://my.lark.com/portal/dashboard?lang=en">Login</a></li>
			</ul>
		</div>
	');
	$$('#footer')[0].insert('<div id="footer2"><div class="content-cont">&copy;2014 Lark Technologies, Inc</div></div>')});