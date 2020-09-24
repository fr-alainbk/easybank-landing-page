import React from "react";
import "./Articles.css";

function Articles() {
  return (
    <div id="articles" className="articles">
      <div className="articles__top">
        <h2>Latest Articles</h2>
      </div>
      <div className="articles__bottom">
        <div className="articles__article">
          <img
            src=".././images/image-currency.jpg"
            alt="currency"
            className="articles__image"
          />
          <p className="articles__author">By Claire Robinson</p>
          <h4 className="articles__title">
            Receive money in any currency with no fees
          </h4>
          <p className="articles__content">
            The world is getting smaller and we are becoming more mobile. So why
            should you be forced to only receive money in a single...
          </p>
        </div>
        <div className="articles__article">
          <img
            src=".././images/image-restaurant.jpg"
            alt="restaurant"
            className="articles__image"
          />
          <p className="articles__author">By Wilson Hutton</p>
          <h4 className="articles__title">
            Treat yourself without worrying about money
          </h4>
          <p className="articles__content">
            Our simple budgeting feature allows you to separate out your spending and
            set realistic limits each month. That means you...
          </p>
        </div>
        <div className="articles__article">
          <img
            src=".././images/image-plane.jpg"
            alt="plane"
            className="articles__image"
          />
          <p className="articles__author">By Wilson Hutton</p>
          <h4 className="articles__title">
            Take your Easybank card wherever you go.
          </h4>
          <p className="articles__content">
            We want you to enjoy your travels. This is why we don't charge any fees
            on purchases while you're abroad. We'll even show you...
          </p>
        </div>
        <div className="articles__article">
          <img
            src=".././images/image-confetti.jpg"
            alt="confetti"
            className="articles__image"
          />
          <p className="articles__author">By Claire Robinson</p>
          <h4 className="articles__title">
            Our invite-only Beta accounts are now live!
          </h4>
          <p className="articles__content">
            After a lot of hard work by the whole team, we're excited to launch our
            closed beta. It's easy to request an invite through the site...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Articles;
