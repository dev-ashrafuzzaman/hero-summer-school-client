import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelected from "../../../../hooks/useSelected";
import CheckoutFrom from "./CheckoutFrom";

// TODO: Strip key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payment = () => {
    const [selected] = useSelected();
    const total = selected.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <Elements stripe={stripePromise}>
                <CheckoutFrom
                    selected={selected}
                    price={price}
                ></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;