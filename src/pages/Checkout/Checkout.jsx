
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const navigate = useNavigate();

  const savedUser = JSON.parse(
    localStorage.getItem("pabricaUser") || "null"
  );

  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [billing, setBilling] = useState({
    company: "",
    country: "Pakistan",
    address: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setBilling({
      ...billing,
      [e.target.name]: e.target.value,
    });
  };

  const handleBillingSubmit = (e) => {
    e.preventDefault();

    if (!savedUser) {
      navigate("/auth");
      return;
    }

    localStorage.setItem(
      "pabricaBilling",
      JSON.stringify(billing)
    );

    setError("");
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handlePayment = () => {
    alert(
      "Payment gateway is not connected yet. Please integrate a payment provider."
    );
  };

  return (
    <main className="checkout-page">
      <div className="checkout-container">

        <div className="checkout-heading">
          <h1>Billing Details</h1>

          <p>
            Your billing details are used on your invoices and
            other financial documents, so please keep them up to date.
          </p>
        </div>

        <div className="checkout-content">

          <section className="checkout-form-section">

            {step === 1 ? (
              <>
                <h2>Billing Details</h2>

                <p className="checkout-description">
                  Please complete your billing information.
                </p>

                <form
                  onSubmit={handleBillingSubmit}
                  className="billing-form"
                >

                  <div className="checkout-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      value={savedUser?.name || ""}
                      readOnly
                      required
                    />
                  </div>

                  <div className="checkout-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      value={savedUser?.email || ""}
                      readOnly
                      required
                    />
                  </div>

                  <div className="checkout-field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      value={savedUser?.phone || ""}
                      readOnly
                      required
                    />
                  </div>

                  <div className="checkout-field">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={billing.company}
                      onChange={handleChange}
                      placeholder="Company Name (Optional)"
                    />
                  </div>

                  <div className="checkout-field">
                    <label>Country *</label>

                    <select
                      name="country"
                      value={billing.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="Pakistan">Pakistan</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="India">India</option>
                    </select>
                  </div>

                  <div className="checkout-field">
                    <label>Address Line 1 *</label>

                    <input
                      type="text"
                      name="address"
                      value={billing.address}
                      onChange={handleChange}
                      placeholder="Street address"
                      required
                    />
                  </div>

                  <div className="checkout-field">
                    <label>Address Line 2</label>

                    <input
                      type="text"
                      name="address2"
                      value={billing.address2}
                      onChange={handleChange}
                      placeholder="Apartment, suite, unit (Optional)"
                    />
                  </div>

                  <div className="checkout-field-row">

                    <div className="checkout-field">
                      <label>City *</label>

                      <input
                        type="text"
                        name="city"
                        value={billing.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label>State / Province / Region</label>

                      <input
                        type="text"
                        name="state"
                        value={billing.state}
                        onChange={handleChange}
                        placeholder="State / Province"
                      />
                    </div>

                  </div>

                  <div className="checkout-field">
                    <label>Zip / Postal Code *</label>

                    <input
                      type="text"
                      name="postalCode"
                      value={billing.postalCode}
                      onChange={handleChange}
                      placeholder="Postal Code"
                      required
                    />
                  </div>

                  {error && (
                    <p className="checkout-error">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="checkout-continue-btn"
                  >
                    Save and Continue
                  </button>

                </form>
              </>
            ) : (
              <div className="payment-section">

                <h2>Select Payment Method</h2>

                <p className="checkout-description">
                  Choose your preferred payment method.
                </p>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  Credit / Debit Card
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  PayPal
                </label>

                <button
                  type="button"
                  className="checkout-continue-btn"
                  onClick={handlePayment}
                >
                  Continue to Payment
                </button>

                <button
                  type="button"
                  className="checkout-back-btn"
                  onClick={() => setStep(1)}
                >
                  Back to Billing Details
                </button>

              </div>
            )}

          </section>

          <aside className="order-summary">

            <h2>Order Summary</h2>

            <div className="order-product">

              <div>
                <h3>
                  Pabrica - Engineering & Industrial Service
                  Elementor Template Kit
                </h3>

                <p>Regular License</p>
              </div>

              <strong>$24.00</strong>

            </div>

            <div className="order-price-row">
              <span>Subtotal</span>
              <span>$24.00</span>
            </div>

            <div className="order-price-row">
              <span>Handling Fee</span>
              <span>$3.00</span>
            </div>

            <div className="order-total">
              <strong>Total</strong>
              <strong>US$27.00</strong>
            </div>

            <p className="order-secure">
              <span>🔒</span> Secure checkout
            </p>

          </aside>

        </div>
      </div>
    </main>
  );
}
