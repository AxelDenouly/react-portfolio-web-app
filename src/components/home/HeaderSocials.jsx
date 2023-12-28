import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.instagram.com/axel_denouly/" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-twitter"></i>
        </a>

        <a href="" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-pinterest"></i>
        </a>

        <a href="mailto:axeljoo2935@gmail.com" className="home__social-link" target='_blank'>
            <i class="fa-regular fa-envelope"></i>
        </a>

        <a href="https://api.whatsapp.com/send?phone=491742131348" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-whatsapp"></i>
        </a>

        <a href="https://github.com/AxelDenouly?tab=repositories" className="home__social-link" target='_blank'>
            <i class="fa-brands fa-github"></i>
        </a>
    </div>
  )
}

export default HeaderSocials