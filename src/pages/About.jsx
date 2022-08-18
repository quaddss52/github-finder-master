function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of my development series in understanding how to work
        with rest APIs , useReducer React hooks amognst others.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a
          className="text-white ml-2"
          href="https://twitter.com/hassibmoddasser"
        >
          Hassib Moddasser
        </a>
      </p>
      <p className="text-lg text-gray-400">
        Built By:
        <a className="text-white ml-2" href="https://github.com/quaddss52">
          Akinpelu Abdul-Quadri
        </a>
      </p>
    </div>
  );
}

export default About;
