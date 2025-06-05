const Education = () => (
  <section className="container py-5" id="education">
    <h2 className="mb-5 text-primary fw-bold text-center">Education</h2>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="list-group shadow-sm">
          <div className="list-group-item list-group-item-action flex-column align-items-start mb-3 rounded border border-primary">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 fw-bold">B.Tech in CSE</h5>
              <small className="text-muted">(2020–2024)</small>
            </div>
            <p className="mb-1">Shri Shivaji Vidya Prasarak Sanstha's
Bapusaheb Shivajirao Deore College of Engineering, Dhule</p>
            <small className="text-success fw-semibold">CGPA: 8.44</small>
          </div>

          <div className="list-group-item list-group-item-action flex-column align-items-start mb-3 rounded border border-primary">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 fw-bold">HSC</h5>
              <small className="text-muted">(2020)</small>
            </div>
            <p className="mb-1">S.M.P.R. Patil Jr. College</p>
            <small className="text-success fw-semibold">82.77%</small>
          </div>

          <div className="list-group-item list-group-item-action flex-column align-items-start rounded border border-primary">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 fw-bold">SSC</h5>
              <small className="text-muted">(2018)</small>
            </div>
            <p className="mb-1">Mayur High School</p>
            <small className="text-success fw-semibold">66.40%</small>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
