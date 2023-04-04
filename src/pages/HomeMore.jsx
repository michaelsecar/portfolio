import "./HomeMore.css"
import {
  Html5,
  Css,
  Js,
  Java,
  Cpp,
  Python,
  VSCode,
  GitHub2,
  Django,
  React,
  Unity,
  CSharp,
} from "../components/Icons"

const HomeMore = () => {
  return (
    <div className="container more-container">
      <h1 className="title">
        <span className="green-text h1">Acerca de mí</span> y mi stack
      </h1>
      <div className="description more-description">
        <p className="description-text">
          Si bien tengo conocimientos en tecnologias web, también comprendo
          conceptos avanzados de programación en distintos lenguajes:
        </p>
        <div className="languages-container">
          <table>
            <tbody>
              <tr>
                <td>Lenguajes</td>
                <td>
                  <Html5 />
                </td>
                <td>
                  <Js />
                </td>
                <td>
                  <Css />
                </td>
                <td>
                  <Java />
                </td>
                <td>
                  <Cpp />
                </td>
                <td>
                  <CSharp />
                </td>
                <td>
                  <Python />
                </td>
              </tr>
              <tr>
                <td>Herramientas</td>
                <td>
                  <VSCode />
                </td>
                <td>
                  <GitHub2 />
                </td>
                <td>
                  <Unity />
                </td>
              </tr>
              <tr>
                <td>Frameworks</td>
                <td>
                  <Django />
                </td>
                <td>
                  <React />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HomeMore
