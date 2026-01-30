import Image from "next/image"
import Link from "next/link"
import Button from "../atoms/Button"
import Icon from "../atoms/Icon"

const Header = () => {
    return (
        <header className="h-[109px] bg-white sticky top-0 z-10">
            <div className="px-2 sm:px-6 lg:px-12 ">
                <div className="flex items-center justify-between py-2">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={196} height={60} />
                    </Link>

                    <div className="flex items-center gap-4">
                        <Button variant="outline">Contact Us</Button>
                        <Button>Enquire Now</Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <ul className="flex items-center gap-[43px]">
                        {data.map(({ _id, label, route, subMenu }) => {
                            return (
                                <li className="relative group before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[4px] before:bg-primary before:transition-all before:duration-500 before:ease-in-out before:z-10 hover:before:w-full" key={_id}>
                                    <Link className="text-lambda pb-[9px] h-full flex items-center gap-2" href={route}>{label} {subMenu && <i className="fi fi-rr-angle-small-down leading-0 group-hover:rotate-180 transition-all duration-300 ease-in-out" />}</Link>
                                    {subMenu && (
                                        <ul className="absolute w-[900px] transition-all origin-top duration-500 ease-in-out group-hover:transform-[perspective(2000px)_translate3d(0,0,0)_rotateX(0deg)_scale3d(1,1,1)_translateY(0px)]  transform-[perspective(2000px)_translate3d(0,0,50px)_rotateX(-90deg)_scale3d(0.86,0.75,1)_translateY(0px)] shadow-lg grid grid-cols-3 gap-4 top-full left-0 bg-white rounded-b-lg p-3 border-t border-lambda/30">
                                            {subMenu.map(({ _id, label, description, icon, route }) => {
                                                return (
                                                    <li className="rounded-sm hover:bg-beta transition-all duration-300 ease-in-out p-5" key={_id}>
                                                        <Link href={route} className="flex gap-4">
                                                            <Icon className={`${icon} text-2xl text-primary transition-all duration-300 ease-in-out`} />
                                                            <div>
                                                                <p className="text-[18px] mb-1 leading-[22px] transition-all duration-300 ease-in-out">{label}</p>
                                                                <p className="text-lambda text-sm leading-[16px] transition-all duration-300 ease-in-out">{description}</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                    <button className="cursor-pointer text-lambda pb-[9px] flex items-center gap-3">
                        <Icon className="fi-rr-world" />  Worldwide <Icon className="fi-rr-angle-small-down" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header

const data = [
    {
        _id: 1,
        label: "About MCube",
        route: "/about"
    },
    {
        _id: 2,
        label: "What We Do",
        route: "/what-we-do",
        subMenu: [
            {
                _id: 1,
                label: "Lenders / Financial Institutions",
                description: "Expert guidance for lenders and financial institutions.",
                icon: "fi-rr-handshake",
                route: "/leaders-financial-institutions"
            },
            {
                _id: 2,
                label: "Investors",
                description: "Strategic insights enabling investors to make informed.",
                icon: "fi-rr-building",
                route: "/investors"
            },
            {
                _id: 3,
                label: "Brokers",
                description: "Strategic insights enabling investors to make informed.",
                icon: "fi-rr-building",
                route: "/investors"
            },
            {
                _id: 4,
                label: "Investors",
                description: "Strategic insights enabling investors to make informed.",
                icon: "fi-rr-building",
                route: "/investors"
            },
            {
                _id: 5,
                label: "Brokers",
                description: "Strategic insights enabling investors to make informed.",
                icon: "fi-rr-building",
                route: "/investors"
            }
        ]
    },
    {
        _id: 3,
        label: "Insights",
        route: "/insights"
    },
    {
        _id: 4,
        label: "Media",
        route: "/media"
    },
    {
        _id: 5,
        label: "Careers",
        route: "/careers"
    },
]