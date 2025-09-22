export function DrawerExample() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => setOpen(true)}>Open Drawer</button>
      <SideDrawer open={open} onClose={() => setOpen(false)}>
        <h2>Simple Drawer</h2>
        <button onClick={() => setOpen(false)}>Close</button>
      </SideDrawer>
    </div>
  );
}