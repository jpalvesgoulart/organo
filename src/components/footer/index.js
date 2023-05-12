import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/'>
                            <img src='/img/fb.png' alt='Icone do Facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/'>
                            <img src='/img/ig.png' alt='Icone do Instagram'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.twitter.com/'>
                            <img src='/img/tw.png' alt='Icone do Twitter'/>
                        </a>                        
                    </li>
                </ul>
            </section>
            <section>
                <img src='/img/logo.png' alt='Logo da Organo' />
            </section>
            <section>
                <p>Desenvolvido por João Pedro Alves</p>
            </section>
            
        </footer>
    )
}

export default Footer