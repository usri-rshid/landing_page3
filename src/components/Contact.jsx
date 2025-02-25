//import React from 'react'

import { RiPhoneLine } from "@remixicon/react"
import { CONTACT_INFO } from "../constants"
import { RiMailLine } from "@remixicon/react"
import { RiMapPinLine } from "@remixicon/react"

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto" id="contact">
        <div className="my-20"> 
            <h2 className="text-xl lg:text-3xl tracking-tight text-center
            uppercase mb-12"> Contact Me</h2>
            <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
                {CONTACT_INFO.text}
            </p>
            <div className="flex flex-col lg:flex-row justify-around mx-4">
                <div  className="flex mb-8 lg:mb-0">
                    <RiPhoneLine className="text-xl mr-4" />
                    <div>
                        <p className="flex mb-8 lg:mb-0">
                            {CONTACT_INFO.phone.label}
                        </p>
                        <p className="text-neutral-600">
                            {CONTACT_INFO.phone.value}
                        </p>
                    </div>
                </div>
                <div  className="flex mb-8 lg:mb-0">
                    <RiMailLine className="text-xl mr-4" />
                    <div>
                        <p className="flex mb-8 lg:mb-0">
                            {CONTACT_INFO.email.label}
                        </p>
                        <p className="text-neutral-600">
                            {CONTACT_INFO.email.value}
                        </p>
                    </div>
                </div>
                <div  className="flex mb-8 lg:mb-0">
                    <RiMapPinLine className="text-xl mr-4" />
                    <div>
                        <p className="flex mb-8 lg:mb-0">
                            {CONTACT_INFO.address.label}
                        </p>
                        <p className="text-neutral-600">
                            {CONTACT_INFO.address.value}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact