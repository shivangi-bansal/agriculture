import React from 'react';

const About = () => {
    return <> 
    	<div className="breadcrumbs">
		<div className="container">
			<div className="w3layouts_breadcrumbs_left">
				<ul>
					<li><i className="fa fa-home" aria-hidden="true"></i><a href="index.html">Home</a><span>/</span></li>
					<li><i className="fa fa-info-circle" aria-hidden="true"></i>About</li>
				</ul>
			</div>
			<div className="w3layouts_breadcrumbs_right">
				<h2>About Us</h2>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>

    <div className="welcome">
		<div className="container">
			<h3 className="agileits_w3layouts_head">Why <span>Choose</span> Us</h3>
			<div className="w3_agile_image">
				<img src="images/1.png" alt=" " className="img-responsive" />
			</div>
			<p className="agile_para">Morbi viverra lacus commodo felis semper, eu iaculis lectus nulla at sapien blandit sollicitudin.</p>
			<div className="w3ls_news_grids"> 
				<div className="col-md-6 w3_agile_about_grid_left">
					<h3>Pellentesque a ligula nec dui ornare pulvinar in non sem condimentum erat</h3>
					<p><i>In eleifend nisl fermentum bibendum euismod. Pellentesque ac mi quis tortor 
						consequat scelerisque.</i> Sed eros urna, rhoncus nec tortor quis, pretium vestibulum
						purus. Nunc quis augue nibh. Proin non enim non nulla scelerisque scelerisque 
						vitae non est. Quisque iaculis leo at lacus malesuada mattis.</p>
				</div>
				<div className="col-md-6 w3_agile_about_grid_right">
					<div className="skillbar" data-percent="78">
					  <span className="skillbar-title" style={{background: "#f1703a"}}>Seeds</span>
					  <p className="skillbar-bar" style={{background: "rgb(248, 140, 94)", width: "78%"}}></p>
					  <span className="skill-bar-percent">78%</span>
					</div>
				
					
					<div className="skillbar" data-percent="54">
					  <span className="skillbar-title" style={{background: "#2980b9"}}>Growth</span>
					  <p className="skillbar-bar" style={{background: "rgb(52, 152, 219)", width: "54%"}}></p>
					  <span className="skill-bar-percent">54%</span>
					</div>
				
					
					<div className="skillbar" data-percent="76">
					  <span className="skillbar-title" style={{background: "#a0d034"}}>Economy</span>
					  <p className="skillbar-bar" style={{background: "rgb(178, 236, 47)", width: "76%"}}></p>
					  <span className="skill-bar-percent">76%</span>
					</div>
				
					
					<div className="skillbar" data-percent="80">
					  <span className="skillbar-title" style={{background: "#e7cc2c"}}>Planting</span>
					  <p className="skillbar-bar" style={{background: "rgb(245, 212, 16)", width: "80%"}}></p>
					  <span className="skill-bar-percent">80%</span>
					</div>
				
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>



    {/* <!-- about-bottom --> */}
	<div className="about-bottom">
		<div className="container">
			<h3><span>Agriculture</span> not only gives riches to a nation, but the
				only riches she can call her own</h3>
			<div className="agileits_w3layouts_learn_more agileits_learn_more hvr-radial-out">
				<a href="#" data-toggle="modal" data-target="#myModal">Read More</a>
			</div>
		</div>
	</div>
{/* <!-- //about-bottom --> */}

{/* <!-- team --> */}
	<div className="welcome">
		<div className="container">
			<h3 className="agileits_w3layouts_head">Meet Our <span>Amazing</span> Team</h3>
			<div className="w3_agile_image">
				<img src="images/1.png" alt=" " className="img-responsive" />
			</div>
			<p className="agile_para">Morbi viverra lacus commodo felis semper, eu iaculis lectus nulla at sapien blandit sollicitudin.</p>
			<div className="w3ls_news_grids w3_agileits_team_grids"> 
				<div className="col-md-3 w3_agileits_team_grid"> 
					<div className="w3layouts_news_grid">
						<img src="images/10.jpg" alt=" " className="img-responsive" />
						<div className="w3layouts_news_grid_pos">
							<div className="wthree_text agileinfo_about_text">
								<ul className="agileits_social_list">
									<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<h4>Andria Carl</h4>
					<p>Field Manager</p>
				</div>
				<div className="col-md-3 w3_agileits_team_grid"> 
					<div className="w3layouts_news_grid">
						<img src="images/11.jpg" alt=" " className="img-responsive" />
						<div className="w3layouts_news_grid_pos">
							<div className="wthree_text agileinfo_about_text">
								<ul className="agileits_social_list">
									<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<h4>Laura Doe</h4>
					<p>Farmer</p>
				</div>
				<div className="col-md-3 w3_agileits_team_grid"> 
					<div className="w3layouts_news_grid">
						<img src="images/12.jpg" alt=" " className="img-responsive" />
						<div className="w3layouts_news_grid_pos">
							<div className="wthree_text agileinfo_about_text">
								<ul className="agileits_social_list">
									<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<h4>Rosy Paul</h4>
					<p>Co-Founder</p>
				</div>
				<div className="col-md-3 w3_agileits_team_grid"> 
					<div className="w3layouts_news_grid">
						<img src="images/13.jpg" alt=" " className="img-responsive" />
						<div className="w3layouts_news_grid_pos">
							<div className="wthree_text agileinfo_about_text">
								<ul className="agileits_social_list">
									<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<h4>Christopher Lii</h4>
					<p>Senior Staff</p>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>
{/* <!-- //team --> */}
    </>;
};
export default About;