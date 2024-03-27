// import React, { useEffect } from 'react';
// import Razorpay from 'razorpay';

// function RazorpayButton() {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//         script.async = true;
//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     const handlePayment = () => {
//         const options = {
//             key: "rzp_test_JNtGfq4efv3mAF", // Replace with your Razorpay Key ID
//             amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//             currency: "INR",
//             name: "Acme Corp",
//             description: "Test Transaction",
//             image: "https://example.com/your_logo",
//             order_id: "order_IluGWxBm9U8zJ8", // This is a sample Order ID. Replace with the actual Order ID
//             callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
//             prefill: {
//                 name: "Gaurav Kumar",
//                 email: "gaurav.kumar@example.com",
//                 contact: "9000090000"
//             },
//             notes: {
//                 address: "Razorpay Corporate Office"
//             },
//             theme: {
//                 color: "#3399cc"
//             }
//         };

//         const rzp = new Razorpay(options);
//         rzp.open();
//     };

//     return (
//         <button id="rzp-button1" onClick={handlePayment}>Pay with Razorpay</button>
//     );
// }

// export default RazorpayButton;
