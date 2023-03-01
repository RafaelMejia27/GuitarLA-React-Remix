import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return{
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de musica'
  }

}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt='imagen sobre nosotros' />

        <div>
          <p>Pellentesque sagittis suscipit tortor in aliquam. Aenean imperdiet lectus lacus. 
            In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec eleifend arcu sit amet sapien eleifend lobortis. In nulla nibh, lobortis non libero ut, 
            sagittis elementum arcu. Nunc sodales nisi non risus faucibus, nec commodo libero porta. Ut quis rutrum odio. 
            Sed ornare lacus eget posuere fermentum. Integer cursus quis arcu tincidunt iaculis.</p>

            <p>Pellentesque sagittis suscipit tortor in aliquam. Aenean imperdiet lectus lacus. 
            In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec eleifend arcu sit amet sapien eleifend lobortis. In nulla nibh, lobortis non libero ut, 
            sagittis elementum arcu. Nunc sodales nisi non risus faucibus, nec commodo libero porta. Ut quis rutrum odio. 
            Sed ornare lacus eget posuere fermentum. Integer cursus quis arcu tincidunt iaculis.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros