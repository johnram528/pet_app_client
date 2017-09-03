
const K_WIDTH = 40;
const K_HEIGHT = 40;

const profileMarkerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '1px solid',
  borderRadius: K_HEIGHT,
  backgroundColor: '#80e8e0',
  textAlign: 'center',
  opacity: .6,
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 1
};


export {profileMarkerStyle}