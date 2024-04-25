import React from "react";
import AuthorPhoto from "../../images/Author.jpg";

function About() {
  return (
    <div className="about">
      <img
        className="about__author_image"
        src={AuthorPhoto}
        alt="Fotogafía del autor"
      />
      <div className="about__author_container">
        <h3 className="about__author_title">Acerca del autor</h3>
        <p className="about__author_text">
          ¡Hola! Mi nombre es Maricarmen y soy estudiante de Desarrollo Web en
          la plataforma de TripleTen.Es allí donde desarrollé proyectos
          utilizando JavaScript. Ahora, he desarrollado esta aplicación que es
          un buscador de noticias y en el que utilicé React para su
          desarrollo.Por ultimo,espero que tu expeciencia sea amigable. ¡Gracias
          por estar aquí!
        </p>
      </div>
    </div>
  );
}

export default About;
