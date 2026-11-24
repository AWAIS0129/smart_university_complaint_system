// SidePanel.jsx
const styles = {
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: '24px',
  color: 'white',
}

const SidePanel = ({ image, children }) => {
  return (
    <aside style={{ ...styles, backgroundImage: `url(${image})` }}>
      {children}
    </aside>
  )
}

export default SidePanel