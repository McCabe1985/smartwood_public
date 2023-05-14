import React from 'react'
import { Link } from 'gatsby'

export default function ReferralBanner() {
  return (
    <section className="referral-container">
        <div className="referral-bg"></div>
        <p className="referral-text">Refer a friend and get a £50 thank you voucher! <Link className='referral-link' to="/contact">Contact Us</Link> to find out more!</p>
    </section>
  )
}
