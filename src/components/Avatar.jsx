import PropTypes from 'prop-types';

function Avatar({ data, onClickName }) {
  return (
    <div className='avatar-wrapper'>
      <h1 style={{ fontWeight: 700 }}>{data.name}</h1>
      <img className='avatar' src={data.profile_image} alt='example' />
      <h2>Gender: {data.gender}</h2>
      <button onClick={onClickName}>Click {data.name}</button>
    </div>
  );
}

Avatar.propTypes = {
  data: {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profile_image: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  },
  onClickName: PropTypes.func,
};

export default Avatar;
