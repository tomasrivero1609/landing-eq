'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function PresupuestoModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="ml-6 hidden md:inline-block bg-white text-black font-semibold px-4 py-2 rounded-full text-sm hover:bg-zinc-200 transition"
      >
        Solicitá presupuesto
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-zinc-900 p-8 text-white shadow-xl transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <Dialog.Title className="text-xl font-bold">
                      Solicitá Presupuesto
                    </Dialog.Title>
                    <button onClick={closeModal} className="text-zinc-400 hover:text-white">
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-sm text-zinc-400 mb-6">
                    Completá el formulario y nos pondremos en contacto a la brevedad para darte una propuesta personalizada.
                  </p>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <input className="p-3 bg-zinc-800 rounded" placeholder="Nombre completo*" required />
                    <input className="p-3 bg-zinc-800 rounded" placeholder="Localidad*" required />
                    <input className="p-3 bg-zinc-800 rounded" placeholder="Teléfono*" required />
                    <input className="p-3 bg-zinc-800 rounded" placeholder="Correo electrónico*" type="email" required />
                    <input className="p-3 bg-zinc-800 rounded" placeholder="Fecha del evento*" type="date" />
                    <input className="p-3 bg-zinc-800 rounded" placeholder="Nº de invitados" type="number" min="1" />
                    <select className="p-3 bg-zinc-800 rounded" defaultValue="">
                      <option disabled value="">Tipo de Evento</option>
                      <option>Boda</option>
                      <option>Quince años</option>
                      <option>Empresarial</option>
                      <option>Cumpleaños</option>
                      <option>Cena Show</option>
                      <option>Otro</option>
                    </select>
                    <select className="p-3 bg-zinc-800 rounded" defaultValue="">
                      <option disabled value="">Salón</option>
                      <option>Principal</option>
                      <option>Secundario</option>
                    </select>
                    <textarea className="p-3 bg-zinc-800 rounded md:col-span-2" placeholder="Mensaje*" rows={4} required />
                    <button
                      type="submit"
                      className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-zinc-200 transition md:col-span-2"
                    >
                      Enviar solicitud
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
