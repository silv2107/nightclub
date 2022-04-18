import "./TitleSections.scss";
const TitleSections = ({ name, span }) => {
    return ( 
        <article className="titleSection">
            <h1>{name}<span>{span}</span></h1>
            <img src="/img/bottom_line.png" alt="bottomLine" />
        </article>
     );
}
 
export default TitleSections;