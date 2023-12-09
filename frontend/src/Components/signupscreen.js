import React from 'react'

import { Helmet } from 'react-helmet'

import './signupscreen.css'

const Signupscreen = (props) => {
  return (
    <div className="signupscreen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="signupscreen-signupscreen">
        <img
          alt="pexelsjessloiterton4319883114117"
          src="/external/pexelsjessloiterton4319883114117-ys9-1000w.png"
          className="signupscreen-pexelsjessloiterton431988311"
        />
        <div className="signupscreen-text">
          <span className="signupscreen-text01">
            <span>Have an account? Log in</span>
          </span>
        </div>
        <div className="signupscreen-button">
          <span className="signupscreen-text03">Signup</span>
        </div>
        <div className="signupscreen-tab">
          <div className="signupscreen-email">
            <span className="signupscreen-text04">
              <span>Name</span>
            </span>
          </div>
          <div className="signupscreen-email1">
            <span className="signupscreen-text06">
              <span>Email</span>
            </span>
          </div>
          <div className="signupscreen-password">
            <div className="signupscreen-group">
              <img
                alt="Vector331"
                src="/external/vector331-wm3t.svg"
                className="signupscreen-vector"
              />
              <img
                alt="Vector332"
                src="/external/vector332-0l3h.svg"
                className="signupscreen-vector01"
              />
              <img
                alt="Vector333"
                src="/external/vector333-vo78.svg"
                className="signupscreen-vector02"
              />
            </div>
            <span className="signupscreen-text08">
              <span>Password</span>
            </span>
          </div>
          <div className="signupscreen-google">
            <div className="signupscreen-google1">
              <div className="signupscreen-group1">
                <img
                  alt="Vector339"
                  src="/external/vector339-d7j4s.svg"
                  className="signupscreen-vector03"
                />
                <img
                  alt="Vector340"
                  src="/external/vector340-kh7.svg"
                  className="signupscreen-vector04"
                />
                <img
                  alt="Vector341"
                  src="/external/vector341-brq.svg"
                  className="signupscreen-vector05"
                />
                <img
                  alt="Vector342"
                  src="/external/vector342-f9cd.svg"
                  className="signupscreen-vector06"
                />
                <img
                  alt="Vector343"
                  src="/external/vector343-ehqd.svg"
                  className="signupscreen-vector07"
                />
                <img
                  alt="Vector344"
                  src="/external/vector344-s9qj.svg"
                  className="signupscreen-vector08"
                />
                <img
                  alt="Vector345"
                  src="/external/vector345-1vr7.svg"
                  className="signupscreen-vector09"
                />
                <img
                  alt="Vector346"
                  src="/external/vector346-d234.svg"
                  className="signupscreen-vector10"
                />
              </div>
              <span className="signupscreen-text10">
                <span>Google</span>
              </span>
            </div>
            <div className="signupscreen-facebook">
              <div className="signupscreen-group2">
                <div className="signupscreen-group3">
                  <img
                    alt="Vector352"
                    src="/external/vector352-lchc.svg"
                    className="signupscreen-vector11"
                  />
                  <img
                    alt="Vector353"
                    src="/external/vector353-e69f.svg"
                    className="signupscreen-vector12"
                  />
                  <img
                    alt="Vector354"
                    src="/external/vector354-wty7.svg"
                    className="signupscreen-vector13"
                  />
                  <img
                    alt="Vector355"
                    src="/external/vector355-27y4.svg"
                    className="signupscreen-vector14"
                  />
                  <img
                    alt="Vector356"
                    src="/external/vector356-l64g.svg"
                    className="signupscreen-vector15"
                  />
                </div>
              </div>
              <span className="signupscreen-text12">
                <span>Facebook</span>
              </span>
            </div>
            <div className="signupscreen-twitter">
              <span className="signupscreen-text14">
                <span>Twitter</span>
              </span>
              <img
                alt="twitter14114"
                src="/external/twitter14114-jkgt-200h.png"
                className="signupscreen-twitter1"
              />
            </div>
            <div className="signupscreen-apple">
              <img
                alt="Apple14115"
                src="/external/apple14115-fxj6-200h.png"
                className="signupscreen-apple1"
              />
              <span className="signupscreen-text16">
                <span>Apple</span>
              </span>
            </div>
          </div>
          <div className="signupscreen-privacy">
            <img
              alt="Ellipse163359"
              src="/external/ellipse163359-bid8-200h.png"
              className="signupscreen-ellipse163"
            />
            <span className="signupscreen-text18">
              I agree with the Terms of Service &amp; Privacy Policy
            </span>
          </div>
        </div>
        <div className="signupscreen-text19">
          <span className="signupscreen-text20">
            <span>Create Account</span>
          </span>
          <span className="signupscreen-text22">
            <span>
              <span>
                Fill your information below or register
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>with your social accounts</span>
            </span>
          </span>
        </div>
        <div className="signupscreen-statsber">
          <div className="signupscreen-group4">
            <span className="signupscreen-text27">
              <span>9:41</span>
            </span>
            <div className="signupscreen-battery">
              <img
                alt="Border368"
                src="/external/border368-hjx-200h.png"
                className="signupscreen-border"
              />
              <img
                alt="Cap369"
                src="/external/cap369-8io.svg"
                className="signupscreen-cap"
              />
              <img
                alt="Capacity370"
                src="/external/capacity370-tnwb-200h.png"
                className="signupscreen-capacity"
              />
            </div>
            <img
              alt="Wifi371"
              src="/external/wifi371-ti1h.svg"
              className="signupscreen-wifi"
            />
            <img
              alt="CellularConnection375"
              src="/external/cellularconnection375-1ael.svg"
              className="signupscreen-cellular-connection"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signupscreen
