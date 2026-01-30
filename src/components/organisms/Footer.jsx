import Image from "next/image"
import Link from "next/link"
import Icon from "../atoms/Icon"
import Button from "../atoms/Button"

const Footer = () => {
  return (
    <footer className="">
      <div className="py-2 border-b border-[#7F7E7E40]">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={196} height={60} />
          </Link>

          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-4">
              {socialLinks?.map(({ _id, icon, route }) => {
                return (
                  <li key={_id}>
                    <Link href={route}>
                      <Icon className={`${icon} text-lambda hover:text-primary transition-all duration-300 ease-in-out text-2xl`} />
                    </Link>
                  </li>
                )
              })}
            </ul>

            <Button>Enquire Now</Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-4 gap-14">
          {footerLinks?.map(({ _id, title, links }) => {
            return (
              <div key={_id}>
                <h3 className="text-lg mb-4">{title}</h3>
                <ul >
                  {links?.map(({ _id, label, route }) => {
                    return (
                      <li key={_id} className="mb-1">
                        <Link href={route} className="text-lambda/80 hover:translate-x-1 hover:text-primary transition-all duration-300 ease-in-out">
                          {label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}

          <div>
            <h3 className="text-lg mb-4">Contact Us</h3>
            <ul >
              {contact?.map(({ _id, icon, label }) => {
                return (
                  <li key={_id} className="mb-4 flex items-start gap-6">
                    <Icon className={`${icon} text-lambda mt-1 text-xl`} />
                    <p className="text-lambda/80">{label}</p>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-3">Memberships</h3>
            <ul className="flex items-center gap-6">
              {members?.map(({ _id, img }) => {
                return (
                  <li key={_id}>
                    <Image className="object-contain h-[65px]" src={`/images/member/${img}`} alt="Logo" width={100} height={100} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

      </div>

      <div className="border border-top  border-[#D6D3D3]">
        <p className="text-center text-lambda/70 leading-[24px] py-6">
          &copy; 2026 MCube Financial. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

const socialLinks = [
  {
    _id: 1,
    icon: "fi-brands-linkedin",
    route: "#"
  }
]

const footerLinks = [
  {
    _id: 1,
    title: "Company",
    links: [
      {
        _id: 1,
        label: "About Us",
        route: "/about"
      },
      {
        _id: 2,
        label: "Contact Us",
        route: "/what-we-do"
      },
      {
        _id: 3,
        label: "Insights",
        route: "/insights"
      },
      {
        _id: 4,
        label: "Privacy Policy",
        route: "/media"
      },
      {
        _id: 5,
        label: "Terms & Conditions",
        route: "/careers"
      }
    ]
  },
  {
    _id: 2,
    title: "Services",
    links: [
      {
        _id: 1,
        label: "Lenders / Financial Institutions",
        route: "/lenders-financial-institutions"
      },
      {
        _id: 2,
        label: "Investors",
        route: "/investors"
      },
      {
        _id: 3,
        label: "Brokers",
        route: "/brokers"
      },
      {
        _id: 4,
        label: "Borrowers",
        route: "/investors"
      }
    ]
  }
]

const contact = [
  {
    _id: 1,
    icon: "fi fi-rr-marker",
    label: "128 S Tryon Street, Suite #801 Charlotte, NC - 28202",
    route: "#"
  },
  {
    _id: 2,
    icon: "fi fi-rr-envelope",
    label: "contactus@mcubefinancial.com",
    route: "#"
  }
]

const members = [
  {
    _id: 1,
    img: "CREFC.svg"
  },
  {
    _id: 2,
    img: "ICSC.svg"
  },
  {
    _id: 3,
    img: "MBA.svg"
  },
]