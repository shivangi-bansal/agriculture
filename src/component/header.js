import React from 'react';
export default class Header extends React.Component {
    render() {
      return (
          <div>

<div class="navbar navbar-inverse header" role="navigation">
      <div class="container">
        <div class="navbar-header">
		  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		  </button>             
        </div>
        <a class="logo" href="index.html"><img src="./images/logo.png" class="img-responsive" title="AEON International - Agro Commodity Trading Company" alt="AEON International - Agro Commodity Trading Company"/></a>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class=""><a href="index.html" class="active bg">Home </a></li>
            <li class=""><a href="about-us.html" class="bg">Company</a></li>
            <li class=""><a href="accreditation.html" class="bg">Accreditation</a></li>
            <li class=""><a href="./agro-commodities/index.html" onclick="javscript:window.location.href='agro-commodities/index.html'" data-toggle="dropdown" class="bg dropdown-toggle">Agro Products</a>
              <ul class="dropdown-menu fullwidth" role="menu" style={{display: "none"}}>
                <li class="w3_megamenu-content withdesc">
                  
                  <div class="row" style={{borderBottom: "1px solid #383333", paddingBottom: "10px"}}>
                    <div class="col-md-3">
                      <h3>Oil Seeds</h3>
                      <ul style={{display: "none"}}>
                        <li><a href="./agro-commodities/soybeans.html">Soybeans</a></li>
                        <li><a href="./agro-commodities/natural-whitish-sesame-seeds-99-1.html">Natural Whitish Sesame Seeds(99/1)</a></li>
                        <li><a href="./agro-commodities/black-sesame-seeds-medicinal-purpose-99-1.html">Black Sesame Seeds (Medicinal Purpose) (99/1)</a></li>
                        <li><a href="./agro-commodities/black-sesame-seeds-medicinal-purpose-98-2.html">Black Sesame Seeds (Medicinal Purpose) (98/2)</a></li>
                        <p><a href="./agro-commodities/index.html">More...</a></p>
                      </ul>
                    </div>

                    <div class="col-md-3">
                      <h3>Oil Seeds Extractions</h3>
                      <ul style={{display: "none"}}>
                        <li><a href="./agro-commodities/soybean-extraction-meal.html">Soybean Extraction Meal</a></li>
                        <li><a href="./agro-commodities/rapeseed-extraction-meal.html">Rapeseed Extraction Meal</a></li>
                        <li><a href="./agro-commodities/castor-seeds-extraction-meal.html">Castor Seeds Extraction Meal</a></li>
                        <li><a href="./agro-commodities/indian-groundnut-extraction-meal.html">Indian Groundnut Extraction Meal</a></li>
                        <li><a href="./agro-commodities/rice-bran-extraction-meal-grade-1.html">Rice Bran Extraction Meal Grade 1</a></li>
                        <li><a href="./agro-commodities/rice-bran-extraction-meal-grade-2.html">Rice Bran Extraction Meal Grade 2</a></li>
                        <p><a href="./agro-commodities/index.html">More...</a></p>
                      </ul>
                    </div>

                    <div class="col-md-3">
                      <h3>Grains</h3>
                      <ul style={{display: "none"}}>
                        <li><a href="./agro-commodities/rice.html">Rice</a></li>
                        <li><a href="./agro-commodities/pusa-basmati-parboiled-rice.html">Pusa Basmati Parboiled Rice</a></li>
                        <li><a href="./agro-commodities/indian-long-rice.html">Indian Long Rice</a></li>
                        <li><a href="./agro-commodities/1121-super-premium-gold-rice.html">1121 Super Premium Gold Rice</a></li>
                        <li><a href="./agro-commodities/1121-basmati-rice.html">1121 basmati Rice</a></li>
                        <li><a href="./agro-commodities/ir-36-sella-rice.html">IR-36 Sella Rice</a></li>
                       <p><a href="./agro-commodities/index.html">More...</a></p>
                      </ul>
                    </div>

                    <div class="col-md-3">
                      <h3>Cereals</h3>
                      <ul style={{display: "none"}}>
                        <li><a href="./agro-commodities/indian-feed-wheat.html">Indian Feed Wheat</a></li>
                        <li><a href="./agro-commodities/indian-milling-wheat.html">Indian Milling Wheat</a></li>
                        <li><a href="./agro-commodities/yellow-maize.html">Yellow Maize</a></li>
                        <li><a href="./agro-commodities/white-maize.html">White Maize</a></li>
                        <li><a href="./agro-commodities/millet.html">millet</a></li>
                        <li><a href="./agro-commodities/sorghum.html">Sorghum</a></li>
                        <p><a href="./agro-commodities/index.html">More...</a></p>
                      </ul>
                    </div>
                  </div>

                  <div class="row" style={{paddingTop:"10px"}}>
                    <div class="col-md-3">
                      <h3>Spices</h3>
                      <ul style={{display: "none"}}>
                        <li><a href="./agro-commodities/indian-dry-red-chilli.html">Indian Dry Red Chilli</a></li>
                        <li><a href="./agro-commodities/indian-turmeric.html">Indian Turmeric</a></li>
                        <li><a href="./agro-commodities/coriander.html">Coriander</a></li>
                        <li><a href="./agro-commodities/fenugreek-seeds.html">Fenugreek Seeds</a></li>
                        <li><a href="./agro-commodities/cumin-seeds-whole.html">Cumin Seeds Whole</a></li>
                        <li><a href="./agro-commodities/indian-black-mustard-seeds-large.html">Indian Black Mustard Seeds (Large)</a></li>
                        <p><a href="./agro-commodities/index.html">More...</a></p>
                      </ul>
                    </div>

                    <div class="col-md-3">
                      <h3>Dals and Pulses</h3>
                      <ul style={{display: "none"}}>
                        <li><a href="./agro-commodities/bengal-gram-gram-chana-dal.html">Bengal Gram (Gram Chana Dal)</a></li>
                        <li><a href="./agro-commodities/cheak-peas-kala-chana.html">Cheak Peas (Kala Chana)</a></li>
                        <li><a href="./agro-commodities/lentils-masoor-dal-whole.html">Lentils (Masoor Dal Whole)</a></li>
                        <li><a href="./agro-commodities/red-lentils-masoor-dal-split.html">Red Lentils (Masoor Dal (Split))</a></li>
                        <li><a href="./agro-commodities/green-gram-moong-dal.html">Green Gram (Moong Dal)</a></li>
                        <li><a href="./agro-commodities/green-gram-moong-beans.html">Green Gram (Moong Beans)</a></li>
                        <p><a href="./agro-commodities/index.html">More...</a></p>
                      </ul>
                    </div>

                    <div class="col-md-3">
                      <h3>Pickels</h3>
                      <ul style={{display: "none"}}>
                        <li><a href="./agro-commodities/green-chilli-pickle.html">Green Chilli Pickle</a></li>
                        <li><a href="./agro-commodities/lime-pickle.html">Lime Pickle</a></li>
                        <li><a href="./agro-commodities/sweet-lime-pickle.html">Sweet Lime Pickle</a></li>
                        <li><a href="./agro-commodities/mixed-pickle.html">Mixed Pickle</a></li>
                        <li><a href="./agro-commodities/mango-pickle.html">Mango Pickle</a></li>
                        <li><a href="./agro-commodities/gujarati-choondo.html">Gujarati Choondo</a></li>
                        <p><a href="./agro-commodities/index.html">More...</a></p>
                      </ul>
                    </div>

                    <div class="col-md-3">
                      <h3>Other Agro Products</h3>
                      <ul style={{display: "none"}}>
                        <li><a href="./agro-commodities/icumsa-45.html">ICUMSA 45</a></li>
                        <li><a href="./agro-commodities/icumsa-100.html">ICUMSA - 100</a></li>
                        <li><a href="./agro-commodities/icumsa150-white-cyrstal.html">ICUMSA150 White Cyrstal</a></li>
                        <li><a href="./agro-commodities/icumsa-600-1200.html">ICUMSA 600-1200</a></li>
                        <li><a href="./agro-commodities/beet-sugar.html">Beet Sugar</a></li>
                        <li><a href="./agro-commodities/cheakpeas.html">Cheakpeas</a></li>
                        <p><a href="./agro-commodities/index.html">More...</a></p>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li class=""><a href="contact-us.html">Contact Us</a></li>
            
            <li class=""><a href="https://www.facebook.com/aeontrade" class="fb" target="_blank"><img src="./images/fb.png" class="img-responsive"/></a></li>
            <li class=""><a href="https://twitter.com/AeonTrade" class="fb" target="_blank"><img src="./images/twitter.png" class="img-responsive"/></a></li>
            
          </ul>


        </div>
      </div>
    </div>
    </div>
    );
  }
}