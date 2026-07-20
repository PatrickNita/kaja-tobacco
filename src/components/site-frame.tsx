export function SiteFrame() {
  return (
    <div aria-hidden="true" className="site-frame">
      <span className="frame-axis frame-axis-left" />
      <span className="frame-axis frame-axis-right" />
      <span className="frame-corner frame-corner-tl" />
      <span className="frame-corner frame-corner-tr" />
      <span className="frame-corner frame-corner-bl" />
      <span className="frame-corner frame-corner-br" />
    </div>
  );
}
