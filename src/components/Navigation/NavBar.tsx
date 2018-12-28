import React, { Component } from 'react';
import * as styles from '../../../styles/main.scss';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        className={[
          styles.navbar,
          styles['navbar-dark'],
          styles['bg-dark']
        ].join(' ')}
      >
        <a class="navbar-brand" href="#">
          Dashboard
        </a>

        <div className={styles['navbar-nav']}>
          <div className={[styles['nav-item'], styles['dropdown']].join(' ')}>
            <span
              className={[styles['nav-link'], styles['dropdown-toggle']].join(
                ' '
              )}
              id="navbarDropdownMenuLink"
              role="button"
              tabIndex={0}
              dataToggle="dropdown"
              ariaHaspopup="true"
              ariaExpanded="false"
              onClick={() =>
                this.setState({ dropdownOpen: !this.state.dropdownOpen })
              }
            >
              Profile
            </span>
            <div
              className={[
                styles['dropdown-menu'],
                styles['dropdown-menu-right'],
                styles['dropdown-default']
              ].join(' ')}
              aria-labelledby="navbarDropdownMenuLink"
              style={
                this.state.dropdownOpen
                  ? { display: 'block', position: 'absolute' }
                  : {}
              }
            >
              <a
                className={styles['dropdown-item']}
                href="/profile/profile-picture-update"
              >
                Change Profile Picture
              </a>
              <a className={styles['dropdown-item']} href="#!">
                Update Profile Details
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
