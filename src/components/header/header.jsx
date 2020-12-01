import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {AuthorizationStatus, AppRoute} from "../../const";

const Header = ({authorizationStatus, email}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link
            to={{pathname: AppRoute.MAIN}}
            className={`header__logo-link`}
          >
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              {authorizationStatus === AuthorizationStatus.AUTH
                ?
                <Link className="header__nav-link header__nav-link--profile" to={{pathname: AppRoute.FAVORITES}}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{email}</span>
                </Link>
                :
                <Link className="header__nav-link header__nav-link--profile" to={{pathname: AppRoute.LOGIN}}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Sing in</span>
                </Link>
              }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  email: USER.email,
});

export {Header};
export default connect(mapStateToProps)(Header);
