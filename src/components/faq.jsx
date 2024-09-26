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
      title: 'Why Gambit?',
      content:
        'Welcome to Gambit, the next-generation sports betting platform powered by blockchain technology. Say goodbye to outdated, opaque betting systems, and experience a seamless, secure, and transparent way to bet on your favorite sports.',
    },
    {
      id: 2,
      title: 'Why Blockchain?',
      content:
        'aaaaaaaaaaaaaa ',
    },
    {
      id: 3,
      title: 'How do you handle project revisions or changes?',
      content:
        'bbbbbbbbbbbbbbbbbbb.',
    },
    {
      id: 4,
      title: 'What if I`m not satisfied with the final result?',
      content:
        'ccccccccccccccccccc',
    }
  ]

  return (
    <div className="w-[1260px] mx-auto">
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
      <div className='md:mb-6 mb-3 rounded-xl faq-bg text-tiber overflow-hidden shadow-lg'>
        <p className="text-base xl:text-lg font-medium">Join The Community</p>
      </div>
    </div>
  )
}
