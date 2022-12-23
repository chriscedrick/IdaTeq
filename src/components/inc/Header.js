
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Idalogo from '../images/Idalogo1.jpg'


const programs = [
  {
    name: 'Girls In Code',
    href: '/girls',
    icon: ChartBarIcon,
  },
  {
    name: 'Junior Programmers',
    href: '/juniors',
    icon: CodeBracketSquareIcon,
  },
  { 
    name: 'AIPE', 
    href: '#', 
    icon: ShieldCheckIcon },
  {
    name: 'SCPIOT',
    href: '#',
    icon: Squares2X2Icon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Ida Teq</span>
              <img src={Idalogo} className="h-10 w-auto sm:h-14" alt="..."/>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-blue-800 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          
          <Popover.Group as="nav" className="hidden space-x-5 md:flex">
          <a href="/" className="text-base font-medium text-blue-800 hover:text-blue-700">
              Home
            </a>
            <a href="/services" className="text-base font-medium text-blue-800 hover:text-blue-700">
              IT Services
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-blue-800' : 'text-blue-800',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2'
                    )}
                  >
                    <span>Programs</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-blue-800' : 'text-blue-800',
                        'ml-2 h-5 w-5 group-hover:text-blue-700'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-72 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {programs.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-blue-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-blue-800" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-blue-800">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="/projects" className="text-base font-medium text-blue-800 hover:text-blue-700">
              Projects
            </a>
            <a href="/contact" className="text-base font-medium text-blue-800 hover:text-blue-700">
              Contact Us
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="relative inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                <img src={Idalogo} className="h-8 sm:w-auto sm:h-10" alt="Ida Teq"/>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-blue-800 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-800">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {programs.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-blue-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-blue-800" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-blue-800">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-5 py-5 px-5">
              <div className="grid grid-cols-4 gap-y-0 gap-x-0 text-center">
              <a href="/" className="text-base font-medium text-blue-800 hover:text-blue-700">
                  Home
                </a>
                <a href="/services" className="text-base font-medium text-blue-800 hover:text-blue-700">
                  IT Services
                </a>
                <a href="/projects" className="text-base font-medium text-blue-800 hover:text-blue-700">
                  Projects
                </a>
                <a href="/contact" className="text-base font-medium text-blue-800 hover:text-blue-700">
                  Contact Us
                </a>
                
              </div>
              <div>
                <a
                  href="/apply"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Apply now
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;