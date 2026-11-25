const SidePanel = ({ image, children }) => {
  return (
    <aside
      className="h-full w-full bg-cover bg-center bg-no-repeat p-6 text-white"
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      {children}
    </aside>
  );
};

export default SidePanel;
