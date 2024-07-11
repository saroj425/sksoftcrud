import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        
        <div className="form-div">
            <h4 className="text-center">Contact Page</h4>
            <hr/>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1"><b>Name</b></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1"><b>Email Id.</b></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1"><b>Mobile</b></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />                
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1"><b>Message</b></label>
                <textarea
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  <b>Check me out</b>
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
