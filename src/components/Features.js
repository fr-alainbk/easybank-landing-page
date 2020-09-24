import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="features">
      <div className="features__up">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial hub.
          Control your finances like never before.
        </p>
      </div>
      <div className="features__down">
        <div className="features__feature">
          <img
            src=".././images/icon-online.svg"
            alt="online-icon"
            className="features__icon"
          />
          <div className="features__name">Online Banking</div>
          <p className="features__description">
            Our modern web and mobile applications allow you to keep track of your
            finances wherever you are in the world.
          </p>
        </div>
        <div className="features__feature">
          <img
            src=".././images/icon-budgeting.svg"
            alt="budgeting-icon"
            className="features__icon"
          />
          <div className="features__name">Simple Budgeting</div>
          <p className="features__description">
            See exactly where your money goes each month. Receive notifications when
            you're close to hitting your limits.
          </p>
        </div>
        <div className="features__feature">
          <img
            src=".././images/icon-onboarding.svg"
            alt="onboarding-icon"
            className="features__icon"
          />
          <div className="features__name">Fast Onboarding</div>
          <p className="features__description">
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="features__feature">
          <img
            src=".././images/icon-api.svg"
            alt="api-icon"
            className="features__icon"
          />
          <div className="features__name">Open API</div>
          <p className="features__description">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
