export function InfoWidget() {
  return (
    <div className="card shadow-sm" style={{maxWidth: "320px"}}>
      <div className="card-body">
        <h5 className="card-title mb-2">Widget Title</h5>
        <p className="card-text text-muted">
          This is a small description inside the widget.
        </p>
        <button className="btn btn-primary btn-sm">Action</button>
      </div>
    </div>
  );
}
