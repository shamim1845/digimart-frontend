import { useState, useEffect } from "react";
import styled from "styled-components";
import { Country, State, City } from "country-state-city";
import { useDispatch } from "react-redux";

import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PublicIcon from "@mui/icons-material/Public";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { shippingInformation } from "../../features/order/orderSlice";


const ShippingInfo = ({ setIsShipping}) => {
  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [shippingMsg, setShippingMsg] = useState("");
  const [shippingData, setShippingData] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    postCode: "",
    phoneNo: "",
  });

  const dispatch = useDispatch();

 

  useEffect(() => {
 
      setShippingData((prev) => {
        return { ...prev, state: "", city: "" };
      });
      setStateCode("");
   


  }, [shippingData.country]);

  const shippingDataHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setShippingData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const countryHandler = (e) => {
    const value = e.target.value;
    setCountryCode(value);
    const country = Country.getCountryByCode(value);
    console.log(country)
    setShippingData((prev) => {
      return { ...prev, country: country.name };
    });
  };

  const stateHandler = (e) => {
    const value = e.target.value;
    setStateCode(value);

    const state = State.getStateByCodeAndCountry(value, countryCode);
      setShippingData((prev) => {
      return { ...prev, state: state.name };
    });
  };

  const saveShippingInfo = () => {
    if(shippingData.address !== '' && shippingData.city !== "" && shippingData.state !== "" && shippingData.country !== "" && shippingData.postCode !== "" && shippingData.phoneNo !== ""){
      setShippingMsg("Shipping information saved.");
       localStorage.setItem("shippingInfo", JSON.stringify(shippingData));
        dispatch(shippingInformation({shippingInfo: shippingData}))
    }else{
      setShippingMsg("Please filled all of this details")
    }
  };
  

  return (
    <ShippingContainer>
      <MainContainer>
        <Title>
          <h2>Update address</h2>
          <i className="bi bi-x-lg" onClick={() => setIsShipping(false)}></i>
        </Title>
        <Form>
          <div className="input_group">
            <HomeIcon fontSize="large" />
            <input
              type="text"
              required
              name="address"
              value={shippingData.address}
              onChange={shippingDataHandler}
              placeholder="Address"
            />
          </div>
          <div className="input_group">
            <LocalPhoneIcon fontSize="large" />
            <input
              type="number"
              required
              name="phoneNo"
              value={shippingData.phoneNo}
              onChange={shippingDataHandler}
              placeholder="Phone Number"
           
            />
          </div>
          <div className="input_group">
            <AddLocationAltIcon fontSize="large" />
            <input
              type="text"
              required
              name="postCode"
              value={shippingData.postCode}
              onChange={shippingDataHandler}
              placeholder="Zip Code"
            />
          </div>
          <div className="input_group">
            <PublicIcon fontSize="large" />
            <select required name="country" onChange={countryHandler}>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
            </select>
          </div>
          {countryCode && (
            <div className="input_group">
              <TransferWithinAStationIcon fontSize="large" />
              <select required name="state" onChange={stateHandler}>
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(countryCode).map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
          {stateCode && (
            <div className="input_group">
              <LocationCityIcon fontSize="large" />
              <select
                required
                name="city"
                value={shippingData.city}
                onChange={shippingDataHandler}
              >
                <option value="">City</option>
                {City &&
                  City.getCitiesOfState(countryCode, stateCode).map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
          {
            shippingMsg && <div>
              <p>{shippingMsg}</p>
            </div>
          }
          <div className="input_button" onClick={saveShippingInfo}>
            <input type="button" value="Save & Continue" />
          </div>
        </Form>
      </MainContainer>
    </ShippingContainer>
  );
};

export default ShippingInfo;

const ShippingContainer = styled.div`
  /* position: absolute; */
  /* background: #f2f2f2; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* width: 1000rem;
height: auto; */
  padding: 2rem;
  z-index: 100;
`;
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Title = styled.div`
  display: flex;
  i {
    position: absolute;
    right: 0;
    top: -1.5rem;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      color: red;
    }
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .input_group {
    width: 100%;
    max-width: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f2f2f2;
    margin: 0.5rem 0;
    padding-left: 0.5rem;

    input,
    select {
      width: 100%;
      max-width: 40rem;
      padding: 1rem;
      margin: 0.5rem;
      font-size: 1.3rem;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }

  .input_button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    input {
      width: 100%;
      max-width: 40rem;
      padding: 1rem;
      margin: 0.5rem;
      font-size: 1.3rem;
      border: none;
      transition: all 0.5s;

      &:hover {
        color: tomato;
      }
    }
  }
`;
