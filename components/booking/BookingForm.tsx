import axios from "axios";
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingStreet: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    billingCountry: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`, formData);
      alert("Booking confirmed!");
    } catch (error) {
      setError("Failed to submit booking.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-white p-6 shadow-md rounded-lg'>
      <h2 className='text-xl font-semibold'>Contact Detail</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              type='text'
              value={formData.firstName}
              onChange={handleChange}
              className='border p-2 w-full mt-2'
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="lastName"
              type='text'
              value={formData.lastName}
              onChange={handleChange}
              className='border p-2 w-full mt-2'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <label>Email</label>
            <input
              name="email"
              type='email'
              value={formData.email}
              onChange={handleChange}
              className='border p-2 w-full mt-2'
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              type='text'
              value={formData.phoneNumber}
              onChange={handleChange}
              className='border p-2 w-full mt-2'
            />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className='text-xl font-semibold mt-6'>Pay with</h2>
        <div className='mt-4'>
          <label>Card Number</label>
          <input
            name="cardNumber"
            type='text'
            value={formData.cardNumber}
            onChange={handleChange}
            className='border p-2 w-full mt-2'
          />
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <label>Expiration Date</label>
            <input
              name="expirationDate"
              type='text'
              value={formData.expirationDate}
              onChange={handleChange}
              className='border p-2 w-full mt-2'
            />
          </div>
          <div>
            <label>CVV</label>
            <input
              name="cvv"
              type='text'
              value={formData.cvv}
              onChange={handleChange}
              className='border p-2 w-full mt-2'
            />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className='text-xl font-semibold mt-6'>Billing Address</h2>
        <div className='mt-4'>
          <label>Street Address</label>
          <input
            name="billingStreet"
            type='text'
            value={formData.billingStreet}
            onChange={handleChange}
            className='border p-2 w-full mt-2'
          />
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <label>City</label>
            <input
              name="billingCity"
              type='text'
              value={formData.billingCity}
              onChange={handleChange}
              className='border p-2 w-full mt-2'
            />
          </div>
          <div>
            <label>State</label>
            <input
              name="billingState"
              type='text'
              value={formData.billingState}
              onChange={handleChange}
              className='border p-2 w-full mt-2'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <label>Zip Code</label>
            <input
              name="billingZip"
              type='text'
              value={formData.billingZip}
              onChange={handleChange}
              className='border p-2 w-full mt-2'
            />
          </div>
          <div>
            <label>Country</label>
            <input
              name="billingCountry"
              type='text'
              value={formData.billingCountry}
              onChange={handleChange}
              className='border p-2 w-full mt-2'
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default BookingForm;
