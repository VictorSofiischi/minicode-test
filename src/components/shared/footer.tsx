const navigation = {
    companie: [
        { name: 'Produse de asigurare', href: '#' },
        { name: 'Caz asigurat', href: '#' },
        { name: 'Noutati', href: '#' },
        { name: 'Cariera', href: '#' },
        { name: 'Oferte', href: '#' },
        { name: 'Intrebari', href: '#' },
    ],
    contacte: [
        { name: '+373 69 845 825', href: '#' },
        { name: '+373 22 824 845', href: '#' },
        { name: 'mun. Chisinau, str. Bucuresti, 101', href: '#' },
    ],
    socialMedia: [
        { name: 'Viber', href: "#", icon: "viber" },
        { name: 'WhatsApp', href: '#', icon: "whatsapp" },
        { name: 'Facebook', href: '#', icon: "facebook" },
        { name: 'Telegram', href: '#', icon: "telegram" },
        { name: 'Instagram', href: '#', icon: "instagram" },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-[#A40731] text-white flex flex-row">
            <div className="max-w-[1300px] self-center mx-auto">
                <div className="w-full self-center items-center mx-auto py-12 lg:py-24">
                    <div className="mt-16 gap-12 lg:gap-24 xl:mt-0 flex flex-col lg:grid lg:grid-cols-5">
                        <div className="lg:col-span-2 text-center lg:text-start">
                            <img
                                className="h-24 self-start -ml-5 -mt-5 self-center"
                                src="/minicode_logo_white.svg"
                                alt="MiniCode-Logo"
                            />
                            <span>Dezvoltarea companiei MINICODE a fost determinată în mare parte de flexibilitatea soluțiilor și ofertelor, adaptivitații față de cerințele pieții și cerințelor clienților</span>
                            <button className="rounded-md p-2 bg-white text-black mt-10 font-bold w-[80%]">Comanda Apel</button>
                        </div>
                        <div className="text-start">
                            <h3 className="font-bold">Companie</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.companie.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="font-light">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-start">
                            <h3 className="font-bold">Contacte</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.contacte.map((item) => (
                                    <li key={item.name}>
                                        <span className="">
                                            {item.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="    ">
                            <div>
                                <h3 className="font-bold text-center flex">Social Media</h3>
                                <div role="list" className="self-center gap-y-5 gap-x-5 lg:gap-x-0 flex flex-row lg:grid lg:grid-cols-2 items-center relative mt-5">
                                    {navigation.socialMedia.map((item) => (
                                        <div key={item.name}>
                                            <a href={item.href}>
                                                <img
                                                    src={`/menu_icons/social_media/${item.icon}.svg`}
                                                    alt={`${item.name}`}
                                                />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
