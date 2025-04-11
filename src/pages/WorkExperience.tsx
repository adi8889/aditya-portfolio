const Experience = () => {
    return (
      <section id="experience" className="px-10 md:px-20 py-20 text-white">
        <h2 className="text-3xl font-bold mb-4">Work & Project Experience</h2>
        <ul className="space-y-6 text-gray-300">
          <li>
            <strong>Convolutional Networks for Biomedical Image Segmentation</strong> – Mar 2024 <br />
            Brain tumor detection with TensorFlow Lite & Streamlit for fast, accurate diagnosis.
          </li>
          <li>
            <strong>Hospital Management using DBMS</strong> – Jun 2024 <br />
            Streamlined patient data handling with secure, efficient DBMS.
          </li>
          <li>
            <strong>Amazon S3 & Transcribe Integration</strong> – Sep 2023 <br />
            Automated speech-to-text workflow using AWS services and Python (Boto3).
          </li>
        </ul>
      </section>
    );
  };
  
  export default Experience;
  