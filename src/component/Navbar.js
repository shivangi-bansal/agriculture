import React from 'react';

const Navbar = () => {
    return <> 
    	<div className="header1">
		<div className="container">
			<div className="w3layouts_breadcrumbs_left">
				<ul>
					<li><i className="fa fa-home" aria-hidden="true"></i><a href="/">Home</a><span>/</span></li>
					<li><i className="fa fa-info-circle" aria-hidden="true"></i><a href="/contact">Contact Us</a><span>/</span></li>
                    <li><i className="fa fa-info-circle" aria-hidden="true"></i><a href="/about">About Us</a><span>/</span></li>
                    <li><i className="fa fa-info-circle" aria-hidden="true"></i><a href="/about">Products</a><span>/</span></li>


				</ul>
			</div>
			{/* <div className="w3layouts_breadcrumbs_right">
            <div class="agile_social_icons_banner">
					<ul class="agileits_social_list">
						<li><a href="#" class="w3_agile_facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#" class="agile_twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="#" class="w3_agile_dribble"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
						<li><a href="#" class="w3_agile_vimeo"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</div> */}
			<div className="clearfix"> </div>
		</div>
	</div>

  

{/* <!-- //team --> */}
    </>;
};
export default Navbar;