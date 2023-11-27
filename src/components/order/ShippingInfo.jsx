import { useState, useEffect } from "react";
import styled from "styled-components";
import { Country, State, City } from "country-state-city";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PublicIcon from "@mui/icons-material/Public";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import axios from "axios";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextInput from "../utils/formik/TextInput";
import SelectBox from "../utils/formik/SelectBox";
import { toast } from "react-toastify";
import MUIButton from "../utils/reUseableComponents/MUIButton";

const ShippingInfo = ({ setIsShipping }) => {
  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [initialValues, setInitialValues] = useState({
    address: "",
    phoneNo: "",
    postCode: "",
    country: "",
    state: "",
    city: "",
  });

  // fetch previous shipping info and set value on input field
  useEffect(() => {
    axios.get("/api/v1/shippinginfo").then((res) => {
      if (res.status === 200 && res?.data?.shippingInfo?.country) {
        const country = Country.getAllCountries()?.find(
          (country) => country.name === res?.data?.shippingInfo?.country
        );
        const state = State.getStatesOfCountry(country.isoCode)?.find(
          (state) => state.name === res?.data?.shippingInfo?.state
        );
        const city = City.getCitiesOfState(
          country.isoCode,
          state.isoCode
        )?.find((city) => city.name === res?.data?.shippingInfo?.city);

        setCountryCode(country.isoCode);
        setStateCode(state.isoCode);

        setInitialValues({
          address: res?.data?.shippingInfo?.address,
          phoneNo: res?.data?.shippingInfo?.phoneNo,
          postCode: res?.data?.shippingInfo?.postCode,
          country: country.isoCode,
          state: state.isoCode,
          city: city.name,
        });
      }
    });
  }, []);

  return (
    <ShippingContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={yup.object({
          address: yup.string().required("Address is required."),
          phoneNo: yup.string().required("Phone number is required."),
          postCode: yup.number().required("Zip code is required."),
          country: yup.string().required("Country is required."),
          state: yup.string().required("State is required."),
          city: yup.string().required("City is required."),
        })}
        validate={(values) => {
          if (values.country) {
            setCountryCode(values.country);
          }
          if (values.state) {
            setStateCode(values.state);
          }

          setBtnDisabled(false);
          setIsShipping(false);
        }}
        onSubmit={(values, { resetForm }) => {
          const shippingInfo = {
            ...values,
            country: Country.getCountryByCode(values.country).name,
            state: State.getStateByCodeAndCountry(values.state, values.country)
              .name,
          };

          axios
            .post("/api/v1/shippinginfo/add", shippingInfo)
            .then((res) => {
              toast.success(res?.data?.message);
              setBtnDisabled(true);
              setIsShipping(true);
            })
            .catch((err) => {
              toast.error(err?.message);
            });
        }}
        enableReinitialize
      >
        <Form>
          <div className="input_group">
            <HomeIcon fontSize="large" style={{ marginBottom: "2rem" }} />
            <TextInput
              style={{ width: "100%" }}
              type="text"
              name="address"
              placeholder="Enter your shipping address"
            />
          </div>
          <div className="input_group">
            <LocalPhoneIcon fontSize="large" style={{ marginBottom: "2rem" }} />
            <TextInput
              type="phone"
              name="phoneNo"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="input_group">
            <AddLocationAltIcon
              fontSize="large"
              style={{ marginBottom: "2rem" }}
            />
            <TextInput
              type="number"
              name="postCode"
              placeholder="Enter your zip code"
            />
          </div>
          <div className="input_group">
            <PublicIcon fontSize="large" style={{ marginBottom: "2rem" }} />
            <SelectBox name="country">
              <option hidden>Select country</option>
              {Country &&
                Country.getAllCountries().map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
            </SelectBox>
          </div>
          {countryCode && (
            <div className="input_group">
              <TransferWithinAStationIcon
                fontSize="large"
                style={{ marginBottom: "2rem" }}
              />
              <SelectBox name="state">
                <option hidden>Select state</option>
                {State &&
                  State.getStatesOfCountry(countryCode).map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
              </SelectBox>
            </div>
          )}
          {stateCode && (
            <div className="input_group">
              <LocationCityIcon
                fontSize="large"
                style={{ marginBottom: "2rem" }}
              />
              <SelectBox name="city">
                <option hidden>Select city</option>
                {City &&
                  City.getCitiesOfState(countryCode, stateCode).map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
              </SelectBox>
            </div>
          )}

          <MUIButton type="submit" disabled={btnDisabled} variant="contained">
            Save and continue
          </MUIButton>
        </Form>
      </Formik>
    </ShippingContainer>
  );
};

export default ShippingInfo;

const ShippingContainer = styled.div`
  width: 100%;
  box-shadow: var(--shadow-3);
  border-radius: 0.5rem;
  padding: 2rem;
  z-index: 100;

  .input_group {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
