
import './App.css'

function App() {

  return (
    <section>
      <img src="../src/assets/Rectangle90.png" className="profile-img" />
    <div className="intro-section">
      <p className="title">Laura Smith</p>
      <p className="role">Frontend Developer</p>
      <a href="" className="website">laurasmith.website</a>
      <div className="btns">
        <button className="email-btn"><i className="fa-solid fa-envelope"></i> Email</button>
        <button className="linkedin-btn"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
      </div>
    </div>
    <div className="content">
    <div>
      <p className="section-title">About</p>
      <p className="content">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    </div>
    <div>
      <p className="section-title">Interests</p>
      <p className="content">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    </div>
  </div>  
  </section>
    

  )
}

export default App
