import React from 'react';
import s from './Post.scss';
import { isValidPhoto } from '../Toools';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadUser } from '../../redux/modules/user';

class UserAvatar extends React.Component {
  render () {
    var photo = isValidPhoto(this.props.photo);
    var styles = {
      link: {
        border: '0px'
      }
    }
    return (
      <div className={s.time} style={{marginRight: '15px'}}>
        <Link to={`/${this.props.alias}`} style={styles.link}>
          <img
            src={photo}
            className={s.photo}/>
        </Link>
      </div>
    );
  }
}
UserAvatar.propTypes = {
  photo: React.PropTypes.string.isRequired,
  alias: React.PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: (alias) => dispatch(loadUser(alias))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar);
