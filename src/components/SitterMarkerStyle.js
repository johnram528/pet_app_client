
const K_WIDTH = 25;
const K_HEIGHT = 25;

const sitterMarkerStyle = {
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
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 1
};

const sitterMarkerStyleHover = {
  ...sitterMarkerStyle, 
  backgroundColor: '#00a699'
}

export {sitterMarkerStyle, sitterMarkerStyleHover};