import { useMemo } from 'react'
import countryList from 'react-select-country-list'
import FormField from './FormField'
import SelectField from "./SelectField"
import Alert from './Alert'
import RegisterButton from './RegisterButton'
import LoginButton from './LoginButton'
import { useRegistration } from '../../hooks/useRegistration'

const RegistrationForm = () => {
    const options = useMemo(() => countryList().getData(), [])
    const { form, handleChange, handleSubmit, loading, error, success } = useRegistration()
    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[620px] flex-col gap-4 rounded-xl bg-[#f2f2f2]/80 p-6 text-black shadow-2xl"
        >
            <h2 className="m-0 text-[28px] font-semibold">Create account</h2>
            <p className="m-0 text-sm text-gray-600">
                Register to submit and track your complaints.
            </p>

            <Alert type="error" message={error} />
            <Alert type="success" message={success} />

            <div className="grid grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-2">
                <FormField label="First Name" name="firstName" type="text" value={form.firstName}
                    onChange={handleChange} placeholder="Your first name" required />
                <FormField label="Last name" name="lastName" type="text" value={form.lastName}
                    onChange={handleChange} placeholder="Your last name" required />
                <FormField label="Email" name="email" type="email" value={form.email}
                    onChange={handleChange} placeholder="you@university.edu" required />
                <FormField label="Password" name="password" type="password" value={form.password}
                    onChange={handleChange} placeholder="At least 8 characters" minLength={8} required />
                <FormField label="Confirm password" name="confirmPassword" type="password"
                    value={form.confirmPassword} onChange={handleChange}
                    placeholder="Re-enter your password" required />
                <FormField label="City" name="city" type="text" value={form.city}
                    onChange={handleChange} placeholder="Enter your city name" required />

                <SelectField label="Country" name="country" value={form.country}
                    onChange={handleChange} autoComplete="country-name" required className="md:col-span-2">
                    <option value="">Select your country</option>
                    {options.map((o) => (
                        <option key={o.value} value={o.label}>{o.label}</option>
                    ))}
                </SelectField>

                <FormField label="Contact" name="contact" type="tel" value={form.contact}
                    onChange={handleChange} placeholder="Enter your contact number"
                    required className="md:col-span-2" />
            </div>

            <RegisterButton loading={loading} success={success} />
            <LoginButton description={"Already have an account? "} />


        </form>
    )
}

export default RegistrationForm