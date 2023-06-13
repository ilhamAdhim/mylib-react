function Jumbotron() {
  return (
    <section id="jumbotron_section">
      <div className="text_jumbotron_section" data-aos="fade-right">
        <h1> MyLib 📖 </h1> <br />
        <h5> Manage your own collection of books </h5>
        <h5> Track your reading progress </h5>
        <br />
        <a href="#search_section">
          <button className="button_jumbotron" role="button">
            <span className="text"> Go To Library </span>
          </button>
        </a>
      </div>
      <div className="image_bookshelf" data-aos="zoom-out-left">
        <div className="lamp">
          <div className="lamp_lights"></div>
        </div>
        <img src="./assets/image_jumbotron.svg" alt="" />
      </div>
    </section>
  );
}

export default Jumbotron;
