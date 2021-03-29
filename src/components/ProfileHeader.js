import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './ProfileHeader.css';
import { Progress } from 'antd';

/* Renders the most important, "at a glance" information about the user.
 * Styled to be attention grabbing for the viewer
 */
class ProfileHeader extends Component {
  render() {
    const userData = this.props.userData;

    return (
      <div className='profile-header'>
        <Row align="middle">
          <Col span={24}>
            <div className='profile-name'>NAME:{userData.fullName.toUpperCase()}</div>
          </Col>
          <Col span={24}>
            <div className='profile-name'>CLASS:{userData.class.toUpperCase()}</div>
          </Col>
          <Col span={8}>
            <div className='profile-name'>
              PROGRESS :
            </div>
          </Col>
          <Col span={16} style={{margin:'auto'}}>
            <Progress percent={50} status="active" showInfo={false}/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
          </Col>
        </Row>
        <div className='profile-links'>
        </div>
      </div>
    );
  }
}

// React allows us to typecheck the props that we are provided
ProfileHeader.propTypes = {
  userData: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    tagLine: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired
  }).isRequired
};

export default ProfileHeader;
