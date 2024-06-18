import {useParams,Link} from 'react-router-dom';

const ProductPage = () => {

    const Params = useParams();

  return (
    <>
    
    <h1>asdasd</h1>
    {/*//Pag nal;agay mo yung i dentifier sa url lalabas d2 yan/*/}
    <p>{Params.id}</p>
      {/*////Mag lagay lang tayo ng back buttonm//? */}
   {/* 2 dots means go up one level or please go back to previous path routes*/}
   {/*Relative =''path' pag kiniclik back is back mismo sa page/*/}
   {
    /*Ang problem kasi kanina nung wala pang relative-"path" is
    bumabalick sa main root path, so thisu is the solution/*/
   }
   
   <Link to={'..'} relative='path'>Back</Link>
   
    </>
  )
}

export default ProductPage