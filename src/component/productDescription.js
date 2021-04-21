import React from 'react';
export default class ProductDescription extends React.Component {
    render() {
      return (
          <>
          	<div className="breadcrumbs">
		<div className="container">
			<div className="w3layouts_breadcrumbs_left">
				<ul>
					<li><i className="fa fa-home" aria-hidden="true"></i><a href="/">Home</a><span>/</span></li>
					<li><i className="fa fa-envelope-o" aria-hidden="true"></i>Rice</li>
				</ul>
			</div>
		
			<div className="clearfix"> </div>
		</div>
	</div>
<div class="about-content container">
  <div className = "row">
    <div className="col-md-8">
          <div className="row">
          <p>AEON International is the largest supplier / trader of Rice from India. We are the largest indian Rice trader / Rice broker / Rice exporter due to direct tie-ups with Rice suppliers and Rice manufacturers. As an international trader of Rice we not only have direct tie up with supplier of Rice but also manufacturers of Rice ensuring best quality Rice from best supplying countries. All our suppliers are primarily dependent on us because of large network of buyers of Rice all over the world for whom we also act as country specific exclusive procurement agent of Rice through all our manufacturers and suppliers.</p>
            <img src="http://www.aeontrade.com/images/rice.jpg" title="rice" alt="rice" class="product-img img-responsive"/>
            <h3 className="title">Product Detail</h3>
            <ul className="detail">
              <li><b>Place of Origin:</b><span>Indian</span></li>
              <li><b>Shriveled and Broken Grains:</b><span>5% Maximum</span></li>
              <li><b>Colour:</b><span>White</span></li>
            </ul>

            <h3 className="title">Payment And Shipping Terms</h3>
            <ul className="pay">
              <li><b>Port:</b><span>Any Indian Port</span></li>
              <li><b>Packaging Details:</b><span>25 KGS or 50 KGS PP Bags Or As Per Buyers Requirement</span></li>
              <li><b>Payment terms:</b><span>L.C/T.T</span></li>
              <li><b>Container Loadability:</b><span>Loose in Bulk Or As Per Buyers Request</span></li>
            </ul> 
          </div>
        </div>

        <div className="inq col-md-3">
          <h3>Inquiry Now</h3><br/>
          <span id="message" style={{display:"none"}}></span>
          <form name="myForm" id="myForm" method="POST" onsubmit="return false;">
            <div className="form-group">
               <label for="exampleInputEmail1">Name *</label>
               <input type="customer_name" className="form_in form-control required" id="customer_name" placeholder="Enter name"/>
            </div>
            <div className="form-group">
               <label for="exampleInputEmail1">Email *</label>
               <input type="customer_email" className="form_in form-control required" id="customer_email" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Contact No *</label>
              <input type="text" name="customer_contact" className="form_in form-control required" id="customer_contact" placeholder="Phone No."/>
            </div>
            <div className="form-group">
               <label for="exampleInputEmail1">Remarks</label>
               <textarea className="form-control form_in" name="customer_remarks" rows="3" placeholder="Description" id="customer_remarks" style={{marginBottom: "15px"}}></textarea>
            </div>
            <input type="submit" id="btnSubmit" className="submit btn btn-default" value="Submit"/>
          </form>
        </div>
        </div>
</div>
</>
);
}
}