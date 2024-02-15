import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import GiftImage from '../../assets/gift.png';

type UseState<T> = [T, (val: T) => void];
export default function MyModal({ state }: { state: UseState<Boolean> }) {
  const [isOpen, setIsOpen] = state;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full lg:w-1/2 transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Sorry for delay in Gift!!
                  </Dialog.Title>
                  <div className='mt-2'>
                    <img src={GiftImage} alt='Gift' />
                  </div>

                  <div className='pt-8 flex justify-center'>
                    <button
                      type='button'
                      className='flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-2xl font-medium text-blue-900 animate-bounce'
                      onClick={() => setIsOpen(false)}
                    >
                      Close !!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
