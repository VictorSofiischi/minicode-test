import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import Modal from './modal'
import { XMarkIcon } from '@heroicons/react/20/solid'
import CheckBox from './checkbox'

const navigation = [
    { name: 'Pagina Principala', href: '#', icon: "home" },
    { name: 'Despre Minicode', href: '#', icon: "people" },
    { name: 'Produse de asigurare', href: '#', icon: "check" },
    { name: 'Caz Asigurat', href: '#', icon: "truck" },
    { name: 'Cariera', href: '#', icon: "doc" },
    { name: 'Oferte', href: '#', icon: "star" },
    { name: 'Noutati', href: '#', icon: "form" },
    { name: 'Intrebari', href: '#', icon: "question" },
    { name: 'Contacte', href: '#', icon: "phone" },
]

const bottomInfo = [
    { content: '+373 69 845 845', icon: "phone" },
    { content: 'office@minicode.md', icon: "mail" },
    { content: 'mun. Chisinau, str Bucuresti, 101', icon: "map" },
    { content: 'Harta', icon: "search", href: "https://www.google.com/maps/place/Strada+Bucure%C8%99ti+101,+Chi%C8%99in%C4%83u,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0/@47.0248094,28.82114,17z/data=!4m6!3m5!1s0x40c97dccf866511d:0xb5d078d80af28b05!8m2!3d47.0248497!4d28.8229103!16s%2Fg%2F11pxb097ft?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D" },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <header className="bg-white border-b-[1px] shadow-xl z-10">
            <nav className="mx-auto flex items-center justify-between p-3 lg:px-8 divided">
                <div className="flex flex-row justify-between w-full lg:w-auto lg:justify-normal lg:gap-16">
                    <button onClick={() => { setMobileMenuOpen(true) }}>
                        <img
                            alt=""
                            src="/icons/menu1.svg"
                            className="h-8 self-center w-auto"
                        />
                    </button>
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            alt=""
                            src="/minicode_logo_black.svg"
                            className="h-16 w-auto"
                        />
                    </a>
                </div>
                <span className='divider hidden lg:block' />
                <div className="hidden self-center flex px-10 lg:flex text-[#1B1918] font-bold text-2xl whitespace-nowrap">
                    <span className='text-center self-center'>Cu siguranță, împreună!</span>
                </div>
                <span className='divider hidden lg:block' />

                <div className="hidden lg:flex lg:justify-end gap-10 ml-10">
                    <button className="flex flex-col text-[#1B1918] gap-2" onClick={() => { setLoginModalOpen(true) }}>
                        <img
                            alt=""
                            src="/icons/login.svg"
                            className="h-6 self-center w-auto"
                        />
                        <span className="text-sm">Logare</span>
                    </button>
                    <button className="flex flex-col text-[#1B1918] gap-2" onClick={() => { setRegisterModalOpen(true) }}>
                        <img
                            alt=""
                            src="/icons/register.svg"
                            className="h-6 self-center w-auto"
                        />
                        <span className="text-sm">Înregistrare</span>
                    </button>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10 overflow-x-hidden" />
                <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex flex-row gap-5">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <img
                                src='/menu_icons/close.svg'
                            />
                            <span className="sr-only">Close menu</span>
                        </button>
                        <span className='text-black text-3xl font-bold'>Meniu</span>
                    </div>
                    <div className="mt-6">
                        <div className="-my-6 flex flex-col justify-between min-h-[calc(100vh-4rem)]">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 flex flex-row gap-3 rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        <img
                                            src={`/menu_icons/${item.icon}.svg`}
                                            alt={`${item.name}_icon`}
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="">
                                <div className="flex flex-row mb-6 items-center gap-4">
                                    <img
                                        className="h-5"
                                        alt="lang_icon"
                                        src="/menu_icons/lang.svg"
                                    />
                                    <div className="divide-x divide-gray-300 font-bold">
                                        <button className="px-2 text-[#A40731]">Рус</button>
                                        <button className="px-2 text-[#1B1918]">Ro</button>
                                    </div>
                                </div>
                                {bottomInfo.map((item) => (
                                    <a
                                        key={item.content}
                                        href={item.href}
                                        target="_blank"
                                        style={
                                            !item.href
                                                ? {
                                                    pointerEvents: "none",
                                                    cursor: "default",
                                                }
                                                : {}
                                        }
                                        className="-mx-3 flex flex-row gap-3 items-center rounded-lg px-3 py-2 text-base/7 font-normal text-gray-900 hover:bg-gray-50"
                                    >
                                        <img
                                            src={`/menu_icons/${item.icon}.svg`}
                                            alt={`${item.content}_icon`}
                                            className="h-4"
                                        />
                                        {item.content}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
            <Modal open={loginModalOpen} setOpen={setLoginModalOpen}>
                <form>
                    <div className='flex flex-col gap-5 min-w-[550px] w-full pt-6 pb-4'>
                        <div className='flex flex-row  justify-between mb-4'>
                            <span className='text-4xl text-black font-bold'>Loghează-te</span>
                            <button className='my-auto' onClick={(event) => {
                                event.preventDefault();
                                setLoginModalOpen(false)
                            }}>
                                <XMarkIcon className='w-8 text-[#42403F] -mt-10' />
                            </button>
                        </div>
                        <span className='text-md text-[#42403F]'>Nu ai un cont? <button className='text-[#A40731] underline underline-[#A40731]'
                            onClick={(event) => {
                                event.preventDefault();
                                setLoginModalOpen(false);
                                setRegisterModalOpen(true);
                            }}
                        >Înregistreaza-te </button></span>
                        <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            aria-label="email"
                            onChange={(event) => { setEmail(event.target.value) }}
                            className="block w-full rounded-md bg-white h-[45px] self-center px-3 py-1.5 placeholder:text-[#42403F] text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#A40731]"
                        />
                        <input
                            id="password"
                            name="password"
                            placeholder="Parola"
                            aria-label="password"
                            type='password'
                            onChange={(event) => { setPassword(event.target.value) }}
                            className="block w-full placeholder:text-[#42403F] text-lg rounded-md h-[45px] bg-white self-center px-3 py-1.5 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#A40731]"
                        />
                        <button className='text-[#42403F] text-sm self-start'>Ai uitat parola?</button>
                        <button
                            className={`flex flex-row bg-[#A40731] min-h-[45px] text-center items-center gap-5 py-2 px-5 rounded-md`}>
                            <span className={`text-white font-semibold mx-auto`}>Logare</span>
                        </button>
                    </div>
                </form>
            </Modal>
            <Modal open={registerModalOpen} setOpen={setRegisterModalOpen}>
                <form>
                    <div className='flex flex-col gap-5 min-w-[550px] w-full pt-6 pb-4'>
                        <div className='flex flex-row  justify-between mb-4'>
                            <span className='text-4xl text-black font-bold'>Înregistreaza-te </span>
                            <button className='my-auto' onClick={(event) => {
                                event.preventDefault();
                                setRegisterModalOpen(false)
                            }}>
                                <XMarkIcon className='w-8 text-[#42403F] -mt-10' />
                            </button>
                        </div>
                        <span className='text-md text-[#42403F]'>Deja ai un cont? <button className='text-[#A40731] underline underline-[#A40731]' onClick={(event) => {
                            event.preventDefault();
                            setRegisterModalOpen(false);
                            setLoginModalOpen(true);
                        }}>Logheaza-te </button></span>
                        <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            aria-label="email"
                            onChange={(event) => { setEmail(event.target.value) }}
                            className="block w-full rounded-md bg-white h-[45px] self-center px-3 py-1.5 placeholder:text-[#42403F] text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#A40731]"
                        />
                        <input
                            id="register_password"
                            name="register_password"
                            placeholder="Parola"
                            aria-label="register_password"
                            type='password'
                            onChange={(event) => { setPassword(event.target.value) }}
                            className="block w-full placeholder:text-[#42403F] text-lg rounded-md h-[45px] bg-white self-center px-3 py-1.5 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#A40731]"
                        />
                        <input
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Confirma Parola"
                            aria-label="password"
                            type='password'
                            onChange={(event) => { setPassword(event.target.value) }}
                            className="block w-full placeholder:text-[#42403F] text-lg rounded-md h-[45px] bg-white self-center px-3 py-1.5 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#A40731]"
                        />
                        <div className='flex flex-row gap-3 py-4'>
                            <CheckBox>
                                <span className='ml-3 text-[#616164]'>Sunt de acord cu cu <button className='text-transparent bg-clip-text bg-custom-gradient'>Termenii și condițiile</button> site-ului</span>
                            </CheckBox>
                        </div>
                        <button
                            className={`flex flex-row bg-[#A40731] min-h-[45px] text-center items-center gap-5 py-2 px-5 rounded-md`}>
                            <span className={`text-white font-semibold mx-auto`}>Înregistrare</span>
                        </button>
                    </div>
                </form>
            </Modal>
        </header >
    )
}