export default function VerticalMenu() {
    const firstDividerHeight = `calc((100% - 88px) - 62px - 43%)`

    return (
        <nav className='h-full px-2 py-3 bg-white border-r-[1px] border-[#E7E5E4] hidden lg:block w-[91px]'>
            <ol role="list" className="overflow-hidden h-full">
                <li className="flex flex-col items-center"
                    style={{ height: firstDividerHeight }}
                >
                    <img
                        src='/menu_icons/lang.svg'
                        className='w-7'
                    />
                    <div className="divide-x mt-2">
                        <button className="pr-2 text-[#A40731]">Рус</button>
                        <button className="pl-2 text-[#1B1918]">Eng</button>
                    </div>
                    <div className="-ml-px mt-8 w-[1px] h-[100%] bg-[#E7E5E4]" />
                </li>
                <li className="flex flex-col items-center mt-8"
                    style={{ height: firstDividerHeight }}
                >
                    <img
                        src="/menu_icons/phone.svg"
                        className='w-7'
                        alt="phone_logo"
                    />
                    <span className="text-[#1B1918]">Sună</span>
                    <div className="-ml-px mt-8 w-[1px] h-[100%] bg-[#E7E5E4]" />
                </li>
                <li className="flex flex-col items-center divide-y mt-8">
                    <img
                        src="/menu_icons/social_media/messenger_red.svg"
                        className="w-7 pb-4"
                        alt="messenger_logo"
                    />
                    <img
                        src="/menu_icons/social_media/whatsapp_red.svg"
                        className="w-7 pt-4"
                        alt="whatsapp_logo"
                    />
                </li>
            </ol>
        </nav>
    )
}
