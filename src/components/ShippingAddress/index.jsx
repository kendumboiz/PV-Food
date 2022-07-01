import { Field } from "formik";
import React from "react";

export default function ShippingAddress() {
  return (
    <>
      <ul className="address_info">
        <li className="address_info-content">
          <Field
            name="firstName"
            type="text"
            // onChange={(e) => setFirstName(e.target.value)}
            placeholder=" "
            spellCheck="false"
          />
          <label htmlFor="">Surname *</label>
        </li>

        <li className="address_info-content">
          <Field
            name="lastName"
            type="text"
            // onChange={(e) => setLastName(e.target.value)}
            placeholder=" "
            spellCheck="false"
          />
          <label htmlFor="">name *</label>
        </li>

        <li className="address_info-content">
          <Field name="email" type="email" placeholder=" " spellCheck="false" />
          <label htmlFor="">your email address *</label>
        </li>

        <li className="address_info-content">
          <p>
            <b>Country * </b>We currently deliver to Ho Chi Minh City only{" "}
          </p>
        </li>

        <li className="address_info-content">
          <Field
            name="ward"
            type="text"
            // onChange={(e) => setCountry(e.target.value)}
            placeholder=" "
            spellCheck="false"
          />
          <label htmlFor="">Ward *</label>
        </li>

        <li className="address_info-content">
          <Field
            name="district"
            type="text"
            // onChange={(e) => setDistrict(e.target.value)}
            placeholder=" "
            spellCheck="false"
          />
          <label htmlFor="">District *</label>
        </li>

        <li className="address_info-content">
          <Field
            name="address"
            type="text"
            // onChange={(e) => setAddress(e.target.value)}
            placeholder=" "
            spellCheck="false"
          />
          <label htmlFor="">Address *</label>
        </li>

        <li className="address_info-content">
          <Field
            name="company"
            type="text"
            placeholder=" "
            spellCheck="false"
          />
          <label htmlFor="">Floor, Company, Post-Box *</label>
        </li>

        <li className="address_info-content">
          <Field
            name="city"
            type="text"
            // onChange={(e) => setCity(e.target.value)}
            placeholder=" "
            spellCheck="false"
          />
          <label htmlFor="">city *</label>
        </li>

        {/* <li className="address_info-content">
                      <Field
                        name=""
                        type="text"
                        placeholder=" "
                        spellCheck="false"
                      />
                      <label htmlFor="">zip code *</label>
                    </li> */}
        <li className="address_info-content">
          <p>
            <b>Mob * </b>We will use it to contact you about the deliver of your
            order, if necessary{" "}
          </p>
        </li>
        <li className="address_info-content">
          <Field
            name="areaNumber"
            type="text"
            placeholder=" "
            spellCheck="false"
            readOnly
          />
          <label htmlFor="">+84 *</label>
        </li>

        <li className="address_info-content">
          <Field
            name="mobile"
            type="text"
            // onChange={(e) => setMobile(e.target.value)}
            placeholder=" "
            spellCheck="false"
          />
          <label htmlFor="">Mobile *</label>
        </li>

        <li className="address_info-content">
          <label className="required">* Required Field</label>
        </li>
      </ul>
    </>
  );
}
