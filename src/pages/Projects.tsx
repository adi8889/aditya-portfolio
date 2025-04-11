const Projects = () => {
    return (
      <section id="projects" className="px-10 md:px-20 py-20 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul className="space-y-6 text-gray-300">
          <li>
            <strong>Biomedical Image Segmentation</strong><br />
            Brain tumor detection using deep learning & Streamlit frontend.
          </li>
          <li>
            <strong>Hospital DBMS System</strong><br />
            MySQL-powered secure data management for hospitals.
          </li>
          <li>
            <strong>AWS S3 + Transcribe</strong><br />
            Real-time speech-to-text system with cloud automation.
          </li>
        </ul>
      </section>
    );
  };
  
  export default Projects;
  