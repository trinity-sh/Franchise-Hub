import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Business from "./Form/Business";
import Personal from "./Form/Personal";
import Property from "./Form/Property";
import Agreements from "./Form/Agreements";
import Payments from "./Form/Payments";

function Registration() {
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    personal_details: {
      email_id: "",
      mobile: "",
      brand_name: "",
      company_name: "",
      owner_name: "",
      owner_email: "",
      owner_phone: "",
      address_det: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      industry: "",
      no_of_franch_outlets: "",
      inv: "",
      business_desc: "",
      q_excl_terr_rights: "",
      q_perf_guarantees: "",
      q_adv_market_levies: "",
      antc_perc_ret: "",
      likely_payback_period: {
        min: "",
        max: "",
        month_yr: "",
      },
      other_inv_req: "",
    },
    property_details: {
      typ_prop_req: "",
      floor_area_req: {
        min: "",
        max: "",
      },
      pref_loc: "",
      q_site_select_assist: "",
    },
    training_details: {
      q_hv_det_op_man: "",
      whr_franch_training: "",
      q_field_assist_avail: "",
    },
    agreement_details: {
      q_hv_std_franch_agr: "",
      duration_of_contr: "",
      q_term_renewable: "",
    },
    final_rites: {
      company_logo: "",
      video_link: "",
      gst_no: "",
      mode_of_payment: "",
      q_sub_news: "",
    },
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    console.log(value);
  };

  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
          <Container>
            <Personal
              nextStep={nextStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <Container>
            <Business
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </Container>
        </div>
      );
   
    case 3:
      return (
        <div className="App">
          <Container>
            <Property
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </Container>
        </div>
      );
    case 4:
      return (
        <div className="App">
          <Container>
            <Agreements
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </Container>
        </div>
      );
    case 5:
      return (
        <div className="App">
          <Container>
            <Payments
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
              
            />
          </Container>
        </div>
      );

    // default case to show nothing
    default:
      return null;
  }
}

export default Registration;
