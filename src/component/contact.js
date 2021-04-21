import React from 'react';

const Contact = () => {
    return <>
    	<div className="breadcrumbs">
		<div className="container">
			<div className="w3layouts_breadcrumbs_left">
				<ul>
					<li><i className="fa fa-home" aria-hidden="true"></i><a href="index.html">Home</a><span>/</span></li>
					<li><i className="fa fa-envelope-o" aria-hidden="true"></i>Contact</li>
				</ul>
			</div>
			<div className="w3layouts_breadcrumbs_right">
				<h2>Contact Us</h2>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>


    <div className="welcome">
		<div className="container">
			<h3 className="agileits_w3layouts_head">Get in<span> touch</span> with us</h3>
			<div className="w3_agile_image">
				<img src="images/1.png" alt=" " className="img-responsive" />
			</div>
			<p className="agile_para">Morbi viverra lacus commodo felis semper, eu iaculis lectus nulla at sapien blandit sollicitudin.</p>
			<div className="w3ls_news_grids">
				<div className="col-md-8 w3_agile_mail_left">
					<div className="agileits_mail_grid_right1 agile_mail_grid_right1">
						<form action="#" method="post">
                        <h3 className="inq1">Inquiry Form</h3>
							<span>
								<i>Name</i>
								<input type="text" name="Name" placeholder="Enter Your Name" required=""/>
							</span>
							<span>
								<i>Email</i>
								<input type="email" name="Email" placeholder="Enter Your Email" required=""/>
							</span>
							<span>
								<i>Mobile No.</i>
								<input type="text" name="Subject" placeholder="Enter Your Mobile No" required=""/>
							</span>
							<span>
								<i>Message</i>
								<textarea name="Message" placeholder="Enter Your Message" required=""></textarea>
							</span>
							<div className="w3_submit">
								<input type="submit" value="Submit Now"/>
							</div>
						</form>
					</div>
				</div>
				<div className="col-md-4 w3_agile_mail_right">
					<div className="w3_agileits_mail_right_grid">
						<h4>About Plantation</h4>
						<p>Donec libero lectus, feugiat vel elit nec, mattis tempor mi ante.</p>
						<h5>Follow Us On</h5>
						<ul className="agileits_social_list">
							<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
							<li><a href="#" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
						</ul>
						<div className="w3_agileits_mail_right_grid_pos">
							<img src="images/12.jpg" alt=" " className="img-responsive" />
						</div>
					</div>
					<div className="w3_agileits_mail_right_grid_main">
						<div className="w3layouts_mail_grid_left">
							<div className="w3layouts_mail_grid_left1 hvr-radial-out">
								<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
							</div>
							<div className="w3layouts_mail_grid_left2">
								<h3>Mail Us</h3>
								<a href="mailto:info@example.com">info@example.com</a>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="w3layouts_mail_grid_left">
							<div className="w3layouts_mail_grid_left1 hvr-radial-out">
								<span className="glyphicon glyphicon-home" aria-hidden="true"></span>
							</div>
							<div className="w3layouts_mail_grid_left2">
								<h3>Address</h3>
								<p>My Company 8907 Ukraine.</p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="w3layouts_mail_grid_left">
							<div className="w3layouts_mail_grid_left1 hvr-radial-out">
								<span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>
							</div>
							<div className="w3layouts_mail_grid_left2">
								<h3>Phone</h3>
								<p>+(0121) 121 121</p>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>
     </>;
};
export default Contact;