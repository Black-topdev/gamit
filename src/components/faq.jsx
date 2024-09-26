import { useState } from 'react'
import { FaPlus,  FaWindowClose} from 'react-icons/fa'
import cn from 'classnames'

export const Faq = () => {
  const [faqStatus, setFaqStatus] = useState({})

  const onFaqToggle = (id) => {
    setFaqStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }))
  }

  const faqItems = [
    {
      id: 1,
      title: 'What exactly is the Nexys loan management software platform, loan origination software?',
      content:
        'The Nexys loan management software platform is a hub built to always be on the cutting edge of private and commercial lending technology stack of Customer Relationship Management (CRM), Loan Origination Software (LOS), Loan Pricing with Real Time Rate Locking, Loan Servicing, 3rd Party (Outsourced) Loan Servicing Management, Investors, Capital Raise, Accounting, Vendors and Default Management.',
    },
    {
      id: 2,
      title: 'Is Nexys designed for a Broker / Lender / Table Funder / Correspondent / Branch / Vendor?',
      content:
        'The Nexys loan management software platform is a hub for all parties involved in private and commercial real estate transactions. It is designed for the unique needs of Brokers, Lenders, Table Funders, Correspondents, Branches and Vendors to easily communicate, gather information, documentation, process, underwrite, price, actually lock rates, manage pipelines, close, fund, service, and manage their portfolio of loans. ',
    },
    {
      id: 3,
      title: 'Can I import my data from another loan management software, loan origination software or loan tapes?',
      content:
        'The Nexys team will work with you to import data from virtually any source relevant to your lending business.',
    },
    {
      id: 4,
      title: 'How secure & private is my data in Nexys loan origination software, loan management software?',
      content:
        'At Nexys, our number one priority is the security and integrity of our customers` data.  We adhere to the most strict framework for cybersecurity compliance to manage customer data securely and provide industry leading network security, availability, processing integrity, confidentiality, and privacy. ',
    }
  ]

  return (
    <div className="mx-auto">
      {faqItems.map((item, index) => {
        const isActive = faqStatus[item.id]
        return (
          <div
            className={cn('md:mb-6 mb-3 rounded-xl faq-bg text-tiber overflow-hidden shadow-lg', {
              'bg-sky-lighter border border-1 border-tiber-lighter': isActive,
            })}
            key={index}
          >
            <div
              className={`flex justify-between gap-4 items-center cursor-pointer px-6 ${isActive ? 'py-6' : 'py-4'}`}
              onClick={(e) => {
                !e.defaultPrevented && onFaqToggle(item.id)
              }}
            >
              <p className="text-base xl:text-lg font-medium">{item.title}</p>
              <div
                className={cn('flex items-center w-12 h-12 faq-bg rounded-full justify-center flex-shrink-0', {
                  'bg-green-300': isActive,
                })}
              >
                {isActive ? <FaWindowClose className='w-4 h-4' /> : <FaPlus className="w-4 h-4" />}
              </div>
            </div>
            {isActive ? (
              <div className="text-base font-medium overflow-hidden duration-500 transition-all px-6 pb-6">
                <p className="pb-6">{item.content}</p>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
