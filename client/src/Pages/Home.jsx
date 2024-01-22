import React from 'react'
import axios from 'axios'
const Home = () => {
    const checkoutHandler = async (amount) => {
        const { data: { key } } = await axios.get("http://www.localhost:4000/getkey")
        const { data: { order } } = await axios.post("http://localhost:4000/api/v1/checkout", {
            amount
        })
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "HelperHub",
            description: "Home service provider",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/v1/paymentverification",
            prefill: {
                name: "Sourav Kumar Sinha",
                email: "sourav9934413639@gmail.com",
                contact: "7488164548"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
  return (
    <div>
      <button onClick={()=>checkoutHandler(4000)}>Pay</button>
    </div>
  )
}

export default Home
