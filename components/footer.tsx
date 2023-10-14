import Image from 'next/image'

import TG  from '@/img/tg.png'
import GitHub from '@/img/gitgub.png'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer>
            <div className='inf'>
                <p> Разработчик: Червоный Егор</p>
                <p> Проект сделан не в комерческих целях</p>
                <p> За предложением о работе обращатесь по qr </p>
            </div>

            <div className='images'>
                
                <Link  className="link" href=''>
                    <Image src={TG} className='img1' alt='alt'/>
                </Link>
                <Link className="link" href='https://github.com/root9464'>
                    <Image src={GitHub} className='img1' alt='alt'></Image>
                </Link>
            </div>
            <div className='dopinf'>
                <p>Примечание: на разработку ушло 3 полных дня</p>
                <p>Данный проект после презентации будет недоступен</p>
            </div>
        </footer>
    )
}

export { Footer }